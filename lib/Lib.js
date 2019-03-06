export const curry = f => (a, ...r) => (r.length ? f(a, ...r) : (...r) => f(a, ...r));
export const map = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		res.push(f(a));
	}
	return res;
});
export const filter = curry((f, iter) => {
	let res = [];
	for (const a of iter) {
		if (f(a)) res.push(a);
	}
	return res;
});

export const reduce = curry((f, acc, iter) => {
	if (!iter) {
		iter = acc[Symbol.iterator]();
		acc = iter.next().value;
	}
	for (const a of iter) {
		acc = f(acc, a);
	}
	return acc;
});

export const go = (...args) => reduce((acc, f) => f(acc), args);
export const pipe = (...fs) => reduce( (a) => go(a, ...fs) );