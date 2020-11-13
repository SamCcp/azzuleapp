<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  created(){
    //@ts-ignore
    window.app = this;
  }
});
</script>
