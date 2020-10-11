<template>
    <div>
        <div class="d-flex justify-center border-top-2 align-center flex-column flex-md-row py-5">
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/Label-Tech-white.png" width="200px" alt=""></v-img>
                </a>
            </div>
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/label-co2-website.png" width="200px" alt=""></v-img>
                </a>
            </div>
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/PETAapproved.png" width="200px" alt=""></v-img>
                </a>
            </div>
        </div>
        <div class="whole-footer border-top-2">
            <div class="insta-row border-left-2 border-right-2">
                <h3 class="ins-subtitle">INSTAGRAM</h3>
                <h2 class="ins-title">WARENGHEM LIVE</h2>
                <div id="instaFeed" style="transform: translateY(6px);"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-footer",

        data() {
            return {}

        },
    }
</script>

<style scoped lang="scss">
    .insta-row {
        max-width: 1440px;
        margin: 0 auto !important;
        padding-left: 1em;
        padding-right: 1em;
        @media (min-width: 767px) {
            padding-top: 2.5rem !important;
        }
    }

    .ins-subtitle {
        font-family: 'teradeli-light',sans-serif;
        font-size: 22px;
        font-weight: 200;
    }

    .ins-title {
        font-family: 'teradeli-medium',sans-serif;
        line-height: 1;
        font-size: 2.125rem;
        text-transform: capitalize;
    }

</style>