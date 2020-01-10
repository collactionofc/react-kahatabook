// import { Redirect } from 'react-router-dom';

class Auth {
    constructor(){
        this.authentication = false;
    }

    login(cb){
        this.authentication = true;
        cb();
    }

    logout(){
        this.authentication = false;
        localStorage.removeItem('token');
    }

    checkauth(){
        return this.authentication;
    }
}

export default new Auth();