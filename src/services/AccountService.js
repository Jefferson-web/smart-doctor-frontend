import http from '../http-common';

class AccountService {

    Login(payload){
        return http.post('/Account/Login', payload);
    }

}

export default new AccountService();