<template>
    <h2 class="d-flex justify-content-center">{{enigmaTitle}}</h2>
    <p v-html="enigmaText"></p>
    <div class="d-flex justify-content-center">
        <img v-if="enigmaType =='image'" :src="require(`@/assets/${imgSrc}`)">
    </div>
    <div>
        <p class="fw-bold">{{widgetPrefix}}</p>
        <div v-if="enigmaType == 'text' || enigmaType =='image'">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="..." 
                    aria-label="..." aria-describedby="button-enigma-input" v-model="value" 
                    @keyup.enter="validateAnswer">
                <button class="btn btn-secondary bi bi-arrow-return-left" type="button" id="button-enigma-input"
                    @click="validateAnswer"></button>
            </div>
        </div>
        <div v-if="enigmaType == 'select'">
            <select class="form-select" v-model="value">
                <option v-for="option in selectOptions" 
                    v-bind:value="option.id" 
                    :key="option.id">
                    {{ option.label }}
                </option>
            </select> 
        </div>
        <p class="fw-bold">{{widgetSuffix}}</p>
    </div>
    <div v-if="enigmaType == 'select'">
        <button class="btn btn-secondary" @click="validateAnswer">Valider</button>
    </div>
    <p class="fw-bold">{{msg}}</p> 
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