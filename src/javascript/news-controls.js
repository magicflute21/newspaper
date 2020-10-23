// html items
const headlineHeading = document.getElementById('headline-heading');
const headlineText = document.getElementById('headline-text');


// kui headline on poliitika

// console.log(news.Politics.length);
// for (let i = 0; i< news.Politics.length; i++ ) {
//     console.log(news.Politics[i].Heading);
// }
// aga et ta võtaks ainult ühe suvalise pealkirja ja kuvaks ekraanile?
// let len = news.Politics.length;
// console.log(len);
// choose a random number between 0 to amount of arrayitems

let randomArticle = Math.floor(Math.random() * len);
console.log(news.Politics[randomArticle].Heading);

// let headline = news.Politics

// headlineHeading.innerHTML = "Peauudis ilmub siia";
// headlineText.innerHTML = "Sisutekst *20";

