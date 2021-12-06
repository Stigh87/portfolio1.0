// Controller

//overview:
function game(game, index) {
   setTimeout(function() { updateView(index)},1000) ;
}
function updateView(index) {
    window.location.href = model.data.games[index].url;
}

function createUser() {
    let verifyUser = model.data.users.find( ({ userName }) => userName === newUsername.value);
    if (verifyUser === undefined) {   
        if ((newPassword.value === newPasswordChk.value)) {
            let newId = 0;
            let newPasswordFinal = newPassword.value;
            for (let i = 0; i < model.data.users.length; i++ ) {
                if (i > newId) newId++;
            }
            let object = {
                id: newId+1, 
                userName: newUsername.value, 
                password: newPasswordFinal, 
                access: 2, 
                score: [],
            };
            model.data.users.push(object);
            frontPage();
        }
    }
}
function logIn() {
    let verifyUser = model.data.users.find( ({ userName }) => userName === username.value);
    console.log(username.value);
    console.log(password.value);
        if (verifyUser.password === password.value) {
            console.log(verifyUser);
            model.me = verifyUser;
            model.app.currentUser = username.value;
            overview();
        } else alert("Feil brukernavn eller passord");
}
function guest() {
    model.app.currentUser = "Guest";
    overview();
}