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

    //console.log(hyphenIndex);

    let replace = el.innerHTML.slice(hyphenIndex, originalLength + 1);
    //console.log(replace);
    el.innerHTML = '<strong>' + word + '</strong>' + replace;

	});	
}


makeFirstWordBold();


function createLiWithHyphen() {
  var x = document.createElement("LI");
  return x;
}

function addWord(){
  var myForm = document.getElementById('addWordForm');
  formData = new FormData(myForm);
  console.log(formData.getAll('word'));
  console.log(formData.getAll('definition'));
  let li = createLiWithHyphen();
  li.innerHTML = '<strong>' + formData.getAll('word') + '</strong>  - ' + formData.getAll('definition');
  document.getElementById('newWords').appendChild(li);
}
//addWord();

