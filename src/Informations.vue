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
                    <p>Appellez le :<br>
                    <b>07 77 26 93 61</b></p>
                    <p>Ou demandez <b>Raphaël Pagé</b> et <b>Caroline Schkeeper</b></p>
                    <div class="d-flex justify-content-center">
                        <img src="./assets/TheBBS.png" class="img-fluid" alt="Bisous Margaux et Loréna">
                    </div>
                    <p><b>Rappel des règles</b></p>
                    <p><b>1) Résolvez l'énigme affichée.</b> Celle-ci vous donnera un indice, qui vous mènera jusqu'à un code, caché quelque part dans le manoir.</p>
                    <p><b>2) Entrez dans l'application le code ainsi trouvé.</b></p>
                    <p><b>3) 10 énigmes sont à résoudre.</b> Les trois équipes les plus rapides seront récompensées d'un lot ! Le chronomètre s'arrêtera une fois la dernière énigme résolue.</p> 
                    <p><b class="bi bi-exclamation-triangle"> Chaque proposition incorrecte entrainera une pénalité.</b> Chaque pénalité ajoutera 1 minute au temps final.</p>
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