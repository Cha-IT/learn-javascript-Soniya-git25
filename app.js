
//oppgave 1
let simba = "hEI";
console.log(simba);

//oppgave2
let tall1 = 2;
let tall2 =5;
console.log(tall1+tall2);

let tall3= 2;
let tall4 = 5;
console.log(tall3*tall4);

let tall5 = 2;
let tall6 = 5;
console.log(tall5-tall6);

let tall7 = 2;
let tall8 = 5;
console.log(tall7/tall8);
//oppgave3

let alder = prompt("Hvor gammel er du?");
if (alder < 18) {
    console.log("du er gammel nok!");
} else {
    console.log("du er ikke gammel nok!");
}
//oppgave4                                                              
let blitten = prompt("Hvor gammel er du?");
if (blitten < 18) 
    console.log("du kan kjøpe barneblitter");
    else if (blitten < 65 - 18) {
        console.log("du kan kjøpe voksenblitter");
    } else {blitten >= 65
        console.log("du kan kjøpe honnørblitter");
    }