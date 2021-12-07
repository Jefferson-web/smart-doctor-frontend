<template>
  <div>
    <div class="header">
      <router-link class="link-regreso" :to="'/medico/' + medicoId"><i class="fas fa-arrow-left"></i></router-link>
      <span>Agendar cita</span>  
    </div>
    <div class="mx-4">
    <v-row justify="center" class="mt-4">

      <!-- VDATEPICKER -->
      <v-date-picker v-model="picker" color="primary" v-on:change="datePickerChange()"></v-date-picker>
    
    </v-row>
    <p class="mt-4 text-center" v-if="horarios.length == 0">No hay horarios disponibles</p>
    
    <div class="horarios-disponibles">
      <div class="radio" v-for="(horario, index) in horarios" :key="index">
        <input type="radio" name="horario" :value="horario.horarioId" v-model="horarioId" :id="'rdHorario' + horario.horarioId" v-on:change="onChecked()" class="radio__input">
        <label class="radio__label" :for="'rdHorario' + horario.horarioId">{{ horario.hora_inicio }}</label>
      </div>
    </div>
    <div class="text-right">
      <button class="programar-horario mt-5"
        v-if="horarios.length > 0" 
        :disabled="!isSelected"
        v-bind:class="{ btnActive : isSelected }"
        v-on:click="ProgramarCita">
        PROGRAMAR HORARIO
      </button>
    </div>
  </div>
  </div>
</template>

<script>

import MedicoService from '../services/MedicosService';

export default {
  name: "ProgramarTeleconsulta",
  data() {
    return {
      medicoId: 0,
      horarios: [],
      horarioId: 0,
      isSelected: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    };
  },
  methods: {
    ListarHorariosDisponibles(medicoId, fecha){
      MedicoService.ListarHorariosDisponibles(medicoId, fecha).then(response => {
        this.horarios = this.formatearFechas(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    },
    datePickerChange(){
      this.ListarHorariosDisponibles(this.medicoId, this.picker);
    },
    formatearFechas(horarios){
      return horarios.map(horario => {
        horario.hora_inicio = (new Date(horario.hora_inicio)).toLocaleTimeString().substring(0, 5);
        return horario;
      });
    },
    onChecked(){
      this.isSelected = true;
    },
    ProgramarCita(){
      this.$router.replace({name: 'AgendarCita', query : { medicoId: this.medicoId, horarioId: this.horarioId }});
    }
  },
  mounted(){
    this.medicoId = this.$route.params.medicoId;
    this.ListarHorariosDisponibles(this.medicoId, this.picker);
  }
};
</script>

<style>
  .horarios-disponibles{
    margin-top: 15px;
    display: inline-flex;
    justify-content: left;
    flex-wrap: wrap;
  }
  .radio__input{
    display: none;
  }
  .radio__label{
    padding: 10px 25px;
    text-align: center;
    background: #d7edff;
    color: #3F51B5;
    font-size: 15px;
    margin: 0px 10px 10px 0px;
    border-radius: 3px;
    cursor: pointer;
  }
  .radio__label:hover{
    background: #a5d6ffbe;
  }
  .radio__input:checked + .radio__label{
    background: #d7edff;
    outline: solid 2px #1976d2;
    position: relative;
  }

  .radio__input:checked + .radio__label::before{
    content: "\2713";
    font-weight: 400;
    color: white;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: 20px;
    height: 20px;
    background: #1976d2;
    position: absolute;
    border-radius: 50%;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
  .v-picker__title{
    display: none !important;
  }
  .programar-horario{
    font-size: 15px;
    font-weight: 400;
    text-align: right;
  }
  .btnActive{
    color: #1976d2;
  }
</style>