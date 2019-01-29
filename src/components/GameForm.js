import React from 'react';

class GameForm extends React.Component {
    state = {
        title: '',
        image: '',
        description: '',
        loading: false
    }
    handleChange=(e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            });
    }

    render() { 
        console.log('---State in GameForm---', this.state);
        return (
            <form>
                <h1>Додати нову гру</h1>
                <div className="form-group">
                    <label htmlFor="title">Назва</label>
                    <input type="email" 
                        className="form-control" 
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange} 
                        placeholder="Назва" />
                </div>
                {/* <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div> */}
            </form>
         );
    }
}
 
export default GameForm;