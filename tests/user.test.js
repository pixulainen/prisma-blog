import { getFirstName, isValidPassword } from '../src/utils/user';

test('Should return first name when given full name', () => {
	const firstName = getFirstName('George Apetrei');

	expect(firstName).toBe('George');
});
test('Should return first name when given first name', () => {
	const firstName = getFirstName('Alex');
	expect(firstName).toBe('Alex');
});

test('Should reject password shorter than 8 characters', () => {
	const isValid = isValidPassword('test123');
	expect(isValid).toBe(false);
});

test('Should reject password that contains word password', () => {
	const isValid = isValidPassword('abcPassword098');
	expect(isValid).toBe(false);
});

test('Sould correctly validate a valid password', () => {
	const isValid = isValidPassword('Secure123');
	expect(isValid).toBe(true);
});
