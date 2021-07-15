import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import App from '../pages/Main/App';
import App2 from '../pages/App2';

const router = () => {
	return (
		<div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
		</div>
	);
};

export default router;