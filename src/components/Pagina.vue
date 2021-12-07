<template>
    <div>
        <h1 class="titulo" v-on:click="MostrarAlerta">{{ titulo }}</h1>
        <p class="parrafo">{{ parrafo }}</p>
        <form action="" class="formulario">
            <h4>{{ titulo_formulario }}</h4>
             <input type="text" v-model="usuario" v-on:keyup="CambiandoUsuario" class="form-control" placeholder="Usuario">
            <br>
            <input type="text" v-model="contrasena" v-on:keyup="CambiandoUsuario"  class="form-control" placeholder="Contraseña">
            <button type="button" class="boton" v-on:click="Login">Login</button>
        </form>
        <ul>
            <li v-for="(especialidad, index) in especialidades" :key="index">{{ especialidad.titulo }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagina',
    data(){ // Variables de la aplicacion
        return {
            titulo: "Smart Doctor 2",
            parrafo: "Inicia sesion para una teleconsulta",
            titulo_formulario: "Login",
            usuario: "",
            contrasena: "",
            paises: [],
            especialidades: [
                { "titulo": "Medicina General"},
                { "titulo": "Pediatria" },
                { "titulo": "Neumologia" },
                { "titulo": "Psicologia" }
            ]
        }
    },
    methods: {
        CambiandoUsuario(){
        },
        MostrarAlerta(){
            alert("Bienvenido a Smart Doctor"); // Motrar alerta simple
        },
        Login(){
            alert("Usuario Logeado para: " + this.usuario + " " +  this.contrasena);
        }
    }
}

</script>

<style>
    .titulo{
        color: blue;
        font-size: 30px;
        margin: 20px;
    }
    .parrafo{
        color: red;
        text-align: center;
    }

    .formulario{
        margin: 20px;
    }
    .boton{
        color: white;
        background: blue;
        padding: 15px;
        width: 100%;
        margin-top: 20px;
        border-radius: 20px;
    }
    
</style>