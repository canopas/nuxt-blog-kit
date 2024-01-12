# Blog Components

Welcome to the `blog-components` library, a component library for [**canopas blogs website**](https://canopas.com/resources).


## About

The `blog-components` is an open-source library developed and maintained by Canopas. Crafted using `vue.js` and `tailwindcss` a lightweight and highly efficient CSS platform on top of `Nuxt 3` framework, showcasing a commitment to robust and advanced web development practices. For preview visit [**_canopas blogs page_**](https://canopas.com/resources) .

## Showcase

#### Blogs List UI

![Blog List UI](https://github.com/canopas/canopas-blog/assets/69897605/10747407-ada8-40fc-b23c-fa965c0bc33a)

#### Blogs Detail UI

![Blog Detail UI](https://github.com/canopas/canopas-blog/assets/69897605/bf24fbb5-9771-495a-a553-1c54e0b271d7)
## Prerequisites

Prior to integrating `blog-components` into your project, please ensure that `tailwindcss` is installed and properly configured within your project environment.

## Quick Setup

1. Add `blog-components` dependency to your project .

### Using yarn :

```bash
yarn add --dev @canopassoftware/canopas-blog-components
```

### Using npm :

```bash
npm install --save-dev @canopassoftware/canopas-blog-components
```

<br>

2. Add `blog-components` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    "@canopassoftware/canopas-blog-components"
  ],
});
```

That's it! You can now use module in your Nuxt app ✨

Here are the examples,

```js
For all blog list,

  <BlogList :showDrafts="true" />

For tag list,
  <TagList :slug="slug" @notfound="<your-callback>" :showDrafts="true"  />


For Blog details,
  <BlogDetail
      :slug="slug"
      @notfound="<your-callback>"
      :showDrafts="true"
      :iframely-key="IFRAMELY_KEY"
      :recaptcha-key="RECAPTCHA_SITE_KEY"
    />

```

<br>

# LICENSE

This repository licenced under [MIT](https://github.com/canopas/canopas-blog-components/blob/main/LICENSE).
