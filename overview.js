//overview
overview()
function overview() {
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
        <div id="" class="header">WELCOME ${model.app.currentUser}</div> 
       

    </div>    
    <div id="" class="gamesContainer">
        `
        for (let i = 0; i < model.data.games.length; i++) {
            let pin = Math.floor(Math.random()* 4 )
        html += `
                <div id="gameWrapper">
                <div id="game${i}" class="games${pin}"
                      onclick="game(this, ${i})"
                      data-value="">${model.data.games[i].game}
                    <div id="img${i}" class="imgContainer"><img src="${model.data.games[i].img}"/></div>
                </div>
                </div>`
        }
        `
    </div>    
    </div>

`

appDiv.innerHTML = html;
}