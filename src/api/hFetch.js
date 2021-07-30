export const hFetch = async (url, type, body) => {
	return await fetch(url, {
		method: type,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((err) => {
			return err;
		});
};
