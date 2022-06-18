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
                    <p v-if="startTime != ''">{{startTime}}</p>
                    <p v-else>La chasse n'a pas encore été lancée</p>
                    <b>Fin de la partie</b>
                    <p v-if="endTime != ''">{{endTime}}</p>
                    <p v-else>La chasse n'est pas terminée</p>
                    <b>Nombre d'erreurs</b>
                    <p>{{nbFailure}}</p>
                    <b>Nombre d'énigmes accomplies</b>
                    <p>{{completedEnigmasTitle.length}} / 10</p>
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
            completedEnigmasTitle: Array,
            startTime : String,
            teamName : String,
            endTime : String
        },
    }
</script>
<style>
    .modal-content {
        background-color: #f2f2f2;
        color: #404040
    }
</style>