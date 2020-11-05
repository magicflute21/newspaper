// html items
console.log(typeof news); 


const headlineImage = document.getElementById('headline-img');
const subline1Image = document.getElementById('subline1-img');
const subline2Image = document.getElementById('subline2-img');

let headings = document.querySelectorAll('.heading'); //nodelist, works kinda like array


// ---------- ühe random artikli saab nii kätte
// let subject = Object.entries(news); //[Array, Array, Array]
// let r = Math.floor(Math.random() * subject.length) //0-2
// // console.log(subject);
// let articles = subject[r][1]; //random theme cathegory content, [{}]
// console.log(articles); 

// let rr = Math.floor(Math.random() * articles.length);
// let article = articles[rr];
// console.log(article); //suvaline artikkel suvalisest teemast olemas
// ------------------------------------------------------

// LÄHENEN TEISTMOODI: kõik artiklid lükkan ühte arraysse, siis on lihtsam töödelda selliselt et saaks unikaalse tulemuse

let allArticles = [];

news.Culture.forEach(element => {
    allArticles.push(element);
});

news.Digi.forEach(element => {
    allArticles.push(element);
});

news.Politics.forEach(element => {
    allArticles.push(element);
});


function pickRandomArticle() {
    let len = allArticles.length;
    let rand = Math.floor(Math.random()* len);
    let pickedArticle = allArticles.splice(rand,1); //take this article out of the array
    return pickedArticle;
}


// repetition here
// kas saaks kuidagi paremini seda teha`?

var test = pickRandomArticle();
headings[0].innerHTML = test[0].Heading;
headlineImage.src = test[0].Image;

var test2 = pickRandomArticle();
headings[1].innerHTML = test2[0].Heading;
subline1Image.src = test2[0].Image;

var test3 = pickRandomArticle();
headings[2].innerHTML = test3[0].Heading;
subline2Image.src = test3[0].Image;
