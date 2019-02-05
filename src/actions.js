import axios from "axios";

export const INC_COUNTER='INCREMENT';
export const DEC_COUNTER='DECREMENT';

export const SET_GAMES='SET_GAMES';
export const ADD_GAME="ADD_GAME";
export const GAME_FETCHED="GAME_FETCHED";
export const GAME_UPDATED="GAME_UPDATED";
export const GAME_DELETED="GAME_DELETED";


export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    };
}
export function addGame(game) {
    return{
        type:ADD_GAME,
        game
    }
}

export function saveGame(data){

    return dispatch => {
        return axios.post(`http://localhost:64729/api/Game`, data)
          .then(resp => {
              //throw new Error('sss');
              console.log("---Data insert by Redux---", resp.data);
            dispatch(addGame(resp.data))
          });
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

export function gameFetched(game) {
    return {
        type: GAME_FETCHED,
        game 
    }
}
export function fetchGame(id) {
    return dispatch => {
        fetch(`http://localhost:64729/api/game/${id}`)
        .then(res => res.json())
        .then(data => dispatch(gameFetched(data)))
        .catch(err => {
            console.log("-----Bad request----", err);
        });
    }
}