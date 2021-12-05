<template>
  <div>
    <div class="header">
      <router-link
        class="link-regreso"
        :to="'/programar-teleconsulta/' + medicoId"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <span>Agendar cita</span>
    </div>
    <div class="sub-header">
      <div class="imagen-agendar mb-5">
        <img src="../assets/medico.png" />
      </div>
      <div class="medico__nombre">{{ medico.nombre_medico }}</div>
      <div class="medico__especialidad">{{ medico.nombre_especialidad }}</div>
      <v-rating
        class="paciente__calificacion"
        :value="promedio_calificacion"
        color="#FFC107"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        hover
        large
        dense
        size="3px"
        :readonly="true"
      ></v-rating>
      <br /><br />
    </div>
    <div class="mx-4 my-2">
      <div class="titulo-ac">¿QUÉ ATIENDE ESTE(A) PROFESIONAL?</div>
      <p class="texto-ac">{{ medico.nombre_especialidad }}.</p>
      <div class="titulo-ac">ACERCA DE LA CITA</div>
      <div class="c-acerca">
        <div class="left">Fecha</div>
        <div class="right">{{ horario.hora_inicio }} hrs.</div>
      </div>
      <div class="c-acerca">
        <div class="left">Tiempo</div>
        <div class="right">{{ horario.duracion }} min.</div>
      </div>
      <div class="c-acerca">
        <div class="left">Paciente</div>
        <div class="right nombre_paciente">{{ paciente.nombres }}</div>
      </div>
      <div class="titulo-ac">INFORMACIÓN ADICIONAL</div>
      <p class="texto-ac">Motivo de consulta</p>
      <textarea name="motivo" v-model="motivo" class="form-control" cols="30" rows="3"></textarea>
      <br>
      <button type="button" class="btn-login" :disabled="motivo == ''" v-bind:class="{ btnDisable: motivo == '' || motivo == null}">
        <div>Continuar</div>
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <br><br>
  </div>
</template>

<script>
import MedicosService from "../services/MedicosService";
import TokenService from "../services/TokenService";

export default {
  name: "AgendarCita",
  data() {
    return {
      medicoId: 0,
      promedio_calificacion: 0,
      paciente: {},
      medico: {},
      horarioId: 0,
      horario: {},
      motivo: null
    };
  },
  methods: {
    VerPromedioCalificacion(medicoId) {
      MedicosService.VerPromedioCalificacion(medicoId)
        .then((response) => {
          this.promedio_calificacion = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    InfoMedico(medicoId) {
      MedicosService.InfoMedico(medicoId)
        .then((response) => {
          this.medico = response.data;
        })
        .catch((e) => console.log(e));
    },
    VerHorario(horarioId) {
      MedicosService.VerHorario(horarioId)
        .then((response) => {
          this.horario = response.data;
          this.horario.hora_inicio = new Date(
            this.horario.hora_inicio
          ).toLocaleString();
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.medicoId = this.$route.query.medicoId;
    this.horarioId = this.$route.query.horarioId;
    this.paciente = TokenService.getUser();
    this.VerPromedioCalificacion(this.medicoId);
    this.InfoMedico(this.medicoId);
    this.VerHorario(this.horarioId);
  },
};
</script>

<style>
.sub-header {
  position: relative;
  height: 280px;
  clip-path: ellipse(77% 51% at 47% 33%);
  background: #7b1fa2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.medico__nombre {
  color: white;
}
.medico__especialidad {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 300;
}
.imagen-agendar {
  background: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
}
.mdi-star,
.mdi-star-half-full {
  font-size: 17px !important;
}
.titulo-ac {
  color: rgb(97, 97, 97);
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 20px;
}
.texto-ac {
  font-size: 14px;
  color: #212121;
}
.c-acerca {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 14px;
  color: #212121;
}
.nombre_paciente {
  color: #5f1081;
}
.btn-login {
  background: #6664c9;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px 25px;
  border-radius: 15px;
}
.btnDisable{
    background: rgb(197, 197, 197);
}
</style>