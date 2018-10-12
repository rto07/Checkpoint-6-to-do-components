
import React, { Component } from 'react';

class ToDo extends Component {
	render(){
		return (
			<li>
				<input type = "checkbox" checked = {this.props.completed} onChange = { this.props.toggleComplete } />
				<span> {this.props.description} </span>

				< input type = "button" onClick = { this.props.deleteTodo} value = "Delete"/>

			</li>
			);
	}
}

export default ToDo;