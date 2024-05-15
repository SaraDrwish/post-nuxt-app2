<template>
    <div class="post-card" >
      <v-card class="cardBox mx-auto  pa-1 my-2"  >
        <v-card-text class="pa-2"  >
            <h3 class="pa-2 mb-4 orange--text">
              {{ post.title }}
            </h3>
            <p>{{ post.body }}</p>
        </v-card-text>
        <v-card-actions class="cardActio">
          <template v-if="isAdmin">
            <v-btn :to="`admin/post/${post.id}/edit`"  color="success">
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
            <v-btn color="indigo white--text" :to="`/post/${post.id}`" >
              <span @click="updateSelectedPost(post)">
                Read More
              </span>
            </v-btn>
          </template>
        </v-card-actions>
      </v-card>
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

<style lang="scss" >
.cardBox{
  height: 25rem;
}
.cardActio{
  position: absolute;
  bottom: 0;
}
</style>
