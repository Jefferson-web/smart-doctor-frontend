<template>
  <div>
    <div class="usuario">
      <h5 class="nombre_usuario">Hola {{ paciente.nombres }}</h5>
      <p class="edad_usuario"> 
        <span v-if="paciente.sexo">Hombre</span>
        <span v-if="!paciente.sexo">Mujer</span>
        <span> {{ paciente.edad }} años</span>
      </p>
    </div>
    <div class="px-4">
      <h6 class="title">Elige qué deseas hacer hoy</h6>
      <a
        class="c-card bg-sec"
        href="https://www.entel.pe/smart-doctor/"
        target="_blank"
      >
        <img src="entel.png" width="100px" />
        <div class="c-card-content">
          <p class="mb-0">Programar una <br />teleconsulta</p>
          <span class="s-arrow white">></span>
        </div>
      </a>
      <a class="c-card" href="www.google.com">
        <img src="imagen1.jpg" width="100px" />
        <div class="c-card-content">
          <p class="mb-0">Programar una <br />teleconsulta</p>
          <span class="s-arrow primary">></span>
        </div>
      </a>
      <router-link class="c-card" to="/especialidades">
        <img src="imagen2.jpg" width="100px" />
        <div class="c-card-content">
          <p class="mb-0">Conocer los médicos <br />en Smart Doctor</p>
          <span class="s-arrow primary">></span>
        </div>
      </router-link>
    </div>
    <!-- <button class="btn-logout" v-on:click="Salir"><i class="fas fa-sign-out-alt"></i></button> -->
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>

import TokenService from '../services/TokenService';
import BottomNavigation from './BottomNavigation.vue';

export default {
  name: "Inicio",
  components: {
    BottomNavigation
  },
  data(){
    return {
      paciente: {}
    }
  },
  mounted(){
    this.paciente = TokenService.getUser();
  }
};
</script>

<style>
.title {
  font-weight: 600;
  text-align: start;
  margin-bottom: 20px;
}
.usuario {
  width: 100%;
  height: 150px;
  background: #7b1fa2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}
.usuario .nombre_usuario {
  color: white;
}
.usuario .edad_usuario {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 0;
}
.btn-logout{
  color: white;
  background: #1976d2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all ease-in-out .5s;
}
.btn-logout:hover{
  background: #1365b8;
}
</style>