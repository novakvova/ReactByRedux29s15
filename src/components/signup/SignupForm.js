import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class SignupForm extends Component {
    state = { 
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
            //password: "Вкажи пароль"
        },
        done: false,
        isLoading: false
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

    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }

    onSubmitForm=(e) => {
        e.preventDefault();

        const {email, password, сonfirmPassword} = this.state;
        //validation
        let errors = {};
        if (email === '') errors.email = "Cant't be empty!"
        if (password === '') errors.password = "Cant't be empty!"
        if (сonfirmPassword === '') errors.confirmPassword = "Cant't be empty!"

        const isValid=Object.keys(errors).length===0
        if (isValid) {
            
            this.props.register(
                {
                    Email: email,
                    Password: password,
                    ConfirmPassword: сonfirmPassword
                }).then(
                    ()=> this.setState({done: true}),
                    (err)=> this.setState({ errors: err.response.data })
                );
            //this.setState({done: true});
            // const {identifier, password} = this.state;
            // this.setState({isLoading: true});
            // this.props.login({identifier, password})
            // .then(
            //     () => this.setState({done: true}),
            //     (err) => this.setState( {errors: err.response.data, isLoading:false})
            // );
            //this.props.saveGame({id, title, image, description})
            //    .catch((err) => { 
            //        this.setState({ errors: err.response.data });
           //     });
        }
        else
        {
            this.setState({ errors });
        }
    }

    render() { 

        const { errors, isLoading } = this.state;
        const form = (
            <form onSubmit={this.onSubmitForm}>
                <h1>Register</h1>
                {
                    !!errors.invalid ?
                    <div className="alert alert-danger">
                        <strong>Danger!</strong> {errors.invalid}.
                    </div> :''}
                <div className={classnames('form-group', { 'has-error': !!errors.email })}>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                    {!!errors.email ? <span className="help-block">{errors.email}</span> : ''}
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.password })}>
                    <label htmlFor="password">Пароль</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.confirmPassword })}>
                    <label htmlFor="сonfirmPassword">Підтвердженян пароль</label>
                    <input type="password"
                        className="form-control"
                        id="сonfirmPassword"
                        name="сonfirmPassword"
                        value={this.state.сonfirmPassword}
                        onChange={this.handleChange} />
                    {!!errors.confirmPassword ? <span className="help-block">{errors.confirmPassword}</span> : ''}
                </div>

                <div className="form-group">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-warning" disabled={isLoading}>Реєстрація<span className="glyphicon glyphicon-send"></span></button>
                    </div>
                </div>

            </form>
        );
        return ( 
            this.state.done ?
                    <Redirect to="/login" /> :
                    form
            //form
         );
    }
}

SignupForm.propTypes = {
    register: PropTypes.func.isRequired
}
 
export default SignupForm;