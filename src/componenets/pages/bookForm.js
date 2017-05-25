import React from 'react';
import {Well, Panel, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom'

import {postBooks} from '../../actions/booksActions';



class BookForm extends React.Component{
	handelSubmit() {
		const book = [{
			title: findDOMNode(this.refs.title).value,
			description: findDOMNode(this.refs.description).value,
			price: findDOMNode(this.refs.price).value
		}]
		this.props.postBooks(book)
	}
	render() {
		return (
			<Well>
				<Panel>
					<FormGroup controlId="title">
						<ControlLabel>Title</ControlLabel>
						<FormControl
							type="text"
							placeholder="Enter Title"
							ref="title" />
					</FormGroup>
					<FormGroup controlId="description">
						<ControlLabel>Description</ControlLabel>
						<FormControl
							type="text"
							placeholder="Tell about the book"
							ref="description" />
					</FormGroup>
					<FormGroup controlId="price">
						<ControlLabel>Price</ControlLabel>
						<FormControl
							type="text"
							placeholder="What is the price"
							ref="price" />
					</FormGroup>

					<Button onClick={this.handelSubmit.bind(this)} bsStyle="primary">Add Book</Button>
				</Panel>
			</Well>
		)
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({postBooks}, dispatch)
}
export default connect(null, mapDispatchToProps)(BookForm);