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
            <!-- <v-btn color="error" >
              <span  >
                Delete
              </span>
            </v-btn> -->
            <!-- //////////////////////////// -->
            <AppModel button-text="delete" :button-style="true" button-color="error">
              <template slot-scope="{close}">
                <v-card>
                  <v-card-title class="text-h5">
                    you sure that you want to delete the item???
                  </v-card-title>
                  <!-- <v-card-text>
                    confirm delete item ???
                  </v-card-text> -->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="error" :loading="deleteloading"
                    text @click="deletePost(post.id , close)"
                    >
                    Delete
                    </v-btn>
                    <v-btn
                    color="warning"
                    text @click="close"
                    >
                    Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </AppModel>
            <!-- //////////////////////////// -->
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
import AppModel from './shared/AppModel.vue'
  export default {
  components: { AppModel },
  props: {
      post: {
        type: Object,
        required:true,
      },
      isAdmin: {
        type: Boolean,
        required:false,
    },

  },
  data() {
    return {
      deleteloading:false,
   }
  },
  methods: {
    updateSelectedPost(post) {
      this.$store.commit("updateSelectedPost",post)
    },
    deletePost(PostId, callback) {
      TimeRanges.deleteloading = true
      // this.$axios.$delete(`/posts/${PostId}`).then(callback).finally(() => {
      //   this.deleteloading = false
      // })
      this.$store.dispatch('deletePost',PostId).then(callback).finally(() => {
        this.deleteloading = false
      })
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
