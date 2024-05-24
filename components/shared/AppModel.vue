<template>
  <div >
    <v-dialog max-width="500" v-model="dialog">
      <template v-slot:activator="{on,attrs }">
        <v-btn
          v-bind="{...computedProps , ...attrs}"
          v-if="buttonText"
          v-on="on"
          >
            {{buttonText}}
          </v-btn>
          <slot name="modelButton" :on="on" v-else></slot>
        </template>
        <slot></slot>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name:"AppModel",
  props: {
    modalVisibilty: {
      type: Boolean,
      required:false,
    },
    buttonText: {
      type: String,
      required:false
    },
     buttonColor: {
      type: String,
      default:'primary',
    },
    buttonStyle: {
      type: Boolean,
      required:false
    },
  }
  ,
  data() {
    return {
      dialog:false,
    }
  },
  computed: {
    computedProps() {
      let returnValue = {
        text: this.buttonStyle,
        color: this.buttonColor,
      };
      // if (this.buttonColor) returnValue.color = this.buttonColor
      return returnValue
    }
}
  }
</script>
