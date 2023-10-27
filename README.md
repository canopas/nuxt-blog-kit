# canopas-blog-components
A component library for canopas blogs website

## Quick Setup

1. Add `canopas-blog-components` dependency to your project

```bash
# Using yarn
yarn add --dev @canopassoftware/canopas-blog-components

# Using npm
npm install --save-dev @canopassoftware/canopas-blog-components
```

2. Add `canopas-blog-components` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@canopassoftware/canopas-blog-components'
  ]
})
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