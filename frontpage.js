//frontPage
function frontPage() {
    let appDiv = document.getElementById('app');
    let html = '';
    model.app.currentPage = 'frontPage';
    html += `
        <div id="" class="animBackground">
            <div id="" class="container">
        
                <div id="topHeader">Stigh's Portofolio</div> 

                    <div id="logInBox" class="">
                        <input id="username" type="text" value=""></input>
                        <input id="password" type="text" value=""></input>
                        <button id="" class="logInBtn" 
                            onfocus="this.value=''" value="Username"
                            onclick="logIn()">LOG IN</button>
                        <button id="" class="logInBtn"
                            onfocus="this.value=''" value="Password" 
                            onclick="newUser()">NEW USER</button>
                        <button id="" class="logInBtn" onclick="guest()">GUEST</button>
                    </div>

            </div>
        </div>
    `
    appDiv.innerHTML = html;
}

function newUser() {
    let appDiv = document.getElementById('app');
    let html = '';
    model.app.currentPage = 'frontPage';
    html += `
        <div id="" class="animBackground">
            <div id="" class="container">
        
                <div id="topHeader">Stigh's Portofolio</div> 

                    <div id="logInBox" class="">
                        <input id="newUsername" type="text" value=""></input>
                        <input id="newPassword" type="text" value=""></input>
                        <input id="newPasswordChk" type="text" value=""></input>
                        <button id="" class="logInBtn" onclick="createUser()">CREATE</button>
                        
                    </div>

            </div>
        </div>
    `
    appDiv.innerHTML = html;
}