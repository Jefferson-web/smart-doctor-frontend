import http from '../http-common';

class AccountService {

    Login(payload){
        return http.post('/Account/Login', payload);
    }

    Registrar(cuenta){
        return http.post('/AfiliarPaciente/AdicionarPaciente', cuenta);
    }

}

export default new AccountService();