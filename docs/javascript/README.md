# Sobre mi
## jsdoc

### Istalacion
```sh
npm i jsdoc
npm install --save-dev jsdoc
npm install -g jsdoc
```

### comandos
```sh
jsdoc --help

jsdoc -c jsdoc.json
```

### opciones de comandos
```
    -a, --access <value>         Only display symbols with the given access: "package", public", "protected", 
                                 "private" or "undefined", or "all" for all access levels. Default: all except
                                 "private"
    -c, --configure <value>      The path to the configuration file. Default: path/to/jsdoc/conf.json
    -d, --destination <value>    The path to the output folder. Default: ./out/
    --debug                      Log information for debugging JSDoc.
    -e, --encoding <value>       Assume this encoding when reading all source files. Default: utf8
    -h, --help                   Print this message and quit.
    --match <value>              When running tests, only use specs whose names contain <value>.
    --nocolor                    When running tests, do not use color in console output.
    -p, --private                Display symbols marked with the @private tag. Equivalent to "--access all".
                                 Default: false
    -P, --package <value>        The path to the project's package file. Default: path/to/sourcefiles/package.json      
    --pedantic                   Treat errors as fatal errors, and treat warnings as errors. Default: false
    -q, --query <value>          A query string to parse and store in jsdoc.env.opts.query. Example:
                                 foo=bar&baz=true
    -r, --recurse                Recurse into subdirectories when scanning for source files and tutorials.
    -R, --readme <value>         The path to the project's README file. Default: path/to/sourcefiles/README.md
    -t, --template <value>       The path to the template to use. Default: path/to/jsdoc/templates/default
    -T, --test                   Run all tests and quit.
    -u, --tutorials <value>      Directory in which JSDoc should search for tutorials.
    -v, --version                Display the version number and quit.
    --verbose                    Log detailed information to the console as JSDoc runs.
    -X, --explain                Dump all found doclet internals to console and quit.
```

### configuaracion

crear archivo de configuracion en la raiz jsdoc.json
```json
{
    "plugins": [],
    "recurseDepth": 10,
    "source": {
        "include":["src"],
        "includePattern": ".js$",
        "excludePattern": "(node_modules|docs)"
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    },
      "opts": {
            "recurse": true,  
            "destination": "./out/"       // same as -d ./out/
                        // same as -r
    }
}
```

### documentacion

[pagina](https://jsdoc.app/)

[github](https://www.npmjs.com/package/jsdoc)

[npm](https://github.com/jsdoc/jsdoc)

### tutoriales

[fazt](https://www.youtube.com/watch?v=r0H-acWQS6c&t=603s)

[falcon master](https://www.youtube.com/watch?v=U329pKWKqWw)

[midulive](https://www.youtube.com/watch?v=HOJd1X2-45s)

