const str = '\u00F8 + \u00bd + \u00bc + \u00be';

console.log(str);

console.log(`${str.length} characters`);

console.log(`${Buffer.byteLength(str, 'utf8')} bytes`);
