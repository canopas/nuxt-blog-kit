import {
  defineNuxtModule,
  createResolver,
  installModule,
  addComponentsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  css: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "resources",
    configKey: "resources",
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.css.push(resolver.resolve("./output.css"));

    nuxt.options.modules.push(
      "@nuxtjs/tailwindcss",
      "@pinia/nuxt",
      "nuxt-icon",
    );

    nuxt.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolver.resolve("./runtime/assets"),
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    });

    await installModule("@nuxtjs/tailwindcss", {
      cssPath: options.css ? resolver.resolve("./runtime/fonts") : false,
      configPath: resolver.resolve("./runtime/tailwind.config.js"),
    });

    await installModule("nuxt-icon");

    await addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      pathPrefix: false,
      prefix: "",
      global: true,
    });
  },
});
