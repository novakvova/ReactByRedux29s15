import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GamesList extends Component {
    state = {  }
    
    render() { 
        console.log('--GamesList props--', this.props);
        const { games } = this.props;
        const emptyMessage = (
            <p>Список пустий</p>
        );
        const gamesList = (
            <p>Список ігор</p>
        );
        return ( 
            <div>
                {games.length===0 ? emptyMessage : gamesList}
            </div>
         );
    }
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
};
 
export default GamesList;