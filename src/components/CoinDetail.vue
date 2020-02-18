<template>
  <section v-if="coin">
    <h3>
      👉{{ coin.symbol }}
      <small @click="close">&times;</small>
    </h3>
    <ul>
      <li v-for="(value, key) in coin" :key="key">
        <b>{{ key }}</b>: {{ value }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['coin'],

  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
section {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  right: 5%;
  border-radius: 1px;
  border: 2px solid #78B28B;
  padding: 1rem;
  box-shadow: 15px 15px 15px -5px rgba(0,0,0,0.5);
  animation: fadein .5s;
}

h3 {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
}

small {
  cursor: pointer;
  color: tomato;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  margin-bottom: 1rem;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  50%, 100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>