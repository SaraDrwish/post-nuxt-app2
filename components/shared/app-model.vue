<template>
  <div >
    <v-dialog max-width="500" v-model="dialog">
      <template v-slot:activator="{on,attrs }">
        <v-btn
          v-if="buttonText"
          color="primary"
          v-bind="attrs"
          v-on="on"
          >
          {{buttonText}}
          </v-btn>
          <slot name="modelButton" :on="on" v-else></slot>
        </template>
        <slot ></slot>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name:"app-model",
  props: {
    modalVisibilty: {
      type: Boolean,
      required:false,
    },
    buttonText: {
      type: String,
      default:false
    }
  }
  ,
  data() {
    return {
      dialog:false,
  }
}
  }
</script>
