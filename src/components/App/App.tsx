import React from "react";
import { Router, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import history from "utils/history";
import HomePage from "components/HomePage";
import DetailPage from "components/DetailPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Router history={history}>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/:id" exact>
						<DetailPage />
					</Route>
				</Router>
			</QueryClientProvider>
		</div>
	);
};

export default App;
