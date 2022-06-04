<template>
    <div>
        Lien de Parenté
    </div>
    <div>
        Vous vous dites ceci : <br>
        "Je suis un homme. Si le fils de cet autre homme est le père de mon fils, quel est le lien de parenté entre cet homme et moi?"
    </div>
    <div>
        <label for="answer">Cet homme est mon ... :</label>

        <select v-model="value" name="answer" id="answer">
            <option value="frère">Frère</option>
            <option value="père">Père</option>
            <option value="fils">Fils</option>
            <option value="grand-père">Grand Père</option>
            <option value="petit-fils">Petit Fils</option>
            <option value="oncle">Oncle</option>
            <option value="neveu">Neveu</option>
        </select> 
    </div>
    <div>
        <button @click="validateAnswer">Valider</button>
    </div>
    {{msg}}
</template>
<script>
export default {
    name : 'app-Enigma1',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value == 'père') {
                this.msg = 'Bonne réponse!'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>