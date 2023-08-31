// Clave de API de YouTube
var apiKey = 'AIzaSyCnvLTu6U2eHM9CgheE3ZY7NzNtAm_8Ja0';



// Variables globales
var nextPageToken = '';
var searchTerm = '';

// Cargar el cliente de la API de YouTube
function loadClient() {
    gapi.client.setApiKey(apiKey);
    return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(function () { console.log('Cliente de API cargado.'); },
            function (err) { console.error('Error al cargar el cliente de API.', err); });
}

// Realizar la búsqueda de videos
function searchVideos() {
    searchTerm = document.getElementById('searchTerm').value;

    // Restablecer el token de página siguiente para una nueva búsqueda
    nextPageToken = '';

    // Limpiar los resultados anteriores
    document.getElementById('results').innerHTML = '';

    var selectedDuration = document.getElementById('durationSelector').value;

    // Realizar la solicitud a la API de YouTube
    return gapi.client.youtube.search.list({
        'part': 'snippet',
        'q': searchTerm,
        'type': 'video',
        'maxResults': 10,
        'pageToken': nextPageToken,
        'videoDuration': selectedDuration
    })
        .then(function (response) {
            var results = response.result.items;

            // Obtener los IDs de video
            var videoIds = results.map(function (item) {
                return item.id.videoId;
            });

            // Obtener la duración de los videos
            return gapi.client.youtube.videos.list({
                'part': 'contentDetails',
                'id': videoIds.join(',')
            })
                .then(function (response) {
                    var videoDetails = response.result.items;

                    // Mostrar los resultados en el documento HTML
                    var output = '';
                    for (var i = 0; i < results.length; i++) {
                        var videoTitle = results[i].snippet.title;
                        var videoDuration = parseDuration(videoDetails[i].contentDetails.duration);
                        var videoThumbnail = results[i].snippet.thumbnails.default.url;
                        var videoId = results[i].id.videoId;
                        var videoLink = 'https://www.youtube.com/watch?v=' + videoId;

                        output += '<div>';
                        //output += '<img src="' + videoThumbnail + '" alt="' + videoTitle + '">';
                        output += '<p><strong>Título:</strong> ' + videoTitle + '</p>';
                        output += '<p><strong>Duración:</strong> ' + videoDuration + '</p>';
                        output += '<p>' + videoLink + '</p>';
                        output += '</div>';
                    }

                    document.getElementById('results').innerHTML += output;

                    // Obtener el token de página siguiente para paginación
                    nextPageToken = response.result.nextPageToken;
                });
        },
            function (err) { console.error('Error al realizar la búsqueda de videos.', err); });
}

// Función para analizar la duración del video en formato ISO 8601
function parseDuration(duration) {
    var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    var hours = (parseInt(match[1]) || 0);
    var minutes = (parseInt(match[2]) || 0);
    var seconds = (parseInt(match[3]) || 0);

    return hours + 'h ' + minutes + 'm ' + seconds + 's';
}

// Cargar más resultados
function loadMore() {
    // Verificar si se realizó una búsqueda previa
    if (searchTerm) {
        // Realizar la solicitud a la API de YouTube para la siguiente página
        var selectedDuration = document.getElementById('durationSelector').value;



        return gapi.client.youtube.search.list({
            'part': 'snippet',
            'q': searchTerm,
            'type': 'video',
            'maxResults': 10,
            'pageToken': nextPageToken,
            'videoDuration': selectedDuration
        })
            .then(function (response) {
                var results = response.result.items;

                // Obtener los IDs de video
                var videoIds = results.map(function (item) {
                    return item.id.videoId;
                });

                // Obtener la duración de los videos
                return gapi.client.youtube.videos.list({
                    'part': 'contentDetails',
                    'id': videoIds.join(',')
                })
                    .then(function (response) {
                        var videoDetails = response.result.items;

                        // Mostrar los resultados adicionales en el documento HTML
                        var output = '';
                        for (var i = 0; i < results.length; i++) {
                            var videoTitle = results[i].snippet.title;
                            var videoDuration = parseDuration(videoDetails[i].contentDetails.duration);
                            var videoThumbnail = results[i].snippet.thumbnails.default.url;
                            var videoId = results[i].id.videoId;
                            var videoLink = 'https://www.youtube.com/watch?v=' + videoId;

                            output += '<div>';
                            //output += '<img src="' + videoThumbnail + '" alt="' + videoTitle + '">';
                            output += '<p><strong>Título:</strong> ' + videoTitle + '</p>';
                            output += '<p><strong>Duración:</strong> ' + videoDuration + '</p>';
                            output += '<p>' + videoLink + '</p>';
                            output += '</div>';
                        }

                        document.getElementById('results').innerHTML += output;

                        // Obtener el token de página siguiente para paginación
                        nextPageToken = response.result.nextPageToken;
                    });
            },
                function (err) { console.error('Error al cargar más resultados.', err); });
    }
}

// Inicializar la carga del cliente de la API de YouTube
gapi.load('client', loadClient);
