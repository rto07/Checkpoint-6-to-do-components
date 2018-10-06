import React, { Component } from 'react';

class ToDo extends React.Component {
	render(){
		return (
			/*<li>{this.props.description }</li>*/
			<li>
				<input type = "checkbox" checked = {this.props.completed} onChange = { this.props.toggleComplete } />
				<span> {this.props.description} </span>

				< button onClick = { this.props.deleteTodo }> Delete </button>
			</li>
			);
	}
}

export default ToDo;