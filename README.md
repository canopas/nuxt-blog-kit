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
yarn add --dev @canopassoftware/blog-components
```

### Using npm :

```bash
npm install --save-dev @canopassoftware/blog-components
```

<br>

2. Add `blog-components` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@canopassoftware/blog-components"],
});
```

That's it! You can now use module in your Nuxt app ✨

Here are the examples,

### Blog list

Blog list component to show all blogs.

```js
  <BlogList
      :posts="posts"
      :featurePosts="featurePosts"
      :count="count"
      :status="status"
    />
```

- **:posts="posts"**

  - required
  - posts to be dispayed

- **:featurePosts="featuredPosts"**

  - featured blog posts

- **:count="count"**

  - Number of posts for UI adjustment

- **:status="status"**
  - status of API response

<br>

### Blog list by tag

Tag list component to show posts by given tag.

```js
  <TagList
    :slug="slug"
    :posts="posts"
  />
```

- **:slug:"slug"**
  - required
  - tag name
- **:posts="posts"**
  - required
  - posts by given tag

<br>

### Blog details

Component to show blog detail by slug

```js

  <BlogDetail
      :slug="slug"
      :post="post"
      :recommandedPosts="recommandedPosts"
      :websiteUrl="your-website-url"
      :contactApiUrl="your-contact-api-url"
    />

```

- **:post="post"**
  - required
  - slug of post
- **:post="post"**

  - required
  - post detail of given slug

- **:recommandedPosts="recommandedPosts"**

  - recommanded posts, which are similar to given post

- **:websiteUrl="websiteUrl"**

  - For sharing on social media, you can pass your website's url

- **:contactApiUrl="contactApiUrl"**
  - This api is used for CTA forms. It is not required, if you don't want to add CTAs.

<br>

### Blog footer

Footer component

```js

    <BlogFooter
      :socialMediaData="socialMediaData"
      :apiUrl="subscription-api-url"
      :companyName="your-company-name"
    />

```

- **:socialMediaData="socialMediaData"**
  - required
  - JSON object of your social media handles
    ```
    const socialMediaData = {
        facebook: your-facebook-url,
        instagram: your-instagram-url,
        twitter: your-twitter-url,
        blog: your-blog-url,
        linkedin: your-linkedin-url,
        youtube: your-youtube-url,
    };
    ```
- **:apiUrl="subscription-api-url"**
  - required
  - Subscription api url

- **:companyName="companyName"**
  - your companyName

<br>

# LICENSE

This repository licenced under [MIT](https://github.com/canopas/canopas-blog-components/blob/main/LICENSE).
