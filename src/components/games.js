class Games {
    constructor() {
        this.games = []
        this.adapter = new GamesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadGames()
    }
    initBindingsAndEventListeners() {
        this.newGameForm = document.getElementById('new-game-form')
        this.newGameTitle = document.getElementById('new-game-title')
        this.newGameDeveloper = document.getElementById('new-game-developer')
        this.newGameCover = document.getElementById('new-game-cover')
        this.newGameForm.addEventListener('submit', this.createGame.bind(this))
        // document.getElementById("sort").addEventListener ("click", this.sortAlpha.bind(this));

    }

    createGame(g) {
        g.preventDefault();
        const titleValue = this.newGameTitle.value;
        const developerValue = this.newGameDeveloper.value;
        const coverValue = this.newGameCover.value;

        this.adapter.createGame(titleValue, developerValue, coverValue)
            .then(game => {
            const newGame = new Game(game)
            this.games.push(newGame)
            this.newGameTitle.value = ' '
            this.newGameDeveloper.value = ' '
            this.newGameCover.value = ' '
            newGame.renderGameBlock()
        })
    }
    fetchAndLoadGames() {
        this.adapter
        .getGames()
        .then(games => {
        games.forEach(game => this.games.push(new Game(game)))
        })
        .then(() => {
        this.renderGames()
        })
    }

    renderGames() {
        this.games.map(game => game.renderGameBlock())
    }

    // sortAlpha() {
    //     console.log('test')
        
    //     this.games.sort(function(gameA, gameB){
    //     if (gameA.title < gameB.title) {
    //         return -1;
   
    //     }
    //     if (gameA.title > gameB.title){
    //         return 1;
    //     }
   
    //     return 0;
    //    });
    //    console.log(this.games)
    //    const gamesContainer = document.getElementById('games-content')
    //    gamesContainer.innerHTML = ""
    //    this.renderGames()
       

    // }


}




