<template>
  <div>
    <v-app-bar fixed app center >
      <ul class="list">
        <li class="list-item" v-for="(item,i) in items" :key="i">
          <v-btn :to="item.to" exact text >
            {{ item.title }}
          </v-btn>
        </li>
      </ul>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: "Home",
            to:"/",
          }
        ]
        }
    }
  }
</script>
