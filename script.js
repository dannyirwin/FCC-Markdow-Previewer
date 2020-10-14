const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const defaultInputText = "**Welcome!**\n\n This is a Markdown Previewer App.  You can write your text with the typical Markdown syntax and it will be rendered in real time! \n\nSome Examples:\n\nAn H1 style Header\n==================\n\nAn H2 style Header\n------------------\n\n**Bold**  and *italics*\n\nYou can even display some of your own code: \n`console.log(\"learning to code is fun\")`";

let inputText = defaultInputText;
let outputText = marked(defaultInputText);

function update() {
	updateTextValues();
	updateDisplays();
}

function updateTextValues() {
	inputText = editor.value;
	outputText = marked(inputText);
}

function updateDisplays() {
	preview.innerHTML = outputText;
}

editor.value = defaultInputText;
updateDisplays();
editor.addEventListener('input', update);
