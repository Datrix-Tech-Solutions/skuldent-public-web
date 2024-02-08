// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },



  // nuxt ui config
  modules: ['@nuxt/ui'],
  colorMode: {
    preference: 'light'
  },

  // Meta data and SEO
  app: {
    head: {
      title: "Skuldent: School Management System",
      meta: [
        { name: 'description', content: 'School Management System' }
      ],
      link: [
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,200,0,0" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100;200;300;400;500;600;700;800&display=swap' }
      ]
    }
  },
})
