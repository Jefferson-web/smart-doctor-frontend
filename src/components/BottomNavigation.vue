<template>
  <div class="bottom-navigation">
      <router-link to="/inicio" class="nav-item">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/citas-agendadas" class="nav-item">
        <i class="far fa-calendar-alt"></i>
        <span>Citas</span>
      </router-link>
      <router-link to="/indicaciones" class="nav-item">
        <i class="far fa-sticky-note"></i>
        <span>Indicaciones</span>
      </router-link>
      <button class="nav-item" v-on:click="Salir">
        <i class="fas fa-sign-out-alt"></i>
        <span>Salir</span>
      </button>
    </div>
</template>

<script>

import TokenService from '../services/TokenService';

export default {
    name: 'BottomNavigation',
    methods:{
      Salir(){
        TokenService.logout();
        this.$router.replace("/login");
      }
    }
}
</script>

<style>
.bottom-navigation{
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgb(220, 220, 220);
  text-decoration: none;
  background: white !important;
}

.bottom-navigation .nav-item{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 80px;
  padding: 20px 0px;
  color: #888888;
  transition: all ease-in-out .5s;
}

.bottom-navigation .nav-item:hover{
  color: #7b1fa2;
}

.bottom-navigation .nav-item span{
  font-size: 13px;
}

.bottom-navigation .nav-item i{
  font-size: 20px;
}
</style>