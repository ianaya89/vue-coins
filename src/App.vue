<template>
  <div id="app">
    <nav>
      <span>💸 Vue Coins</span>
    </nav>

    <main>
      <CoinList/>
    </main>
  </div>
</template>

<script>
import CoinList from './components/CoinList.vue'

export default {
  name: 'App',
  components: {
    CoinList
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
}

nav {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 70px;
  background-color: #64B587;
  color: #3C495B;
}

nav span {
  font-weight: 700;
  font-size: 1.5rem;
}

main {
  padding: 2rem;
  display: flex;
  align-items: center;
}
</style>
