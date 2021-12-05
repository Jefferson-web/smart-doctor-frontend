<template>
  <div>
    <div class="header">
      <span>Mis indicaciones</span>
    </div>
    <div v-if="indicaciones.length == 0" class="sin-indicaciones">
      <img src="../assets/doctors.svg" alt="doctors" width="80%" />
      <p class="mt-5">No tienes indicaciones médicas.</p>
    </div>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
import BottomNavigation from "./BottomNavigation";

export default {
  data() {
    return {
      indicaciones: [],
    };
  },
  components: {
    BottomNavigation,
  },
};
</script>

<style>
    .sin-indicaciones{
        height: calc(100vh - 57px - 80px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>