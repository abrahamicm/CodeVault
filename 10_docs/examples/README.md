### codigo
```sh
    php artisan make:test NombreTest
```
#### Table of Contents

- [Underline](#underline)
- [Indent](#indent)
- [Center](#center)
- [Color](#color)

### formater

---
lang: en-US
title: Title of this page
description: Description of this page
---

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

<!-- relative path -->
[Home](../README.md)  
[Config Reference](../reference/config.md)  
[Getting Started](./getting-started.md)  
<!-- absolute path -->
[Guide](/guide/README.md)  
[Config Reference > markdown.links](/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com)  

VuePress 2 is out :tada: !


[[toc]]

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'Hello, VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```ts
// line-numbers is enabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// line-numbers is disabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```md
<!-- This will be kept as is by default -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- This will be compiled by Vue -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// This won't be compiled correctly because of js syntax highlighting
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

One plus one equals: {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

This is default theme built-in `<Badge />` component <Badge text="demo" />

### vscode atajos

`ctrl + Mayus + v`