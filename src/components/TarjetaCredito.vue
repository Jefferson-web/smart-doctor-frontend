<template>
  <div>
      <router-link
        class="link-regreso-tarjeta"
        :to="'/metodo-pago?citaId=' + pago.citaId"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <img class="credit" src="../assets/credit_card.svg" alt="credit card">
      <div class="mx-5">
          <v-form ref="form">
            <v-text-field
                v-model="pago.nombre_tarjeta"
                label="Nombre de la tarjeta"
                placeholder="Nombre de la tarjeta"
            ></v-text-field>
            <v-text-field
                v-model="pago.numero_tarjeta"
                label="Número de tarjeta"
                placeholder="Número de tarjeta"
            ></v-text-field>
            <div class="row">
                <div class="col">
                    <v-text-field
                        v-model="pago.expiracion"
                        label="Vencimiento"
                        placeholder="MM/YY"
                    ></v-text-field>
                </div>
                <div class="col">
                    <v-text-field
                        v-model="pago.cvv"
                        label="CVV"
                        placeholder="CVV"
                    ></v-text-field>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                <v-text-field
                    label="Código prom."
                    placeholder="Código"
                ></v-text-field>
            </div>
            </div>
        </v-form>
        <button type="button" class="btn-login" v-on:click="Pagar">
            <div>Pagar  S/{{ pago.monto }}.00</div>
            <i class="fas fa-chevron-right"></i>
        </button>
      </div>
  </div>
</template>

<script>

import MedicoService from '../services/MedicosService';

export default {
    data(){
        return {
            pago: {
                tipoPagoId: 0,
                citaId: 0,
                monto: 0,
                nombre_tarjeta: "",
                numero_tarjeta: "",
                expiracion: "",
                cvv: ""
            }
        }
    },
    methods: {
        Pagar(){
            if(this.isFormValid()){
                MedicoService.RegistrarPago(this.pago).then(response => {
                    this.$router.replace("/citas-agendadas");
                    console.log(response);
                })
                .catch(e => console.log(e));
            } else {
                alert("Complete todos los campos");
            }
        },
        isFormValid(){
            return this.pago.nombre_tarjeta != "" &&
                    this.pago.numero_tarjeta != "" &&
                    this.pago.expiracion != "" &&
                    this.pago.cvv != "";
        }
    },
    mounted(){
        this.pago.citaId = this.$route.query.citaId;
        this.pago.tipoPagoId = this.$route.query.tipoPagoId;
        this.pago.monto = this.$route.query.monto;
    }
}
</script>

<style>
    .credit{
        width: 120px;
        display: flex;
        margin: 40px auto;
    }
    .btn-login {
        background: #6664c9;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        margin-top: 40px;
    }
    .link-regreso-tarjeta{
        position: absolute;
        top: 20px;
        left: 20px;
        color: black !important;
        text-decoration: none;
    }
</style>