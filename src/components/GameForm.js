import React from 'react';
import classnames from 'classnames';
import axios from "axios";

class GameForm extends React.Component {
    state = {
        title: '',
        image: '',
        description: '',
        errors: {
            title: 'Обовязкове поле'
        },
        loading: false
    }
    handleChange=(e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            });
    }
    uploadImageBase64 = (evt) => {

        if (evt.target.files && evt.target.files[0]) {
            if (evt.target.files[0].type.match(/^image\//)) {
                console.log("---Upload file---", evt.target.files[0]);
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.setState({image: e.target.result});
                    //console.log('---e.target.result---',e.target.result);
                }
                reader.readAsDataURL(evt.target.files[0]);
            }
            else {
                alert("Invalid image type");
            }
        }
        else {
            alert("Upload file please");
        }        
    }
    onSubmitForm=(e) => {
        e.preventDefault();

        let data = {
            title: this.state.title,
            image: this.state.image,
            description: this.state.description
        };
        //axios.get()
        //axios.put()
        axios.post('http://localhost:64729/api/Game',data)
        .then(res => { console.log('--is good-', res); })
        .catch(err => { console.log('--FFSS--', err.response.data); });
        // fetch('http://localhost:64729/api/Game',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then(res => {
        //         console.log('---res---',res);
        //         return res.json();
        //     })
        //     .then(resData => console.log('----resData----', resData))
        //     .catch(err => console.log('--problem--', err));
    }

    render() { 
        console.log('---State in GameForm---', this.state);
        // console.log(!!this.state.errors.title);
        return (
            <form onSubmit={this.onSubmitForm}>
                <h1>Додати нову гру</h1>

                <div className={classnames('form-group',{'has-error': !!this.state.errors.title})}>
                    <label htmlFor="title">Назва</label>
                    <input type="text" 
                        className="form-control" 
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange} 
                        placeholder="Назва" />
                        {!!this.state.errors.title ? <span className="help-block">Please supply a description of your project</span> : '' } 
                </div>

                <div className="form-group">
                    <label htmlFor="image">Фото</label>
                    <input type="file"
                        className="form-control" 
                        id="image"
                        name="image"
                        
                        onChange={this.uploadImageBase64} 
                        placeholder="Фото" />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Опис</label>
                    <textarea type="text" 
                        className="form-control" 
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} 
                        placeholder="Опис" />
                </div>

                <div className="form-group">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-warning">Додати <span className="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default GameForm;