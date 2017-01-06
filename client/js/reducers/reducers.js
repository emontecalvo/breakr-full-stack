import _ from 'lodash';

import { 
	TIMER_START,
	SET_USER,
	TIMER_COMPLETE,
	ADD_WORK_STATS,
	ADD_BREAK_STATS

} from '../actions/actions';

const initialState = {
	timer: {
		total: null, 
		timeStarted: null, 
		timerType: null,
		complete: false
	},
	currentWorkTime: [0],
	currentBreakTime: [0],
	user: null
};

export default function (state=initialState, action={}) {
	const stateClone = _.cloneDeep(state);
	switch (action.type) {
		case TIMER_START:
		  return _.merge({}, state, {
		    timer: {
		      total: action.seconds,
		      timeStarted: action.timeStarted,
		      timerType: action.timerType,
		      complete: false
		    },
		  });

		case SET_USER:
		  return _.merge({}, state, {
		    user: action.user
		  })

		case TIMER_COMPLETE:
		  return _.merge({}, state, {
		  	timer: {
		  		complete: true
		  	}
		  })

		case ADD_WORK_STATS:
			stateClone.currentWorkTime.push(action.stat);
			console.log(stateClone.currentWorkTime)
			return _.merge({}, state, {
				currentWorkTime: stateClone.currentWorkTime
			})

		case ADD_BREAK_STATS:
			stateClone.currentBreakTime.push(action.stat);
			console.log(stateClone.currentBreakTime)
			return _.merge({}, state, {
				currentBreakTime: stateClone.currentBreakTime
			})

		default: 
			return state;
	}
};


