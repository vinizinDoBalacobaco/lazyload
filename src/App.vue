<script>
export default {
  data() {
    return {
      component: null // Inicialmente, nenhum componente está carregado
    };
  },
  methods: {
    async loadComponent(componentName) {
      try {
        // alert("aaaaaaaaaaaaaaaa")
        // Carrega o componente dinamicamente usando import()
        this.component = () => import(`./components/${componentName}.vue`);
      } catch (error) {
        console.error('Erro ao carregar o componente:', error);
      }
    }
  }
};
</script>
<template>
  <nav>
  <ul>
    <li>
      <button @click="loadComponent('PaginaPrincipal')">Página Principal</button>
      <!-- <RouterLink to="/">Home</RouterLink> -->
    </li>
    <li>
      <button @click="loadComponent('ImagensDiv')">Imagens</button>
      <!-- <RouterLink to="/imagensdiv">Imagens</RouterLink> -->
    </li>
    <li>
      <button @click="loadComponent('TableCat')">Tabela</button>
      <!-- <RouterLink to="/tablecat">Tabela</RouterLink> -->
    </li>
  </ul>
</nav>
  <PaginaPrincipal />
    <!-- <component :is="currentComponent" v-if="currentComponent"></component> -->
     <input v-model="component" />
  <!-- <PaginaPrincipal /> -->
  <RouterView />
   <!-- <router-view /> -->
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
ul{
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul li {
  text-decoration: none;
  font-size: 20px;
  margin-left: 60px;
  margin-right: 60px;
}

</style>
