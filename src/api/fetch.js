import { hFetch } from './hFetch';
import { requestUrl } from './url';

export const musicList = async () => {
	return await hFetch(`${requestUrl}/music/`, 'get');
};

export const locationList = async () => {
	return await hFetch(`${requestUrl}/location/`, 'get');
};

export const hobbyList = async () => {
	return await hFetch(`${requestUrl}/hobby/`, 'get');
};

export const meList = async () => {
	return await hFetch(`${requestUrl}/me/`, 'get');
};
