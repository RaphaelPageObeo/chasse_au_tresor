<template>
  <div class="container-fluid vh-100">
    <Header 
      :nbFailure="nbFailure"
      :completedEnigmasId="completedEnigmasId"
      :startTime="startTime"
      :teamName="teamName"
      :endTime="endTime"
    ></Header>
    <div class="row app-background-style d-flex flex-column vh-100">
      <div class="col">
        <div class ="row">
          <div class="col">
            <div v-if="teamName==''">
              <TeamNamePicker 
                @start="start"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div v-for="enigma in enigmas" :key="enigma.id">
              <div v-if="teamName != '' && enigma.id == enigmaToDisplay"> 
                <div v-if="completedEnigmasId.length >= enigma.order"> 
                  <GenericEnigma 
                    @enigma-failure="incrementFailure"
                    @enigma-success="enigmaSuccess"
                    :enigma="enigma"
                    :solved="completedEnigmasId.includes(enigma.id)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class ="row">
          <div class="col">
            <div v-if="completedEnigmasId.length!=0 && completedEnigmasId.length < this.maxEnigma && completedEnigmasId.includes(enigmaToDisplay)" class="input-group mb-3  mt-3">
              <input type="text" class="form-control" placeholder="Code de l'énigme..." 
                  aria-label="Code de l'énigme..." aria-describedby="button-enigma-input" v-model="enigmaInput" 
                  @keyup.enter="displayEnigma()">
              <button class="btn btn-secondary bi bi-search" type="button" id="button-enigma-input"
                  @click="displayEnigma()"></button>
            </div>
          </div>
        </div>
        <div class ="row">
          <div class="col">
            <div v-if="msg != '' ">
              <h2 class="d-flex justify-content-center text-center">{{msg}}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GenericEnigma from './GenericEnigma.vue'
import Header from './Header.vue'
import TeamNamePicker from './TeamNamePicker.vue'
import enigmasData from './data/Enigmas.json'

export default {
  name: 'App',
  data() {
    return {
      msg:'',
      completedEnigmasId:[],
      enigmaToDisplay:'v7zo6',
      nbFailure: 0,
      enigmas: enigmasData.enigmas,
      enigmaInput : '',
      teamName : "",
      startTime : "",
      endTime : "",
      maxEnigma : 10
    }
  },
  mounted() {
    this.loadCookies()
  },
  methods:{
    displayEnigma(){
      var input = this.enigmaInput.trim().toLowerCase()
      const enigma = this.enigmas
        .find(enigma => enigma.id == input)

      if(enigma != undefined) {
        if(this.completedEnigmasId.length >= enigma.order){
          this.enigmaToDisplay = input
          this.enigmaInput = ''
          this.msg = ''
          this.$cookies.set("enigmaToDisplay",this.enigmaToDisplay)
        } else {
          this.msg = "Vous n'avez pas encore accès à cette énigme."
        }
      } else {
        this.msg = "Ce numéro n'est pas autorisé."
      }
    },
    incrementFailure(){
      this.nbFailure++
      this.$cookies.set("nbFailure",this.nbFailure)
    },
    enigmaSuccess(enigma){
      if(!this.completedEnigmasId.includes(enigma.id)) {
        this.completedEnigmasId.push(enigma.id)
        this.$cookies.set("completedEnigmasId", JSON.stringify(this.completedEnigmasId))
      }
      if(this.completedEnigmasId.length == this.maxEnigma) {
        this.stop()
      }
    },
    loadCookies() {
      var nbFailureCookie = this.$cookies.get("nbFailure")
      if(nbFailureCookie != null) {
        this.nbFailure = nbFailureCookie
      }
      var completedEnigmasCookie = this.$cookies.get("completedEnigmasId")
      if(completedEnigmasCookie != null) {
        this.completedEnigmasId = JSON.parse(completedEnigmasCookie)
      }
      var startTimeCookie = this.$cookies.get("startTime")
      if(startTimeCookie != null) {
        this.startTime = startTimeCookie
      }
      var endTimeCookie = this.$cookies.get("endTime")
      if(endTimeCookie != null) {
        this.endTime = endTimeCookie
      }
      var enigmaToDisplayCookie = this.$cookies.get("enigmaToDisplay")
      if(enigmaToDisplayCookie != null) {
        this.enigmaToDisplay = enigmaToDisplayCookie
        this.enigmaInput = enigmaToDisplayCookie
      }
      var teamNameCookie = this.$cookies.get("teamName")
      if(teamNameCookie != null) {
        this.teamName = teamNameCookie
      }
    },
    start(teamName){
      this.teamName = teamName
      this.startTime = new Date()
      this.$cookies.set("startTime",this.startTime)
      this.$cookies.set("teamName",this.teamName)
    },
    stop(){
      this.endTime = new Date()
      this.$cookies.set("endTime",this.endTime)
    },
  },
  components : {
    GenericEnigma,
    Header,
    TeamNamePicker
  }
}
</script>
<style>
  .app-background-style{
    background-color: #f2f2f2;
    color: #404040
  }
</style>