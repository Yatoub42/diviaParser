const request = require('request');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv)).argv

var ligne = argv.ligne;
var arret = argv.arret;


var options = {
    url: 'https://www.divia.fr/bus-tram?type=479',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    },
    form: {
        'requete': 'arret_prochainpassage',
        'requete_val[id_ligne]': ligne,
        'requete_val[id_arret]': arret
    }
};

request(options, (err, response, body) => {
    if (err) {
        console.log(err);
    } else {
        var html = body.split('<span class="uk-badge"> ');
        var t1parse = html[1].split('</span>');
        var time1= t1parse[0];
        var t2parse = html[2].split('</span>');
        var time2= t2parse[0];
        console.log("Prochains passages: "+time1+' '+time2);
    }
});