
  const listOne = ['a','b','c'];
  const listTwo = [1,2,3];

  function zipList(listA, listB) {
    const newList = [];
    for (let i = 0; i <listA.length; i++ ){
      newList.push(listA[i], listB[i]);
    }
    return newList;
  }

  console.log(zipList(listOne,listTwo));

  function zipListTheSimpleWay(listA, listB){
    return _.flatten(_.zip(listA, listB));
  }

  console.log(zipListTheSimpleWay(listOne,listTwo));