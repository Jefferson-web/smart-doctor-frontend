<template>
  <div class="m-4">
    <input
      type="text"
      class="form-control search mb-3"
      v-model="filtro_nombre"
      v-on:keyup="FiltrarMedicos()"
      placeholder="Buscar al doctor(a) por su nombre..."
    />
    <div class="c-card pl" v-for="(medico, index) in medicos" :key="index">
      <img src="../assets/medico.png" height="50" class="medico-imagen" />
      <div class="c-card-content">
        <div class="medico_info">
          <p class="m-0 nombre_doctor">{{ medico.nombres }}</p>
          <p class="mb-2 cmp">C.M.P.: {{ medico.cmp }}</p>
          <div class="actions">
            <div class="d-flex">
              <span>
                <i
                  class="fas fa-star star"
                  v-for="(star, index) in stars"
                  :key="index"
                ></i>
              </span>
            </div>
            <router-link :to="'/medico/' + medico.medicoId" class="btn-sdm a-link-sm"
              >Reviso su perfil</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MedicosService from "../services/MedicosService";

export default {
  name: "Medicos",
  data() {
    return {
      medicos: [],
      stars: 5,
      especialidad: 0,
      filtro_nombre: "",
    };
  },
  methods: {
    ListarMedicos(filtro_nombre, especialidad) {
      MedicosService.ListarMedicos(filtro_nombre, especialidad)
        .then((response) => {
          this.medicos = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    FiltrarMedicos() {
      this.ListarMedicos(this.filtro_nombre, this.especialidad);
    },
  },
  mounted() {
    this.especialidad = this.$route.params.especialidad;
    this.ListarMedicos(this.filtro_nombre, this.especialidad);
  },
};
</script>

<style>
.medico_info {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.cmp {
  color: rgb(102, 102, 102);
  font-size: 12px;
}
.btn-sdm {
  background: rgb(46, 214, 130);
  color: white;
  padding: 3px 10px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
}
.btn-sdm:hover {
  color: white;
  background: rgb(26, 202, 114);
}
.actions {
  display: flex;
  justify-content: space-between;
}
.star {
  color: yellow;
  font-size: 12px;
  margin-right: 3px;
}
.medico-imagen {
  display: flex;
  margin: auto;
}
.pl {
  padding-left: 18px;
}
.search::placeholder {
  font-size: 14px;
}
</style>