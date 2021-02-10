const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(nameBand){
   return nameBand.replace(/^(the |an |a)/i,'').trim();
} 

const sortedBands = bands.sort(function(a, b){
    if(removeArticle(a) > removeArticle(b)){
        return 1;
    } else{
        return -1;
    }
});

document.querySelector('#bands').innerHTML = sortedBands.map(band => 
    `<li>${band}</li>`
).join('');
console.log(sortedBands);
