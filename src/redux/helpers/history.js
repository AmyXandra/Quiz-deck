import { createBrowserHistory } from 'history';

// export const history = createBrowserHistory()
export const history = route => {
	createBrowserHistory().push(route);
	createBrowserHistory().go();
}