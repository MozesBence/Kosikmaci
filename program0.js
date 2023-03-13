var jatekter = document.getElementById("jatekter");

var leftbox = document.createElement("div")
var kartyabox = document.createElement("div")
var pontokbox = document.createElement("div")
var tabla = document.createElement("div")
var korokbox = document.createElement("div")

var kartyaAdatok = [
    {id:1,value:-3,sign:''},
    {id:2,value:2,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:4,sign:''},
    {id:5,value:3,sign:''},
    {id:6,value:0,sign:'pap'},
    {id:7,value:-6,sign:''},
    {id:8,value:6,sign:''},
    {id:9,value:0,sign:'taliga'},
    {id:10,value:2,sign:''},
    {id:11,value:0,sign:'hegy'},
    {id:12,value:-5,sign:''},
    {id:13,value:4,sign:''},
    {id:14,value:0,sign:'sarkany'},
    {id:15,value:5,sign:''},
    {id:16,value:6,sign:''},
    {id:17,value:-4,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-1,sign:''},
    {id:20,value:-2,sign:''},
    {id:21,value:1,sign:''},
    {id:22,value:3,sign:''},
    {id:23,value:0,sign:'hegy'},
];

var cellak = [
   /* {
        id:1,
        type:"",//karty/var
        {/*kartya6var tipusa }
    }*/
]

var varadatok = []

function jatekterbetoltes(){
    leftbox.appendChild(kartyabox);
    leftbox.appendChild(pontokbox);

    jatekter.appendChild(leftbox);
    jatekter.appendChild(tabla);
    jatekter.appendChild(korokbox);

    // kartyabox.innerHTML = "kartyabox";
    // pontokbox.innerHTML = "pontok";
    // tabla.innerHTML = "tabla";
    // korokbox.innerHTML = "korok";
}

function jatekterelrendezes(){
    leftbox.id = "balpanel";
    kartyabox.id="kartyabox";
    pontokbox.id="pontokbox";
    tabla.id="tabla";
    korokbox.id="korokbox"
}
//tolts be egy kepet az elso cellaba 
//veletlenszeruen valassz ki egy kepet es tedd az 1 cellaba
//veletlen helyre veletlen kep
//parameter segitsegevel megadott darabszamu kepet helyezz el veletlen helyen
function tablageneralasa(){
    var k = 1;
    for (var index = 0; index < 5; index++) {
        var sordiv = document.createElement("div")
        sordiv.classList+=" sordiv"
        for(var a =0; a<6;a++){
            var oszlopdiv = document.createElement("div")
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id = k;
            cellak[k-1].id = k
            k++; 
            sordiv.appendChild(oszlopdiv);
        }
        tabla.appendChild(sordiv);
        
    }
}
var lista = [];
var kartya = [];
// ne legyen ismetlodes, tobbit toronnyal
function tablafeltoltes(db){
    for(var i=0; i<db; i++){
        var random = Math.floor(Math.random()*23+1);
        var rdiv = Math.floor(Math.random()*(30-1+1))+1;
        while (lista.includes(rdiv)) {
            rdiv = Math.floor(Math.random()*(30-1+1))+1;
        }
        while (kartya.includes(random)) {
            random = Math.floor(Math.random()*23+1);
        }
        lista.push(rdiv);
        kartya.push(random);
        var div = document.getElementById(rdiv);
        var image = document.createElement("img");
        image.src = "js jatek/"+random+".png";
        div.appendChild(image);
    }
}
function torony(db){
    var torony = ["k","p","s","z"];
    
    for(var i=0;i<db;i++){
        var randszin = Math.floor(Math.random()*(3-0+1))+0;
        var random = Math.floor(Math.random()*(4-1+1))+1;
        var rdiv = Math.floor(Math.random()*(30-1+1))+1;
        
        while(lista.includes(rdiv)){
            rdiv = Math.floor(Math.random()*(30-1+1))+1;
        }
        
        lista.push(rdiv);
        var div = document.getElementById(rdiv);
        var image = document.createElement("img");
        image.src = "js jatek/"+torony[randszin]+random+".png";
        div.appendChild(image);
    }
}


function main(){
    jatekterbetoltes();
    jatekterelrendezes();
    tablageneralasa();
    tablafeltoltes(23);
    torony(7);
}

/*var objektum = {id:1, nev:"Bela", szev: 1467}
console.log(objektum.nev);*/


main();
