const axios = require("axios");

exports.getTopNews = async () => {
  const topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json";

  const { data: ids } = await axios.get(topStoriesURL);
  const top5 = ids.slice(0, 5);

  const stories = await Promise.all(
    top5.map(id =>
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then(res => res.data)
    )
  );

  return stories;
};
