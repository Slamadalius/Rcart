"use strict"
//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

//REDUX
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);


import BooksList from './componenets/pages/booksList';
import Menu from './componenets/menu'
import Footer from './componenets/footer'

render(
	<Provider store={store}>
		<div>
			<Menu /> 
			<BooksList />
			<Footer />	
		</div>
	</Provider>, document.getElementById('app')
);

//=====================
// store.dispatch(postBooks(
	
// ))

// store.dispatch(deleteBooks({id: 1}))

// store.dispatch(updateBooks(
// 	{
// 		id: 2,
// 		title: 'This is Updated book'
// 	}	
// ))


// //=======================
// store.dispatch(addToCart([{id:1}]))