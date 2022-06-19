<template>
    <div class="modal fade game-stats-background-style" id="informationsModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>Informations</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Bloqués sur une énigme? Une question?</p>
                    <p>Appellez le<br>
                    <b>07 77 26 93 61</b></p>
                    <p>Ou demandez <b>Raphaël Pagé</b> et <b>Caroline Schkeeper</b></p>
                    <div class="d-flex justify-content-center">
                        <img src="./assets/TheBBS.png" class="img-fluid" alt="Bisous Margaux et Loréna">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'app-informations',
    }
</script>
<style>
    .modal-content {
        background-color: #f2f2f2;
        color: #404040
    }
</style>