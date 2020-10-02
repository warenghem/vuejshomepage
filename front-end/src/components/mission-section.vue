<template>
    <div>
        <div class="fp-section d-none d-lg-table">
            <div class="fp-tableCell" style="height: 900px;">
                <div class="fp-bg" style="transform: translateX(0px) translateY(0px);">
                    <div class="homepage-item">
                        <div class="homepage-catalogue-background">
                            <div class="homepage-catalogue-background-big">
                                <div class="image1 bgi">
                                </div>
                            </div>
                            <div class="homepage-catalogue-background-lines" style="opacity: 1;">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="homepage-catalogue-background-divided2" style="">
                                <div>
                                    <div class="image1  gradientoverlay imageItem"
                                         data-idx="1"
                                         :style="{'background-image': 'url(' + require('../assets/images/banner-red.jpg') + ')'}"
                                    >
                                    </div>
                                </div>
                                <div>
                                    <div class="image2  gradientoverlay imageItem"
                                         data-idx="2"
                                         :style="{'background-image': 'url(' + require('../assets/images/roche-min.jpg') + ')'}"
                                    >
                                    </div>
                                </div>
                                <div>
                                    <div class="image3 gradientoverlay imageItem"
                                         data-idx="3"
                                         :style="{'background-image': 'url(' + require('../assets/images/Studio-e1593525488356-min-1.jpg') + ')'}"
                                    >

                                    </div>
                                </div>
                                <div>
                                    <div class="image4 gradientoverlay imageItem"
                                         data-idx="4"
                                         :style="{'background-image': 'url(' + require('../assets/images/Tech-02-min-1-scaled.jpg') + ')'}"
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="homepage-catalogue-links">
                            <div class=" homepage-catalogue-links-item"
                                 @mouseleave="fpMouseOut()"
                                 @mouseover="fpMouseOver($event.target)"
                                 @onclick="fpMouseOver($event.target)"
                                 data-idx="1"
                            >
                                <div class="pb-3"><img src="../assets/images/magazine-plus.svg"
                                                       alt="Wait For It"></div>
                                <div class="homepage-catalogue-links-item-title pb-3">
                                    <a>
                                        <div class="text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                {{$t('mission.section1.title')}}
                                            </div>
                                            <div class="sub-title text-gray">
                                                {{$t('mission.section1.subtitle')}}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div>
                                        <ul class="text-left mb-4 teradeli-light">
                                            <li class="fp-list-item" v-for="(item,idx) in $t('mission.section1.items')"
                                                :key="idx">
                                                <div class="count">
                                                    {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                                </div>
                                                <div class="col">{{item}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class=" homepage-catalogue-links-item"
                                 @mouseleave="fpMouseOut()"
                                 @mouseover="fpMouseOver($event.target)"
                                 @onclick="fpMouseOver($event.target)"
                                 data-idx="2"
                            >
                                <div class="pb-3"><img src="../assets/images/magazine-plus.svg"
                                                       alt="Wait For It"></div>
                                <div class="homepage-catalogue-links-item-title pb-3">
                                    <a>
                                        <div class="text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                {{$t('mission.section2.title')}}
                                            </div>
                                            <div class="sub-title text-gray">
                                                {{$t('mission.section2.subtitle')}}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div>
                                        <ul class="text-left mb-4 teradeli-light">
                                            <li class="fp-list-item" v-for="(item,idx) in $t('mission.section2.items')"
                                                :key="idx">
                                                <div class="count">
                                                    {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                                </div>
                                                <div class="col">{{item}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class=" homepage-catalogue-links-item"
                                 @mouseleave="fpMouseOut()"
                                 @mouseover="fpMouseOver($event.target)"
                                 @onclick="fpMouseOver($event.target)"
                                 data-idx="3"
                            >
                                <div class="pb-3"><img src="../assets/images/magazine-plus.svg"
                                                       alt="Wait For It"></div>
                                <div class="homepage-catalogue-links-item-title pb-3">
                                    <a>
                                        <div class="text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                {{$t('mission.section3.title')}}
                                            </div>
                                            <div class="sub-title text-gray">
                                                {{$t('mission.section3.subtitle')}}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div>
                                        <ul class="text-left mb-4 teradeli-light">
                                            <li class="fp-list-item" v-for="(item,idx) in $t('mission.section3.items')"
                                                :key="idx">
                                                <div class="count">
                                                    {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                                </div>
                                                <div class="col">{{item}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class=" homepage-catalogue-links-item"
                                 @mouseleave="fpMouseOut()"
                                 @mouseover="fpMouseOver($event.target)"
                                 @onclick="fpMouseOver($event.target)"
                                 data-idx="4"
                            >
                                <div class="pb-3"><img src="../assets/images/magazine-plus.svg"
                                                       alt="Wait For It"></div>
                                <div class="homepage-catalogue-links-item-title pb-3">
                                    <a>
                                        <div class="text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                {{$t('mission.section4.title')}}
                                            </div>
                                            <div class="sub-title text-gray">
                                                {{$t('mission.section4.subtitle')}}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div>
                                        <ul class="text-left mb-4 teradeli-light">
                                            <li class="fp-list-item" v-for="(item,idx) in $t('mission.section4.items')"
                                                :key="idx">
                                                <div class="count">
                                                    {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                                </div>
                                                <div class="col">{{item}}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-lg-none mission-accordion">
            <v-expansion-panels accordion>
                <v-expansion-panel
                        :style="{'background-image': 'url(' + require('../assets/images/banner-red.jpg') + ')'}">
                    <v-expansion-panel-header class="flex-column align-start">
                        <div class="pb-3">
                            <img src="../assets/images/magazine-plus.svg"
                                 alt="Wait For It"
                                 class="plusIcon"
                            >
                            <img src="../assets/images/magazine-minus.svg"
                                 alt="Wait For It"
                                 class="minusIcon"
                            >
                        </div>
                        <div class="sub-title text-white">
                            {{$t('mission.section1.title')}}
                        </div>
                        <div class="sub-title text-gray">
                            {{$t('mission.section1.subtitle')}}
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div>
                            <ul class="text-left mb-4 teradeli-light">
                                <li class="fp-list-item" v-for="(item,idx) in $t('mission.section1.items')"
                                    :key="idx">
                                    <div class="count">
                                        {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                    </div>
                                    <div class="col">{{item}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                        :style="{'background-image': 'url(' + require('../assets/images/roche-min.jpg') + ')'}">
                    <v-expansion-panel-header class="flex-column align-start">
                        <div class="pb-3">
                            <img src="../assets/images/magazine-plus.svg"
                                 alt="Wait For It"
                                 class="plusIcon"
                            >
                            <img src="../assets/images/magazine-minus.svg"
                                 alt="Wait For It"
                                 class="minusIcon"
                            >
                        </div>
                        <div class="sub-title text-white">
                            {{$t('mission.section2.title')}}
                        </div>
                        <div class="sub-title text-gray">
                            {{$t('mission.section2.subtitle')}}
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div>
                            <ul class="text-left mb-4 teradeli-light">
                                <li class="fp-list-item" v-for="(item,idx) in $t('mission.section2.items')"
                                    :key="idx">
                                    <div class="count">
                                        {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                    </div>
                                    <div class="col">{{item}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                        :style="{'background-image': 'url(' + require('../assets/images/Studio-e1593525488356-min-1.jpg') + ')'}">
                    <v-expansion-panel-header class="flex-column align-start">
                        <div class="pb-3">
                            <img src="../assets/images/magazine-plus.svg"
                                 alt="Wait For It"
                                 class="plusIcon"
                            >
                            <img src="../assets/images/magazine-minus.svg"
                                 alt="Wait For It"
                                 class="minusIcon"
                            >
                        </div>
                        <div class="sub-title text-white">
                            {{$t('mission.section3.title')}}
                        </div>
                        <div class="sub-title text-gray">
                            {{$t('mission.section3.subtitle')}}
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div>
                            <ul class="text-left mb-4 teradeli-light">
                                <li class="fp-list-item" v-for="(item,idx) in $t('mission.section3.items')"
                                    :key="idx">
                                    <div class="count">
                                        {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                    </div>
                                    <div class="col">{{item}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel
                        :style="{'background-image': 'url(' + require('../assets/images/Tech-02-min-1-scaled.jpg') + ')'}">
                    <v-expansion-panel-header class="flex-column align-start">
                        <div class="pb-3">
                            <img src="../assets/images/magazine-plus.svg"
                                 alt="Wait For It"
                                 class="plusIcon"
                            >
                           <img src="../assets/images/magazine-minus.svg"
                                 alt="Wait For It"
                                 class="minusIcon"
                            >
                        </div>
                        <div class="sub-title text-white">
                            {{$t('mission.section4.title')}}
                        </div>
                        <div class="sub-title text-gray">
                            {{$t('mission.section4.subtitle')}}
                        </div>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div>
                            <ul class="text-left mb-4 teradeli-light">
                                <li class="fp-list-item" v-for="(item,idx) in $t('mission.section4.items')"
                                    :key="idx">
                                    <div class="count">
                                        {{(idx+1)>9?(idx+1):'0'+(idx+1)}}
                                    </div>
                                    <div class="col">{{item}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mission-section2",
        methods: {
            fpMouseOver(element) {
                if (element) {
                    var itemIndex = element.getAttribute('data-idx');
                    if (document.querySelector(".imageItem[data-idx='" + itemIndex + "']")) {
                        var backgroundImage = document.querySelector(".imageItem[data-idx='" + itemIndex + "']").style.backgroundImage;
                        document.querySelector(".homepage-catalogue-background-divided2").style.display = 'none';
                        document.querySelector(".homepage-catalogue-background, .homepage-catalogue-title").classList.add("active");
                        document.querySelector(".homepage-catalogue-background-big div").style.backgroundImage = backgroundImage;
                        document.querySelectorAll(".homepage-catalogue-background-lines, .homepage-catalogue-links-item").forEach(el => {
                            el.style.opacity = '0.2';
                        });
                    }

                }


            },
            fpMouseOut() {
                document.querySelector(".homepage-catalogue-background-divided2").style.display = 'block';
                document.querySelector(".homepage-catalogue-background, .homepage-catalogue-title").classList.remove("active");
                document.querySelectorAll(".homepage-catalogue-background-lines, .homepage-catalogue-links-item").forEach(el => {
                    el.style.opacity = '1';
                });
            }
        },
        i18n: {
            messages: {
                en: {
                    mission: {
                        title: "The mission: to reunite man with nature",
                        section1: {
                            title: "Sustainable technologies. Total traceability.",
                            subtitle: "Powerful, CO2 neutral, our technologies support the regeneration of nature.",
                            items: [
                                "Blockchain technology. For seamless transparency.",
                                "Bio-Technologies. As an alternative to animal leather.",
                                "CO2 neutral technologies. Powered by renewable energies.",
                                "Technologies and electronics made in France. Our factories seek to innovate without altering the environment."
                            ]
                        },
                        section2: {
                            title: "Design in the studio. Naturally understated.",
                            subtitle: "Intuitive, raw, without excess, our creations are designed for use.",
                            items: [
                                "Inspired by architects and designers. The assertive personality of our" +
                                "objects break the codes of classic leather goods.",
                                "Centered on the relationship between Man and the object. Design is built for the" +
                                "functionality and everyday life.",
                                "Focused on a future that we must reinvent. The style of each material is" +
                                "studied to confuse the object in the landscape.",
                                "Passionate about objects that last. The design is thought to be timeless, escaping any ephemeral fashion."
                            ]
                        },
                        section3: {
                            title: "Made in France. Point.",
                            subtitle: "Refined, artisanal, local, our objects develop French industry and know-how.",
                            items: [
                                "Premises: Genuine French project from A to Z.",
                                "Social: Developing French jobs and traditions.",
                                "Ethics: Do not take advantage of low-cost countries (including Europe).",
                                "Green: Let's avoid transport and the opacity of countries outside our national regulations."
                            ]
                        },
                        section4: {
                            title: "The nobility of wine. Completely vegetal.",
                            subtitle: "Efficient, natural, solid, our materials come from the soil and the harvest.",
                            items: [
                                "Blockchain technology. For seamless transparency.",
                                "Bio-Technologies. As an alternative to animal leather.",
                                "CO2 neutral technologies. Powered by renewable energies.",
                                "Technologies and electronics made in France. Our factories seek to innovate without altering the environment."
                            ]
                        }
                    }
                },
                fr: {
                    mission: {
                        title: "La mission: réunifier l’Homme à la nature",
                        section1: {
                            title: "Technologies durables. Tracabilité totale.",
                            subtitle: "Puissantes, neutres en CO2, nos technologies accompagnent la régénération de la nature.",
                            items: [
                                "Technologie Blockchain. Pour une transparence sans faille.",
                                "Bio-Technologies. Comme alternative au cuir animal.",
                                "Technologies neutres en CO2. Alimentées par des énergies renouvelables.",
                                "Technologies et electroniques fabriquées en France. Nos usines cherchent à innover sans altérer l’environnement."
                            ]
                        },
                        section2: {
                            title: "Design en studio. Naturellement sobre.",
                            subtitle: "Intuitives, brutes, sans excès, nos créations sont pensées pour l’usage.",
                            items: [
                                "Inspirées par les architectes et designers. La personnalité affirmée de nos " +
                                "objets casse les codes de la maroquinerie classique.",
                                "Centrés sur relation entre l’Homme et l’objet. Le design est construit pour la " +
                                "fonctionnalité et le quotidien.",
                                "Focalisés sur un futur que nous devons réinventer. Le style de chaque matière est " +
                                "étudié pour confondre l’objet dans le paysage.",
                                "Passionés par des objets qui durent. Le design est pensé intemporel, échappant à toute mode éphémère."
                            ]
                        },
                        section3: {
                            title: " Fabriqué en France. Point.",
                            subtitle: "Raffinés, artisanaux, locaux, nos objets développent l’industrie et le savoir-faire Français.",
                            items: [
                                "Locaux : Véritable projet français de A à Z.",
                                "Sociaux : Développer les emplois et les traditions francaises.",
                                "Éthiques : Ne pas profiter de pays à bas couts (y compris en Europe).",
                                "Écologiques : Évitons les transports et l’opacité de pays en dehors de nos règlementations nationales."
                            ]
                        },
                        section4: {
                            title: "La noblesse du vin. Complètement végétal.",
                            subtitle: "Performantes, naturelles, solides, nos matières sont issues de la terre et des vendanges.",
                            items: [
                                "Technologie Blockchain. Pour une transparence sans faille.",
                                "Bio-Technologies. Comme alternative au cuir animal.",
                                "Technologies neutres en CO2. Alimentées par des énergies renouvelables.",
                                "Technologies et electroniques fabriquées en France. Nos usines cherchent à innover sans altérer l’environnement."
                            ]
                        }
                    }
                },
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/scss/home/mission";

    .homepage-catalogue-links-item {
        cursor: url('../assets/images/cross_100185.svg'), auto;
    }

    .image1 {
        background-image: url('../assets/images/Studio-e1593525488356-min-1.jpg');
    }
</style>