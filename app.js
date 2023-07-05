let getNews = (search, page) => {

    fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&page_size=12&page=${page ? page:1}`, {
        headers:{
        'x-api-key': 'SklMI4aMdsY80EaHqraFei9ZCO-n9wIHQMKM07lx8gU'
    } 
})

.then((res) => res.json())
.then((res) =>{
    let news = document.getElementById("news");
    const articles = res.articles;
    for(var i=0;i<articles.length;i++){
        const {media,title,summary,published_date} = articles[i];
        news.innerHTML +=`
        <div class="card mt-3" style="width: 18rem;">
            <img src=${media} class=" image-card card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${title.slice(0,20)}...</h5>
              <p class="card-text">${summary.slice(0,50)}...</p>
              <span class="badge text-bg-primary">${moment(published_date).fromNow()}</span>
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