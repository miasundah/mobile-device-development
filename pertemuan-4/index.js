let people = ["Greg" , "Mary" , "Devon" , "James"];
//1. ForLoop
 for(i = 0; i<people.length; i++) {
     console.log(people[i]);
 };

//2. forEach
 people.forEach(function(value, index) {
     console.log(people[index]);
 });
