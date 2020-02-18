<template>
  <section tabindex="0" @keyup.esc="setSelectedAsset()">
    <p v-if="isLoading">Cargando...</p>
    <table v-else>
      <thead>
        <tr>
          <th>Simbolo</th>
          <th>
            <input placeholder="Buscar..." type="text" v-model.trim="search" aria-label="Buscar assets">
          </th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in fiteredAssets" :key="a.id">
          <td :class="{ selected: selectedAsset && a.symbol === selectedAsset.symbol }">
            <button @click="setSelectedAsset(a)" >
              {{ a.symbol }}
            </button>
          </td>
          <td>{{ a.name }}</td>
          <td>$ {{ parseFloat(a.priceUsd).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>

    <CoinDetail :coin="selectedAsset" @close="setSelectedAsset()" />
  </section>
</template>

<script>
import CoinDetail from '@/components/CoinDetail'
import coincap from '@/services/coincap'

export default {
  name: 'CoinList',
  components: { CoinDetail },

  data () {
    return {
      search: '',
      isLoading: true,
      selectedAsset: null,
      assets: []
    }
  },

  computed: {
    fiteredAssets () {
      if (!this.search) { return this.assets }

      return this.assets.filter(a => a.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  },

  created () {
    coincap.getAssets()
      .then(({ data }) => {
        this.assets = data
        this.isLoading = false
      })
  },

  methods: {
    setSelectedAsset (asset = null) {
      this.selectedAsset = asset
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
}

p {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2rem;
  color: #3C495B;
  font-weight: 600;
  animation: rotate 2s;
}

table {
  border-collapse: collapse;
}

th {
  text-align: center;
}

td {
  border-bottom: 2px solid #64B587;
  margin: 0;
}

button:first-child:hover {
  text-decoration: underline;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: #39495C;
  font-size: 1rem;
}

td, th {
  text-align: left;
  min-width: 150px;
  padding: 1rem;
}

input {
  border: none;
  font-size: 1rem;
  padding: 1rem;
}

.selected::before {
  content: "👉";
}

input::placeholder {
  color: #000;
  font-weight: 600;
}

@keyframes rotate {
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }

  20%, 80% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  100% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}
</style>