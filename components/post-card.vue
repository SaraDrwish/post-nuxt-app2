<template>
  <div>
    <div class="post-card">
      <h2>post card component</h2>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="orange lighten-2 pa-2 ma-2" v-for="post in $store.state.posts" :key="post.id">
            <v-card-text class="red lighten-4 pa-2">
                <h3 class="pa-2 mb-4 orange">
                  {{ post.title }}
                </h3>
                <p>{{ post.body }}</p>
            </v-card-text>
            <v-card-actions>
              <template v-if="isAdmin">
                <v-btn  :to="`admin/post/${post.id}/edit`"  color="success">
                  <span  >
                    Edit
                  </span>
                </v-btn>
                <v-btn color="error" >
                  <span  >
                    Delete
                  </span>
                </v-btn>
              </template>
              <template v-else>
                <v-btn  :to="`/post/${post.id}`" >
                  <span @click="updateSelectedPost(post)">
                    Read More
                  </span>
                </v-btn>
              </template>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  export default {
  props: {
      post: {
        type: Object,
        require:true,
      },
      isAdmin: {
        type: Boolean,
        require:false,
      }
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost",post)
    }
  }


  }
</script>
