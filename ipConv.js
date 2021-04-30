var ip = document.querySelector('#in');
var out = document.querySelector('#out');
var msg = document.querySelector('#msgs');
var tab = [];

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}
function klasa( liczba ){
    if( liczba>=0 && liczba<=127 ){
        msg.value = "A";
    }
    else if( liczba>=128 && liczba<=191 ){
        msg.value = "B";
    }
    else if( liczba>=192 && liczba<=223 ){
        msg.value = "C";
    }
    else if( liczba>=224 && liczba<=239 ){
        msg.value = "D";
    }
    else if( liczba>=240 && liczba<=255 ){
        msg.value = "E";
    }
    else{
        console.log( "Error" );
    }
}
function bin2dec(bin) {
    return parseInt(bin, 2);
}
ip.addEventListener('focusout', function (e) {
    var i=0;
    res = ip.value.split(".");
    if (res[0].search(/^[10]+$/) != -1) {
        res.forEach(k => {
            tab[i] = bin2dec(k);
            i++;
        });
        klasa(tab[0]);
    } else {
        res.forEach(k => {
            tab[i] = dec2bin(k);
            i++;
        });
        klasa(res[0]);
    }
    out.value = tab.join(".");
}, false)