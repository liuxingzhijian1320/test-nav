<template>
  <div class="hello">

    <ul class="ul">
      <router-link :to="{name:'left'}" tag="li" class="li">1111111111</router-link>
      <router-link :to="{name:'right'}" tag="li" class="li">222222222</router-link>
    </ul>


    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .ul {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
  }

  .li {
    flex: 1;
    list-style: none;
  }

  .li:first-child {
    background-color: red;
  }
  .li:last-child {
    background-color: yellow;
  }
</style>
