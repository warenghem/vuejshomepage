<template>
    <div class="productSection">
        <v-row no-gutters>
            <v-col cols="9" md="9" sm="12">
                <div class="bannerLeft">
                    <h2 class="title text-center"> La maroquinerie végétale du futur. Dès à présent.</h2>
                    <h4 class="subtitle text-center">Rencontre entre les traditions maroquinières francaises et nos
                        cuirs de
                        vin</h4>
                </div>
                <div class="row col-md-10 mx-auto text-center inner">
                    <div class="col-md-4">
                        <p> <img src="../assets/images/ecological.svg"> </p>
                        <span>Ecologique / Vegan</span>
                    </div>
                    <div class="col-md-4">
                        <p> <img src="../assets/images/france.svg"> </p>
                        <span>Made in France</span>
                    </div>
                    <div class="col-md-4">
                        <p> <img src="../assets/images/tech.svg">  </p>
                        <span>Technologie durable</span>
                    </div>
                </div>
                <div class="bottomleft">
                    4 <span>arbres plantés</span> <br>
                    0.92 <span>tonnes CO2 compensées</span> <br>
                    0.004 <span>hectares reforestés</span> <br>
                </div>
            </v-col>
            <v-col cols="3" md="3" sm="12"> wqeqweqwe</v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "product-section"
    }
</script>

<style scoped lang="scss">

    .productSection {
        color: #fff;
        padding: 80px 0;
        position: relative;
        top: -51px;
        height: 100vh;
        animation-name: changeBg;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-delay: 0.1s;
        background-size: cover;
        background-repeat: no-repeat;
        transition: background-image 0.4s ease-in-out;
        background-position: 50% 0%;

        .bannerLeft {
            .title {
                padding-bottom: 20px;
                font-size: 40px !important;
                color: white;
                letter-spacing: -.009em;
                font-family: 'teradeli-medium', sans-serif !important;
                line-height: 1 !important;
                transition: all .3s cubic-bezier(.39, .575, .565, 1);
            }
            .subtitle {
                letter-spacing: .004em;
                font-family: 'teradeli-light', sans-serif !important;
                color: #fff;
                line-height: 1.10722 !important;
                transition: all .3s cubic-bezier(.39, .575, .565, 1);
                padding-bottom: 20px;
                font-size: 23px !important;
            }
        }
        .inner {
            color: grey;
            img {
                width: 30px;
                margin: 0 auto;
                display: block;
                opacity: 0.7;
            }
            span{
                font-size: 18px;
                opacity: 0.7;
                color: #fff;
            }
        }
        .bottomleft{
            font-size: 19px;
            padding: 30px;
            position: absolute;
            bottom: 0;
            span{
                color: #888;
            }
        }
    }

    @keyframes changeBg {
        0% {
            background-image: url("../assets/images/banner2.jpg");
        }
        10% {
            background-image: url("../assets/images/banner2.jpg");
        }
        20% {
            background-image: url("../assets/images/banner1.jpg");
        }
        30% {
            background-image: url("../assets/images/banner1.jpg");
        }
        40% {
            background-image: url("../assets/images/banner1.jpg");
        }
        50% {
            background-image: url("../assets/images/banner2.jpg");
        }
        60% {
            background-image: url("../assets/images/banner2.jpg");
        }
        70% {
            background-image: url("../assets/images/banner2.jpg");
        }
        80% {
            background-image: url("../assets/images/banner1.jpg");
        }
        90% {
            background-image: url("../assets/images/banner1.jpg");
        }
        100% {
            background-image: url("../assets/images/banner1.jpg");
        }

    }

</style>