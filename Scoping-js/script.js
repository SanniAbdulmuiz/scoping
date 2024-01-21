'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    //printAge() is a child element of calcAge(), but it has access to other variabls in it outer scope, e.g, const firstName = 'Jonas';
    //firstName is Jonas here because "steven" is not in the current scope of "output"
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //Reassigning outer scope's variable
      output = 'New output';

      //firstname is "steven" because it is in the same code block as "str"
      const str = `oh, and you are a millenial, ${firstName}`;
      //but it works here because it is inside it code block
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str) will not work here because it is outside it code block, except the variable is declared with a "var"
    //console.log(str);
    //console.log(millenial) works here because we declared the variable "millenial" with a "var"
    console.log(millenial);
    //Works without "use strict"
    //add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//Only an inner scope can have access to the variables of its outer scope, so console.log(age) can't have access to the inner scope of calcAge(),
//console.log(age);
//Same goes for printAge()
