<template>
  <h2>
    <label for="name">Numéro de l'énigme :</label>
  </h2>
  <div>
    <input type="text" v-model="enigmeInput">
    <button @click="displayEnigma">Valider</button>
  </div>
  <div v-if="msg != '' ">
    {{msg}}
  </div>
  <div v-if="enigmaToDisplay == '1'">
    <Enigma1 />
  </div>
  <div v-if="enigmaToDisplay == '7'">
    <TextEnigma enigma-title="Enigme 7 : Suite Logique" 
    enigma-text = "Quelle est la prochaine lettre de cette suite logique : "
    widget-prefix = "U D T Q C S S ..."
    answerString = "h"
    answerText = "Bonne réponse!
    Les termes de cette suite correspondent aux initiales des chiffres : << Un, Deux, Trois, Quatre, Cinq, Six, Sept ... >> "/>
  </div>
  <div v-if="enigmaToDisplay == '372'">
    <TextEnigma enigma-title="Enigme 372 : En manque d'air" 
    enigma-text = "Écrivez en toute lettre le chiffre manquant tout en conservant la cohérence de la phrase :"
    widget-prefix = "Dans cette phrase, le 'r' est présent "
    widget-suffix = "fois."
    answerString = "quatre"
    answerText = "Bonne réponse!
    Trois ne peut pas convenir, car il contient un R. Quatre convient alors."/>
  </div>
  <div v-if="enigmaToDisplay == '800'">
    <Enigma800 />
  </div>
  <div v-if="enigmaToDisplay == '104'">
    <TextEnigma enigma-title="Enigme 104 : Oeufs de Poules" 
    enigma-text = "Huit cents poules pondent en moyenne huit cents oeufs en huit jours."
    widget-prefix = "Combien d'oeufs pondent quatre cents poules en quatre jours? (en chiffres)"
    answerString = "200"
    answerText = "Bonne réponse! En effet, quatre cents poules pondent quatre cents oeufs en huit jours. Donc quatre cents poules pondent deux cents oeufs en quatre jours."/>
  </div>
  <div v-if="enigmaToDisplay == '13'">
    <Enigma13 />
  </div>
  
</template>
<script>
import Enigma1 from './Enigma1'
import Enigma800 from './Enigma800'
import Enigma13 from './Enigma13'
import TextEnigma from './TextEnigma.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'',
      enigmeInput:'',
      authorizedEnigmas:['1','7','372', '800','104', '13'],
      enigmaToDisplay:''
    }
  },
  methods:{
    displayEnigma(){
      if(this.authorizedEnigmas.includes(this.enigmeInput)) {
        this.enigmaToDisplay = this.enigmeInput
        this.msg = ''
      } else {
        this.enigmaToDisplay = this.enigmeInput
        this.msg = "Ce numéro n'est pas autorisé."
      }
    }
  },
  components : {
    Enigma1,
    Enigma800,
    Enigma13,
    TextEnigma
}
}
</script>