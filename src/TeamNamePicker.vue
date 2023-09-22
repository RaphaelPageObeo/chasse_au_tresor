<template>
  <div class="input-group mb-3  mt-3">
    <input id="team-name-input" type="text" class="form-control" placeholder="Saisir le nom de votre équipe ici..." 
        aria-label="Saisir le nom de votre équipe ici..." aria-describedby="team-name-input" v-model="value" 
        @keyup.enter="start">
    <button class="btn btn-secondary" type="button" id="button-team-name-input"
        @click="start" :disabled="value == ''">Allons-y!</button>
  </div>
  <div>
    <h2 class="d-flex justify-content-center">Principe du jeu</h2>
    <p>
      <b>1) Entrez votre nom d'équipe ci-dessus. </b> Une fois validé, le chronomètre se lance.
    </p>
    <p>
      <b>2) Résolvez l'énigme.</b> Celle-ci vous donnera un indice, qui vous mènera jusqu'à un code, caché quelque part dans la maison.
    </p>
    <p>
      <b>3) Entrez dans l'application le code ainsi trouvé.</b> Une nouvelle énigme s'affiche alors.
    </p>
    <p>
      <b>4) 10 énigmes sont à résoudre.</b>Le chronomètre s'arrêtera une fois la dernière énigme résolue. 
    </p>
    <p>
      <b class="bi bi-exclamation-triangle"> Chaque proposition incorrecte entrainera une pénalité.</b> Chaque pénalité ajoutera 1 minute au temps final.
    </p>
    <p>
      En cas de problèmes, un bouton en haut à gauche de l'écran vous donneront divers moyens de contacter le créateur de cette chasse au trésor.
    </p>
    <p>
      <b>Bonne chasse !</b>
    </p>
  </div>
</template>
<script>
export default {
  name : 'app-teamNamePicker',
  emits: ['start'],
  data() {
    return {
        value:'',
    }
  },
  methods:{
    start(){
      if(this.value != ''){
        this.$emit('start', this.value)
      }
    }
  }
}
</script>