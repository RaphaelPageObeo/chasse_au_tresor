<template>
  <div class="container-fluid vh-100">
    <Header @display-enigma="displayEnigma"></Header>
    <div class="row app-background-style d-flex flex-column vh-100">
      <div class="col">
        <div v-if="msg != '' ">
          <h2 class="d-flex justify-content-center text-center">{{msg}}</h2>
        </div>
        <div v-for="enigma in enigmas" :key="enigma.id">
          <div v-if="enigma.id == enigmaToDisplay">
            <GenericEnigma 
              @enigma-failure="incrementFailure"
              :enigma="enigma"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GenericEnigma from './GenericEnigma.vue'
import Header from './Header.vue'
import enigmasData from './data/Enigmas.json'

export default {
  name: 'App',
  data() {
    return {
      msg:'',
      authorizedEnigmas:['1','7','372', '800','104', '13', '172', '210', '750', '143'],
      enigmaToDisplay:'',
      nbFailure: 0,
      enigmas: enigmasData.enigmas
    }
  },
  mounted() {
    this.loadCookies()
    this.loadEnigmas()
  },
  methods:{
    displayEnigma(enigmaCode){
      if(this.authorizedEnigmas.includes(enigmaCode)) {
        this.enigmaToDisplay = enigmaCode
        this.msg = ''
      } else {
        this.enigmaToDisplay = enigmaCode
        this.msg = "Ce numéro n'est pas autorisé."
      }
    },
    incrementFailure(){
      this.nbFailure++
      this.$cookies.set("nbFailure",this.nbFailure)
    },
    loadCookies() {
      var nbFailureCookie = this.$cookies.get("nbFailure")
      if(nbFailureCookie != null) {
        this.nbFailure = nbFailureCookie
      } else {
        this.nbFailure = 0 
      }
    },
    loadEnigmas() {

    }
  },
  components : {
    GenericEnigma,
    Header
}
}
</script>
<style>
  .app-background-style{
    background-color: #f2f2f2;
    color: #404040
  }
</style>