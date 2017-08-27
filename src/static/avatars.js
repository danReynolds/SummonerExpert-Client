import _ from 'lodash';

const avatarJSON = require('./avatars.json');

export const AVATAR_URL = avatarJSON.url;

export const getRandomAvatar = () => {
  return `${AVATAR_URL}/${_.sample(avatarJSON.data)}.png`;
}
