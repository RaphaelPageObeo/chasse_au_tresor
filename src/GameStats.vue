<template>
    <div class="modal fade game-stats-background-style" id="gameStatsModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>Statistiques du jeu</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <b>Nom de l'équipe</b>
                    <p v-if="teamName != ''">{{teamName}}</p>
                    <p v-else>Pas encore de nom d'équipe</p>
                    <b>Début de la partie</b>
                    <p v-if="startTime != ''">{{new Date(startTime).toLocaleTimeString('en-FR')}}</p>
                    <p v-else>La chasse n'a pas encore été lancée</p>
                    <b>Fin de la partie</b>
                    <p v-if="endTime != ''">{{new Date(endTime).toLocaleTimeString('en-FR')}}</p>
                    <p v-else>La chasse n'est pas terminée</p>
                    <b>Nombre d'erreurs</b>
                    <p>{{nbFailure}}</p>
                    <b>Nombre d'énigmes accomplies</b>
                    <p>{{completedEnigmasId.length}} / 10</p>
                    <b>Temps total (durée de la partie + pénalités)</b>
                    <p>{{computeDuration()}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'app-gameStats',
        props : {
            nbFailure : Number,
            completedEnigmasId: Array,
            startTime : String,
            teamName : String,
            endTime : String
        },
        data() {
            return {
                totalTime:'',
            }
        },
        methods:{
            computeDuration(){
                if(this.startTime == '' || this.endTime == ''){
                    return "La chasse n'est pas terminée"
                }
                const startDate = new Date(this.startTime)
                const endDate = new Date(this.endTime)
                var hours = parseInt(Math.abs(endDate - startDate) / (1000 * 60 * 60) % 24)
                var minutes = parseInt(Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60) % 60)
                var seconds = parseInt(Math.abs(endDate.getTime() - startDate.getTime()) / (1000) % 60)

                minutes = minutes + parseInt(this.nbFailure)

                while(minutes >= 60) {
                    hours = hours + 1
                    minutes =  minutes - 60
                }
                
                return this.formatNumber(hours) + ":" + this.formatNumber(minutes) + ":" +  this.formatNumber(seconds)
            },
            formatNumber(number){
                var numString = number.toString()
                if(numString.length < 2) {
                    return "0" + numString
                } else {
                    return numString
                }
            }
        }
    }
</script>
<style>
    .modal-content {
        background-color: #f2f2f2;
        color: #404040
    }
</style>