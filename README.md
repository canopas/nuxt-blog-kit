# canopas-blog-components
A component library for canopas blogs website

## Quick Setup

1. Add `canopas-blog-components` dependency to your project

```bash
# Using yarn
yarn add --dev canopas-blog-components

# Using npm
npm install --save-dev canopas-blog-components
```

2. Add `canopas-blog-components` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'canopas-blog-components'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
