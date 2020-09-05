import Lockr from 'lockr'

Lockr.prefix = 'autodev_';

const autodev = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  EXPIRES_IN: 'expires_in',
  TOKEN_TYPE: 'token_type',
  USER_INFO: 'user_info'
};

Lockr.autodev = autodev

export default Lockr