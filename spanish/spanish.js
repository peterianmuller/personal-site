let allLi = document.querySelectorAll('li');

makeFirstWordBold = () => {
	//console.log(allLi);
	allLi.forEach(el=>{
		let word = '', foundHyphen = false, hyphenIndex, originalLength = el.innerHTML.length -1; 
		el.innerText.split('').forEach((char, index)=>{
      if (!foundHyphen) {
        if (char !== '-') {
            word += char;
        }
        if (char === '-') {
        	foundHyphen = true;
        	hyphenIndex = index;
        }
      }
		});

    let replace = el.innerHTML.slice(hyphenIndex, originalLength + 1);
    //console.log(replace);
    el.innerHTML = '<strong>' + word + '</strong>' + replace;

	});	
}


makeFirstWordBold();


function addWord() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("word").value + ' ' + document.getElementById("definition").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("newWords").appendChild(li);
  }
  document.getElementById("word").value = "";
  document.getElementById("definition").value = "";

}




