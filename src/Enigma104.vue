<template>
    <h2>
        Enigme 104 : Oeufs de Poules
    </h2>
    <div>
        Huit cents poules pondent en moyenne huit cents oeufs en huit jours. <br>
    </div>
    <div>
        <label for="answer"><b>Combien d'oeufs pondent quatre cents poules en quatre jours? (en chiffres)</b></label>
        <div>
            <input name="answer" id="answer" type="text" v-model="value">
        </div>
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
    name : 'app-Enigma104',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value == '200') {
                this.msg = 'Bonne réponse! En effet, quatre cents poules pondent quatre cents oeufs en huit jours. Donc quatre cents poules pondent deux cents oeufs en quatre jours.'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>