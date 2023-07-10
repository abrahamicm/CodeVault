~~~php
use Illuminate\Support\Facades\DB;
Route::get('/insertar', function () {
    $i=['products.create','products.destroy','products.edit','products.index','products.show','generals.create','generals.destroy','generals.edit','generals.index','generals.show','categories.create','categories.destroy','categories.edit','categories.index','categories.show','branchOffices.create','branchOffices.destroy','branchOffices.edit','branchOffices.index','branchOffices.show'];
    $f='2022-12-12 22:03:16';
    $w ='web';

    foreach ($i as $k => $v) {
        $sql = DB::insert('insert into permissions (name,guard_name,created_at,updated_at) values (?, ? , ?, ?)', [$i,$w,$f,$f]);
    }
})
~~~