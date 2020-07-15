class GamesAdapter{

    constructor() {
        this.baseUrl = 'https://wgn-backend.herokuapp.com/games'
    }

    getGames() {
        return fetch(this.baseUrl).then(res => res.json())
    }

    createGame(titlevar, developervar, covervar) {
    const game = {
        title: titlevar,
        developer: developervar,
        cover: covervar
    };

    return fetch(this.baseUrl, {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json "
        },
        body:JSON.stringify(game)
    })
    .then(res => (res.json()))
    .catch(error => console.log("Error:" + error))
   }
}
