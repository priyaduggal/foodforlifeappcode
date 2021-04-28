var MAIN_URL = 'http://dev.indiit.solutions/foodforlife/api/'; //edit your public ip
//var MAIN_URL_PORT = '3002/';
//var SOCKET_URL_PORT = '3001/'; 
export const config = {
  	API_URL : MAIN_URL,
	ENC_SALT: 'gd58_N9!ysS',
	errors: ['',null,undefined],
  	IMAGES_URL: MAIN_URL+'public/uploads',
  	IMAGE_EXTENSIONS: ['image/png','image/jpg','image/jpeg','image/gif','image/bmp','image/webp']
};

export const social_config = {
  	FACEBOOK_ID: '290796082669378',
	 GOOLGLE_CLIENT_ID: '608339143855-msuu5n847treif8htdsju9kia98nr4ms.apps.googleusercontent.com'
};

/* export const socket_config = {
    SOCKET_URL: MAIN_URL+SOCKET_URL_PORT,
};
 */
