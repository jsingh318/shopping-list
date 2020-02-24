const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul")
const deleteBtns = document.getElementsByClassName("delete");
const items = ul.getElementsByTagName("li");

//add event listener to first 6 btns in HTML file
for(let i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//click on a list item and it strikethroughs the text
function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	let target = getEventTarget(event);
	target.classList.toggle("done");
}

//adding new items:
function inputLength(){
	return input.value.length;
}

function createListElement() {
	let btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);