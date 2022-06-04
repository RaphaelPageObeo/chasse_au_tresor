<template>
  <div>
    <label for="name">Numéro de l'énigme:</label>
  </div>
  <div>
    <input type="text" v-model="enigmeInput">
  </div>
  <div>
    <button @click="displayEnigma">Valider</button>
  </div>
  <div v-if="msg != '' ">
    {{msg}}
  </div>
  <div v-if="enigmaToDisplay == '1'">
    <Enigma1 />
  </div>
  
</template>
<script>
import Enigma1 from './Enigma1'

export default {
  name: 'App',
  data() {
    return {
      msg:'',
      enigmeInput:'',
      authorizedEnigmas:['1'],
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
    Enigma1
  }
}
</script>