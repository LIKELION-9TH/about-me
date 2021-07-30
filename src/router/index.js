import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main/index';
import Sub1 from '../pages/Sub1/index';
import Sub2 from '../pages/Sub2/index';
import Sub3 from '../pages/Sub3/index';
import Sub4 from '../pages/Sub4/index';

const router = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/sub1" component={Sub1} />
				<Route exact path="/sub2" component={Sub2} />
				<Route exact path="/sub3" component={Sub3} />
				<Route exact path="/sub4" component={Sub4} />
				<Route exact path="/" component={Main} />
			</Switch>
		</div>
	);
};

export default router;
