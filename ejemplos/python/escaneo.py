import socket

# Definir el rango de puertos que deseas escanear
puerto_inicial = 1
puerto_final = 100

# Definir el host que deseas escanear
host = "foxdp.com"

# Escanear los puertos del host
for puerto in range(puerto_inicial, puerto_final+1):
    try:
        # Crear un objeto socket
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        
        # Configurar un tiempo de espera de 1 segundo para la conexión
        s.settimeout(1)
        
        # Conectar el socket al host y puerto correspondientes
        resultado = s.connect_ex((host, puerto))
        
        # Verificar si el puerto está abierto
        if resultado == 0:
            print(f"Puerto {puerto} está abierto")
        
        # Cerrar el socket
        s.close()
    except:
        pass
