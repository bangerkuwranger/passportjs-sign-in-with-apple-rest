const passport = require('passport-strategy');
const util = require('util');
const AppleRestApi = require('./AppleRestApi');

function SigninwithAppleStrategy(options) {

	passport.call(this);
	if ('object' === typeof options && null !== options) {

		this.client_id = options.client_id ? options.client_id : null;
		this.client_secret = options.client_secret ? options.client_secret : null;

	}

}

util.inherits(SigninwithAppleStrategy, Strategy);

SigninwithAppleStrategy.prototype.authenticate = function(req, options) {

  // TBD
  // authenticate request
  var api = new AppleRestApi();
  
}

module.exports = SigninwithAppleStrategy;
