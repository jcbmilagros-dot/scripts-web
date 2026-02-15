function random(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

document.getElementById("onlineMini").innerText=random(10,50);
document.getElementById("visitMini").innerText=random(1,20);
document.getElementById("visitasTotal").innerText=random(1000,20000);
document.getElementById("uniqueUsers").innerText=random(1,10);

let scripts={
 defense:0,
 spammer:0,
 sheriff:0,
 lava:0
};

function updateStats(){
 document.getElementById("cDefense").innerText=scripts.defense;
 document.getElementById("cSpammer").innerText=scripts.spammer;
 document.getElementById("cSheriff").innerText=scripts.sheriff;
 document.getElementById("cLava").innerText=scripts.lava;
 document.getElementById("totalScripts").innerText=
 scripts.defense+scripts.spammer+scripts.sheriff+scripts.lava;
}

function openVerify(script){
 window.currentScript=script;
 document.getElementById("verifyOverlay").style.display="flex";
}

function confirmVerify(){
 document.getElementById("verifyOverlay").style.display="none";
 scripts[currentScript]++;
 updateStats();
 alert("Script desbloqueado");
}

function updateClock(){
 const now=new Date();
 document.getElementById("clock").innerText=
 now.toLocaleTimeString("es-ES");
}
setInterval(updateClock,1000);
updateClock();
updateStats();