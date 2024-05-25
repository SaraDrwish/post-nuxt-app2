<template>
  <v-form v-model="valid" @submit.prevent="submit" class="pink lighten-5 pa-1 mx-auto text-center orange--text " >
    <h2>post-form-component</h2>
    <v-container >
      <v-row >
        <v-col  >
          <v-text-field
            v-model="form.title"
            :counter="10"
            label="post title"
            :rules="rules.title"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row >
        <v-col >
          <v-textarea
          label="post body"
            v-model="form.body"
            :rules="rules.body"
            name="input-7-1"
            auto-grow
        ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
<v-btn type="submit" :loading="addPstLoading" class="pa-1 ma-2 orange grey--text w-50"  :disabled="!valid">{{submitBtnText}}</v-btn>
  </v-form>
</template>
<script>
export default {
  name:"post-form",
  data() {
    return {
      addPstLoading:false,
      form: {
        title:'',
        body:'',
      },
      valid:false,
      rules: {
        title: [
          v=>!!v||"title is requeired",
          v=>v.length <= 30||'title must be less than 10 characters.'
        ],
        body: [
          v=>!!v||"body is requeired",
          v=>v.length <= 100 ||'body must be less than 10 characters.'
        ],

      },

    }
  },
  methods: {
    submit() {
      this.addPstLoading = true;
      const action = this.postId
        ?
        { name: 'editPost', payload: { ...this.form, id: this.postId } }:
        { name: 'addPost', payload: this.form  }
      console.log("form submited ...");
      this.$store.dispatch(action.name , action.payload).then(() => {
        this.$router.push(`/admin`)
      }).finally(() => {
        this.addPstLoading = false
      })
    },
    getPost() {
      // this.$axios.$get("/post"+this.postId)
      this.$store.dispatch('getPost', this.postId)
        .then(post => {
        this.form.title = post.title
        this.form.body = post.body
      })
    }
  },
  computed: {
    postId() {
      //to convert the string into number: +xxx
      return +this.$route.params.id
    },
    submitBtnText() {
      return this.postId ? "save": "submit";
    },
  },
  //this is a lifesycle hook , بتكول كل م الكومبوننت يترندر
  mounted() {
    this.postId && this.getPost()
  },

}
</script>
