<template>
    <h2>
        {{enigmaTitle}}
    </h2>
    <div>
        {{enigmaText}}
    </div>
    <div>
        <b>{{widgetPrefix}}</b>
        <div>
            <input type="text" v-model="value" id="answer" name="answer">
        </div>
        <b>{{widgetSuffix}}</b>
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
    name : 'app-textEnigma',
    props : {
        enigmaTitle: String,
        enigmaText: String,
        widgetPrefix: String,
        widgetSuffix: String,
        answerString: String,
        answerText: String
    },
    data() {
        return {
            msg:'',
            value:''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value.trim().toLowerCase() == this.answerString) {
                this.msg = this.answerText
            } else {
                this.msg = 'Mauvaise réponse :('
            }
        }
    }
}
</script>