import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddCompanyRoute from "./Companies/routes/AddCompanyRoute";
import { StoreContext, stores } from "./Stores";

const App = () => {
	return (
		<div className='App'>
			<StoreContext.Provider value={stores}>
				<Router>
					<Switch>
						<Route path='/' component={AddCompanyRoute} exact />
					</Switch>
				</Router>
			</StoreContext.Provider>
		</div>
	);
};

export default App;
