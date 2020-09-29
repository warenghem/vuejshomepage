<template>
    <section class="mission">
        <div class="missionContainer" id="missionContainer">
            <div class="items" id="col1">
                <div class="content" @mouseleave="reset" @mouseover="slideOne">
                    <v-row align="center" justify="center" class="mb-3">
                        <img src="../assets/images/magazine-plus.svg" class="plus text-center" alt="">
                    </v-row>
                    <h1 class="heading text--gray">
                        <span>La noblesse du vin.</span>
                        Complètement végétal.
                        Performantes, naturelles, solides, nos matières sont issues de la terre et des vendanges.
                    </h1>
                    <article>
                        <p>
                            <span class="number">01</span>
                            <span> Issues de la rencontre entre la nature et nos innovations technologiques  </span>
                        </p>
                        <p>
                            <span class="number">02</span>
                            <span> Beaucoup plus écologiques et aussi solides que le cuir traditionnel.</span>
                        </p>
                        <p>
                            <span class="number">03</span>
                            <span>
                            Sans matière animale. Sans souffrance.
                            </span>
                        </p>
                        <p>
                            <span class="number">04</span>
                            <span> Délaissant le plastique. Nous n’en avons plus besoin.</span>
                        </p>
                    </article>
                </div>
            </div>

            <div class="items" id="col2">
                <div class="content" @mouseleave="reset" @mouseover="slideTwo">
                    <v-row align="center" justify="center" class="mb-3">
                        <img src="../assets/images/magazine-plus.svg" class="plus text-center">
                    </v-row>
                    <h1 class="heading text--gray">
                        <span>Fabriqué en France. Point.</span>
                        Raffinés, artisanaux, locaux, nos objets développent l’industrie et le savoir-faire Français.
                    </h1>
                    <article>
                        <p>
                            <span class="number">01</span>
                            <span> Locaux : Véritable projet français de A à Z. </span>
                        </p>
                        <p>
                            <span class="number">02</span>
                            <span> Sociaux : Développer les emplois et les traditions francaises.</span>
                        </p>
                        <p>
                            <span class="number">03</span>
                            <span>
                            Éthiques : Ne pas profiter de pays à bas couts (y compris en Europe).
                            </span>
                        </p>
                        <p>
                            <span class="number">04</span>
                            <span> Écologiques : Évitons les transports et l’opacité de pays en dehors de nos règlementations nationales.
                            </span>
                        </p>
                    </article>
                </div>
            </div>

            <div class="items" id="col3">
                <div class="content" @mouseleave="reset" @mouseover="slideThree">
                    <v-row align="center" justify="center" class="mb-3">
                        <img src="../assets/images/magazine-plus.svg" class="plus text-center">
                    </v-row>
                    <h1 class="heading text--gray">
                        <span>Design en studio. Naturellement sobre.</span>
                        Intuitives, brutes, sans excès, nos créations sont pensées pour l’usage.
                    </h1>
                    <article>
                        <p>
                            <span class="number">01</span>
                            <span>
Inspirées par les architectes et designers. La personnalité affirmée de nos objets casse les codes de la maroquinerie classique</span>
                        </p>
                        <p>
                            <span class="number">02</span>
                            <span>Centrés sur relation entre l’Homme et l’objet. Le design est construit pour la fonctionnalité et le quotidien.</span>
                        </p>
                        <p>
                            <span class="number">03</span>
                            <span>

Focalisés sur un futur que nous devons réinventer. Le style de chaque matière est étudié pour confondre l’objet dans le paysage.
                            </span>
                        </p>
                        <p>
                            <span class="number">04</span>
                            <span>
Passionés par des objets qui durent. Le design est pensé intemporel, échappant à toute mode éphémère.</span>
                        </p>
                    </article>
                </div>
            </div>

            <div class="items" id="col4">
                <div class="content" @mouseleave="reset" @mouseover="slideFour">
                    <v-row align="center" justify="center" class="mb-3">
                        <img src="../assets/images/magazine-plus.svg" class="plus text-center">
                    </v-row>
                    <h1 class="heading text--gray">
                        <span>Technologies durables. Tracabilité totale.</span>
                        Puissantes, neutres en CO2, nos technologies accompagnent la régénération de la nature.
                    </h1>
                    <article>
                        <p>
                            <span class="number">01</span>
                            <span>
                                Technologie Blockchain. Pour une transparence sans faille. </span>
                        </p>
                        <p>
                            <span class="number">02</span>
                            <span>
                        Bio-Technologies. Comme alternative au cuir animal.</span>
                        </p>
                        <p>
                            <span class="number">03</span>
                            <span>

                        Technologies neutres en CO2. Alimentées par des énergies renouvelables.
                            </span>
                        </p>
                        <p>
                            <span class="number">04</span>
                            <span>
                            Technologies et electroniques fabriquées en France. Nos usines cherchent à innover sans altérer l’environnement.
                            </span>
                        </p>
                    </article>
                </div>
            </div>

        </div>
    </section>
</template>

<script>



    export default {
        data() {
            return {

            }
        },
        methods: {


            slideOne() {
                document.getElementById("missionContainer").style.cssText = "background:url(./img/banner-red.2d904cbc.jpg); background-repeat:no-repeat; background-size:cover;";
                document.getElementById("col1").style.cssText = "background:none; )";
                document.getElementById("col2").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col3").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col4").style.cssText = "background:none; opacity:0.4; )";
            },

            slideTwo() {
                document.getElementById("missionContainer").style.cssText = "background:url(./img/roche-min.27a322a6.jpg);background-repeat:no-repeat; background-size:cover;";
                document.getElementById("col1").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col2").style.cssText = "background:none; )";
                document.getElementById("col3").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col4").style.cssText = "background:none; opacity:0.4; )";
            },

            slideThree() {
                document.getElementById("missionContainer").style.cssText = "background:url(./img/Studio-e1593525488356-min-1.563a9fe7.jpg);background-repeat:no-repeat; background-size:cover;";
                document.getElementById("col1").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col2").style.cssText = "background:none; opacity:0.4; )";
                document.getElementById("col3").style.cssText = "background:none; )";
                document.getElementById("col4").style.cssText = "background:none; opacity:0.4; )";
            },

            slideFour() {
                document.getElementById("missionContainer").style.cssText = "background:url(./img/Tech-02-min-1-scaled.60cbf54f.jpg);background-repeat:no-repeat; background-size:cover;";
                document.getElementById("col1").style.cssText = "background:none; opacity:0.4;)";
                document.getElementById("col2").style.cssText = "background:none; opacity:0.4;)";
                document.getElementById("col3").style.cssText = "background:none; opacity:0.4;)";
                document.getElementById("col4").style.cssText = "background:none;)";
            },


            reset() {
                document.getElementById("missionContainer").style.cssText = "background:none";
                document.getElementById("col1").style.cssText = "background:url(./img/banner-red.2d904cbc.jpg); opacity:1;)";
                document.getElementById("col2").style.cssText = "background:url(./img/roche-min.27a322a6.jpg); opacity:1;)";
                document.getElementById("col3").style.cssText = "background:url(./img/Studio-e1593525488356-min-1.563a9fe7.jpg); opacity:1;)";
                document.getElementById("col4").style.cssText = "background:url(./img/Tech-02-min-1-scaled.60cbf54f.jpg); opacity:1;)";
            }

        }
    }

</script>

<style scoped lang="scss">
    .mission {
        margin-top: -51px;
        z-index: 1;
        position: relative;
        .missionContainer {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            height: 100vh;
            position: relative;
            @media(max-width: 768px) {
                flex-direction: column;
                height: auto;
            }
            .items {
                height: inherit;
                position: relative;
                flex: 1;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                @media(max-width: 768px) {
                    width: 100%;
                    min-height: 370px;
                }
                .content {
                    position: absolute;
                    font-family: 'teradeli-book', sans-serif;
                    bottom: 0;
                    padding: 15px;
                    right: 0;
                    left: 0;
                    height: 200px;
                    transition: height 0.4s ease-in;
                    overflow: hidden;
                    @media(max-width: 768px) {
                        height: 150px;
                    }

                    &:hover {
                        height: 80%;
                        cursor: url(../assets/images/cross_100185.svg), auto;
                    }
                    @media(max-width: 768px){
                        &:hover{
                            height: 100%;
                        }
                    }
                    .heading {
                        color: #888;
                        line-height: 1;
                        span {
                            color: #fff;
                        }
                    }
                    article {
                        margin-top: 60px;
                        p {
                            display: flex;
                            align-items: center;
                            font-size: 18px;
                            span {
                                &:nth-child(1) {
                                    color: #0081a7 !important;
                                    margin-right: 10px;
                                }
                                &:nth-child(2) {
                                    color: #fff !important;
                                }
                            }
                        }

                    }
                }

                &:nth-child(1) {
                    background: url("../assets/images/banner-red.jpg");
                }
                &:nth-child(2) {
                    background: url("../assets/images/roche-min.jpg");
                }
                &:nth-child(3) {
                    background: url("../assets/images/Studio-e1593525488356-min-1.jpg");
                }
                &:nth-child(4) {
                    background: url("../assets/images/Tech-02-min-1-scaled.jpg");
                }

            }
        }

    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>