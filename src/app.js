/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.getElementById("bdominio").addEventListener("click", () => {
    document.querySelector("#dominio1").innerHTML = dominios();
  });
};

let dominios = () => {
  let pronoun = ["the", "our", "my"];
  let adj = ["lovely", "nice", "fit", "amazing"];
  let noun = ["cat", "dog", "racoon"];
  let extensions = [".net", ".com", ".ol", ".it", ".us"];

  let dominios2 = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        for (let c = 0; c < extensions.length; c++) {
          dominios2.push(
            pronoun[i] +
              adj[a] +
              noun[b] +
              extensions[c] +
              "<br/>" /* ['cualquier cosa', 'otro elemento'] */
          );
        }
      }
    }
  }
  return dominios2;
};
