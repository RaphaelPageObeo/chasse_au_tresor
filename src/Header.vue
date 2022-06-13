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
                        <h1 class="bi bi-person-heart" data-bs-toggle="modal" data-bs-target="#gameStatsModal"></h1>
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
        </div>
    </div>
    <GameStats 
        :nbFailure="nbFailure"
        :completedEnigmasTitle="completedEnigmasTitle"
        :startTime="startTime"
        :teamName="teamName"
        :endTime="endTime"
    />
</template>
<script>
import GameStats from './GameStats.vue'

export default {
    name : 'app-header',
    props : {
        nbFailure : Number,
        completedEnigmasTitle: Array,
        startTime : String,
        teamName:String,
        endTime:String
    },
    components : {
        GameStats
    }
}
</script>
<style>
    .header {
        background-color: #fec434;
    }
</style>