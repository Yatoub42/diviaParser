#!/bin/bash
curl --request POST \
  --url 'https://www.divia.fr/bus-tram?type=479' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --header 'x-requested-with: XMLHttpRequest' \
  --data 'requete=arret_prochainpassage' \
  --data 'requete_val[id_ligne]=83' \
  --data 'requete_val[id_arret]=1216'