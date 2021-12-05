<template>
    <div>
        <div class="header">
            <span>Método de pago</span>
        </div>
        <div class="precio">
            S/ {{ cita.precio }}.00
        </div>
        <p class="texto-pago">TELECONSULTA PROGRAMADA</p>
        <p class="fecha_pago">{{ cita.fecha }}</p>
        <div class="contenedor_pagos">
            <div class="tipo_pago" v-for="(tipoPago, index) in tipos_pago" :key="index">
                <div class="pago">
                    <i :class="tipoPago.icono"></i>
                    <label :for="'chk' + index">{{ tipoPago.tipo }}</label>
                </div>
                <input type="radio" :value="tipoPago.tipoPagoId" v-model="tipoPagoId" :id="'chk' + index">
            </div>
            <button type="button" class="btn-continuar-pago" v-on:click="ContinuarPago">
                <div>Continuar</div>
            </button>
        </div>
    </div>
</template>

<script>

import MedicoService from '../services/MedicosService';

export default {
    name: 'MetodoPago',
    data(){
        return {
            citaId: 0,
            cita: {},
            tipos_pago: [],
            tipoPagoId: 1
        }
    },
    methods: {
        VerDetalleCita(citaId){
            MedicoService.VerDetalleCita(citaId).then(response => {
                this.cita = response.data;
                this.cita.fecha = (new Date(this.cita.fecha)).toLocaleString();
            })
            .catch(e => console.log(e));
        },
        ListarTiposDePago(){
            MedicoService.ListarTiposDePago().then(response => {
                this.tipos_pago = response.data;
                console.log(this.tipos_pago);
            })
            .catch(e => console.log(e));
        },
        ContinuarPago(){
            this.$router.replace({ name: 'TarjetaCredito', query: { citaId: this.citaId, tipoPagoId: this.tipoPagoId, monto: this.cita.precio }});
        }
    },
    mounted(){
        this.citaId = this.$route.query.citaId;
        this.VerDetalleCita(this.citaId);
        this.ListarTiposDePago();
    }
}
</script>

<style>
    .header{
        background: white !important;
        color: black;
        font-weight: 600;
    }
    .precio{
        font-size: 60px;
        text-align: center;
        margin: 35px 0px;
    }
    .texto-pago{
        text-align: center;
        color: #707070;
    }
    .fecha_pago{
        text-align: center;
    }
    .tipo_pago{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
    }
    .pago i{
        font-size: 20px;
        margin-right: 20px;
        color: #707070;
    }
    .pago label{
        font-size: 15px;
    }
    .contenedor_pagos{
        padding: 50px 50px;
    }
    .btn-continuar-pago {
        background: rgba(12, 219, 29, 0.788);
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        margin-top: 60px;
    }
</style>