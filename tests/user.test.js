import 'cross-fetch/polyfill';
// import 'cross-fetch/polyfill/package.json'
import ApolloBoost, { gql } from 'apollo-boost';
import prisma from '../src/prisma';

const client = new ApolloBoost({
	uri: 'http://localhost:4000'
});

test('Should create a new user', async () => {
	const createUser = gql`
		mutation {
			createUser(data: { name: "george", email: "george@example.com", password: "testtest" }) {
				token
				user {
					id
				}
			}
		}
	`;

	const response = await client.mutate({
		mutation: createUser
	});

	const exists = await prisma.exists.User({ id: response.data.createUser.user.id });
	expect(exists).toBe(true);
});
