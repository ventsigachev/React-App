export const like = (user, storyId) => {
  const userId = user._id;
  const token = user.accessToken;

  return fetch("http://localhost:3030/data/likes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ userId, storyId }),
  });
};

export const getStoryLikes = (user, storyId) => {
  const token = user.accessToken;
  const query = encodeURIComponent(`storyId="${storyId}"`);
  
  return fetch(`http://localhost:3030/data/likes?select=userId&where=${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": token,
    },
  })
    .then((res) => res.json())
    
};
