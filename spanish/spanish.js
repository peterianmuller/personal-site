let allLi = document.querySelectorAll('li');

// add <strong> tag to characters from openening li to -	

// I -> nodeList of all li elements
// O -> N/A (side effect of adding strong right after opening li and closing strong before -)

// iterate over all li elements
// select text from beginning of li to first - char
  // save reference to this text as word
// create variable strong referencing a new strong element
  // place word inside strong 
// replace inner html of el with strong replacing text from beginning of li to first - char in li with strong   

// Issue -> end of sentence being cut off

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




//////////////////////////

// getRandomColor = () => {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color
// }


// changeBRColor = () => {
//   var star = document.querySelector('*');
//   console.log(star.style);
//   //console.log(document.body.style.backgroundColor );
//   document.body.style.backgroundColor = getRandomColor();
//   console.log(star.style.backgroundColor);
// }

// document.getElementById('bg-pick').onclick = changeBRColor;

///

// document.getElementById("addWord").addEventListener("click", function(event){
//     event.preventDefault()
// });

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
  document.querySelector('ul').appendChild(li);
}
//addWord();

