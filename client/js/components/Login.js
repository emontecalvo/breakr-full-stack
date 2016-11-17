import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/actions';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

class Login extends Component {
	constructor (props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	// componentDidMount () {
	// 	this.checkUser(this.props.user);
	// }

	// componentWillReceiveProps (nextProps) { // react router lifecycle
	// 	this.checkUser(nextProps.user);
	// }

	// checkUser (user) {
	// 	if (user !== null) {
	// 		this.props.router.replace('/timer');
	// 	}
	// }

	handleFormSubmit (e) {
		e.preventDefault();

		const user = e.target.username.value;
		const pass = e.target.password.value;

		this.props.logIn(user, pass).then(() => {
			this.props.router.replace('/timer');
		});
		
	}

	render () {
		// const { fields: { username, password} } = this.props;

		return (
			<div className='login'>
				<h2>Welcome to Breakr</h2>
				<form onSubmit={this.handleFormSubmit}>
					
					<div className='form-group'>
						<label>Username</label>
						<input name='username' type='text' className='form-control'   />  
						 
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input name='password' type='password' className='form-control'   />
						 
					</div>
					<button type='submit' className='btn btn-primary'>Login</button>
					<Link to='/signup' className='btn btn-primary'>Register</Link>
				</form>
				
			</div>

		)
	}
}

const validate = (values) => {
	const errors = {};

	if (!values.username) {
		errors.username = 'Enter a username';
	}

	if (!values.password) {
		errors.password = 'Enter a password';
	}

	return errors;
}

const validateObject = {
	form: 'Login',
	fields: ['username', 'password'],
	validate
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}


export default connect(mapStateToProps, { logIn })(Login);