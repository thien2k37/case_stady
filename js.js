class Ac {
    username;
    password;

    constructor(user, pass) {
        this.username = user;
        this.password = pass;
    }
}
let arr = [];
arr = JSON.parse(localStorage.getItem('user'));