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
    <Enigma7 />
  </div>
  <div v-if="enigmaToDisplay == '372'">
    <Enigma372 />
  </div>
  <div v-if="enigmaToDisplay == '800'">
    <Enigma800 />
  </div>
  <div v-if="enigmaToDisplay == '104'">
    <Enigma104 />
  </div>
  <div v-if="enigmaToDisplay == '13'">
    <Enigma13 />
  </div>
  
</template>
<script>
import Enigma1 from './Enigma1'
import Enigma7 from './Enigma7'
import Enigma372 from './Enigma372'
import Enigma800 from './Enigma800'
import Enigma104 from './Enigma104'
import Enigma13 from './Enigma13'

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
    Enigma7,
    Enigma372,
    Enigma800,
    Enigma104,
    Enigma13
  }
}
</script>