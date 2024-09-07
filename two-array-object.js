
function twoArrayObject(key, value) {
	return key.reduce((ob, curs, indx) => {
		ob[curs] = indx < value.length ? value[indx] : null;
		return ob;
	}, {});
}
