<template>

  <v-form v-model="valid">
    <h2>post-form-component</h2>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :counter="10"
            :rules="rules.title"
            label="First name"
            hide-details
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-textarea
            label="Label"
            :rules="rules.body"
            name="input-7-1"
            auto-grow
        ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: null,
        body:null,
      },
      // firstname: '',

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

}
</script>
