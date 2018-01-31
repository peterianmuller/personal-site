let allLi = document.querySelectorAll('li');

// add <strong> tag to characters from openening li to -	

// I -> nodeList of all li elements
// O -> N/A (side effect of adding strong right after opening li and closing strong before -)

// iterate over all li elements
// select text from beginning of li to first - char
  // save reference to this text as word
// create variable strong referencing a new strong element
  // place word inside strong 
  // TODO ->
// replace inner html of el with strong replacing text from beginning of li to first - char in li with strong   

makeFirstWordBold = () => {
	console.log(allLi);
	allLi.forEach(el=>{
		let word = '', foundHyphen = false, hyphenIndex; 
		el.innerText.split('').forEach((char, index)=>{
      if (!foundHyphen || char === '-') {
        word += char;
        if (char === '-') {
        	foundHyphen = true;
        	hyphenIndex = index;
        }
      }
		});

    let strong = document.createElement('strong'); 
    strong.innerText = 'word'

    // remove first part of innerHTML of each li and replace with strong el

    let replace = el.innerHTML.slice(hyphenIndex,el.innerHTML.length -1);

	});	
}


makeFirstWordBold();