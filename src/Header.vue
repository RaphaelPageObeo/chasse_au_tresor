<template>
    <div class="row header text-white">
        <div class="col">
            <div class ="row">
                <div class="col-1">
                </div> 
                <div class="col-10">
                    <h1 class="d-flex justify-content-center text-center">CHASSE À L'AMUUUR</h1>
                </div>
                <div class="col-1">
                    <div class="d-flex justify-content-end">
                        i
                    </div>
                </div>   
            </div>
            <div class ="row">
                <div class = "col">
                    <div class="d-flex justify-content-center">
                        <img src="./assets/kissKiss.png" class="img-fluid" alt="Responsive image">
                    </div>
                </div>
            </div>
            <div class ="row">
                <div class="col">
                    <div class="d-flex justify-content-center">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Numéro de l'énigme..." 
                                aria-label="Numéro de l'énigme..." aria-describedby="button-enigma-input" v-model="enigmaInput" 
                                @keyup.enter="$emit('display-enigma', enigmaInput)">
                            <button class="btn btn-secondary bi bi-search" type="button" id="button-enigma-input"
                                @click="$emit('display-enigma', enigmaInput)"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name : 'app-header',
    emits: ['display-enigma'],
    data() {
        return {
            enigmaInput:'',
        }
    },
}
</script>
<style>
    .header {
        background-color: #fec434;
    }
</style>