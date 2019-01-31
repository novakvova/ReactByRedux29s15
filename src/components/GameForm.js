import React from 'react';
import classnames from 'classnames';
import axios from "axios";

class GameForm extends React.Component {
    state = {
        title: '',
        image: '',
        description: '',
        errors: {
            //title: 'Обовязкове поле'
        },
        loading: false
    }
    setStateByErrors=(name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
              {
                [name]: value,
                errors
              }
            )
          }
          else {
            this.setState(
              { [name]: value })
          }
    } 

    handleChange=(e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }

    uploadImageBase64 = (evt) => {
        const {name} = evt.target;
        if (evt.target.files && evt.target.files[0]) {
            if (evt.target.files[0].type.match(/^image\//)) {
                console.log("---Upload file---", evt.target);
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.setStateByErrors(name, e.target.result);
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

        //validation
        let errors = {};
        if (this.state.title === '') errors.title = "Cant't be empty!"
        if (this.state.image === '') errors.image = "Cant't be empty!"
        if (this.state.description === '') errors.description = "Cant't be empty!"
        
        const isValid=Object.keys(errors).length===0
        if (isValid) {
            let model = {
                title: this.state.title,
                image: this.state.image,
                description: this.state.description
            };
            //axios.get()
            //axios.put()
            axios.post('http://localhost:64729/api/Game', model)
                .then(res => { console.log('--is good-', res); })
                .catch(err => {
                    //console.log('--FFSS--', err.response.data);
                    this.setState({ errors: err.response.data });
                });
        }
        else
        {
            this.setState({ errors });
        }

    }

    render() { 
        console.log('---State in GameForm---', this.state);
        const { errors } = this.state;
        console.log("!errors.title", !errors.title);
        console.log("!!errors.title", !!errors.title);
        console.log("errors.title", errors.title);
        return (
            <form onSubmit={this.onSubmitForm}>
                <h1>Додати нову гру</h1>

                <div className={classnames('form-group', { 'has-error': !!errors.title })}>
                    <label htmlFor="title">Назва</label>
                    <input type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Назва" />
                    {!!errors.title ? <span className="help-block">{errors.title}</span> : ''}
                </div>

                
                <div className={classnames('form-group', { 'has-error': !!errors.description })} >
                    <label htmlFor="description">Опис</label>
                    <textarea type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Опис" />
                    {!!errors.description ? <span className="help-block">{errors.description}</span> : ''}
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.image })}>
                    <label htmlFor="image">Фото</label>
                    <input type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={this.uploadImageBase64}
                        placeholder="Фото" />
                    {!!errors.image ? <span className="help-block">{errors.image}</span> : ''}
                </div>

                    {
                        this.state.image !== '' &&
                        <div className="form-group">
                            <span className="thumbnail col-md-2">
                                <img src={this.state.image} alt="Image" />
                            </span>
                        </div>
                    }

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