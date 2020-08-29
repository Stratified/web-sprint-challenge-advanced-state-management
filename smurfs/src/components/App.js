import React, { Component, useEffect } from 'react';
import './App.css';
import SmurfAddForm from './SmurfAddForm';
import { fetchSmurfs } from '../actions/actions';
import { connect } from 'react-redux';

const App = (props) => {
	useEffect(() => {
		props.fetchSmurfs();
	}, []);
	return (
		<div className='App'>
			<SmurfAddForm />
			{props.data.map((smurfs) => {
				return (
					<div key={smurfs.id}>
						<h1>Name: {smurfs.name}</h1>
						<p>Age: {smurfs.age}</p>
						<p>Height: {smurfs.height}</p>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		data: state,
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
