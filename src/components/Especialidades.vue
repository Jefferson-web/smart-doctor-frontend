<template>
  <div>
    <div class="header">
      <router-link class="link-regreso" :to="'/inicio'"><i class="fas fa-arrow-left"></i></router-link>
      <span>{{ titulo.substring(0, 25) }}...</span>  
    </div>
    <div class="m-4">
      <input
      type="text"
      class="form-control mb-3 search"
      placeholder="Encuentra la especialidad que necesitas"
      v-on:keyup="FiltrarEspecialidades()"
      v-model="filtro"
    />
    <div v-if="especialidades.length == 0" class="alert alert-primary" role="alert">
      No se encontraron especialidades
    </div>
    <div
      class="c-card-e mb-5"
      v-for="(especialidad, index) in especialidades"
      :key="index"
    >
      <img :src="especialidad.imagen" alt="imagen" width="100%" class="imagen-especialidad">
      <div class="card-body">
        <h5 class="card-title">
          <h4 class="titulo-e">{{ especialidad.nombre }}</h4>
        </h5>
        <p class="c-card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum
          in placeat odit consequuntur?
          {{ especialidad.descripcion }}
        </p>
        <div class="footer">
          <span class="badge-sd cantidad_medicos"
            >+{{ especialidad.cantidad_medicos }}</span
          >
          <router-link :to="'/medicos/' + especialidad.especialidadId" class="btn-sd"
            >Ver</router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import MedicosService from "../services/MedicosService";

export default {
  name: "Especialidades",
  data() {
    return {
      especialidades: [],
      filtro: "",
      titulo: "Conocer los medicos en SmartDoctor"
    };
  },
  methods: {
    ListarEspecialidades(filtro_nombre) {
      MedicosService.ListarEspecialidades(filtro_nombre)
        .then((response) => {
          this.especialidades = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    FiltrarEspecialidades() {
      this.ListarEspecialidades(this.filtro);
    },
  },
  mounted() {
    this.ListarEspecialidades();
  },
};
</script>

<style>
.c-card-e {
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: relative;
}
.c-card-e img{
  border-radius: 10px 10px 0px 0px;
}
.titulo-e {
  font-weight: 600;
  font-size: 18px;
  text-align: start;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.badge-sd {
  color: white;
  background: #1976d2;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.btn-sd {
  color: #1976d2;
  font-size: 13px;
  font-weight: 600;
  background: #1976d23d;
  width: 60px;
  border-radius: 8px;
  padding: 5px 0px;
  text-align: center;
}
a {
  text-decoration: none;
}
.search::placeholder {
  font-size: 14px;
}
.search {
  font-size: 14px;
}
.imagen-especialidad{
  border-radius: none !important;
}
</style>