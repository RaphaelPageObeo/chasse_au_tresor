<template>
    <h2>
        Enigme 7 : Suite Logique
    </h2>
    <div>
        Completez cette suite logique:
    </div>
    <div>
        <b>U D T Q C S S</b>
    </div>
  <div>
    <input type="text" v-model="value">
  </div>
    <div>
        <button @click="validateAnswer">Valider</button>
    </div>
    {{msg}}
</template>
<script>
export default {
    name : 'app-Enigma7',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value == 'h' || this.value == 'H') {
                this.msg = 'Bonne réponse!'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>