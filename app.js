let getNews = (search, page) => {

    fetch(`https://api.worldnewsapi.com/search-news?api-key=32b24aa92d5845aabe43cadf3ae6b301&text=${search}&offset=${page ? page : 0}&number=12`)

.then((res) => res.json())
.then((res) =>{
    let news = document.getElementById("news");
    const articles = res.news;
    for(var i=0;i<articles.length;i++){
        const {image,title,text,publish_date} = articles[i];
        news.innerHTML +=`
        <div class="card mt-3" style="width: 18rem;">
            <img src=${image} class=" image-card card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title.slice(0,20)}...</h5>
              <p class="card-text">${text.slice(0,50)}...</p>
              <span class="badge text-bg-primary">${moment(publish_date).fromNow()}</span>
            </div>
            </div> `
    }
})
.catch((rej) =>{
    console.log(rej)
});
}
getNews();

let page =1;

let newsSearch = () => {
    let news = document.getElementById("news");
    let search = document.getElementById("search");
    news.innerHTML='';
    getNews(search.value);
};

let loadMore = () => {
    let search = document.getElementById("search");
    page++
    getNews(search.value,page);
} 
