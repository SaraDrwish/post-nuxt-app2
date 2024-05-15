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
