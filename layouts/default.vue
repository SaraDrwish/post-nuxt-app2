<template>
  <v-app>
    <!-- <app-header></app-header> -->
    <AppHeader></AppHeader>
     <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
     </v-main>
    <v-footer
      :absolute="!fixed"
      app
      >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from '~/components/core/AppHeader.vue';
export default {
  components:{AppHeader},
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Home'
    }
  }
}
</script>
