//  fucntion works with objects

/*
function isEmpty(value) {
	return(
	value === undefined || value === null ||
	(typeof value === 'object' Object.keys(value).lenght == 0) ||
	( typeof value === 'string' && value.trim().lenght === 0)
	);
	
}
*/

// arrow funtion doesnt need return 
const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;
