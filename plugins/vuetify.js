// plugins/vuetify.js
import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn, VTextField, VDatePicker } from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    // components,
    components: {
        VBtn,
        VTextField,
        VDatePicker
    },
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
