import React from 'react';
import './App.css';
import Steps from './components/Steps';
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;
class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Steps />
				<Steps />
				<div className="row" />
				<p>Heart : {heartMin}</p>
				<p>Temperature : {tempMin}</p>
				<Steps />
			</div>
		);
	}
}
export default App;