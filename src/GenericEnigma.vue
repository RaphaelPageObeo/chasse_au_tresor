<template>
    <h2 class="d-flex justify-content-center">{{enigma.title}}</h2>
    <p v-html="enigma.text"></p>
    <div class="d-flex justify-content-center">
        <img v-if="enigma.type =='image'" :src="require(`@/assets/${enigma.imgSrc}`)">
    </div>
    <div>
        <p class="fw-bold">{{enigma.prefix}}</p>
        <div v-if="enigma.type == 'text' || enigma.type =='image'">
            <div class="input-group mb-3" :disabled="solved">
                <input type="text" class="form-control" placeholder="Saisir votre réponse ici..." 
                    aria-label="Saisir votre réponse ici..." aria-describedby="button-enigma-input" v-model="value" 
                    @keyup.enter="validateAnswer"  :disabled="solved">
                <button class="btn btn-secondary bi bi-arrow-return-left" type="button" id="button-enigma-input"
                    @click="validateAnswer"  :disabled="solved"></button>
            </div>
        </div>
        <div v-if="enigma.type == 'select'">
            <select class="form-select" v-model="value"  :disabled="solved">
                <option v-for="option in enigma.options" 
                    v-bind:value="option.id" 
                    :key="option.id">
                    {{ option.label }}
                </option>
            </select> 
        </div>
        <p class="fw-bold">{{enigma.suffix}}</p>
    </div>
    <div v-if="enigma.type == 'select'"  >
        <button class="btn btn-secondary" @click="validateAnswer" :disabled="solved">Valider</button>
    </div>
    <p class="fw-bold">{{msg}}</p>
     <div v-if="this.solved">
        <h2 class="d-flex justify-content-center">Où trouver le prochain code?</h2>
        <p v-html="enigma.clue"></p>
     </div>
</template>
<script>
export default {
    name : 'app-textEnigma',
    emits: ['enigma-failure', 'enigma-success'],
    props : {
        enigma: Object,
        solved:Boolean
    },
    data() {
        return {
            value: this.solved ? this.enigma.answer : '',
            msg: this.solved ? this.enigma.answerText : ''
        }
    },
    methods:{
        validateAnswer(){
            if(this.value.trim().toLowerCase() == this.enigma.answer) {
                this.msg = this.enigma.answerText
                this.$emit('enigma-success', this.enigma)
            } else {
                this.msg = 'Mauvaise réponse :('
                this.$emit('enigma-failure')
            }
        }
    }
}
</script>