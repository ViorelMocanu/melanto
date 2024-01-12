// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// My .env file imports
const PUBLIC_APP_ENV = import.meta.env.PUBLIC_APP_ENV || import.meta.env.VERCEL_ENV;
const PUBLIC_APP_DEBUG = import.meta.env.PUBLIC_APP_DEBUG;

let u: string = import.meta.env.BASE_URL || import.meta.env.VERCEL_URL;
if (PUBLIC_APP_ENV === 'local' || PUBLIC_APP_ENV === 'development') {
	// we are in a local or development environment
	u = import.meta.env.PUBLIC_APP_URL_LOCAL;
} else if (PUBLIC_APP_ENV === 'staging' || PUBLIC_APP_ENV === 'preview') {
	// we are in a staging or preview environment
	u = import.meta.env.PUBLIC_APP_URL_STAGING;
} else {
	// we are in a production environment
	u = import.meta.env.PUBLIC_APP_URL_PRODUCTION;
}
const PUBLIC_APP_URL = u;

// @TODO: make variables below asynchronous

// My static config variables
export const ENV = PUBLIC_APP_ENV;
export const DEBUG = PUBLIC_APP_DEBUG;
export const URL = PUBLIC_APP_URL;
export const SITE_TITLE = 'Melanto: Doar mobilă. Doar calitate.';
export const SITE_DESCRIPTION = 'Știm cât de important e să fii înconjurat de calitate în viața ta, și vrem să ți-o livrăm prin mobilier și servicii la cele mai înalte standarde.';
export const SITE_NAME = 'melanto.ro';
export const CONTACT_EMAIL = 'contact@melanto.ro';
export const LANGUAGE = 'ro'; //					🛑 @TODO: multi-language support with i18n
export const LANGUAGE_EXTENDED = 'ro_RO';
export const LANGUAGE_EXTENDED_DASH = 'ro-RO';
export const FACEBOOK_APP_ID = ''; //				🛑 @TODO: facebook app ID
export const TWITTER_SITE = ''; //					🛑 @TODO: twitter site
export const TWITTER_CREATOR = ''; //				🛑 @TODO: twitter creator
export const ACCENT_COLOR = '#6a0094';
export const OG_IMAGE = '../public/ogimage.jpg';
export const OG_IMAGE_ALT = ''; //					🛑 @TODO: OG Image ALT
export const GLOBAL_PUB_DATE = '2024-01-12T19:35:55+03:00';
export const PAGE_SIZE = 10;
