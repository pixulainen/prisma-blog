import ApolloClient from 'apollo-boost';

const getClient = (jwt) => {
	return new ApolloClient({
		uri: 'http://localhost:4000',
		request(operation) {
			if (jwt) {
				operation.setContext({
					headers: {
						authorization: `Bearer ${jwt}`
					}
				});
			}
		}
		// 	request: (operation) => {
		// 		const token = localStorage.getItem('token');
		// 		operation.setContext({
		// 			headers: {
		// 				authorization: token ? `Bearer ${token}` : ''
		// 			}
		// 		});
		// 	}
	});
};

export { getClient as default };
