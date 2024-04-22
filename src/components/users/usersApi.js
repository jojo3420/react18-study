const usersUrl = `https://jsonplaceholder.typicode.com/users`;

export const fetchUsers = async () => {
  try {
    const response = await fetch(usersUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error({ error });
  }
  return {};
};

export const fetchUserById = async (id) => {
  try {
    const response = await fetch(`${usersUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error({ error });
  }
  return {};
};

