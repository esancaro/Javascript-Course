class Login {
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.login();
    }

    login = function() {
        console.log(this.username, this. password);
        if(this.username == "admin" && this.password == "passwd"){
            window.alert("User Logged In");
        } else {
            window.alert("User or passwd incorrect")
        }
    }
}

// let login = new Login("admin", "passwd");
// let badLogin = new Login("esteban", "n/a");

document.getElementById("loginSuccess").addEventListener("click", () => new Login("admin", "passwd"));
document.getElementById("loginFailure").addEventListener("click", () =>  new Login("esteban", "n/a"));