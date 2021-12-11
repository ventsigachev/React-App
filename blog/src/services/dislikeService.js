export const dislike = (user, storyId) => {
    const userId = user._id;
    const token = user.accessToken;
  
    return fetch("http://localhost:3030/data/dislikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify({ userId, storyId }),
    });
  };
  
  export const getStoryDislikes = (user, storyId) => {
    const token = user.accessToken;
    const query = encodeURIComponent(`storyId="${storyId}"`);
    
    return fetch(`http://localhost:3030/data/dislikes?select=userId&where=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": token,
      },
    })
      .then((res) => res.json())
      
  };
