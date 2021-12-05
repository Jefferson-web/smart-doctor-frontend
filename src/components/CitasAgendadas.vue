<template>
  <div class="citas-agendadas">
    <div class="header">
      <span>Mis citas programadas</span>
    </div>
    <div>
        <div class="c-cita mb-1" v-for="(cita, index) in citas" :key="index">
            <img src="../assets/medico.png" alt="">
            <div>
                <div class="c_nombre_medicos">{{ cita.medico }}</div>
                <div class="c_sexo_edad">
                    <span v-if="cita.sexo">Hombre</span>
                    <span v-if="!cita.sexo">Mujer</span>
                    <span>, {{ cita.edad }} años</span>
                </div>
                <div class="c_fecha_hora">{{ cita.fecha }} | {{ cita.hora_inicio }} hrs.</div>
                <div class="c_estado">
                    <div v-if="!cita.atendido" class="estado estado__pendiente">
                        <i class="far fa-clock"></i>
                        <span>Pendiente</span>
                    </div>
                    <div v-if="cita.atendido" class="estado estado__completado">
                        <i class="far fa-check-circle"></i>
                        <span>Completado</span>
                    </div>
                </div>
            </div>
        </div>
        <p v-if="citas.length > 0"  class="text-center mt-3" style="font-size: 14px">
            <router-link to="/listar-pagos">Mis pagos</router-link>
        </p>
    </div>
    <div v-if="citas.length == 0" class="sin-citas">
        <img src="../assets/doctors.svg" alt="doctors" width="80%">
        <p class="mt-5">No tienes citas médicas programadas.</p>
    </div>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
import BottomNavigation from "./BottomNavigation";
import TokenService from '../services/TokenService';
import MedicoService from '../services/MedicosService';

export default {
  data(){
      return {
          citas: []
      }
  },
  methods: {
      ListarCitasPaciente(pacienteId){
          MedicoService.ListarCitasPaciente(pacienteId).then(response => {
              this.citas = this.formatearFecha(response.data);
          })
          .catch(e => console.log(e));
      },

      formatearFecha(citas){
          return citas.map(cita => {
              let fecha = (new Date(cita.fecha)).toDateString();
              cita.fecha = fecha.substring(8, 10) + " " + fecha.substring(0, 3);
              let time = (new Date(cita.hora_inicio)).toLocaleTimeString().substring(0, 5);
              cita.hora_inicio = time;
              return cita;
          });
      },
  },
  mounted(){
      const paciente = TokenService.getUser();
      const pacienteId = paciente.pacienteId;
      this.ListarCitasPaciente(pacienteId);
  },
  components: {
    BottomNavigation,
  },
};
</script>

<style>
    .sin-citas{
        height: calc(100vh - 57px - 80px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .citas-agendadas{
        background: #f8f8f8;
        height: 100%;
    }
    .c-cita{
        background: white;
        padding: 15px;
        display: flex;
        justify-content: start;
        gap: 20px;
    }
    .c-cita img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .c_nombre_medicos{
        font-weight: 600;
        font-size: 16px;
    }
    .c_sexo_edad{
        color: #858585;
        font-size: 13px;
    }
    .c_fecha_hora{
        color: #858585;
        font-size: 13px;
    }
    .c_estado .estado{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        margin-top: 5px;
    }
    .estado__pendiente{
        color: #ff7986;
    }
    .estado__completado{
        color: #4792fc;
    }
</style>