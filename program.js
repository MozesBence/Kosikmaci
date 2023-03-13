var jatekter = document.getElementById("jatekter");

var leftbox = document.createElement("div")
var kartyabox = document.createElement("div")
var pontokbox = document.createElement("div")
var tabla = document.createElement("div")
var korokbox = document.createElement("div")

var id;

var lista = [];
var kartya = [];

var lepes = 0;
var gen = false;
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
    {id:23,value:0,sign:'hegy'}
];
var toronyAdatok = [
    {id: "s1",	value: 1,	color:'sarga'},
    {id: "s2",	value: 2,	color:'sarga'},
    {id: "s3",	value: 3,	color:'sarga'},
    {id: "s4",	value: 4,	color:'sarga'},
    {id: "k1",	value: 1,	color:'kek'},
    {id: "k2",	value: 2,	color:'kek'},
    {id: "k3",	value: 3,	color:'kek'},
    {id: "k4",	value: 4,	color:'kek'},
    {id: "p1",	value: 1,	color:'piros'},
    {id: "p2",	value: 2,	color:'piros'},
    {id: "p3",	value: 3,	color:'piros'},
    {id: "p4",	value: 4,	color:'piros'},
    {id: "z1",	value: 1,	color:'zold'},
    {id: "z2",	value: 2,	color:'zold'},
    {id: "z3",	value: 3,	color:'zold'},
    {id: "z4",	value: 4,	color:'zold'}

]

var kartyak = [
   /* {
        id:1,
        type:"",//karty/var
        {/*kartya6var tipusa }
    }*/
]

var cellak=[

]


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

function tablageneralasa(){
    var k = 1;
    var f = 1;
    for(let i=0; i<23; i++){
        kartyak.push({id: k});
        k++;
    }

    for (var index = 0; index < 5; index++) {
        var sordiv = document.createElement("div")
        sordiv.classList+=" sordiv"
        for(var a =0; a<6;a++){
            var oszlopdiv = document.createElement("div")
            oszlopdiv.classList += " oszlopdiv";
            oszlopdiv.id = f;
            oszlopdiv.setAttribute("onclick", "Berak(this)");
            sordiv.appendChild(oszlopdiv);
            f++;
        }
        tabla.appendChild(sordiv);
        
    }
    console.log(kartyak);
}

function Berak(cella)
{
    console.log(cella.id);
    id = cella.id;
    KartyaHely();
    //pontokcount()
    cella.removeAttribute("onclick");
}
var select;

function Select(cella){
    console.log(cella);
    select=cella.id;
    var selectid=document.getElementById(select);
    selectid.style.border="1px solid red";
    
}


// function pontokcount(){
//     var i = 0;
//     for (let index = 0; index < 5; index++) {
//         var sor = 0;
//         for (let index1 = i; index1 < i+6; index1++) {
//             sor += kartyak[index1].info.value;
//         }
//         i+=6
//         console.log(index,". sor:",sor);
//     }

//     var i = 0;
//     for (let index = 0; index < 6; index++) {
//         var oszlop = 0;
//         for (let index1 = i; index1 < i+6*5; index1+=6) {
//             oszlop += kartyak[index1].info.value;
//         }
//         i++;
//         console.log(index,". oszlop:",oszlop);
//     }
// }



function kartyakFeltoltese(){
    for(let i=0; i<23; i++){        
        var random = Math.floor(Math.random()*23+1);
        var rdiv = Math.floor(Math.random()*23);
        while (lista.includes(rdiv)) {
            rdiv = Math.floor(Math.random()*23);
        }
        while (kartya.includes(random)) {
            random = Math.floor(Math.random()*23+1);
        }
        lista.push(rdiv);
        kartya.push(random);


        kartyak[rdiv].type="kartya";
        kartyak[rdiv].info=kartyaAdatok[random-1];
    }

    // var torony = ["k","p","s","z"];
    // for(let i=23; i<30; i++){
    //     var randszin = Math.floor(Math.random()*(3-0+1))+0;
    //     var random = Math.floor(Math.random()*16);
    //     var rdiv = Math.floor(Math.random()*30);
        
    //     while(lista.includes(rdiv)){
    //         rdiv = Math.floor(Math.random()*(30-1+1));
    //     }
        
    //     lista.push(rdiv);

    //     kartyak[rdiv].type="torony";
    //     kartyak[rdiv].info=toronyAdatok[random];
    // }
        
}

function kartyavalaszt(){
    var div = document.getElementById("kartyak");
    
    var ujsordiv = document.createElement("div");
    ujsordiv.classList += " valasztdiv";

    var kicsidiv = document.createElement("div");
    kicsidiv.classList += " kicsidiv";
    kicsidiv.id = "s"+1;

    var kicsi = document.getElementById("kicsi");
    kicsidiv.setAttribute("onclick","Select(kicsi)")
    
    var tartalek = document.createElement("div");
    tartalek.id="tartalek";
    ujsordiv.appendChild(tartalek);

    tartalek.setAttribute("onclick","Select(kicsi)");
    tartalek.setAttribute("onclick", "Berak(this)");

    ujsordiv.appendChild(kicsidiv);
    div.appendChild(ujsordiv);
    
}

function KartyaValasztFelt(){
    var kartyabox = document.getElementById("kartyabox");
    var kep = document.createElement("img");
    kep.src = "js jatek/huzas.png"
    kep.id = "huzas"
    kartyabox.appendChild(kep);
    kep.setAttribute("onclick","KartyaGen()");
}



function KartyaGen(){
    if(gen == false){
        var kep = document.createElement("img");
        var iv = document.getElementById("s1");
        if(lepes>29){
            kep.removeAttribute("onclick");
            kep.src = "js jatek/huzas.png";
        }
        else{
            kep.src = "js jatek/"+kartyak[lepes].info.id+".png";
            kep.id = "kicsi"
            console.log(kartyak[lepes].info.id);
            iv.appendChild(kep);
            lepes++;
        }
        gen = true;
    }
}

function KartyaHely(kep){
    var div = document.getElementById(id);
    var kiskep = document.getElementById(select);

    if(cellak[id]=kartyak[lepes-1]){
        div.appendChild(kiskep);
        kiskep.id="";
        gen = false;
    }

    console.log(cellak);
}
var k = 1;

function AlulTornyok(){
    var div = document.getElementById("tornyok");
    for(let i = 0;i<10;i++){
        var toronydiv = document.createElement("div");
        div.appendChild(toronydiv);
        toronydiv.id = k+"i";
        var kep = toronydiv.id+"t";
        toronydiv.setAttribute("onclick", "Select(this)");
        k++;
    }


    for(let i=1; i<5; i++){
        var div = document.getElementById(i+"i");
        var img = document.createElement("img");
        img.src="js jatek/k1.png";
        img.style.width="100%";
        img.style.height="100%";
        //img.id=i+"it";
        div.appendChild(img);
    }
    for(let i=5; i<8; i++){
        var div = document.getElementById(i+"i");
        var img = document.createElement("img");
        img.src="js jatek/k2.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id=i+"it";
        div.appendChild(img);
    }
    for(let i=8; i<10; i++){
        var div = document.getElementById(i+"i");
        var img = document.createElement("img");
        img.src="js jatek/k3.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id=i+"it";
        div.appendChild(img);
    }
    var div = document.getElementById(10+"i");
    var img = document.createElement("img");
    img.src="js jatek/k4.png";
    img.style.width="100%";
    img.style.height="100%";
    img.id=10+"it";
    div.appendChild(img);

}
var korid = 1;
function KorSzamlalo(){
    for(let i =1;i<4;i++){
        korokdiv = document.createElement("div")
        korokdiv.id = korid;
        korokdiv.classList += "style";
        var bekezdes = document.createElement("p");
        bekezdes.innerHTML=korid+".kör";
        korokdiv.appendChild(bekezdes);
        korid++;
        korokbox.appendChild(korokdiv);
    }
}
function HanyadikKor(){
    
    if(kor == 1){
        var aktivkor = document.getElementById(korokdiv);
        aktivkor.classList += "aktiv";
    }
    else if(kor == 2){

    }
    else if(kor == 3){

    }
}


function main(){
    jatekterbetoltes();
    jatekterelrendezes();
    tablageneralasa();
    kartyakFeltoltese();
    //pontokcount();
    kartyavalaszt();
    KartyaValasztFelt()
    AlulTornyok();
    KorSzamlalo();
}




main();
