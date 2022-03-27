class Ac {
    username;
    password;

    constructor(user, pass) {
        this.username = user;
        this.password = pass;
    }
}

let arr = JSON.parse(localStorage.getItem('user'));