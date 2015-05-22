var sprintf = require('sprintf-js').sprintf
, non_operation = require('non-op').non_operation
, printf
;

printf = function () {
	var s = sprintf.apply(sprintf
		, [].slice.call(arguments))
	;
	console.log(s);
};

exports.sprintf = sprintf;
exports.printf = (process.env.NODE_ENV !== 'production') ?
	printf : non_operation;
