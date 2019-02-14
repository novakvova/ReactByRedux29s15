import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { addFlashMessage } from "../../actions";
import PropTypes from 'prop-types';

class SignupPage extends Component {
    state = {  }
    render() { 
        const { register, addFlashMessage }=this.props;
        console.log('--ssss--',this.props);
        return ( 
            
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm register={register} addFlashMessage={addFlashMessage}/>
                </div>
            </div>
         );
    }
}

SignupForm.propTypes = {
    register: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}
 
export default connect(null, {register, addFlashMessage})(SignupPage);