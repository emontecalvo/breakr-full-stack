import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} style={{ fill: "#56b45d" }} />
				<SparklinesSpots />
			</Sparklines>
		</div>
	)
};