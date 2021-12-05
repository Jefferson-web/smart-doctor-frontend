<template>
    <div class="pagos-citas">
        <div class="header">
            <router-link class="link-regreso" to="/citas-agendadas/"><i class="fas fa-arrow-left"></i></router-link>
            <span>Mis Pagos</span>  
        </div>
        <div class="pagos">
            <div v-for="(pago, index) in pagos" :key="index" class="c-pago">
                <span>S/ {{ pago.monto }}.00</span>
                <span>{{ pago.fecha_pago }}</span>
            </div>
        </div>
    </div>
</template>

<script>

import MedicoService from '../services/MedicosService';
import TokenService from '../services/TokenService';

export default {
    name: 'ListarPagos',
    data(){
        return {
            pagos: []
        }
    },
    methods: {
        ListarPagos(pacienteId){
            MedicoService.ListarPagos(pacienteId).then(response => {
                this.pagos = this.formatearFechas(response.data);
            })
            .catch(e => console.log(e));
        },
        formatearFechas(pagos){
            return pagos.map(pago => {
                pago.fecha_pago = (new Date(pago.fecha_pago)).toLocaleString();
                return pago;
            });
        }
    },
    mounted(){
        const pacienteId = TokenService.getUserId(); 
        this.ListarPagos(pacienteId);
    }
}
</script>

<style>
    .c-pago{
        background: white;
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
    .pagos-citas{
        background: #f8f8f8;
        height: 100%;
    }
</style>