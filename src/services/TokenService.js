class TokenService {

    setToken(token){
        localStorage.setItem("token", token);
    }

    getToken(){
        return localStorage.getItem("token");
    }

    setUser(user){
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem("user"));
    }

    getUserId(){
        const user = this.getUser();
        return user.pacienteId;
    }

    get isAuthenticate(){
        return !!localStorage.getItem("token");
    }

    logout(){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    ActualizarUsuarioSesion(paciente){
        var antiguoPaciente = this.getUser();
        antiguoPaciente.nombres = paciente.nombres;
        antiguoPaciente.DNI = paciente.dni;
        antiguoPaciente.sexo = paciente.sexo;
        antiguoPaciente.edad = paciente.edad;
        antiguoPaciente.distrito_colonia = paciente.distrito_colonia;
        antiguoPaciente.fecha_nacimiento = paciente.fecha_nacimiento; 
        this.setUser(antiguoPaciente);
    }

}

export default new TokenService();