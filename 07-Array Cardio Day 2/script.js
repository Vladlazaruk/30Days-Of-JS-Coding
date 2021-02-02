 const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    function compare(person){
        const dateDifference = new Date().getFullYear() - person.year;
        if(dateDifference >= 19){
            return true;
        }
    }
    console.log( people.some(compare));
     // Array.prototype.every() // is everyone 19 or older?
    console.log( people.every(compare));

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    function findId(coment){
        if(coment.id === 823423){
            return true;
        }
    }
    console.log(comments.find(findId));
    
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    function findId(coment){
        if(coment.id === 823423){
            return true;
        }
    }
    const idToDelete= comments.findIndex(findId);
    comments.splice( idToDelete, 1);
    console.dir(comments);