var jatekter = document.getElementById("jatekter");

var leftbox = document.createElement("div")
var kartyabox = document.createElement("div")
var pontokbox = document.createElement("div")
var tabla = document.createElement("div")
var korokbox = document.createElement("div")

var id;

var lista = [];
var kartya = [];

var lepes = 1;
var actual = 1;

var k = 1;

var ToronyC = [0,0,0,0];

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
    {id: "k1", type:'torony', info:{value: 1}},
    {id: "k2", type:'torony', info:{value: 2}},
    {id: "k3", type:'torony', info:{value: 3}},
    {id: "k4", type:'torony', info:{value: 4}},
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
    console.log(cella.id);
    select=cella.id;
    var selectid=document.getElementById(select);
    selectid.style.border="1px solid red";
}


var coin=0;
function pontokcount(){
    var i = 1;
    for (let index = 1; index < 6; index++) {
        var sor = 0;
        var varsz = 0;
        for (let index1 = i; index1 < i+6; index1++) {
            if(cellak[index1].type=='kartya'){
                sor += cellak[index1].info.value;
            }
            if(cellak[index1].type=='torony'){
                varsz += cellak[index1].info.value;
            }

        }
        coin+=sor*varsz;
        i+=6
        console.log(index,". sor:",sor);
    }

    var i = 1;
    for (let index = 1; index < 7; index++) {
        var oszlop = 0;
        var varsz = 0;
        for (let index1 = i; index1 < i+6; index1+=6) {
            if(cellak[index1].type=="kartya"){
                sor += cellak[index1].info.value;
            }
            if(cellak[index1].type=="torony"){
                varsz += cellak[index1].info.value;
            }
        }
        coin+=sor*varsz;
        i++;
        console.log(index,". oszlop:",oszlop);
    }
    
}
function CoinSzamol(){
    var coin2=coin;
    var coinc = [0,0,0,0,0];
    if(coin>0){
        if (coin%100 == 0){
            coinc[0]=coin%100;
            coin-=coin%100;
        }
        if (coin%50 == 0){
            coinc[1]=coin%50;
            coin-=coin%50;
        }
        if (coin%10 == 0){
            coinc[2]=coin%10;
            coin-=coin%10;
        }
        if (coin%5 == 0){
            coinc[3]=coin%5;
            coin-=coin%5;
        }
        if (coin%1 == 0){
            coinc[4]=coin%1;
            coin-=coin%1;
        }
    }
    if(coin<0){
        if (coin%100 == 0){
            coinc[0]=coin%100;
            coin-=coin%100;
        }
        if (coin%50 == 0){
            coinc[1]=coin%50;
            coin-=coin%50;
        }
        if (coin%10 == 0){
            coinc[2]=coin%10;
            coin-=coin%10;
        }
        if (coin%5 == 0){
            coinc[3]=coin%5;
            coin-=coin%5;
        }
        if (coin%1 == 0){
            coinc[4]=coin%1;
            coin-=coin%1;
        }
    }
    for (let index = 0; index < coinc.length; index++) {
        var div = document.getElementById("pontokbox");
        for (let i = 0; i < coinc[0]; i++) {
            var img = document.createElement("img");
            img.src = "coin/c100.png"
            div.appendChild(img);
        }
        for (let i = 0; i < coinc[1]; i++) {
            var img = document.createElement("img");
            img.src = "coin/c50.png"
            div.appendChild(img);
        }
        for (let i = 0; i < coinc[2]; i++) {
            var img = document.createElement("img");
            img.src = "coin/c10.png"
            div.appendChild(img);
        }
        for (let i = 0; i < coinc[3]; i++) {
            var img = document.createElement("img");
            img.src = "coin/c5.png"
            div.appendChild(img);
        }
        for (let i = 0; i < coinc[4]; i++) {
            var img = document.createElement("img");
            img.src = "coin/c1.png"
            div.appendChild(img);
        }
        
    }
}



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

    tartalek.setAttribute("onclick","Select(kics)");

    var kep = document.createElement("img");
    kep.src = "js jatek/"+kartyak[0].info.id+".png";
    kep.id="kics";
    tartalek.appendChild(kep);

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
var actual = 1;
function KartyaHely(){
    var div = document.getElementById(id);
    var kiskep = document.getElementById(select);
    if(select!="torony1" || select!="torony2" || select!="torony3" || select!="torony4"){
        if(select == "kics"){
            cellak[id]=kartyak[0]
            div.appendChild(kiskep);
            kiskep.id="";
            gen = false;
        }
        else if(select == "kicsi"){
            cellak[id]=kartyak[actual]
            div.appendChild(kiskep);
            kiskep.id="";
            gen = false;
            actual++;
        }
    }
    if(select=="torony1"){
         cellak[id]=toronyAdatok[0];
         div.appendChild(kiskep);
         kiskep.id="";
         gen = false;
         ToronyC[0]+=1;
         UjT1();
    }
    if(select=="torony2"){
        cellak[id]=toronyAdatok[1];
        div.appendChild(kiskep);
        kiskep.id="";
        gen = false;
        ToronyC[1]+=1;
        UjT2();
   }
   if(select=="torony3"){
        cellak[id]=toronyAdatok[2];
        div.appendChild(kiskep);
        kiskep.id="";
        gen = false;
        ToronyC[2]+=1;
        UjT3();
    }
    if(select=="torony4"){
        cellak[id]=toronyAdatok[3];
        div.appendChild(kiskep);
        kiskep.id="";
        gen = false;
        ToronyC[3]+=1;
        UjT4();
   }
    
    console.log(cellak);
}

function UjT1(){
    if(ToronyC[0]< 4){
        var div = document.getElementById(1+"i");
        div.setAttribute("onclick", "Select(torony1)");
        var img = document.createElement("img");
        img.src="js jatek/k1.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id="torony1";
        div.appendChild(img);
    }
}
function UjT2(){
    if(ToronyC[1]< 3){
        var div = document.getElementById(2+"i");
        div.setAttribute("onclick", "Select(torony2)");
        var img = document.createElement("img");
        img.src="js jatek/k2.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id="torony2";
        div.appendChild(img);
    }
}
function UjT3(){
    if(ToronyC[2]< 2){
        var div = document.getElementById(3+"i");
        div.setAttribute("onclick", "Select(torony3)");
        var img = document.createElement("img");
        img.src="js jatek/k3.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id="torony3";
        div.appendChild(img);
    }
}
function UjT4(){
    if(ToronyC[3]< 1){
        var div = document.getElementById(4+"i");
        div.setAttribute("onclick", "Select(torony4)");
        var img = document.createElement("img");
        img.src="js jatek/k4.png";
        img.style.width="100%";
        img.style.height="100%";
        img.id="torony4";
        div.appendChild(img);
    }
}


function AlulTornyok(){
    var div = document.getElementById("tornyok");
    for(let i = 0;i<4;i++){
        var toronydiv = document.createElement("div");
        div.appendChild(toronydiv);
        toronydiv.id = k+"i";
        toronydiv.classList+="torony";
        var kep = toronydiv.id+"t";
        //var torony = document.getElementById("torony");
        toronydiv.setAttribute("onclick", "Select(torony)");
        k++;
    }

    var div = document.getElementById(1+"i");
    div.setAttribute("onclick", "Select(torony1)");
    var img = document.createElement("img");
    img.src="js jatek/k1.png";
    img.style.width="100%";
    img.style.height="100%";
    img.id="torony1";
    div.appendChild(img);
    

    var div = document.getElementById(2+"i");
    div.setAttribute("onclick", "Select(torony2)");
    var img = document.createElement("img");
    img.src="js jatek/k2.png";
    img.style.width="100%";
    img.style.height="100%";
    img.id="torony2";
    div.appendChild(img);

    var div = document.getElementById(3+"i");
    div.setAttribute("onclick", "Select(torony3)");
    var img = document.createElement("img");
    img.src="js jatek/k3.png";
    img.style.width="100%";
    img.style.height="100%";
    img.id="torony3";
    div.appendChild(img);

    var div = document.getElementById(4+"i");
    div.setAttribute("onclick", "Select(torony4)");
    var img = document.createElement("img");
    img.src="js jatek/k4.png";
    img.style.width="100%";
    img.style.height="100%";
    img.id="torony4";
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
    kartyavalaszt();
    KartyaValasztFelt()
    AlulTornyok();
    KorSzamlalo();
    if(cellak.length==20){
        pontokcount();
        CoinSzamol();
    }
}




main();
