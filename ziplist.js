
  // Two lists of equal length
  const listOne = ['a','b','c'];
  const listTwo = [1,2,3];

  // Function accepts two lists of equal length
  function zipList(listA, listB) {
    const newList = [];
    for (let i = 0; i <listA.length; i++ ){
      newList.push(listA[i], listB[i]);
    }
    // returns the result of alternatingly taking elements
    return newList;
  }

  console.log(zipList(listOne,listTwo));

  // Accepts two lists using underscore
  function zipListTheSimpleWay(listA, listB){
    return _.flatten(_.zip(listA, listB));
  }

  console.log(zipListTheSimpleWay(listOne,listTwo));