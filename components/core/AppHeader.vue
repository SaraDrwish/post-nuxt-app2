<template>
  <div>
    <v-app-bar fixed app center>
      <v-list  v-for="(item,i) in items" :key="i" >
        <v-list-item  >
          <v-btn :to="item.to" exact text >
            {{ item.title }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name:"AppHeader",
        items: [
          {
            title: "Home",
            to:"/",
          },
          {
            title: "Admin",
            to:"/admin",
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

.v-sheet.v-list:not(.v-sheet--outlined),
.v-toolbar__content, .v-toolbar__extension{
     background: #F5F5F5;
   }

.v-btn__content {
  color: aliceblue !important;
}

</style>
