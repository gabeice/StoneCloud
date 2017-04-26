import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: 'RECEIVE_USER',
  user
});

export const fetchUser = userId => dispatch => {
  return APIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)));
}

export const updateUser = (user, userId) => dispatch => {
  return APIUtil.updateUser(user, userId)
    .then(user => dispatch(receiveUser(user)))
}
