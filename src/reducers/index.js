"use strict"
import {combineRedusers} from 'redux';

import {booksReducers} from './booksReducers';

export default combineRedusers({
	books: booksReducers
})