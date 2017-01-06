import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Chart from '../../client/js/components/Chart';
const should = require('chai').should()

describe('Chart component', () => {
	let renderer, result, chart;

	beforeEach(() => {
		renderer = TestUtils.createRenderer()
		renderer.render(<Chart />)
		result = renderer.getRenderOutput()

		chart = result.props.children
		console.log(result.props.children.props)
	})

	it('should console log', () => {
		chart.props.height.should.equal(120);
		chart.props.width.should.equal(180);

	}); 
});

/** IN PROGRESS */

