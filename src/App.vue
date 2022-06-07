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
    <GenericEnigma enigma-type = "select"
    enigma-title="Enigme 1 : Lien de Parenté" 
    enigma-text = "Vous vous dites ceci : 'Je suis un homme. Si le fils de cet autre homme est le père de mon fils, quel est le lien de parenté entre cet homme et moi?'"
    widget-prefix = "Cet homme est mon ... :"
    :select-options = "[
      {id: 'frère', label: 'Frère'},
      {id: 'père', label: 'Père'},
      {id: 'fils', label: 'Fils'},
      {id: 'grand-père', label: 'Grand Père'},
      {id: 'petit-fils', label: 'Petit Fils'},
      {id: 'oncle', label: 'Oncle'},
      {id: 'neveu', label: 'Neveu'},
    ]"
    answerString = "père"
    answerText = "Bonne réponse!
    Le père de mon fils = moi. Donc la phrase devient : ' Si le fils de cet homme c'est moi, quel est le lien de parenté entre cet homme et moi? '."/>
  </div>
  <div v-if="enigmaToDisplay == '7'">
    <GenericEnigma enigma-type = "text"
    enigma-title="Enigme 7 : Suite Logique" 
    enigma-text = "Quelle est la prochaine lettre de cette suite logique : "
    widget-prefix = "U D T Q C S S ..."
    answerString = "h"
    answerText = "Bonne réponse!
    Les termes de cette suite correspondent aux initiales des chiffres : << Un, Deux, Trois, Quatre, Cinq, Six, Sept ... >> "/>
  </div>
  <div v-if="enigmaToDisplay == '372'">
    <GenericEnigma enigma-type = "text"
    enigma-title="Enigme 372 : En manque d'air" 
    enigma-text = "Écrivez en toute lettre le chiffre manquant tout en conservant la cohérence de la phrase :"
    widget-prefix = "Dans cette phrase, le 'r' est présent "
    widget-suffix = "fois."
    answerString = "quatre"
    answerText = "Bonne réponse!
    Trois ne peut pas convenir, car il contient un R. Quatre convient alors."/>
  </div>
  <div v-if="enigmaToDisplay == '800'">    
  <GenericEnigma enigma-type = "select"
    enigma-title="Enigme 800 : Mot de passe" 
    enigma-text = "Un légat du pape souhaite assister à une réunion secrète tenue par les chevaliers cathares. Pour être admis, il doit donner le mot de passe au garde à l'entrée. Il se cache et écoute les personnes qui se présentent. <br>
        Un homme arrive.<br>
        Le garde lui dit : 'Cinq', l'homme répond 'Quatre'. Le garde le laisse entrer.<br>
        Un deuxième se présente. <br>
        Le garde lui dit : 'Six', il répond : 'Trois' et passe.<br>
        Un dernier paraît.<br>
        Le garde lui dit : 'Quatre', il répond 'Six' et entre.<br>
        Arrive le tour du légat du pape.<br>
        Le garde lui dit : 'Sept'."
    widget-prefix = "Que doit-il répondre pour pouvoir entrer?"
    :select-options = "[
      {id: '0', label: 'Zéro'},
      {id: '1', label: 'Un'},
      {id: '2', label: 'Deux'},
      {id: '3', label: 'Trois'},
      {id: '4', label: 'Quatre'},
      {id: '5', label: 'Cinq'},
      {id: '6', label: 'Six'},
      {id: '7', label: 'Sept'},
      {id: '8', label: 'Huit'},
      {id: '9', label: 'Neuf'},
      {id: '10', label: 'Dix'},
    ]"
    answerString = "4"
    answerText = "Bonne réponse!
    'Quatre' correspond au nombre de lettres du chiffre prononcé par le garde."/>
  </div>
  <div v-if="enigmaToDisplay == '104'">
    <GenericEnigma enigma-type = "text"
    enigma-title="Enigme 104 : Oeufs de Poules" 
    enigma-text = "Huit cents poules pondent en moyenne huit cents oeufs en huit jours."
    widget-prefix = "Combien d'oeufs pondent quatre cents poules en quatre jours? (en chiffres)"
    answerString = "200"
    answerText = "Bonne réponse! En effet, quatre cents poules pondent quatre cents oeufs en huit jours. Donc quatre cents poules pondent deux cents oeufs en quatre jours."/>
  </div>
  <div v-if="enigmaToDisplay == '13'">
    <GenericEnigma enigma-type = "image"
    enigma-title="Enigme 13 : Lettre en Rébus" 
    img-src = "Enigma13.jpg"
    widget-prefix = "Quelle expression se cache derrière ce dessin?"
    answerString = "plus de peur que de mal"
    answerText = "Bonne réponse!"/>
  </div>
  <div v-if="enigmaToDisplay == '172'">    
    <GenericEnigma enigma-type = "select"
      enigma-title="Enigme 172 : Quel jour?" 
      enigma-text = "Si nous ne sommes pas le lendemain de lundi ou le jour avant jeudi, que demain n'est pas dimanche, 
      que ce n'était pas dimanche hier et que le jour d'après demain n'est pas samedi, et que le jour avant hier n'était pas mercredi..."
      widget-prefix = "Quel jour sommes-nous?"
      :select-options = "[
        {id: 'lundi', label: 'Lundi'},
        {id: 'mardi', label: 'Mardi'},
        {id: 'mercredi', label: 'Mercredi'},
        {id: 'jeudi', label: 'Jeudi'},
        {id: 'vendredi', label: 'Vendredi'},
        {id: 'samedi', label: 'Samedi'},
        {id: 'dimanche', label: 'Dimanche'},
      ]"
      answerString = "dimanche"
      answerText = "Bonne réponse!"/>
  </div>
  <div v-if="enigmaToDisplay == '210'">
    <GenericEnigma enigma-type = "image"
    enigma-title="Enigme 210 : Lettre en Rébus 2" 
    img-src = "Enigma210.jpg"
    widget-prefix = "Quelle expression se cache derrière ce dessin?"
    answerString = "mettre les petits plats dans les grands"
    answerText = "Bonne réponse!"/>
  </div>
  <div v-if="enigmaToDisplay == '750'">
    <GenericEnigma enigma-type = "image"
    enigma-title="Enigme 750 : Cour d'honneur" 
    img-src = "Enigma750.jpg"
    enigma-text = "Cette figure représente le pavage d'une cour d'honneur."
    widget-prefix = "Combien comporte-t-elle de carrés au total? (en chiffre)"
    answerString = "30"
    answerText = "Bonne réponse! 
    Seize de taille 1x1 ; neuf de taille 2x2 ; quatre de taille 3x3 ; un de taille 4x4"/>
  </div>
</template>
<script>
import GenericEnigma from './GenericEnigma.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'',
      enigmeInput:'',
      authorizedEnigmas:['1','7','372', '800','104', '13', '172', '210', '750'],
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
    GenericEnigma
}
}
</script>