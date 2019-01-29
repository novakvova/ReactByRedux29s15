export const INC_COUNTER='INCREMENT';
export const DEC_COUNTER='DECREMENT';

export const SET_GAMES='SET_GAMES';

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    };
}

export function fetchGames() {
    return dispatch => {
        fetch('http://localhost:64729/api/game')
        .then(res => res.json())
        .then(data => dispatch(setGames(data)))
        .catch(err => {
            console.log("-----Bad request----", err);
        });
    }
}