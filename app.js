
console.log('yes');
let api = '7a997c8c874d4f67927d422101e23640';


const xhr = new XMLHttpRequest();

let searchField = '';
let field = document.getElementById('field');
let searchBtn = document.getElementById('searchBtn');
let clearBtn = document.getElementById('clearBtn');
let newsCards = document.getElementById('newsCards');



searchBtn.onclick = function () {
    newsCards.innerHTML = '';
    searchField = field.value;

    xhr.open('GET',
        `https://newsapi.org/v2/everything?q=${searchField}&from=2021-12-09&sortBy=popularity&apiKey=${api}`, true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function () {
        if (this.status === 200) {

            let temp = JSON.parse(this.responseText);
            let arr = temp.articles;
            for (news in arr) {
                let title = arr[news].title;
                let content = arr[news].content;
                let description = arr[news].description;
                let url = arr[news].url;
                let urlToImage = arr[news].urlToImage;
                let publishedAt = arr[news].publishedAt;
                publishedAt[10] = ' ';
                publishedAt[19] = ' ';

                console.log(arr[news]);

                let myNews = `
                 <div class="card myCard" style="width: 18rem;">
                <img src="${urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${description}</p>
                  <a href="${url}" target="_blank" class="btn btn-primary readMoreBtn">Read More</a>
                <br>  <span> Publish at :- ${publishedAt} </span>
                </div>
              </div>
             
              `
                let matter = newsCards.innerHTML;
                matter = matter + myNews;
                newsCards.innerHTML = `${matter}`;

            }
        }
        else {
            console.log("Some error occured")
            alert('Some error occured')
        }
    }
    xhr.send();
}


clearBtn.onclick = function () {
    let t = `
    <div>
            </div>
            <div style="display: flex; justify-content: center;">
                <img src="images/news.gif" style="width: 300px;" alt="">
            </div>
 `
        newsCards.innerHTML = t;
    field.value = '';
}




