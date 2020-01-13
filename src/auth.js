class Auth {
    constructor(){
        this.authentication = false;
        this.token = '';
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