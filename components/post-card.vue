<template>
  <div>
    <div class="post-card">
      <h2>post card component</h2>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
        <v-card class="orange lighten-2 pa-2 ma-2" v-for="post in $store.state.posts" :key="post.id">
          <v-card-title class="red lighten-4 pa-2">
              <nuxt-link :to="`/post/${post.id}`">
                <span @click="updateSelectedPost(post)">
                  {{ post.title }}
                </span>
              </nuxt-link>
          </v-card-title>
          <v-card-content>
            {{ post.body }}
          </v-card-content>
        </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
  props: ["post"],
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost",post)
    }
  }


  }
</script>
