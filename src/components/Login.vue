<template>
  <div class="c-login">
    <img
      class="logo"
      src="../assets/smart_doctor_logo.png"
      alt=""
      width="150px"
    />
    <h1 class="titulo">Iniciar Sesión</h1>
    <v-form>
      <v-text-field
        v-model="login.email"
        label="Correo electrónico"
      ></v-text-field>
      <v-text-field
        v-model="login.contrasena"
        label="Contraseña"
        type="password"
      ></v-text-field>
      <br /><br />
      <button
        type="button"
        v-on:click="Login"
        class="btn-login"
        :disabled="loading"
      >
        <div>Iniciar Sesión</div>
        <i class="fas fa-chevron-right" v-if="!loading"></i>
        <i class="fas fa-circle-notch" v-if="loading"></i>
      </button>
    </v-form>
    <div class="mt-5">¿Aún no estas registrado? <router-link to="/registro">Registrarse</router-link></div>
  </div>
</template>

<script>
import AccountService from "../services/AccountService";
import TokenService from "../services/TokenService";

export default {
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        contrasena: "",
      },
      loading: false,
    };
  },
  methods: {
    Login() {
      if (this.login.email != "" && this.login.contrasena != "") {
        this.loading = true;
        AccountService.Login(this.login)
          .then((response) => {
            this.loading = false;
            const { paciente, token } = response.data;
            TokenService.setToken(token);
            TokenService.setUser(paciente);
            this.$router.replace("/inicio");
          })
          .catch((e) => {
            this.loading = false;
            alert("Credenciales inválidas");
            console.log(e);
          });
      } else {
        alert("Complete todos los campos");
      }
    },
  },
  mounted(){
    this.login.email = this.$route.query.email;
  }
};
</script>

<style>
.titulo {
  font-weight: 300 !important;
  letter-spacing: 0.5px !important;
  margin-top: 50px;
  margin-bottom: 50px;
}
.c-login {
  margin: 60px 40px;
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
.fa-circle-notch {
  color: white;
  animation: spinner linear infinite 0.8s;
}


@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>