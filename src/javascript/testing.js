// var arr = [];
// while(arr.length < 8){
//     var r = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
//     // sellest ifist ei saa siin aru 
// }
// console.log(arr);


//  1 kuni 10, ilma +1-ta oleks 0-9
// console.log(Math.floor(Math.random() * 10) + 1);

// indexOf - saab kasutada nii stringis kui ka arrays

// var states = ['off', 'on', 'muted', 'active'];
// console.log(states.indexOf('on')); //1
// console.log(states.indexOf('non-existent')); //-1

var obj = {hobune:"tori", treener:"doris", varss:2};

// console.log(obj["hobune"]); //annab vasteks selle prop value
// obj.hasOwnProperty("hobune"); //true

// for(var property in obj){
//     console.log(property); //hobune treener varss
// }

// -----------------------------------
// arrays kindla key ja value vaste indexi leidmine
// function findWithAttr(array, attr, value) {
//     for(var i = 0; i < array.length; i += 1) {
//         if(array[i][attr] === value) {
//             console.log(i);
//             return i;
//         }
//     }
//     console.log(i); //2... aga returnib -1..
//     return -1;
// }

// var Data = [
//     {id_list: 2, name: 'John', token: '123123'},
//     {id_list: 1, name: 'Nick', token: '312312'}
// ];

// findWithAttr(Data, 'name', 'John'); // returns 0
// console.log(findWithAttr(Data, 'id_list', '10')); //returns -1



// MAKE OBJECTD TO AN ARRAY 
// var newArray = Object.keys(obj);
// var values= Object.values(obj);
// var both = Object.entries(obj); //array within array, iga key-value pair muutub arrayks ["Hobune", "tori"]
// console.log(newArray);
// console.log(values);
// console.log(both);






// KUIDAS SAADA KÄTTE OBJEKT KEYS

// TULEMUSED STRINGINA:
// for (var key in news) {
//     console.log(key);
    // tulemused on stringidena
// }

// SAAD KÄTTE NII KEY KUI KA VALUE VÕI VALI KUMB TAHAD

// for (let key in news) {
//     console.log(`${key} -> ${news[key]}`);
//     // console.log(`${news[key][0]}`);

//     for (i=0; i < news[key].length ; i++) {
//         console.log(news[key][i].Heading);
//     }
// }
// JA NII SAINGI KÄTTE KÕIK PEALKIRJAD

// TULEMUSED ARRAYNA
// console.log('Object.keys method: ' + Object.keys(news)+ ' data type: ' + typeof Object.keys(news));
// let keysMethod = Object.keys(news);
// console.log(keysMethod);

// NÄITAB ÄRA, ET VALUEKS ON ARRAY, MILLE SEES ON OBJEKTID
// let valuesMethod = Object.values(news);
// console.log(valuesMethod);
