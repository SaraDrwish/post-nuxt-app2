<template>
  <div>

    <div class="pink lighten-3 pa-4 ma-2">
      <h2>id page</h2>
      <div class="yellow lighten-4 pa-2 ma-2">
        <p> {{$route.params.id}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
  validate() {
      return {
        // !isNaN(params.id)
        }
},


  }
</script>
