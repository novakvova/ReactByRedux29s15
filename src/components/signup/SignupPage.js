import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import PropTypes from 'prop-types';

class SignupPage extends Component {
    state = {  }
    render() { 
        const { register }=this.props;
        console.log('--ssss--',this.props);
        return ( 
            
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm register={register}/>
                </div>
            </div>
         );
    }
}

SignupForm.propTypes = {
    register: PropTypes.func.isRequired
}
 
export default connect(null, {register})(SignupPage);