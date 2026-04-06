/**
 * @param {string[]} users
 * @return {Promise}
 */

export const getUsersBlogs = async (users) => {
  const requests = users.map(userId => 
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Failed to fetch user data');
      })
  );

  const usersData = await Promise.all(requests);

  return usersData.map(user => user.blog);
};
