/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let generateExcuse = () => {
    let who = ["Juan", "Maria", "Pedro", "Laura"];
    let action = ["setback", "peed", "crushed", "broke"];
    let what = ["the project", "the food", "the school"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let randomwho = who[Math.floor(Math.random() * who.length)];
    let randomaction = action[Math.floor(Math.random() * action.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomwhen = when[Math.floor(Math.random() * when.length)];

    return (
      randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen + "."
    );
  };
  let excusa = generateExcuse();

  console.log(excusa);
  let textExcuse = document.getElementById("Atraso de tarea");
  textExcuse.innerText = excusa;
};
