const getArticles = async () => {
  const data = await fetch('http://localhost:3000/articles');
  const articles = await data.json();
  return articles;
};

export default getArticles;
