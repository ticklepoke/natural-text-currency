import P from 'parsimmon';
import { stringInsensitive } from './string';

export const prefixParser = P.alt(stringInsensitive('SGD'), P.string('$')).map(() => 'SGD');
