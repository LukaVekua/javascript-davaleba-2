function metoba_N1(a){
    document.write(Math.ceil(a));
}

function nakleboba_N2(b){
    document.write("<br>"+Math.floor(b));
}

function damrgvaleba_N3(c){
    document.write("<br>"+Math.round(c));
}

function noli_erti_N5(){
    document.write("<br>"+ "0-დან 1-მდე რიცხვები: " + Math.random());
}

function xuti_ormocdaati_N6(bottom,top){
    document.write("<br>"+ "5-დან 50-მდე რიცხვები: " + Math.floor( Math.random() * (top-bottom) + bottom)  ) ;
}

function randomNumber_N7(a,b){
    document.write("<br>" + "შემთხვევითი რიცხვები a,b შუალედიდან: " +  Math.random() * (b-a) + a  );
}

function mteli_ricxvi_N8(min,max){
    document.write("<br>"+ "შემთხვევითი მთელი რიცხვი: " + Math.floor(Math.random() * (max-min) + min));
}


function shemtxveviti_ricxvi_N9(min,max){
    var i = 0;
    for(i==0;i<10;i++)
    {document.write("<br>"+ "10 შემთხვევითი მთელი რიცხვი: " + Math.floor(Math.random() * (max-min) + min))};
}

function parametrebi_N10(min,max,n){
    var i = 0;
    for(i==0;i<n;i++)
    {document.write("<br>"+ "n შემთხვევითი მთელი რიცხვი: " + Math.floor(Math.random() * (max-min) + min))};
}

function dge_N11(){
    var myArray = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    var randomItem = myArray[Math.floor(Math.random()* myArray.length)];
    document.write("<br>"+randomItem);
}

function Tveebi_N16(){
    var a = 1;
    var b = 31;
    document.write("<br>"+"თვეების რიცხვები: " +  Math.floor(Math.random() * (b-a) + a));
}

