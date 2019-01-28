import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import GamesList from "./GamesList";
import { fetchGames  } from "../actions";

class GamesPage extends Component {
    state = {  }

    componentDidMount() {
        this.props.fetchGames();
    }

    render() { 
        console.log("--props GamesPage---", this.props);
        return ( 
        <div>
            <h1>Page Games</h1>
            <GamesList games={this.props.games}/>
        </div> 
        );
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }; 
}
 
export default connect(mapStateToProps, {fetchGames})(GamesPage);