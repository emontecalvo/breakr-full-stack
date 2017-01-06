import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/actions';
import { Link } from 'react-router';

class Login extends Component {
	constructor (props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount () {
		this.checkUser(this.props.user);
	}

	componentWillReceiveProps (nextProps) { // react router lifecycle
		this.checkUser(nextProps.user);
	}

	checkUser (user) {
		if (user !== null) {
			this.props.router.replace('/timer');
		} 
	}

	handleFormSubmit (e) {
		e.preventDefault();

		const user = e.target.username.value;
		const pass = e.target.password.value;

		this.props.logIn(user, pass);

	}

	render () {		
		return (
			<div className='login'>
				<div className='header'>
				<h2 className='welcome'>Welcome to </h2><h1 className='breakrLogin'>Breakr</h1>
				</div>
				<form onSubmit={this.handleFormSubmit}>
					
					<div className='form-group'>
						<label>Username</label>
						<input name='username' type='text' className='form-control' required/>  
						 
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input style={{marginLeft: '9px'}} name='password' type='password' className='form-control' required/>
						 
					</div>
					<div className='btn-group'>
						<button type='submit' className='btn btn-primary login-btn hvr-pop'>Login</button>
						<Link to='/signup'>
							<button className='btn btn-primary login-btn hvr-pop'>Register</button>
						</Link>
						<Link to='/timer'>
							<button className='btn btn-primary login-btn hvr-pop'>Guest</button>
						</Link>
					</div>
					
				</form>

				
			</div>

		)
	}
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
};


export default connect(mapStateToProps, { logIn })(Login);