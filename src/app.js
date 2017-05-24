"use strict"
import {createStore} from 'redux';

//import reducers from './reducers/index';

const reducer = function (state={books:[]}, action) {
	switch(action.type) {
		case "POST_BOOK":
		// let books = state.concat(action.payload);
		return {books:[...state.books, ...action.payload]};
		break;
		case "DELETE_BOOK":
		// copy of the current array of books
		const currentBookToDelete = [...state.books];

		const indexToDelete = currentBookToDelete.findIndex(
			function(book){
				return book.id === action.payload.id;
			}
		)

		// slice to remove the book at the specified index
		return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
		break;
	}
	return state
}

const store = createStore(reducer);

store.subscribe(function(){
	console.log('current state is: ', store.getState());
})

store.dispatch({
	type: "POST_BOOK",
	payload: [{
		id:1,
		title:'Book',
		description: 'First book',
		price: 33.3		
	},
	{
		id:2,
		title:'Book number 2',
		description: 'Second book',
		price: 45.3	
	}]
})

store.dispatch({
	type: "DELETE_BOOK",
	payload: {id:1}
})

