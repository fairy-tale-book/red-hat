<script setup>
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div id="app">
    <!-- <header>
      <div class="wrapper">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/main">main</router-link>
        </nav>
      </div>
    </header> -->

    <router-view />
  </div>
</template>

<style scoped>
body {
  --green: #a5db60;
  --pair: #bfe98a;

  font-size: 62.5%;
  color: #111;
  background: var(--green);
}
</style>
