<template>
    <div class="row header text-white">
        <div class="col">
            <div class ="row">
                <div class="col-1">
                    <div class="d-flex justify-content-start">
                        <h1 class="bi bi-info-lg" data-bs-toggle="modal" data-bs-target="#informationsModal"></h1>
                    </div>
                </div> 
                <div class="col-10">
                    <h1 class="d-flex justify-content-center text-center">Crémaillère du chateau Pulco</h1>
                </div>
                <div class="col-1">
                    <div class="d-flex justify-content-end">
                        <h1 class="bi bi-person-heart" data-bs-toggle="modal" data-bs-target="#gameStatsModal"></h1>
                    </div>
                </div>   
            </div>
            <div class ="row">
                <div class = "col">
                    <div class="d-flex justify-content-center">
                        <img src="./assets/header.png" class="img-fluid" alt="Les hôtes">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Informations/>
    <GameStats 
        :nbFailure="nbFailure"
        :completedEnigmasId="completedEnigmasId"
        :startTime="startTime"
        :teamName="teamName"
        :endTime="endTime"
    />
</template>
<script>
import GameStats from './GameStats.vue'
import Informations from './Informations.vue'

export default {
    name : 'app-header',
    props : {
        nbFailure : Number,
        completedEnigmasId: Array,
        startTime : String,
        teamName:String,
        endTime:String
    },
    components : {
        GameStats,
        Informations
    }
}
</script>
<style>
    .header {
        background-color: #fec434;
    }
</style>