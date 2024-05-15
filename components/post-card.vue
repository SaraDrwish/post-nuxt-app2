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
            <AppModel button-text="delete">
              <v-card>
                <v-card-title class="text-h5">
                  model title
                </v-card-title>
                <v-card-text>
                  nymous location data to Google, even when no apps are running.
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    text
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="green darken-1"
                    text
                  >
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </AppModel>
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
