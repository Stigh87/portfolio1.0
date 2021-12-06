//Gameview

function gameView() {
    let appDiv = document.getElementById('app');
    let html = '';
    
    html += `
        <div id="" class="animBackground">
            <div id="" class="containerOverview">
                <div id="nav" class="">
                    <input id="search" type="text" value="Search..."></input>
                    <button id="menu" class="" onclick="overview()"></button>
                    <button id="cog" class="" onclick="options()"></button>
                    <button id="logOut" class="logInBtn" onclick="frontPage()">Log out</button>
                </div>
                <div id="" class="header"></div> 
            </div>    
            <div id="" class="gameContainer">
           
            </div>    
        </div>
    
    `
    appDiv.innerHTML = html;
}