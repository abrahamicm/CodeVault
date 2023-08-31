## add sidebar menu item
~~~php
    $CI->app_menu->add_sidebar_menu_item('api-options', [
        'collapse' => true,
        'name'     => _l('api'),
        'position' => 40,
        'icon'     => 'fa fa-cogs',
    ]);
~~~
## add sidebar children item
~~~php
    $CI->app_menu->add_sidebar_children_item('api-options', [
        'slug'     => 'api-register-options',
        'name'     => _l('api_management'),
        'href'     => admin_url('api/api_management'),
        'position' => 5,
    ]);
~~~