let selected = null;
let timeout;

const scripts = {
  "AP DEFENSE": "laodsyring (string) @codigo2026",
  "AP Spammer": "spammer (string) @codigo2026",
  "Sheriff vs Murder": "sheriff (string) @codigo2026",
  "Lava Brainrots": "lava (string) @codigo2026"
};

function selectScript(name){
  selected = name;
  alert("Seleccionaste: " + name);
}

function openVerify(){
  if(!selected){
    alert("Selecciona un script primero");
    return;
  }

  document.getElementById("overlay").style.display="flex";

  timeout = setTimeout(()=>{
    document.getElementById("overlay").style.display="none";
  },10000);
}

function verify(){
  clearTimeout(timeout);
  window.open("https://discord.gg/cypherhub","_blank");

  document.getElementById("scriptCode").innerText = scripts[selected];
  document.getElementById("codeBox").style.display="block";
}

function copyCode(){
  const text = document.getElementById("scriptCode").innerText;
  navigator.clipboard.writeText(text);
  alert("Código copiado");
}