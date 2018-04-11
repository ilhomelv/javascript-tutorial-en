

//pass array to a Set and then get it back as an array
//arrays can have duplicates, Set does not allow duplicates, all duplicates inside Set collection will be removed

function unique(arr) {
   return Array.from(new Set(arr));
}

or

let unique = arr => [...new Set(arr)];
