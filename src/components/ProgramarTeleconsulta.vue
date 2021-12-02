<template>
  <div class="mx-4">
    <v-row justify="center" class="mt-4">
      <v-date-picker v-model="picker" color="primary" v-on:change="datePickerChange()"></v-date-picker>
    </v-row>
    <p class="mt-4 text-center" v-if="horarios.length == 0">No hay horarios disponibles</p>
    
    <div class="horarios-disponibles">
      <div class="radio" v-for="(horario, index) in horarios" :key="index">
        <input type="radio" name="horario" :id="'rdHorario' + horario.horarioId" v-on:change="onChecked(horario.horarioId)" class="radio__input">
        <label class="radio__label" :for="'rdHorario' + horario.horarioId">{{ horario.hora_inicio }}</label>
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
    onChecked(horarioId){
      this.horarioId = horarioId;
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
    padding: 5px 0px;
    width: 55px;
    text-align: center;
    background: #BBDEFB;
    color: #3F51B5;
    font-size: 15px;
    margin: 0px 10px 10px 0px;
    border-radius: 5px;
    cursor: pointer;
  }
  .radio__label:hover{
    background: #a5d7ff;
  }
  .radio__input:checked + .radio__label{
    background: #a5d7ff;
    outline: solid 1px #3F51B5;
  }
</style>