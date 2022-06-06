<template>
    <h2>
        Enigme 800 : Mot de passe
    </h2>
    <div>
        Un légat du pape souhaite assister à une réunion secrète tenue par les chevaliers cathares. Pour être admis, il doit donner le mot de passe au garde à l'entrée. Il se cache et écoute les personnes qui se présentent. <br>
        Un homme arrive.<br>
        Le garde lui dit : "Cinq", l'homme répond "Quatre". Le garde le laisse entrer.<br>
        Un deuxième se présente. <br>
        Le garde lui dit : "Six", il répond : "Trois" et passe.<br>
        Un dernier paraît.<br>
        Le garde lui dit : "Quatre", il répond "Six" et entre.<br>
        Arrive le tour du légat du pape.<br>
        Le garde lui dit : "Sept".
    </div>
    <div>
        <label for="answer"><b>Que doit-il répondre pour pouvoir entrer?</b></label>

        <select v-model="value" name="answer" id="answer">
            <option value="0">Zéro</option>
            <option value="1">Un</option>
            <option value="2">Deux</option>
            <option value="3">Trois</option>
            <option value="4">Quatre</option>
            <option value="5">Cinq</option>
            <option value="6">Six</option>
            <option value="7">Sept</option>
            <option value="8">Huit</option>
            <option value="9">Neuf</option>
            <option value="10">Dix</option>
        </select> 
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
    name : 'app-Enigma800',
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value == '4') {
                this.msg = 'Bonne réponse!'
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>