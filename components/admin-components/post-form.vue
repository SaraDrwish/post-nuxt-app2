<template>
  <v-form v-model="valid" @submit.prevent="submit" class="pink lighten-2 pa-1 mx-auto">
    <h2>post-form-component</h2>
    <v-container >
      <v-row>
        <v-col
        class="red  lighten-2 pa-2"
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="form.title"
            :counter="10"
            :rules="rules.title"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12"
          md="6" class="blue  lighten-2 pa-2" >
          <v-textarea
            v-model="form.body"
            :rules="rules.body"
            name="input-7-1"
            auto-grow
        ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-btn type="submit">add</v-btn>
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
