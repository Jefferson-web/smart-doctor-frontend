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

}

export default new TokenService();