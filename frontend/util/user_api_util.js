export const fetchUser = userId => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}`
  });
};

export const updateUser = (user, userId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: user
  });
};
