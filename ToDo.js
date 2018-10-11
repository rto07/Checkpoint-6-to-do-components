import React, { Component } from 'react';

class ToDo extends Component {
	render(){
		return (
			<li>
				<input type = "checkbox" checked = {this.props.completed} onChange = { this.props.toggleComplete } />
				<span> {this.props.description} </span>

			</li>
			);
	}
}

//to-do-Events checkpoint work

export default ToDo;