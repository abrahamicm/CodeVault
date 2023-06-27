<?php
function load_posts_by_ajax_callback() {
    check_ajax_referer('load_more_posts', 'security');
    $paged = $_POST['page'];
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => 5,
        'paged' => $paged,
    );
    $posts = new WP_Query($args);
    if ($posts->have_posts()) :
        while ($posts->have_posts()) : $posts->the_post();
            get_template_part('template-parts/content', get_post_format());
        endwhile;
    endif;
    wp_die();
}
add_action('wp_ajax_load_posts_by_ajax', 'load_posts_by_ajax_callback');
add_action('wp_ajax_nopriv_load_posts_by_ajax', 'load_posts_by_ajax_callback');
?>
<script>
    jQuery(document).ready(function($) {
    var page = 1;
    $('body').on('click', '.load-more', function(e) {
        e.preventDefault();
        $('.load-more').text('Loading...');
        var data = {
            'action': 'load_posts_by_ajax',
            'security': '<?php echo wp_create_nonce("load_more_posts"); ?>',
            'page': page
        };
        $.post(ajaxurl, data, function(response) {
            $('.post-container').append(response);
            $('.load-more').text('Load More');
            page++;
        });
    });
});
</script>

<div class="post-container">
    <!-- Your existing post content goes here -->
</div>
<button class="load-more">Load More</button>
