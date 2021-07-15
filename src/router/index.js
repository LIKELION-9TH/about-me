import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Main from '../pages/Main/index';
import Sub from '../pages/Sub/index';

const router = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/sub" component={Sub} />
				<Route exact path="/" component={Main} />
			</Switch>
		</div>
	);
};

export default router;
