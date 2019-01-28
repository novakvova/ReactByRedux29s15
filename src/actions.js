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
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(res => res.json())
        .then(data => dispatch(setGames(data)));
    }
}