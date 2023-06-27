[[toc]]
## Pruebas en laravel

* Crear test 
    ```sh
    php artisan make:test NombreTest
     ```

`Los test tienen que tener el sufijo Test para ser reconocidos por el framework`

## laravel ide helper

https://marketplace.visualstudio.com/items?itemName=georgykurian.laravel-ide-helper

```sh
composer require --dev barryvdh/laravel-ide-helper
php artisan ide-helper:generate
php artisan ide-helper:models
php artisan ide-helper:meta
```
`[]()`

## Instalar laravel dusk
```sh
composer require --dev laravel/dusk
php artisan dusk:install

```
### class Browser
```php
visit($url)
visitRoute($route, $parameters = [])
blank()
on($page)
onWithoutAssert($page)
refresh()
back()
forward()
maximize()
resize($width, $height)
fitContent()
disableFitOnFailure()
enableFitOnFailure()
move($x, $y)
scrollIntoView($selector)
scrollTo($selector)
screenshot($name)
responsiveScreenshots($name)
storeConsoleLog($name)
storeSource($name)
withinFrame($selector, Closure $callback)
within($selector, Closure $callback)
with($selector, Closure $callback)
elsewhere($selector, Closure $callback)
elsewhereWhenAvailable($selector, Closure $callback, $seconds = null)
onComponent($component, $parentResolver)
ensurejQueryIsAvailable()
pause($milliseconds)
quit()
tap($callback)
dump()
tinker()
stop()
```

### trait InteractsWithAuthentication
```php

namespace Laravel\Dusk\Concerns;
login()
loginAs($userId, $guard = null)
logout($guard = null)
assertAuthenticated($guard = null)
assertGuest($guard = null)
assertAuthenticatedAs($user, $guard = null)
```

### trait InteractsWithElements
```php
elements($selector)
element($selector)
clickLink($link, $element = 'a')
value($selector, $value = null)
text($selector)
attribute($selector, $attribute)
keys($selector, ...$keys)
type($field, $value)
typeSlowly($field, $value, $pause = 100)
append($field, $value)
appendSlowly($field, $value, $pause = 100)
clear($field)
select($field, $value = null)
radio($field, $value)
check($field, $value = null)
uncheck($field, $value = null)
attach($field, $path)
press($button)
pressAndWaitFor($button, $seconds = 5)
drag($from, $to)
dragUp($selector, $offset)
dragDown($selector, $offset)
dragLeft($selector, $offset)
dragRight($selector, $offset)
dragOffset($selector, $x = 0, $y = 0)
acceptDialog()
typeInDialog($value)
dismissDialog()
```

## php unit

### confing
```xml
<env name="DB_CONNECTION" value="sqlite"/>
<env name="DB_DATABASE" value=":memory:"/>
```
### $this
```php
namespace Illuminate\Foundation\Testing\Concerns;
trait MakesHttpRequests{}
 $this->assertCount
 $this->assertEquals
 $this->assertRedirect
 $this->assertDatabaseHas
 $this->assertCredentials
 $this->json
 $this->handle
 $this->call
 $this->delete
 $this->deleteJson
 $this->disableCookieEncryption
 $this->flushHeaders
 $this->followingRedirects
 $this->from
 $this->get
 $this->getJson
 $this->head
 $this->json
 $this->options
 $this->optionsJson
 $this->patch
 $this->patchJson
 $this->post
 $this->postJson
 $this->put
 $this->putJson
 $this->withCookie
 $this->withCookies
 $this->withCredentials
 $this->withHeader
 $this->withHeaders
 $this->withMiddleware
 $this->withoutMiddleware
 $this->withServerVariables
 $this->withToken
 $this->withUnencryptedCookie
 $this->withUnencryptedCookies;
 $this->post
 $this->delete
 $this->patch
 $this->getJson
 
```
### $response
```php
namespace Illuminate\Testing;
class TestResponse implements ArrayAccess{};
$response->assertCookie
$response->assertCookieExpired
$response->assertCookieMissing
$response->assertCookieNotExpired
$response->assertCreated
$response->assertDontSee
$response->assertDontSeeText
$response->assertDownload
$response->assertExactJson
$response->assertForbidden
$response->assertHeader
$response->assertHeaderMissing
$response->assertInvalid
$response->assertJson
$response->assertJsonCount
$response->assertJsonFragment
$response->assertJsonMissing
$response->assertJsonMissingExact
$response->assertJsonMissingValidationErrors
$response->assertJsonPath
$response->assertJsonStructure
$response->assertJsonValidationErrorFor
$response->assertJsonValidationErrors
$response->assertLocation
$response->assertNoContent
$response->assertNotFound
$response->assertOk
$response->assertPlainCookie
$response->assertRedirect
$response->assertRedirectContains
$response->assertRedirectToSignedRoute
$response->assertSee
$response->assertSeeInOrder
$response->assertSeeText
$response->assertSeeTextInOrder
$response->assertSessionDoesntHaveErrors
$response->assertSessionHas
$response->assertSessionHasAll
$response->assertSessionHasErrors
$response->assertSessionHasErrorsIn
$response->assertSessionHasInput
$response->assertSessionHasNoErrors
$response->assertSessionMissing
$response->assertSimilarJson
$response->assertStatus
$response->assertSuccessful
$response->assertUnauthorized
$response->assertUnprocessable
$response->assertValid
$response->assertViewHas
$response->assertViewHasAll
$response->assertViewIs
$response->assertViewMissing
$response->dd
$response->ddHeaders
$response->ddSession
$response->decodeResponseJson
$response->dump
$response->dumpHeaders
$response->dumpSession
$response->getCookie
$response->json
$response->offsetExists
$response->offsetGet
$response->offsetSet
$response->offsetUnset
$response->streamedContent
$response->viewData
$response->withExceptions
```
### sh
```sh
./vendor/bin/phpunit --group post_test_group
./vendor/bin/phpunit --filter a_post_can_be_created
```


### use
```php
use RefreshDatabase;
```
### InteractsWithExceptionHandling
```php
namespace Illuminate\Foundation\Testing\Concerns;
withExceptionHandling()
handleExceptions(array $exceptions)
handleValidationExceptions()
withoutExceptionHandling(array $except = [])
assertThrows(Closure $test, string $expectedClass = Throwable::class, ?string $expectedMessage = null)
```

## phpdocumentor

[enlace](https://www.phpdoc.org/)

### descargar phar

[click](https://phpdoc.org/phpDocumentor.phar)

### crear documentacion

```sh
php phpDocumentor.phar -d . -t docs/api
```
### ejecutar configurando variable de entorno y quitando el .phar
`cambiando el nombre a phpdoc`
me copie esto de composer phpdoc
```sh
#!/bin/sh

dir=$(cd "${0%[/\\]*}" > /dev/null; pwd)

if [ -d /proc/cygdrive ]; then
    case $(which php) in
        $(readlink -n /proc/cygdrive)/*)
            # We are in Cygwin using Windows php, so the path must be translated
            dir=$(cygpath -m "$dir");
            ;;
    esac
fi

php "${dir}/phpdoc.phar" "$@"

```
ahora edito el bat
```sh
@echo OFF
:: in case DelayedExpansion is on and a path contains ! 
setlocal DISABLEDELAYEDEXPANSION
php "%~dp0phpdoc.phar" %*

```

ya lo puedo ejecutar asi
```sh
phpdoc -d . -t docs/api
```

```sh
Usage:
  phpunit [options] UnitTest.php
  phpunit [options] <directory>

Code Coverage Options:
  --coverage-clover <file>    Generate code coverage report in Clover XML format
  --coverage-cobertura <file> Generate code coverage report in Cobertura XML format
  --coverage-crap4j <file>    Generate code coverage report in Crap4J XML format
  --coverage-html <dir>       Generate code coverage report in HTML format
  --coverage-php <file>       Export PHP_CodeCoverage object to file
  --coverage-text=<file>      Generate code coverage report in text format [default: standard output]
  --coverage-xml <dir>        Generate code coverage report in PHPUnit XML format
  --coverage-cache <dir>      Cache static analysis results
  --warm-coverage-cache       Warm static analysis cache
  --coverage-filter <dir>     Include <dir> in code coverage analysis
  --path-coverage             Perform path coverage analysis
  --disable-coverage-ignore   Disable annotations for ignoring code coverage
  --no-coverage               Ignore code coverage configuration

Logging Options:
  --log-junit <file>          Log test execution in JUnit XML format to file
  --log-teamcity <file>       Log test execution in TeamCity format to file
  --testdox-html <file>       Write agile documentation in HTML format to file
  --testdox-text <file>       Write agile documentation in Text format to file
  --testdox-xml <file>        Write agile documentation in XML format to file
  --reverse-list              Print defects in reverse order
  --no-logging                Ignore logging configuration

Test Selection Options:
  --list-suites               List available test suites
  --testsuite <name>          Filter which testsuite to run
  --list-groups               List available test groups
  --group <name>              Only runs tests from the specified group(s)
  --exclude-group <name>      Exclude tests from the specified group(s)
  --covers <name>             Only runs tests annotated with "@covers <name>"
  --uses <name>               Only runs tests annotated with "@uses <name>"
  --list-tests                List available tests
  --list-tests-xml <file>     List available tests in XML format
  --filter <pattern>          Filter which tests to run
  --test-suffix <suffixes>    Only search for test in files with specified suffix(es). Default: Test.php,.phpt

Test Execution Options:
  --dont-report-useless-tests Do not report tests that do not test anything
  --strict-coverage           Be strict about @covers annotation usage
  --strict-global-state       Be strict about changes to global state
  --disallow-test-output      Be strict about output during tests
  --disallow-resource-usage   Be strict about resource usage during small tests
  --enforce-time-limit        Enforce time limit based on test size
  --default-time-limit <sec>  Timeout in seconds for tests without @small, @medium or @large
  --disallow-todo-tests       Disallow @todo-annotated tests

  --process-isolation         Run each test in a separate PHP process
  --globals-backup            Backup and restore $GLOBALS for each test
  --static-backup             Backup and restore static attributes for each test

  --colors <flag>             Use colors in output ("never", "auto" or "always")
  --columns <n>               Number of columns to use for progress output
  --columns max               Use maximum number of columns for progress output
  --stderr                    Write to STDERR instead of STDOUT
  --stop-on-defect            Stop execution upon first not-passed test
  --stop-on-error             Stop execution upon first error
  --stop-on-failure           Stop execution upon first error or failure
  --stop-on-warning           Stop execution upon first warning
  --stop-on-risky             Stop execution upon first risky test
  --stop-on-skipped           Stop execution upon first skipped test
  --stop-on-incomplete        Stop execution upon first incomplete test
  --fail-on-incomplete        Treat incomplete tests as failures
  --fail-on-risky             Treat risky tests as failures
  --fail-on-skipped           Treat skipped tests as failures
  --fail-on-warning           Treat tests with warnings as failures
  -v|--verbose                Output more verbose information
  --debug                     Display debugging information

  --repeat <times>            Runs the test(s) repeatedly
  --teamcity                  Report test execution progress in TeamCity format
  --testdox                   Report test execution progress in TestDox format
  --testdox-group             Only include tests from the specified group(s)
  --testdox-exclude-group     Exclude tests from the specified group(s)
  --no-interaction            Disable TestDox progress animation
  --printer <printer>         TestListener implementation to use

  --order-by <order>          Run tests in order: default|defects|duration|no-depends|random|reverse|size
  --random-order-seed <N>     Use a specific random seed <N> for random order
  --cache-result              Write test results to cache file
  --do-not-cache-result       Do not write test results to cache file

Configuration Options:
  --prepend <file>            A PHP script that is included as early as possible
  --bootstrap <file>          A PHP script that is included before the tests run
  -c|--configuration <file>   Read configuration from XML file
  --no-configuration          Ignore default configuration file (phpunit.xml)
  --extensions <extensions>   A comma separated list of PHPUnit extensions to load
  --no-extensions             Do not load PHPUnit extensions
  --include-path <path(s)>    Prepend PHP is include_path with given path(s)
  -d <key[=value]>            Sets a php.ini value
  --cache-result-file <file>  Specify result cache path and filename
  --generate-configuration    Generate configuration file with suggested settings
  --migrate-configuration     Migrate configuration file to current format

Miscellaneous Options:
  -h|--help                   Prints this usage information
  --version                   Prints the version and exits
  --atleast-version <min>     Checks that version is greater than min and exits
  --check-version             Check whether PHPUnit is the latest version

```
### arreglando problema de actingAs

```php
/** @var \Illuminate\Contracts\Auth\Authenticatable $u */
 $u = User::factory()->create();
 $this->actingAs($u);
```

## Faker

### extendiendo faker

```php
    $phone = new PhoneNumber($this->faker);
    $date = new DateTime($this->faker);
    // $phone->phoneNumber()
    // $date->dateTimeBetween('-1 week', '+1 week')
```

