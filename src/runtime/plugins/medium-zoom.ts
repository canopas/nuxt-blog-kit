import { defineNuxtPlugin } from '#app'
import mediumZoom, { type Zoom } from 'medium-zoom'

export default defineNuxtPlugin((nuxtApp) => {
  const selector = '.cb-prose img'
  const zoom: Zoom = mediumZoom(document.querySelectorAll(selector), {})

  // (re-)init for newly rendered page, also to work in SPA mode (client-side routing)
  nuxtApp.hook('page:finish', () => {
    zoom.detach(selector)
      .attach(selector)
  })
})

