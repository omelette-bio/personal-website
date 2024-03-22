const outputDiv = document.getElementById('result');
document.getElementById("command-prompt").value = "";
let next_l = [];
let prev_l = [];
let history = [];


const cmdPromptRes = {
  help: "Hello, this is my portfolio, here are all the commands available : <p class=\"cmd-text\">getresume, getcontact, getinterests, geteducation, getskills, getproject{1-5}</p>",
  getresume: "<a href=\"docs/cv_fflandin_fr.pdf\" target=\"_blank\" download>resume_fr.pdf</a>",
  getcontact: "[\"<a href=\"mailto:francoisflandin@proton.me\">flandinfrancois@proton.me</a>\", \"<a href=\"https://github.com/omelette-bio\">github</a>\", \"<a href=\"https://www.linkedin.com/in/fran%C3%A7ois-flandin-b2a8b2295/\">linkedin</a>\"]",
  getinterests: "[\"computer science\", \"<a href=\"https://steamcommunity.com/id/omelette-bio/\" target=\"_blank\">gaming</a>\",\"<a href=\"https://www.nautiljon.com/membre/possede,franfran_sama,manga_volume.html\">manga</a>\",\"<a href=\"https://www.nautiljon.com/membre/possede,franfran_sama,dvd.html\">animation</a>\",\"<a href=\"https://open.spotify.com/user/zezwiafwzq7l4pl1onljkzcqz?si=213b4a3b79884a7e\">music</a>\"]",
  geteducation: "<span class=\"cmd-title\">Côte d'Azur University</span> : computer science degree from 2021 to 2024</p> <p class=\"cmd-text\">Also a member of the university's <a href=\"https://gdsc.community.dev/cote-dazur-university/\">GDSC</a>",
  getskills: "<span class=\"cmd-title\">Programming</span> : [\"C\",\"Rust\",\"Python\",\"Java\",\"Ocaml\"]<br><span class=\"cmd-title\">Web Dev</span> : [\"PHP\",\"Symfony\",\"HTML\",\"CSS\",\"JS\"]<br><span class=\"cmd-title\">Theorical</span> : Data Structures and Algorithms, OS, CPU architecture and conception, Automata and Language theory",
  getproject1: "<span class=\"cmd-title\">name</span>: <a href=\"https://github.com/omelette-bio/mrsync\" target=\"_blank\">mini-rsync</a></p> <p class=\"cmd-text\"><span class=\"cmd-title\">date</span>: may 2023</p> <p class=\"cmd-text\"><span class=\"cmd-title\">description</span>:</p> <p class=\"cmd-text\"> End of semester project of the system programming course,<br> consisting of making a mini rsync, but it only works locally",
  getproject2: "<span class=\"cmd-title\">name</span>: <a href=\"https://github.com/omelette-bio/projet-concept-ia\" target=\"_blank\">ai concepts</a></p><p class=\"cmd-text\"><span class=\"cmd-title\">date</span>: may 2023</p><p class=\"cmd-text\"><span class=\"cmd-title\">description</span>:</p><p class=\"cmd-text\">End of semester project of the ai concepts course,<br> consisting of making a program creating problem solving graphs",
  getproject3: "<span class=\"cmd-title\">name</span>: <a href=\"https://github.com/omelette-bio/projet-pf\" target=\"_blank\">random text generation</a></p><p class=\"cmd-text\"><span class=\"cmd-title\">date</span>: december 2023</p><p class=\"cmd-text\"><span class=\"cmd-title\">description</span>:</p><p class=\"cmd-text\">End of semester project of the functionnal programming course,<br> consisting of making an ai-like text generator in OCaml using Markov Chains.",
  getproject4: "<p class=\"cmd-text\"><span class=\"cmd-title\">name</span>: <a href=\"#\" target=\"_blank\">compiler</a> (wip)</p><p class=\"cmd-text\"><span class=\"cmd-title\">date</span>: feb - may 2024</p><p class=\"cmd-text\"><span class=\"cmd-title\">description</span>:</p><p class=\"cmd-text\">End of semester project of the compilation course,<br> consisting of building a mini-C compiler in group of two.",
  getproject5: "<span class=\"cmd-title\">name</span>: <a href=\"#\" target=\"_blank\">citrtic enone</a> (wip)</p><p class=\"cmd-text\"><span class=\"cmd-title\">date</span>: feb - may 2024</p><p class=\"cmd-text\"><span class=\"cmd-title\">description</span>:</p><p class=\"cmd-text\">Group project (5 members) across the semester for the TERD course,<br> consisting of building a small gartic phone in php"
}

const commands = Object.keys(cmdPromptRes);


window.addEventListener('DOMContentLoaded', (event) => {

  const cmdPrompt = document.getElementById('command-prompt');

  cmdPrompt.focus();

  cmdPrompt.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { handleEnterKeyPress(); }
    if (/^[a-zA-Z]$/.test(event.key) || /^[0-9]$/.test(event.key)) {
      console.log('Letter key pressed:', event.key);
      fetchCommands(event.key);
    }
  });

});



function handleEnterKeyPress() {
  const inputValue = document.getElementById('command-prompt').value;
  if (cmdPromptRes.hasOwnProperty(inputValue)) {
    outputDiv.innerHTML = cmdPromptRes[inputValue];
    document.getElementById("command-prompt").value = "";
  }
  else { outputDiv.innerHTML = "Sorry, the command \"" + inputValue + "\" is not valid."; }
}

function fetchCommands(enteredKey) {
  const inputValue = document.getElementById('command-prompt').value + enteredKey;
  let availableCommands = commands.filter(command => command.startsWith(inputValue));
  let finalString = "";
  finalString += availableCommands[0];
  for (let i = 1; i < availableCommands.length; i++) {
    finalString += ", ";
    finalString += availableCommands[i];
  }
  if (finalString == "undefined") { outputDiv.innerHTML = "Sorry, no commands are available under this name"; }
  else { outputDiv.innerHTML = "<span class=\"cmd-title\">available commands</span>:<br>" + finalString; }
}