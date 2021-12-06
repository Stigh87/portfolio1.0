//model
const model = {
    //app - tilstand
    app: {
        currentPage: '',
        // 'frontPage', 'overview', 'games', 'apps', 'art', 'about', 
        currentUser: '',
        // 'Stigh', 'guest', 'userName'
    },

    //inputs for hvert view
    inputs: {
        search: '',

        login: {
            userName: '',
            password: '',
        },
    },


    //Generelle data
    data: {
        users: [
            {id: 1, userName: 'Stigh', password: '123', access: 1, score: [],},
            {id: 2, userName: 'Guest', password: '', access: 2, score: [],},
        ],

        games: [
            {   id: 0,
                view: 'trePåRadView()',
                game: 'Tre på rad',
                img: 'trepårad.jpg',
                url: 'https://stigh87.github.io/trep-rad/trePåRad.html',
                },  
            {   id: 1,
                game: 'Fire på rad',
                img: 'firepårad.jpg',
                url: 'https://stigh87.github.io/FireP-Rad/',
                },  
            {   id: 2,
                game: 'TallPuzzle',
                img: 'tallpuzzle.jpg',
                url: 'https://stigh87.github.io/tallpuzzle/tallpuzzle.html',
                }, 
            {   id: 3,
                game: 'Minesveiper',
                img: 'minesweeper.jpg',
                url: 'https://stigh87.github.io/MinesveiperFinal/',
                }, 
            {   id: 4,
                game: 'Nettbutikk',
                img: 'halvpakka.png',
                url: 'https://stigh87.github.io/Halvpakka/'
                }, 
            
        ],
    },
};