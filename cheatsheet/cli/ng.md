# Cheatsheet del Angular CLI

## Instalación
```bash
npm install -g @angular/cli
```

## Creación de un nuevo proyecto
```bash
ng new <nombre-del-proyecto>
```

## Generación de componentes, servicios y otros artefactos
```bash
ng generate component <nombre-del-componente>
ng g component <nombre-del-componente>      # alias

ng generate directive <nombre-de-la-directiva>
ng g directive <nombre-de-la-directiva>      # alias

ng generate pipe <nombre-del-pipe>
ng g pipe <nombre-del-pipe>                  # alias

ng generate service <nombre-del-servicio>
ng g service <nombre-del-servicio>           # alias

ng generate class <nombre-de-la-clase>
ng g class <nombre-de-la-clase>              # alias

ng generate interface <nombre-de-la-interface>
ng g interface <nombre-de-la-interface>      # alias

ng generate enum <nombre-del-enum>
ng g enum <nombre-del-enum>                  # alias

ng generate module <nombre-del-modulo>
ng g module <nombre-del-modulo>              # alias
```

## Desarrollo del proyecto
```bash
ng serve                               # Iniciar servidor de desarrollo
ng serve --open                       # Iniciar servidor y abrir en el navegador
ng serve --port <puerto>              # Especificar el puerto

ng build                              # Compilar para producción
ng build --prod                       # Compilar para producción (modo AOT)

ng test                               # Ejecutar pruebas unitarias
ng e2e                                # Ejecutar pruebas end-to-end
```

## Generación de rutas
```bash
ng generate module app-routing --flat --module=app
```

## Uso de CLI para generar módulos de bibliotecas
```bash
ng generate library <nombre-de-la-biblioteca>
ng build <nombre-de-la-biblioteca>     # Compilar biblioteca
```

## Generación de componentes para la biblioteca
```bash
ng generate component <nombre-del-componente> --project=<nombre-de-la-biblioteca>
ng g component <nombre-del-componente> --project=<nombre-de-la-biblioteca>  # alias
```

## Actualización de Angular CLI
```bash
npm install -g @angular/cli@latest   # Instalar la última versión
ng update @angular/cli               # Actualizar el Angular CLI
ng update                            # Actualizar todas las dependencias
```

## Ayuda y documentación
```bash
ng help                              # Mostrar ayuda general
ng <comando> --help                  # Mostrar ayuda para un comando específico
```