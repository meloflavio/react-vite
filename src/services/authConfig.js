import _ from 'lodash';

const urlProvider = import.meta.env.VITE_APP_OAUTH2_URI;
const clientId = import.meta.env.VITE_APP_OAUTH2_CLIENTID;
const scope = import.meta.env.VITE_APP_OAUTH2_SCOPE;
const redirectURL = import.meta.env.VITE_APP_OAUTH2_REDIRECTURI;
const logoutRedirectURL = import.meta.env.VITE_APP_OAUTH2_LOGOUT_REDIRECTURI;
const profileURL = import.meta.env.VITE_APP_OAUTH2_PROFILEURL;

export default {
  urlProvider,
  clientId,
  scope,
  redirectURL,
  profileURL,
  authURL: `${urlProvider}/authorize?response_type=code&client_id=${clientId}&scope=${scope}&redirect_uri=${encodeURIComponent(
    redirectURL,
  )}&nonce=${_.random(100000, 999999)}&state=${_.random(100000, 999999)}`,
  logoutURL: `${urlProvider}/logout?post_logout_redirect_uri=${encodeURIComponent(
    logoutRedirectURL,
  )}`,
};
