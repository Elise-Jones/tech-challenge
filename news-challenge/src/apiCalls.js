export const getTopHeadlines = (selectedCategory) => {
  let apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe67a1f37eb74baf918d6337568d3712&pageSize=100"
  if(selectedCategory !== "all headlines"){
    apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=fe67a1f37eb74baf918d6337568d3712&pageSize=100`
  }
  return fetch(apiUrl)
  .then((res) => {
    if (res.status >= 500 && res.status < 600) {
      throw new Error(`Server error: ${res.status}`);
    }
    return res.json();
  });
}


// business https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fe67a1f37eb74baf918d6337568d3712
//science https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=fe67a1f37eb74baf918d6337568d3712
// health https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=fe67a1f37eb74baf918d6337568d3712
// top headline https://newsapi.org/v2/top-headlines?country=us&apiKey=fe67a1f37eb74baf918d6337568d3712