console.log("Script OK >>>>> OK");
const rpgZone = document.querySelector(".rpgZone");
let player;





class Player {
  constructor(name) {
    this.PlayerName = name;
    this.PlayerLife = 100;
    this.PlayerDamage = 10;
    this.PlayerLevel = 1;
    this.PlayerCritChance = 0.1;
  }
  addRole(role) {
    switch (role) {
      case "facil":
        this.PlayerLife = 150;
        break;
      case "normal":
        this.PlayerLife = 100;
        break;
      case "dificil":
        this.PlayerLife = 50;
        break;
      case "impossivel":
        this.PlayerLife = 20;
        break;
    }
  }
}

function rollDice(){
  const dice = Math.floor(Math.random() * 20) + 1;
  if(dice > 14){
    return [true, dice];
  }else{
    return [false, dice];    
  }

}

function handleOption(id, optionId,dice){
  const result = rollDice();
  const situationDiv = document.querySelector(".situation");
  situationDiv.remove();
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  const option = data.situations[id].options[optionId];
  if(result[0]){
    player.PlayerLife += option.success.bonus;
    player.PlayerLevel ++;
    resultDiv.innerHTML = `
    <div class="results">
    <div class="d20">
      <p>Seu d20 deu: ${result[1]}!</p>
    </div>
      <p>${option.success.description}</p>
      <button onclick="generateSituation()">Continuar...</button>
    </div>

  `;
  }else{
    player.PlayerLife -= option.fail.damage;
    player.PlayerLevel ++;
    resultDiv.innerHTML = `
    <div class="results">
    <div class="d20">
      <p>Seu d20 deu: ${result[1]}</p>
    </div>
      <p>${option.fail.description}</p>
      <button onclick="generateSituation()">Continuar...</button>
    </div>
  `;

  }

  rpgZone.appendChild(resultDiv); 

}

function resetHUD() {
  if (  document.querySelector(".hud") ){
    document.querySelector(".hud").remove();
  }
  const hud = document.createElement("div");
  hud.className = "hud";
  hud.innerHTML = `
  <div class="hud-inner">
    <p class="hud-inner-left">
      Vida: ${player.PlayerLife}
    </p>
    <p class="hud-inner-center">
      Nome: ${player.PlayerName}
    </p>
    <p class="hud-inner-right">
      Nivel: ${player.PlayerLevel}
    </p>  
  </div>  
  `

  rpgZone.appendChild(hud);
}


function generateSituation(){
  resetHUD();
  if(player.PlayerLife <= 0){
    return window.location.href = './death.html';
  }
  else if (player.PlayerLevel == 10){
    return window.location.href = './finish.html';
  }
  document.querySelector('.result')?.remove();
  const situation = data.situations[Math.floor(Math.random() * data.situations.length)];
  const situationDiv = document.createElement("div");
  situationDiv.className = "situation";
  situationDiv.innerHTML = `
    <div class="situation-inner">
      <p>
          ${situation.description}
      </p>
    </div>
    <div class="situation-inner-options">
      <button onclick="handleOption(${situation.id}, 0)">${situation.options[0].description}</button>
      <button onclick="handleOption(${situation.id}, 1)">${situation.options[1].description}</button>
    </div>
  `
  rpgZone.appendChild(situationDiv);
}




function chooseRole(role) {
  document.querySelector(".class-choice").remove();
  player.addRole(role);
  console.log(player);
  resetHUD();
  generateSituation()
}

function showClassChoice(nome) {
  player = new Player(nome);
  console.log(nome);
  document.querySelector(".titleArea").remove();
  document.querySelector(".inputArea").remove();
  const classChoice = document.createElement("div");
  classChoice.className = "class-choice";
  classChoice.innerHTML = `
  <div class="playerOptions">
    <p>Seja Bem-Vindo(a) ${nome}! Escolha uma dificuldade para jogar</p>
    <li>
      <buttom onClick="chooseRole('facil')">Fácil</buttom>
      <buttom onClick="chooseRole('normal')">Normal</buttom>
      <buttom onClick="chooseRole('dificil')">Dificil</buttom>
      <buttom onClick="chooseRole('impossivel')">Impossivel</buttom>
    </li>
  </div>  
  
  `;
  rpgZone.appendChild(classChoice);
}

// Step 0
function handleNameSubmit() {
  console.log("Handle Submit Called");
  const nameOfPlayer = document.getElementById("input-0").value;

  if (nameOfPlayer.length > 0) {
    showClassChoice(nameOfPlayer);
  } else {
    alert("Por Favor, se apresente amigo(a)!");
  }
}
