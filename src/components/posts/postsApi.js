const url = `https://jsonplaceholder.typicode.com/posts`;
export const fetchPosts = async () => {
  try {

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error({ error });
  }
  return {};
};

export const fetchPostById = async id => {
  if (!id) {
    console.warn("No id provided! ", id);
    return;
  }
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error({ error });
  }
  return {};
};
