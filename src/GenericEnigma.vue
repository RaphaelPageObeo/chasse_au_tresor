<template>
    <h2>
        {{enigmaTitle}}
    </h2>
    <div v-html="enigmaText"></div>
    <img v-if="enigmaType =='image'" :src="require(`@/assets/${imgSrc}`)">
    <div>
        <b>{{widgetPrefix}}</b>
        <div v-if="enigmaType == 'text' || enigmaType =='image'">
            <input type="text" v-model="value">
        </div>
        <div v-if="enigmaType == 'select'">
            <select v-model="value">
                <option 
                v-for="option in selectOptions" 
                v-bind:value="option.id" 
                :key="option.id">
                    {{ option.label }}
                </option>
            </select> 
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
    emits: ['enigma-failure'],
    props : {
        imgSrc: String,
        enigmaType: String,
        enigmaTitle: String,
        enigmaText: String,
        widgetPrefix: String,
        widgetSuffix: String,
        answerString: String,
        answerText: String,
        selectOptions: []
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
                this.$emit('enigma-failure')
            }
        }
    }
}
</script>