let section3 = document.getElementById("section3");
let titre = document.createElement("h1");
let supersite = document.createTextNode("Mon super site");
titre.appendChild(supersite);
section3.appendChild(titre);

let premierT = document.createElement("h2");
let premierTitre = document.createTextNode("Premier titre");
premierT.appendChild(premierTitre);
section3.appendChild(premierT);

let sousT = document.createElement("h3");
let sousTitre = document.createTextNode("Sous-titre");
sousT.appendChild(sousTitre);
section3.appendChild(sousT);

let l1 =document.createElement("li");
let l2 =document.createElement("li");
let l3 =document.createElement("li");
let l4 =document.createElement("li");

let l10 = document.createTextNode("element 1")
let l20 = document.createTextNode("element 2")
let l30 = document.createTextNode("element 3")
let l40 = document.createTextNode("element 4")

l1.appendChild(l10);
l2.appendChild(l20);
l3.appendChild(l30);
l4.appendChild(l40);

section3.appendChild(l1);
section3.appendChild(l2);
section3.appendChild(l3);
section3.appendChild(l4);

let secondT = document.createElement("h2");
let secondTitre = document.createTextNode("Second titre");
secondT.appendChild(secondTitre);
section3.appendChild(secondT);

let sousTs = document.createElement("h3");
let sousTitres = document.createTextNode("Sous-titre");
sousTs.appendChild(sousTitres);
section3.appendChild(sousTs);

let nouveau = document.createElement("h2");
let nouveauTitre = document.createTextNode("Nouveau titre");
nouveau.appendChild(nouveauTitre);
section3.appendChild(nouveau);

let nexw=document.createElement("p");
let newpara =document.createTextNode(" Nouveau paragraphe ");
nexw.appendChild(newpara);
section3.appendChild(nexw);
nexw.style.color="blue";
nexw.style.fontWeight= "bold";

let foot= document.createElement("footer");
let decouvrons = document.createTextNode("Découvrons le JavaScript! ");
foot.appendChild(decouvrons);
section3.appendChild(foot);


