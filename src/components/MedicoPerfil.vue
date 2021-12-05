<template>
  <div>
    <div class="franja">
      <router-link class="link-regreso-perfil" :to="'/medicos/' + medico.especialidadId"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <router-link :to="'/calificaciones/' + medico.medicoId" class="btn-star">
        <i class="fas fa-star star-perfil"></i
      ></router-link>
    </div>
    <div class="c-img">
      <img class="foto-medico" src="../assets/medico.png" width="60px" />
    </div>
    <div class="contenido px-4">
      <div>
        <h6 class="nombres text-center">{{ medico.nombres }}</h6>
        <p class="especialidad mb-1 text-center">{{ medico.especialidad }}</p>
        <p class="cmp text-center">C.M.P.: {{ medico.cmp }}</p>
      </div>
      <div class="resumen-doctor">
        <div>
          <div class="label">Tiempo aprox.</div>
          <div class="tiempo text-center">{{ medico.tiempo_consulta }} min.</div>
        </div>
        <div>
          <div class="label">Calificación</div>
          <div class="calificacion text-center">
            {{ calificacion }} <i class="fas fa-star star"></i>
          </div>
        </div>
      </div>
      <h6 class="pregunta">¿Qué atiende este especialista?</h6>
      <p class="descripcion">{{ medico.descripcion }}</p>
      <h6 class="pregunta">Estudios profesionales</h6>
      <ul>
        <li class="estudio" v-for="(estudio, index) in estudios" :key="index">
          {{ estudio.descripcion }} ({{ estudio.anio }})
        </li>
      </ul>
      <h6 class="pregunta">Experiencia laboral</h6>
      <ul>
        <li
          class="estudio"
          v-for="(experiencia, index) in experiencias"
          :key="index"
        >
          {{ experiencia.descripcion }} ({{ experiencia.anio }})
        </li>
      </ul>
      <div class="div-precio">
        <span class="texto-precio">Precio teleconsulta</span>
        <span class="precio">S/ {{ medico.importe_consulta }}</span>
      </div>
      <div class="div-programar">
        <router-link class="programar-teleconsulta a-link-sm" :to="'/programar-teleconsulta/' + medico.medicoId">PROGRAMAR TELECONSULTA</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MedicosService from "../services/MedicosService";

export default {
  name: "PerfilDoctor",
  data() {
    return {
      calificacion: 0,
      estudios: [],
      experiencias: [],
      medico: {},
    };
  },
  methods: {
    VerPerfil(medicoId) {
      MedicosService.VerPerfil(medicoId)
        .then((response) => {
          const { calificacion, estudios, experiencias, medico } =
            response.data;
          this.calificacion = calificacion;
          this.estudios = estudios;
          this.experiencias = experiencias;
          this.medico = medico;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.VerPerfil(id);
  },
};
</script>

<style>
.nombres {
  font-weight: 600;
  color: #212121;
  font-size: 15px;
}
.especialidad {
  color: rgb(46, 214, 130);
  font-weight: 600;
  font-size: 12px;
}
.cmp {
  font-size: 13px;
}
.resumen-doctor {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.label {
  color: rgb(163, 163, 163);
}
.tiempo,
.calificacion {
  color: #212121;
  margin-top: 2px;
}
.star {
  font-size: 8px;
  transform: translateY(-2px);
  color: yellow;
}
.descripcion {
  font-size: 13px;
  text-align: left;
}
.pregunta {
  font-size: 14px;
  font-weight: 600;
  color: #212121;
  text-align: left;
  margin-top: 30px;
}
.estudio {
  font-size: 13px;
  text-align: left;
}
.precio {
  font-weight: 600;
  font-size: 25px;
  text-align: right;
}
.div-programar {
  text-align: right;
  margin-top: 20px;
}
.programar-teleconsulta {
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  color: white;
  background: #ff493c;
  font-size: 13px;
  box-shadow: 0px 2px 5px rgb(177, 177, 177);
}
.programar-teleconsulta:hover {
  background: #f3392c;
}
.texto-precio {
  font-size: 13px;
}
.div-precio {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.texto-precio {
  color: rgb(129, 129, 129);
}
.franja {
  background: #7b1fa2;
  width: 100%;
  height: 100px;
  position: relative;
}
.c-img {
  background: white;
  width: 100px;
  height: 100px;
  transform: translateY(-50%);
  border-radius: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenido {
  transform: translateY(-30px);
}
.btn-star {
  position: absolute;
  width: 40px;
  height: 40px;
  background: white;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.star-perfil{
  color: #7b1fa2;
  font-size: 20px;
}
.link-regreso-perfil{
  color: white !important;
  text-decoration: none !important;
  margin-right: 30px !important;
  position: absolute;
  font-size: 20px;
  top: 15px;
  left: 20px;
}
</style>