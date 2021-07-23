import util from 'util';

/* istanbul-ignore */
export function prettyPrint(ast: unknown): void {
	const formatted = util.inspect(ast, false, null, true);
	console.log(formatted);
}
