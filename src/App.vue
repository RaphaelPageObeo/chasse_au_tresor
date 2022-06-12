<template>
  <div class="container-fluid vh-100">
    <Header 
      :nbFailure="nbFailure"
      :completedEnigmasTitle="completedEnigmasTitle"
    ></Header>
    <div class="row app-background-style d-flex flex-column vh-100">
      <div class="col">
        <div class ="row">
          <div class="col">
            <div class="input-group mb-3  mt-3">
              <input type="text" class="form-control" placeholder="Numéro de l'énigme..." 
                  aria-label="Numéro de l'énigme..." aria-describedby="button-enigma-input" v-model="enigmaInput" 
                  @keyup.enter="displayEnigma()">
              <button class="btn btn-secondary bi bi-search" type="button" id="button-enigma-input"
                  @click="displayEnigma()"></button>
            </div>
          </div>
        </div>
        <div class ="row">
          <div v-if="msg != '' ">
            <h2 class="d-flex justify-content-center text-center">{{msg}}</h2>
          </div>
        </div>
        <div v-for="enigma in enigmas" :key="enigma.id">
          <div v-if="enigma.id == enigmaToDisplay">
            <GenericEnigma 
              @enigma-failure="incrementFailure"
              @enigma-success="enigmaSuccess"
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
      completedEnigmasTitle:[],
      enigmaToDisplay:'',
      nbFailure: 0,
      enigmas: enigmasData.enigmas,
      enigmaInput : ''
    }
  },
  mounted() {
    this.loadCookies()
  },
  methods:{
    displayEnigma(){
      if(this.authorizedEnigmas.includes(this.enigmaInput)) {
        this.enigmaToDisplay = this.enigmaInput
        this.msg = ''
      } else {
        this.enigmaToDisplay = this.enigmaInput
        this.msg = "Ce numéro n'est pas autorisé."
      }
    },
    incrementFailure(){
      this.nbFailure++
      this.$cookies.set("nbFailure",this.nbFailure)
    },
    enigmaSuccess(enigma){
      if(!this.completedEnigmasTitle.includes(enigma.title)) {
        this.completedEnigmasTitle.push(enigma.title)
        this.$cookies.set("completedEnigmasTitle", JSON.stringify(this.completedEnigmasTitle))
      }
    },
    loadCookies() {
      var nbFailureCookie = this.$cookies.get("nbFailure")
      if(nbFailureCookie != null) {
        this.nbFailure = nbFailureCookie
      }
      var completedEnigmasCookies = this.$cookies.get("completedEnigmasTitle")
      if(completedEnigmasCookies != null) {
        this.completedEnigmasTitle = JSON.parse(completedEnigmasCookies)
      }
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