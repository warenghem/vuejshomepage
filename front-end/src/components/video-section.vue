<template>
    <div>
        <div class="videoSection">
            <div class="homepage-slider-background" ref="backgroundImg">
                <div class="homepage-slider-background-item active activeNew"
                     data-direction="top"
                     :style="{'background-image': 'url(' + require('../assets/images/banner1.jpg') + ')'}"
                     data-idx="1"
                >
                </div>
                <div class="homepage-slider-background-item"
                     :style="{'background-image': 'url(' + require('../assets/images/banner2.jpg') + ')'}"
                     data-direction="right"
                     data-idx="2"
                >
                </div>
            </div>
            <v-row no-gutters class="homepage-slider-content">
                <v-col md="9" class="topCenter my-auto">
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
                </v-col>
                <v-col md="3" class="bottomRight d-none d-md-block">
                    <div class="d-flex flex-column align-center justify-center h-100">
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
                            Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre
                            addresse
                            mail pour planter un arbre et rester au courant de l’avancée du projet.
                        </p>
                        <div class="form" id="formSection">
                            <form action="" class="d-flex flex-column px-4">
                                <input type="text" class="form-theme text-uppercase" placeholder="PRENOM ">
                                <input type="text" class="form-theme text-uppercase" placeholder="EMAIL ">
                                <button id="jePlanetBtn" class="btn-theme">
                                    Je plante un arbre gratuitement
                                </button>
                            </form>
                        </div>
                    </div>


                </v-col>
                <div class="bottomleft">
                    {{$store.state.tree_count}} <span>arbres plantés</span> <br>
                    {{$store.state.co2_compensated}} <span>tonnes CO2 compensées</span> <br>
                    {{$store.state.reforest}} <span>hectares reforestés</span> <br>
                </div>
            </v-row>
        </div>
        <div class="d-md-none form-md" >
            <p class="white--text">Avancement du projet</p>
            <v-progress-linear
                    :height="16"
                    :value="progressValue"
                    color="#0081a7"
                    background-color="white"
                    rounded
            >
                <span style="font-size: 12px">{{progressValue}}%</span>
            </v-progress-linear>

            <p class="text-white py-2 text-justify bottomText">
                Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse
                mail pour planter un arbre et rester au courant de l’avancée du projet.
            </p>
            <form action="" class="d-flex flex-column" id="formSection2">
                <input type="text" class="form-theme text-uppercase" placeholder="PRENOM ">
                <input type="text" class="form-theme text-uppercase" placeholder="EMAIL ">
                <button id="jePlanetBtn2" class="btn-theme">
                    Je plante un arbre gratuitement
                </button>
            </form>
        </div>
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
            }, 3000);
            changeBackground();

            function changeBackground() {
                var activeIndex = parseInt(document.querySelector(".homepage-slider-background-item.active").getAttribute('data-idx'));
                var previousIndex = 0;
                var nextIndex = 0;
                if (activeIndex === 1) {
                    previousIndex = 2;
                } else {
                    previousIndex = activeIndex - 1;
                }
                if (activeIndex === 2) {
                    nextIndex = 1;
                } else {
                    nextIndex = activeIndex + 1;
                }
                document.querySelector(".homepage-slider-background-item[data-idx='" + previousIndex + "']").classList.remove("activeNew");

                // Set Next Direction
                var direction = document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").getAttribute("data-direction");
                switch (direction) {
                    case "right":
                        document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "bottom");
                        break;
                    case "bottom":
                        document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "left");
                        break;
                    case "left":
                        document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "top");
                        break;
                    case "top":
                        document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").setAttribute("data-direction", "right");
                        break;
                }
                setTimeout(function () {
                    document.querySelector(".homepage-slider-background-item[data-idx='" + nextIndex + "']").classList.add('active', 'activeNew');
                    document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").classList.remove("activeNew");
                    setTimeout(function () {
                        document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").classList.remove("active");
                        document.querySelector(".homepage-slider-background-item[data-idx='" + activeIndex + "']").setAttribute("data-direction", "");
                        changeBackground();
                    }, 5000);
                }, 100);
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">

    .videoSection {
        position: relative;
        top: -51px;
        background-color: #000;
        height: 95vh !important;
        min-height: 25rem;
        width: 100%;
        overflow: hidden;
        border-bottom: solid 0.5px rgba(255, 255, 255, 0.1);
        color: white;

        &::after {
            background: linear-gradient(0.75deg, #000000 0%, transparent 100%);
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 1;
            opacity: .5;
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: #121217;
            opacity: 0.2;
            z-index: 1;
        }

        .homepage-slider-content {
            position: relative;
            z-index: 2;
            height: 100%;

            &::after, &::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                z-index: 1
            }

            & > div {
                position: relative;
                z-index: 3
            }
        }


        .userDefine {
            height: inherit;
            z-index: 5;

            @media(max-width: 425px) {
                .topCenter, .bottomRight {
                    max-width: 100%;
                    flex: 0 0 100%;
                }
            }
        }

        @media(max-width: 768px) {
            height: auto;
        }

        .topCenter {
            @media(min-width: 62em) {
                margin-bottom: 400px !important;
            }
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
            position: absolute !important;
            bottom: 0;
            width: 100%;
            z-index: 4;

            span {
                color: #888;
            }

            @media(max-width: 768px) {
                display: none;
            }
        }

        .bottomRight {
            font-family: 'teradeli-book', sans-serif !important;
           border-left: solid 1px rgba(255, 255, 255, 0.5);

            .bottomText {
                margin-top: 65px;
                font-size: 14px;
                @media(max-width: 1024px) {
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
                bottom: 59%;
            }

            .title {
                color: #fff;
                line-height: 1.10722 !important;
                font-size: 20px;
            }
        }
    }

    .form {
        @media(max-width: 768px) {
            background: radial-gradient(circle at 50% 45%, #292929 0%, #0a0a0a 100%);
            padding: 40px 17%;
            width: 100%;
        }
    }

    .form-md {
        background: radial-gradient(circle at 50% 45%, #292929 0%, #0a0a0a 100%);
        padding-left: 15px;
        padding-right: 15px;
        width: 100%;
        margin-top:-51px ;
        padding-bottom: 70px;
        padding-top: 10px;
        color:white;
        .form-theme {
            height: 40px;
        }
        .bottomText{
            font-size: 13px;
        }
    }


    .homepage-slider-background {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        overflow: hidden;


        .homepage-slider-background-item {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 1;
            transform: scale(1.05);
            opacity: 0;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center center;

            &.active {
                transform: scale(1) !important;
                opacity: 1;
                z-index: 2;
                transition: opacity 3.5s, transform 2s !important;
            }

            &.activeNew {
                z-index: 3;
            }
        }

        .homepage-slider-background-item[data-direction="right"],
        .homepage-slider-background-item[data-direction="left"],
        .homepage-slider-background-item[data-direction="top"],
        .homepage-slider-background-item[data-direction="bottom"] {
            transition: transform 0.1s;
        }

        .homepage-slider-background-item[data-direction="right"] {
            transform: scale(1.05) translateX(10%);
        }

        .homepage-slider-background-item[data-direction="left"] {
            transform: scale(1.05) translateX(-10%);

            .homepage-slider-background-item[data-direction="top"] {
                transform: scale(1.05) translateY(-10%);
            }

            .homepage-slider-background-item[data-direction="bottom"] {
                transform: scale(1.05) translateY(10%);
            }
        }
    }


</style>