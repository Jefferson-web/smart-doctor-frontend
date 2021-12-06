 <template>
  <div>
    <div class="header">
      <router-link class="link-regreso" :to="'/inicio'"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <span>Perfil</span>
    </div>
    <div class="m-4">
      <div class="inicial-nombre">
        {{ paciente.nombres.substring(0, 1) }}
      </div>

      <form action="">
        <div class="mb-3">
          <label for="txtNombres" class="mb-1">Nombres</label>
          <input
            type="text"
            class="form-control"
            v-model="paciente.nombres"
            id="txtNombres"
          />
        </div>
        <div class="mb-3">
          <label for="nroDNI" class="mb-1">N° de documento de identidad</label>
          <input
            type="text"
            class="form-control"
            v-model="paciente.dni"
            id="nroDNI"
          />
        </div>
        <div class="row">
          <div class="col-8 mb-3">
            <label for="fechaNacimiento" class="mb-1"
              >Fecha de nacimiento</label
            >
            <input
              type="datetime"
              class="form-control"
              id="fechaNacimiento"
              v-model="paciente.fecha_nacimiento"
            />
          </div>
          <div class="col-4 mb-3">
            <label for="txtEdad" class="mb-1">Edad</label>
            <input
              type="text"
              class="form-control"
              id="txtEdad"
              v-model="paciente.edad"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="txtSexo" class="mb-1">Sexo</label>
          <div class="d-flex justify-content-around">
            <div>
              <input
                type="radio"
                id="one"
                :value="true"
                v-model="paciente.sexo"
              />
              <label for="one" class="ml-3">Hombre</label>
            </div>
            <div>
              <input
                type="radio"
                id="two"
                :value="false"
                v-model="paciente.sexo"
              />
              <label for="two" class="ml-3">Mujer</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="txtUbicacion" class="mb-1">Ubicación</label>
          <input
            type="text"
            class="form-control"
            id="txtUbicacion"
            v-model="paciente.distrito_colonia"
          />
        </div>
      </form>
    </div>
    <button v-on:click="Editar" class="btn-editar">EDITAR</button>
  </div>
</template>
 
 <script>
import MedicosService from "../services/MedicosService";

import TokenService from "../services/TokenService";

export default {
  name: "EditarDatos",
  data() {
    return {
      paciente: {
          nombres: "",
          dni: "",
          fecha_nacimiento: "",
          edad: 0,
          sexo: true,
          distrito_colonia: ""
      },
    };
  },
  methods: {
    Editar() {
      MedicosService.EditarPaciente(this.paciente)
        .then((response) => {
          TokenService.ActualizarUsuarioSesion(response.data);
          this.$router.replace("/inicio");
        })
        .catch((e) => console.log(e));
    },
    ObtenerInfoPaciente(pacienteId) {
      MedicosService.ObtenerInfoPaciente(pacienteId)
        .then((response) => {
          this.paciente = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    const pacienteId = TokenService.getUserId();
    this.ObtenerInfoPaciente(pacienteId);
  },
};
</script>
 
 <style>
.inicial-nombre {
  margin: 0px auto;
  width: 80px;
  height: 80px;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background: darkorange;
  border-radius: 50%;
  color: white;
  border: 3px solid white;
}
.edit-header {
  display: inline-block;
  justify-content: space-between;
  align-items: center;
}
.btn-editar {
  position: absolute;
  top: 18px;
  right: 20px;
  color: white;
  font-weight: 400;
}
</style>