<template>
    <h2>
        Enigme 13 : Lettre en Rébus
    </h2>
    <img alt="Enigma13" src="./assets/Enigma13.jpg">
    <div>
        <label for="answer"><b>Quelle expression se cache derrière ce dessin?</b></label>
        <div>
            <input name="answer" id="answer" type="text" v-model="value">
            <button @click="validateAnswer">Valider</button>
        </div>
    </div>
    {{msg}}
</template>
<script>
export default {
    name : 'app-Enigma13',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value.trim().toLowerCase() == 'plus de peur que de mal') {
                this.msg = 'Bonne réponse!'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>