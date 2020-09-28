<template>
    <div class="videoSection">
        <v-row no-gutters class="userDefine">
            <v-col md="9" sm="12" class="topCenter">
                <div class="bannerLeft">
                    <h2 class="title text-center"> La maroquinerie végétale du futur. Dès à présent.</h2>
                    <h4 class="subtitle text-center">Rencontre entre les traditions maroquinières francaises et nos
                        cuirs de
                        vin</h4>
                </div>
                <div class="row col-md-10 mx-auto text-center inner">
                    <div class="col-md-4">
                        <p><img src="../assets/images/ecological.svg" alt=""></p>
                        <span>Ecologique / Vegan</span>
                    </div>
                    <div class="col-md-4">
                        <p><img src="../assets/images/france.svg" alt=""></p>
                        <span>Made in France</span>
                    </div>
                    <div class="col-md-4">
                        <p><img src="../assets/images/tech.svg" alt=""></p>
                        <span>Technologie durable</span>
                    </div>
                </div>
                <div class="bottomleft">
                    {{$store.state.tree_count}} <span>arbres plantés</span> <br>
                    {{$store.state.co2_compensated}} <span>tonnes CO2 compensées</span> <br>
                    {{$store.state.reforest}} <span>hectares reforestés</span> <br>
                </div>
            </v-col>
            <v-col md="3" sm="12" class="bottomRight d-flex flex-column align-center justify-center">
                <p class="mt-3  title text-center">Avancement du projet</p>
                <div class="d-flex align-center justify-center w-100 position-relative">
                    <v-progress-circular
                            :rotate="-90"
                            :size="150"
                            :width="15"
                            :value="progressValue"
                            color="#0081a7"
                    >
                        {{progressValue}}%
                    </v-progress-circular>
                    <div class="progressHints d-none d-md-block">
                        Création <br> d’objets en 3D
                    </div>
                </div>

                <p class="text-white pb-3 px-4 text-justify bottomText">
                    Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse
                    mail pour planter un arbre et rester au courant de l’avancée du projet.
                </p>
                <div class="form">
                    <form action="" class="d-flex flex-column px-4">
                        <input type="text" class="form-theme text-uppercase" placeholder="PRENOM ">
                        <input type="text" class="form-theme text-uppercase" placeholder="EMAIL ">
                        <button  id="jePlanetBtn" class="btn-theme">
                            Je plante un arbre gratuitement
                        </button>
                    </form>
                </div>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "video-section",
        data() {
            return {
                interval: {},
                progressValue: 0,
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            setInterval(() => {
                this.progressValue = 30
            }, 3000)
        },
    }
</script>

<style scoped lang="scss">

    .videoSection {
        color: #fff;
        padding-top: 50px;
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

        .userDefine {
            height: inherit;

           @media(max-width: 425px){
               .topCenter,.bottomRight  {
                   max-width: 100%;
                   flex: 0 0 100%;
               }
           }
        }

        @media(max-width: 768px) {
            height: auto;
        }

        .bannerLeft {
            margin-top: 40px;

            .title {
                padding-bottom: 20px;
                font-size: 40px !important;
                color: white;
                letter-spacing: -.009em;
                font-family: 'teradeli-medium', sans-serif !important;
                line-height: 1 !important;
                transition: all .3s cubic-bezier(.39, .575, .565, 1);
                @media(max-width: 768px) {
                    width: 80%;
                    text-align: center !important;
                    margin: 0 auto;
                }
            }

            .subtitle {
                letter-spacing: .004em;
                font-family: 'teradeli-light', sans-serif !important;
                color: #fff;
                line-height: 1.10722 !important;
                transition: all .3s cubic-bezier(.39, .575, .565, 1);
                padding-bottom: 20px;
                font-size: 23px !important;
                @media(max-width: 768px) {
                    width: 80%;
                    text-align: center !important;
                    margin: 0 auto;
                }
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

            span {
                font-size: 18px;
                opacity: 0.7;
                color: #fff;
            }
        }

        .bottomleft {
            font-size: 19px;
            padding: 30px;
            position: absolute;
            bottom: 0;

            span {
                color: #888;
            }

            @media(max-width: 768px) {
                display: none;
            }
        }

        .bottomRight {
            font-family: 'teradeli-book', sans-serif !important;
            border-left: 1px solid #fff;

            .bottomText {
                margin-top: 65px;
                font-size: 14px;
                @media(max-width:1024px){
                    margin-top: 40px;
                }
                @media(max-width: 768px) {
                    width: 60%;
                    margin: 15px auto;
                    text-align: center !important;
                }
            }

            .progress {
                height: 150px;
                margin-top: 25px;
                width: 150px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                background: #FFF;
                margin-left: auto;
                margin-right: auto;
            }

            .progressHints {
                text-align: center;
                position: absolute;
                right: 15px;
                font-size: 13px;
                bottom: 53%;
            }

            .title {
                color: #fff;
                line-height: 1.10722 !important;
                font-size: 20px;
            }
        }
    }

    .form{
        @media(max-width: 768px){
            background: radial-gradient(circle at 50% 45%,#292929 0%,#0a0a0a 100%);
            padding: 40px 17%;
            width: 100%;
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