<template>
    <div>
        <v-row no-gutters class="productSection">
            <v-col cols="6" md="6" sm="12" class="parent-left">
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>
                                Disponible prochainement
                            </small>
                            <h1>Le porte-cartes</h1>
                            <p> Indispensablement petit. Sans manquer de tanin. </p>
                            <article>
                                Plus pratique à porter, il complémente le portefeuille pour de la monnaie et quelques
                                cartes lors de vos déplacements.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Le bracelet Apple Watch</h1>
                            <p> Un objet high-tech. Soutenu par la nature.</p>
                            <article>
                                Inspiré par la haute horlogerie, sa boucle déployante et ses coutures renforcées
                                anobliront la montre iconique Apple.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </v-col>

            <v-col cols="6" md="6" sm="12" class="parent-right">
                <div class="horizontal">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>La ceinture</h1>
                            <p> Elle ne vous laissera pas tomber. Tout en noblesse.</p>
                            <article>
                                Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur un costume que
                                sur un jean.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>
                                Disponible prochainement
                            </small>
                            <h1>Le sac 48H</h1>
                            <p> Des vignes et du lin. Tel est son destin.</p>
                            <article>
                                Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais.
                                Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce
                                maitresse, qui donne le ton de la collection.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>

                                Visuels à venir
                            </small>
                            <h1>Le sac à dos</h1>
                            <p> Pratique et elegant. Ce n’est pas incompatible.</p>
                            <article>
                                Composé de raisins et d’une doublure en lin francais. Indispensable pour vous déplacer
                                en journée. Il est concu pour durer.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    export default {
        name: "product-section",
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

    .productSection {
        min-height: 100vh;
        @media(max-width: 425px){
            display: flex;
            flex-direction: column;
        }
        .parent-left {
            @media(max-width: 425px){
                 max-width: 100%;
            }
            .vertical {
                height: 65%;
                display: flex;
                @media(max-width: 425px){
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    @media(max-width:768px){
                        padding: 29px 15px;
                    }
                    &:nth-child(1) {
                        background: url(../assets/images/WA-mif-seamless-REVISION.png);
                        background-size: cover;
                    }
                    &:nth-child(2) {
                        background: url(../assets/images/PC-rendu-scaled.jpg);
                        background-size: cover;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay {
                        position: absolute;
                        background: #1f4046f2;
                        opacity: 0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover {
                        cursor: url(../assets/images/cross_100185.svg), auto;
                        .overlay {
                            opacity: 1;
                        }
                        .content {
                            position: relative;
                            z-index: 1;
                            article {
                                opacity: 1;
                            }
                        }
                    }
                }

            }
            .horizontal {
                height: 35%;
                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    @media(max-width:768px){
                        padding: 29px 15px;
                    }
                    &:nth-child(1) {
                        background: url(../assets/images/WA-mif-seamless-REVISION.png);
                        background-size: cover;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay {
                        position: absolute;
                        background: #1f4046f2;
                        opacity: 0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover {
                        cursor: url(../assets/images/cross_100185.svg), auto;
                        .overlay {
                            opacity: 1;
                        }
                        .content {
                            position: relative;
                            z-index: 1;
                            article {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
        .parent-right {
            @media(max-width: 425px){
                max-width: 100%;
            }
            .vertical {
                height: 65%;
                display: flex;
                @media(max-width: 425px){
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    @media(max-width:768px){
                        padding: 29px 15px;
                    }
                    &:nth-child(1) {
                        background: url(../assets/images/Sac-rendu-10-07-2020.2-min.jpg) center;
                        background-size: cover;
                    }
                    &:nth-child(2) {
                        background: url(../assets/images/WA-mif-seamless-REVISION.png);
                        background-size: cover;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay {
                        position: absolute;
                        background: #1f4046f2;
                        opacity: 0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover {
                        cursor: url(../assets/images/cross_100185.svg), auto;
                        .overlay {
                            opacity: 1;
                        }
                        .content {
                            position: relative;
                            z-index: 1;
                            article {
                                opacity: 1;
                            }
                        }
                    }
                }

            }
            .horizontal {
                height: 35%;
                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    @media(max-width:768px){
                        padding: 29px 15px;
                    }
                    &:nth-child(1) {
                        background: url(../assets/images/WA-mif-seamless-REVISION.png);
                        background-size: cover;
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay {
                        position: absolute;
                        background: #1f4046f2;
                        opacity: 0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover {
                        cursor: url(../assets/images/cross_100185.svg), auto;
                        .overlay {
                            opacity: 1;
                        }
                        .content {
                            position: relative;
                            z-index: 1;
                            article {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }


</style>