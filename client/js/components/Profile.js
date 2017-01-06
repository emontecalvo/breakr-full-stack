import React, { Component } from 'react';
import Chart from './Chart'
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Profile extends Component {
	render () {
		const { username } = this.props.user || {username: 'Guest'};

		return (
			<div className='profile'>
				<div className='profile-block'>
					<Link to='/timer' >
						<button className='btn btn-primary back-btn hvr-pop'>Back</button>
					</Link>
					<h3 className='profile-intro' style={{marginLeft: '65px'}} >Hello {username}</h3>
					<div className='habit-info'>
						<h4>Statistics</h4>
						<div style={{display: 'inline-block'}}>
							<p>Number of Works (minutes)</p>
				 			<Chart data={this.props.numberOfWorks} color="orange" units="minutes"/>
				 			<p>Number of Breaks (minutes)</p>
				 			<Chart data={this.props.numberOfBreaks} color="blue" units="minutes"/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		numberOfWorks: state.currentWorkTime,
		numberOfBreaks: state.currentBreakTime
	}
}

export default connect(mapStateToProps)(Profile);
