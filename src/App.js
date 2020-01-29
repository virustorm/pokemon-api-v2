import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/mainpage';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={MainPage} />
			</Switch>
		</div>
	);
}

export default App;
