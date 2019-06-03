'use-strict'
const path = require('path');
const request = require(request-promise-native);
const BASE_URI = "https://appleid.apple.com/""
const PK_PATH = "auth/keys";
const TOKEN_PATH = "auth/token";
const AUTH_GRANT_TYPE = "authorization_token";
const REFRESH_GRANT_TYPE = "refresh_token";

class AppleRestApi {

	construct(client_id, dev_key) {
	
		this.client_id = client_id;
		this.client_secret = {};
		// Generate JWT from dev_key:
			/*
			{
				"alg": "ES256",
				"kid": "ABC123DEFG"
			}
			{
				"iss": "DEF123GHIJ",
				"iat": 1437179036,
				"exp": 1493298100,
				"aud": "https://appleid.apple.com",
				"sub": client_id
			}
			*/
		return;
	
	}
	
	/*	PROMISE FULFILLED w/ ARRAY OF
	
	(string)	alg	The encryption algorithm used to encrypt the token.
	(string)	e	The exponent value for the RSA public key.
	(string)	kid	A 10-character identifier key, obtained from your developer account.
	(string)	kty	The key type parameter setting. This must be set to "RSA".
	(string)	n	The modulus value for the RSA public key.
	(string)	use	The intended use for the public key.
	
	*/
	
	getPublicKey() {
	
		var getOps = {
			method:		'GET',
			uri: 		path.join(BASE_URI, PK_PATH)
		};
		return request(getOps);
	
	}
	
	generateToken(code, uri) {
	
		var postOps = {
			method:		'POST',
			uri:		path.join(BASE_URI, TOKEN_PATH),
			form:		{
							client_id:		this.client_id,
							client_secret:	this.client_secret,
							grant_type:		AUTH_GRANT_TYPE,
							code,
							request_uri:	uri
						}
		};
		return request(postOps);
	
	}
	
	refreshToken(rToken) {
	
		var postOps = {
			method:		'POST',
			uri:		path.join(BASE_URI, TOKEN_PATH),
			form:		{
							client_id:		this.client_id,
							client_secret:	this.client_secret,
							grant_type:		REFRESH_GRANT_TYPE,
							refresh_token:	rToken
						}
		};
		return request(postOps);
	
	}
	
	

}

module.exports = AppleRestApi;
