"use strict"

export function booksReducer (state={books:[]}, action) {
	switch(action.type) {
		case "POST_BOOK":
		let books = state.concat(action.payload);
		return books;
		break;
	}
}