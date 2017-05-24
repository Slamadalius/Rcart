"use strict"

export function booksReducers (state={
	books:[{
		id:1,
		title:'Book',
		description: 'First book',
		price: 32.3		
	},
	{
		id:2,
		title:'Book number 2',
		description: 'Second book',
		price: 25.3	
	}]
}, action) {
	switch(action.type) {
		case "GET_BOOK":
		// let books = state.concat(action.payload);
		return {...state, books:[...state.books]};
		break;

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

		case "UPDATE_BOOK":
		const currentBookToUpdate = [...state.books];

		const indexToUpdate = currentBookToUpdate.findIndex(
			function(book){
				return book.id === action.payload.id;
			}
		)

		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate],
			title: action.payload.title
		}
		console.log("what is it the new book", newBookToUpdate);
		return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
		break;
	}
	return state
}