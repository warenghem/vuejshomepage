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
            <div class="scrollicon">
                <div class="mouse">
                    <div class="frame">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54.9 91">
                            <path class="st0" linejoin="round"
                                  d="M27.4 3.6L27.4 3.6C14.2 3.6 3.5 14.3 3.5 27.5v36c0 13.2 10.7 23.9 23.9 23.9h0c13.2 0 23.9-10.7 23.9-23.9v-36C51.4 14.3 40.7 3.6 27.4 3.6z"></path>
                        </svg>
                    </div>
                    <div class="mouse-left">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
                            <path linejoin="round" class="Draw-Frame Animate-Draw"
                                  d="M27.4 87.5L27.4 87.5c-13.2 0-23.9-10.7-23.9-23.9v-36c0-13.2 10.7-23.9 23.9-23.9h0"></path>
                        </svg>
                    </div>
                    <div class="mouse-right">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.4 91">
                            <path linejoin="round" class="Draw-Frame Animate-Draw"
                                  d="M0 3.6L0 3.6c13.2 0 23.9 10.7 23.9 23.9v36c0 13.2-10.7 23.9-23.9 23.9h0"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <v-row no-gutters class="homepage-slider-content">

                <v-col class="topCenter my-auto col-lg-9 col-md-8">
                    <div class="bannerLeft px-2">
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
                <v-col class="bottomRight d-none d-md-block col-lg-3 col-md-4">
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
                        <div class="w-100 px-5">
                            <mailchimp-subscribe
                                    url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                                    user-id="2f7dbf20677f88c14c1389365"
                                    list-id="ee2afb40a2"
                                    @error="snackbarError=true"
                                    @success="snackbarSuccess=true"
                            >
                                <template v-slot="{ subscribe, setEmail, setName,loading }">
                                    <form @submit.prevent="subscribe" class="d-flex flex-column  w-100">
                                        <input type="text"
                                               class="form-theme"
                                               :placeholder="$t('video.rightSection.label1')"
                                               @input="setName($event.target.value)"
                                        >
                                        <input type="email"
                                               class="form-theme"
                                               :placeholder="$t('video.rightSection.label2')"
                                               @input="setEmail($event.target.value)"
                                        >
                                        <button id="jePlanetBtn" class="btn-theme"
                                                type="submit"
                                                style="width: 100%!important; overflow-y: hidden;max-height: 48px">
                                            <span v-if="loading">
                                                <img src="../assets/images/ripple.svg"
                                                     alt="loader"
                                                     height="40px"
                                                     style="margin-top: -13px;"
                                                >
                                            </span>
                                            <span v-else>{{$t('btnTitle')}}</span>
                                        </button>
                                    </form>
                                </template>
                            </mailchimp-subscribe>
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
        <div class="d-md-none form-md py-5" id="formSection2">
            <div class="m-auto" style="max-width:500px;margin:auto">
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
                <mailchimp-subscribe
                        url="https://warenghem.us20.list-manage.com/subscribe/post-json"
                        user-id="2f7dbf20677f88c14c1389365"
                        list-id="ee2afb40a2"
                        @error="snackbarError=true"
                        @success="snackbarSuccess=true"
                >
                    <template v-slot="{ subscribe, setEmail, setName, error, success, loading }">
                        <form @submit.prevent="subscribe" class="d-flex flex-column">
                            <input type="text"
                                class="form-theme"
                                :placeholder="$t('video.rightSection.label1')"
                                @input="setName($event.target.value)"
                            >
                            <input type="email"
                                class="form-theme"
                                :placeholder="$t('video.rightSection.label2')"
                                @input="setEmail($event.target.value)"
                            >
                            <button id="jePlanetBtn2" class="btn-theme"
                                    type="submit"
                                    style="overflow-y: hidden;max-height: 48px">
                                                <span v-if="loading">
                                                    <img src="../assets/images/ripple.svg"
                                                        alt="loader"
                                                        height="40px"
                                                        style="margin-top: -13px;"
                                                    >
                                                </span>
                                <span v-else>{{$t('btnTitle')}}</span>
                            </button>
                        </form>
                    </template>
                </mailchimp-subscribe>
            </div>
        </div>
        <div class="custom-toast" v-if="snackbarSuccess">
            <div class="toast-box">
                <div class="toast-header d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center"><small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <span class="close" @click="snackbarSuccess=false">
                            ×
                        </span>
                    </div>
                </div>
                <div class="toast-body">
                    {{$t('video.rightSection.success')}}
                </div>
            </div>
        </div>
        <div class="custom-toast" v-if="snackbarError">
            <div class="toast-box">
                <div class="toast-header d-flex justify-space-between align-center">
                    <div>{{$t('video.rightSection.alerttitle')}}</div>
                    <div class="d-flex align-center"><small class="pr-2">{{$t('video.rightSection.alerttime')}} </small>
                        <span class="close" @click="snackbarError=false">
                            ×
                        </span>
                    </div>
                </div>
                <div class="toast-body">
                    {{email}} {{$t('video.rightSection.error')}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MailchimpSubscribe from './mailchp-subscribe'

    export default {
        name: "video-section",
        components: {
            MailchimpSubscribe,
        },
        data() {
            return {
                interval: {},
                progressValue: 0,
                maxProgress: 30,
                snackbarSuccess: false,
                snackbarError: false,
                email:''
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            this.interval = window.setInterval(function () {
                if (this.progressValue < this.maxProgress) {
                    this.progressValue = this.progressValue < this.maxProgress ? this.progressValue + 1 : this.maxProgress;
                }
            }.bind(this), 50);
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
                            alerttitle: 'Warenghem says',
                            alerttime: 'just now',
                            error: 'looks invalid or already subscribed. ',
                            success: 'Thank you! To avoid SPAM, we have sent you a confirmation email before ' +
                                'start planting ... see you soon!'
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
                            alerttitle: 'Warenghem dit',
                            alerttime: 'maintenant',
                            error: 'semble invalide ou déjà enregistré.',
                            success: 'Merci! Pour éviter le SPAM, nous vous avons envoyé un email de confirmation avant de ' +
                                'commencer la plantation... A tout de suite!'
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