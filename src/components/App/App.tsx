import React from "react";
import { Router, Route } from "react-router-dom";

import history from "utils/history";
import HomePage from "components/HomePage";
import DetailPage from "components/DetailPage";

const App: React.FC = () => {
	return (
		<div className="App">
			<Router history={history}>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/:id" exact>
					<DetailPage />
				</Route>
			</Router>
		</div>
	);
};

export default App;
