import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './router/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);
=======
import App from './pages/App';
import './app.css';
import './default.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
>>>>>>> 8a1c8325709331e3630103d0d187cfe7d70180de
