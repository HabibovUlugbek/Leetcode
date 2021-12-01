/**
 * @param {string} s
 * @return {string}
 */
 var reverseStr = function (s, k) {
	let final = '';
	for(let i=0; i<s.length; i=i+2*k) {
		let y = s.slice(i,i+2*k); 
		final += y.slice(0,k).split('').reverse().join('') + y.slice(k,2*k);    
	}
	return final;
};