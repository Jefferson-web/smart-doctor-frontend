<template>
  <div class="m-4">
    <h1>Registro</h1>
    <p class="texto-reg">
      Únete a Smart Doctor y empieza a recibir una atencion de calidad con una
      red de profesionales de la salud
    </p>
    <v-form>
      <v-text-field v-model="cuenta.nombres" label="Nombres"></v-text-field>
      <v-text-field v-model="cuenta.dni" label="DNI"></v-text-field>
      <v-text-field
        v-model="cuenta.fecha_nacimiento"
        label="Fecha de Nacimiento"
        placeholder="1999-04-16"
        type="date"
      ></v-text-field>
      <p>Sexo</p>
      <div class="d-flex justify-content-around">
        <div>
          <input type="radio" id="one" :value="true" v-model="cuenta.sexo" />
          <label for="one" class="ml-3">Hombre</label>
        </div>
        <div>
          <input type="radio" id="two" :value="false" v-model="cuenta.sexo" />
          <label for="two" class="ml-3">Mujer</label>
        </div>
      </div>
      <v-text-field
        v-model="cuenta.edad"
        label="Edad"
        type="number"
      ></v-text-field>
      <v-text-field
        v-model="cuenta.distrito_colonia"
        label="Distrito/Colonia"
      ></v-text-field>
      <v-text-field
        v-model="cuenta.email"
        label="Correo electrónico"
      ></v-text-field>
      <v-text-field
        v-model="cuenta.contrasena"
        label="Contraseña"
        type="password"
      ></v-text-field>
      <br />
      <button
        type="button"
        v-on:click="Registrar"
        class="btn-login"
        :disabled="loading"
      >
        <div>Registrarse</div>
        <i class="fas fa-chevron-right"></i>
        <i class="fas fa-circle-notch" v-if="loading"></i>
      </button>
    </v-form>
  </div>
</template>

<script>
import AccountService from "../services/AccountService";

export default {
  name: "Registro",
  data() {
    return {
      cuenta: {
        nombres: "",
        dni: "",
        fecha_nacimiento: "",
        sexo: true,
        edad: 0,
        distrito_colonia: "",
        email: "",
        contrasena: "",
      },
      loading: false,
    };
  },
  methods: {
    Registrar() {
      if (this.isFormValid()) {
        console.log(this.cuenta);
        AccountService.Registrar(this.cuenta)
          .then((response) => {
            this.$router.replace({
              name: "Login",
              query: { email: response.data.email },
            });
            console.log(response);
          })
          .catch((e) => {
            alert("Ocurrio un error.");
            console.log(e);
          });
      } else {
        alert("Debe completar todos los campos");
      }
    },
    isFormValid() {
      return (
        this.cuenta.nombres != "" &&
        this.cuenta.dni != "" &&
        this.cuenta.fecha_nacimiento != "" &&
        this.cuenta.edad != "" &&
        this.cuenta.distrito_colonia != "" &&
        this.cuenta.email != "" &&
        this.cuenta.contrasena != ""
      );
    },
  },
};
</script>

<style>
.texto-reg {
  font-size: 14px;
  color: rgb(109, 109, 109);
  text-align: justify;
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
}
.btn-login:hover {
  transition: 0.3s ease-in-out all;
  background: #5857c4;
}
</style>