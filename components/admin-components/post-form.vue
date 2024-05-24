<template>
  <v-form v-model="valid" @submit.prevent="submit" class="pink lighten-5 pa-1 mx-auto text-center orange--text " >
    <h2>post-form-component</h2>
    <v-container >
      <v-row >
        <v-col  >
          <v-text-field
            v-model="form.title"
            :counter="10"
            :rules="rules.title"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row >
        <v-col >
          <v-textarea
            v-model="form.body"
            :rules="rules.body"
            name="input-7-1"
            auto-grow
        ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-btn type="submit" class="pa-1 ma-2 orange grey--text w-50" >Add</v-btn>
  </v-form>
</template>
<script>
export default {
  name:"post-form",
  data() {
    return {
      form: {
         title:'',
        body:'',
      },
      valid:false,
      rules: {
        title: [
          v=>!!v||"title is requeired",
          v=>v.length <= 10 ||'title must be less than 10 characters.'
        ],
        body: [
          v=>!!v||"body is requeired",
          v=>v.length <= 10 ||'body must be less than 10 characters.'
        ],

      },

    }
  },
  methods: {
    submit() {
      console.log("form submited ...")
   }
  },

}
</script>
