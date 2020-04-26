"use strict";

var btnNieuw, btnSlaOp, btnVerwijder;
var divFeedBack;
var lblId;
var slcVrienden;
var txtGeboortejaar, txtNaam;

window.addEventListener('load', Initieer);

function Initieer() {
  KoppelElementen();
  KoppelEvents();
  ToonVrienden();
};

const KoppelElementen = () => {
  btnNieuw = document.getElementById("btnNieuw");
  btnSlaOp = document.getElementById("btnSlaOp");
  btnVerwijder = document.getElementById("btnVerwijder");
  divFeedBack = document.getElementById("divFeedBack");
  lblId = document.getElementById("lblId");
  slcVrienden = document.getElementById("slcVrienden");
  txtGeboortejaar = document.getElementById("txtGeboortejaar");
  txtNaam = document.getElementById("txtNaam");
}

const KoppelEvents = () => {
  slcVrienden.addEventListener('change', () => {
    let index = slcVrienden.selectedIndex;
    ToonDetails(index);
  });

  btnNieuw.addEventListener('click', () => {
    MaakControlsLeeg();
  });

  btnSlaOp.addEventListener('click', () => {
    let inputValidatie = IsInputValied();
    if (inputValidatie.InputOk) {
      SlaVriendOp();
      ToonVrienden();      
    } 
    divFeedBack.innerText = inputValidatie.Feedback;
  });

  btnVerwijder.addEventListener('click', () => {
    let index = slcVrienden.selectedIndex;
    vrienden.splice(index,1);

    ToonVrienden();
  });
}

const SlaVriendOp = () => {
  let id = lblId.innerText;
  let naam = txtNaam.value;
  let geboortejaar = parseInt(txtGeboortejaar.value);
  let index = slcVrienden.selectedIndex;
  let vriend= 
  {
    'Id' : id,
    'Naam' : naam,
    'Geboortejaar': geboortejaar
  }
  if (id == '-') {
    vriend.Id = GeefHoogsteId() + 1;
    vrienden[vrienden.length] = vriend;
  } else {
    vrienden[index]=vriend;
  }
}

const IsInputValied = () => {
  let isOk = true;
  let naam = txtNaam.value;
  let geboortejaar = parseInt(txtGeboortejaar.value);
  let feedback = "";
  if(naam.length < 3) {
    isOk = false;
    feedback = "De naam moet minstens 3 tekens lang zijn";
  }
  if (isNaN(geboortejaar) || 
    geboortejaar < txtGeboortejaar.min || 
    geboortejaar > txtGeboortejaar.max) {
      isOk = false;
      feedback = `Het geboortejaar moet tussen ${txtGeboortejaar.min} en ${txtGeboortejaar.max} liggen`;
    } 
  return {
      'InputOk' : isOk,
      'Feedback': feedback
  }
}

const ToonVrienden = () => {
  slcVrienden.options.length = 0;
  slcVrienden.size = vrienden.length;
  for (let index = 0; index < vrienden.length; index++) {
    const vriend = vrienden[index];
    let text = `${vriend.Naam} (° ${vriend.Geboortejaar})`;
    let value = index;
    slcVrienden.options[index] = new Option(text, value);
  }
  slcVrienden.selectedIndex = 0;
  ToonDetails(0);
}


const ToonDetails = (index) => {
  if (index >= 0 && index < vrienden.length) {
    let geselecteerdevriend;
    geselecteerdevriend = vrienden[index];
    lblId.innerText = geselecteerdevriend.Id;
    txtNaam.value = geselecteerdevriend.Naam;
    txtGeboortejaar.value = geselecteerdevriend.Geboortejaar;
  } else {
    MaakControlsLeeg();
  }
}

const MaakControlsLeeg = () => {
  slcVrienden.selectedIndex = -1;
  txtGeboortejaar.value = "";
  txtNaam.value = "";
  lblId.innerText = "-";
  txtNaam.focus();
}

const GeefHoogsteId = () => {
  let hoogsteId = 0;
  vrienden.forEach(vriend => {
    if (vriend.Id > hoogsteId) hoogsteId = vriend.Id;
  });
  return hoogsteId;
}
