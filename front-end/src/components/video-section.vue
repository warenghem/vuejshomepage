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
                        <h2 class="title text-center"> {{$t('video.title')}}</h2>
                        <h4 class="subtitle text-center">{{$t('video.subtitle')}}</h4>
                    </div>
                    <div class="row col-md-10 mx-auto text-center inner">
                        <div class="col-md-4">
                            <p><img src="../assets/images/ecological.svg" alt=""></p>
                            <span>{{$t('video.tag1')}}</span>
                        </div>
                        <div class="col-md-4">
                            <p><img src="../assets/images/france.svg" alt=""></p>
                            <span>{{$t('video.tag2')}}</span>
                        </div>
                        <div class="col-md-4">
                            <p><img src="../assets/images/tech.svg" alt=""></p>
                            <span>{{$t('video.tag3')}}</span>
                        </div>
                    </div>
                </v-col>
                <v-col md="3" class="bottomRight d-none d-md-block">
                    <div class="d-flex flex-column align-center justify-center h-100">
                        <p class="mt-3  title text-center" id="formSection">{{$t('video.rightSection.title')}}</p>
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
                            <div class="progressHints d-none d-md-block" v-html="$t('video.rightSection.tag')">
                            </div>
                        </div>

                        <p class="text-white pb-3 px-4 text-justify bottomText">
                            {{$t('video.rightSection.subtitle')}}
                        </p>
                        <div class="form px-3">
                            <form action="" class="d-flex flex-column px-4">
                                <input type="text" class="form-theme text-uppercase" placeholder="PRENOM ">
                                <input type="text" class="form-theme text-uppercase" placeholder="EMAIL ">
                                <button id="jePlanetBtn" class="btn-theme">
                                    {{$t('btnTitle')}}
                                </button>
                            </form>
                        </div>
                    </div>


                </v-col>
                <div class="bottomleft">
                    {{$store.state.tree_count}} <span>{{$t('video.forest.term1')}}</span> <br>
                    {{$store.state.co2_compensated}} <span>{{$t('video.forest.term2')}}</span> <br>
                    {{$store.state.reforest}} <span>{{$t('video.forest.term3')}}</span> <br>
                </div>
            </v-row>
        </div>
        <div class="d-md-none form-md" id="formSection2">
            <p class="white--text">{{$t('video.rightSection.title')}}</p>
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
               {{$t('video.rightSection.subtitle')}}
            </p>
            <form action="" class="d-flex flex-column">
                <input type="text" class="form-theme text-uppercase" placeholder="PRENOM ">
                <input type="text" class="form-theme text-uppercase" placeholder="EMAIL ">
                <button id="jePlanetBtn2" class="btn-theme">
                    {{$t('btnTitle')}}
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
        methods: {},
        i18n: {
            messages: {
                en: {
                    video: {
                        title: 'The vegetable leather goods of the future. Now.',
                        subtitle: 'Meeting between French leather traditions and our wine leathers',
                        tag1: 'Ecological / Vegan',
                        tag2: 'Made in France',
                        tag3: 'Sustainable technology',
                        forest: {
                            term1: 'trees planted',
                            term2: 'tonnes of CO2 offset',
                            term3: 'reforested hectares'
                        },
                        rightSection: {
                            title: 'Project progress',
                            tag: 'Creation <br> of 3D objects',
                            subtitle: "Our objects are being created. In the meantime, let's reforest the planet. Enter your email address to plant a tree and stay informed of the progress of the project.",
                            label1: 'FIRST NAME',
                            label2: 'EMAIL',
                        }
                    }
                },
                fr: {
                    video: {
                        title: 'La maroquinerie végétale du futur. Dès à présent.',
                        subtitle: 'Rencontre entre les traditions maroquinières francaises et nos cuirs de vin',
                        tag1: 'Ecologique / Vegan',
                        tag2: 'Made in France',
                        tag3: 'Technologie durable',
                        forest: {
                            term1: 'arbres plantés',
                            term2: 'tonnes CO2 compensées',
                            term3: 'hectares reforestés'
                        },
                        rightSection: {
                            title: 'Avancement du projet',
                            tag: 'Création <br> d’objets en 3D',
                            subtitle: 'Nous objets sont en cours de création. En attendant, reforestons la planète. Rentrez votre addresse mail pour planter un arbre et rester au courant de l’avancée du projet.',
                            label1: 'PRENOM ',
                            label2: 'EMAIL',
                        }
                    }
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/home/video";
</style>