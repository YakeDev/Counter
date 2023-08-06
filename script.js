"use strict";

//initialisation
const compteurTxt = document.querySelector(".compteur");
const btnRetrancher = document.querySelector("#retrancher");
const btnReinitialiser = document.querySelector("#reinitialiser");
const btnAjouter = document.querySelector("#ajouter");

let compteur = 0;
// fonction pour retrancher
function retrancher() {
  compteur = compteur - 1;
  compteurTxt.textContent = compteur;
  compteurTxt.style.color = "#dc3545";
}
// fonction pour reinitialiser
function reinitialiser() {
  compteur = 0;
  compteurTxt.textContent = compteur;
  compteurTxt.style.color = "#000";
}
// fonction pour ajouter
function ajouter() {
  compteur++;
  compteurTxt.textContent = compteur;
  compteurTxt.style.color = "#198754";
}

btnRetrancher.addEventListener("click", retrancher);
btnAjouter.addEventListener("click", ajouter);
btnReinitialiser.addEventListener("click", reinitialiser);
