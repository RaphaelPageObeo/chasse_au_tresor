<template>
    <h2>
        Enigme 372 : En manque d'air
    </h2>
    <div>
        Écrivez en toute lettre le chiffre manquant tout en conservant la cohérence de la phrase :
    </div>
    <div>
        <b>Dans cette phrase, le 'r' est présent </b>
        <input type="text" v-model="value">
        <b> fois.</b>
    </div>
  <div>
  </div>
    <div>
        <button @click="validateAnswer">Valider</button>
    </div>
    {{msg}}
</template>
<script>
export default {
    name : 'app-Enigma372',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value.trim().toLowerCase() == 'quatre') {
                this.msg = 'Bonne réponse!'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>