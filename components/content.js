import React from 'react';
import { Table } from './table';

export const Content = React.createClass({
	render () {
		return (
			<div className="content-wrapper">
				<div className="content">
					{(this.props.weather.list.length > 0) ? <Table weather={this.props.weather} /> : null}
				</div>
			</div>
		);
	}
});