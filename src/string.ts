import P from 'parsimmon';

export const stringInsensitive = (str: string): P.Parser<string> =>
	P((input, i) => {
		if (input.slice(i).toLowerCase().startsWith(str.toLowerCase())) {
			return P.makeSuccess(i + str.length, str);
		}
		return P.makeFailure(i, str);
	});
