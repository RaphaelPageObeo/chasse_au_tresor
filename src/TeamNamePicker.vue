<template>
  <div class="input-group mb-3  mt-3">
    <input id="team-name-input" type="text" class="form-control" placeholder="Saisir le nom de votre équipe ici..." 
        aria-label="Saisir le nom de votre équipe ici..." aria-describedby="team-name-input" v-model="value" 
        @keyup.enter="start">
    <button class="btn btn-secondary" type="button" id="button-team-name-input"
        @click="start" :disabled="value == ''">Allons-y!</button>
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