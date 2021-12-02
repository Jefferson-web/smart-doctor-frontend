<template>
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
      class="c-card mb-3"
      v-for="(especialidad, index) in especialidades"
      :key="index"
    >
      <div class="card-body">
        <h5 class="card-title">
          <h4 class="titulo">{{ especialidad.nombre }}</h4>
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
</template>

<script>
import MedicosService from "../services/MedicosService";

export default {
  name: "Especialidades",
  data() {
    return {
      especialidades: [],
      filtro: "",
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
.titulo {
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
</style>