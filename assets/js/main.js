const inputText = document.querySelector('form input:nth-of-type(1)');
const newsSection = document.querySelector('main section')
const inputLanguage = document.querySelector('select')

const searchNews = () => {
    newsSection.innerHTML = " ";

    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&language=${inputLanguage.value}&apiKey=38697655d1cf4f7f8b1c7be5df1d5bcd`)
        .then(response => response.json())
        .then(dataNews => {
            dataNews.articles.forEach((elt) => {

                newsSection.innerHTML += `
                <article>
                <h2>${elt.title}</h2>
                <img src="${elt.urlToImage}" alt="">
                <p>by ${elt.author}</p>
                <p>${elt.description}</p>
                <a href="${elt.url}">Read more</a>
                </article>
                `
            })
        })
}


