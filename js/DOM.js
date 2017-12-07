
let newsArticles = document.getElementById("articlesSection")

function doSomething(){
  for(let index = 0; index < news.articles.length; index++){
    console.log(news.articles[index].author)

    let newsArticlesList = `<div>
    <a href = "${news.articles[index].url}"><img src = "${news.articles[index].urlToImage}"></img></a>
    <a href = "${news.articles[index].url}"><h2> ${news.articles[index].title}</h2></a>
    <p> ${news.articles[index].description}</p>
    </div
    `

    newsArticles.innerHTML += newsArticlesList


}
}


doSomething()
