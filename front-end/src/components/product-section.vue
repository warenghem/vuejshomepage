<template>
    <div>
        <v-row no-gutters class="productSection border-top-1">
            <div class="page-title absolute-title">{{$t('productTitle')}}</div>
            <v-col cols="6" md="6" sm="12" class="parent-left">
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[0].tag')}}</small>
                            <h1>{{$t('products[0].title')}}</h1>
                            <p> {{$t('products[0].summary')}}</p>
                            <article>
                                {{$t('products[0].desc')}}
                            </article>
                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[1].tag')}}</small>
                            <h1>{{$t('products[1].title')}}</h1>
                            <p> {{$t('products[1].summary')}}</p>
                            <article>
                                {{$t('products[1].desc')}}
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="horizontal border-top-1">
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[2].tag')}}</small>
                            <h1>{{$t('products[2].title')}}</h1>
                            <p> {{$t('products[2].summary')}}</p>
                            <article>
                                {{$t('products[2].desc')}}
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </v-col>

            <v-col cols="6" md="6" sm="12" class="parent-right">
                <div class="horizontal border-bottom-1">
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[3].tag')}}</small>
                            <h1>{{$t('products[3].title')}}</h1>
                            <p> {{$t('products[3].summary')}}</p>
                            <article>
                                {{$t('products[3].desc')}}
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[4].tag')}}</small>
                            <h1>{{$t('products[4].title')}}</h1>
                            <p> {{$t('products[4].summary')}}</p>
                            <article>
                                {{$t('products[4].desc')}}
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>{{$t('products[5].tag')}}</small>
                            <h1>{{$t('products[5].title')}}</h1>
                            <p> {{$t('products[5].summary')}}</p>
                            <article>
                                {{$t('products[5].desc')}}
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
        i18n: {
            messages: {
                en: {
                    productTitle: 'Les objets en création',
                    products: [
                        {
                            tag: 'Visuals to come',
                            title: 'The portfolio',
                            summary: 'Plant like its leaves. Obviously.',
                            desc: 'Ally of your daily life, it is competed around oblique lines representing the' +
                                'W emblematic of the brand. Each of them has space for your cards.'
                        },
                        {
                            tag: 'Available soon',
                            title: 'The card holder',
                            summary: 'Indispensably small. Without lacking in tannin.',
                            desc: 'More practical to carry, it complements the wallet for change and' +
                                'some cards on the go.'
                        },
                        {
                            tag: 'Visuals to come',
                            title: 'The belt',
                            summary: "She won't let you down.All in nobility.",
                            desc: 'Wide and thick, with saddle finish, it also fits well on' +
                                'a suit than jeans.'
                        },
                        {
                            tag: 'Visuals to come',
                            title: 'The Apple Watch bracelet',
                            summary: 'A high-tech object. Supported by nature. ',
                            desc: 'Inspired by fine watchmaking, its folding clasp and stitching' +
                                'reinforced will ennoble the iconic Apple watch.'
                        },
                        {
                            tag: 'Available soon',
                            title: 'The 48H bag',
                            summary: 'Vines and flax. Such is his destiny. ',
                            desc: 'The biggest of the bags. Composed of grapes and a French linen lining. ' +
                                'Indispensable for weekends, sports, or short stays. This is the room ' +
                                'mistress, which sets the tone for the collection.'
                        },
                        {
                            tag: 'Visuals to come',
                            title: 'The backpack',
                            summary: "Practical and elegant. It's not incompatible.",
                            desc: "Composed of grapes and a French linen lining. Indispensable for " +
                                "move around during the day. It's built to last."
                        },
                    ]
                },
                fr: {
                    productTitle: 'Les objets en création',
                    products: [
                        {
                            tag: 'Visuels à venir',
                            title: 'Le portefeuille',
                            summary: 'Végétal comme ses feuilles. Evidemment.',
                            desc: 'Allié de votre quotidien, il est concu autours de lignes obliques représentant le' +
                                ' W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.'
                        },
                        {
                            tag: 'Disponible prochainement',
                            title: 'Le porte-cartes',
                            summary: 'Indispensablement petit. Sans manquer de tanin.',
                            desc: 'Plus pratique à porter, il complémente le portefeuille pour de la monnaie et ' +
                                'quelques cartes lors de vos déplacements.'
                        },
                        {
                            tag: 'Visuels à venir',
                            title: 'La ceinture',
                            summary: 'Elle ne vous laissera pas tomber. Tout en noblesse.',
                            desc: 'Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur ' +
                                'un costume que sur un jean.'
                        },
                        {
                            tag: 'Visuels à venir',
                            title: 'Le bracelet Apple Watch',
                            summary: 'Un objet high-tech. Soutenu par la nature.',
                            desc: 'Inspiré par la haute horlogerie, sa boucle déployante et ses coutures ' +
                                'renforcées anobliront la montre iconique Apple.'
                        },
                        {
                            tag: 'Disponible prochainement',
                            title: 'Le sac 48H',
                            summary: 'Des vignes et du lin. Tel est son destin.',
                            desc: 'Le plus grand des sacs. Composé de raisins et d’une doublure en lin francais. ' +
                                'Indispensable pour le week-end, le sport, ou les courts séjours. C’est la pièce ' +
                                'maitresse, qui donne le ton de la collection.'
                        },
                        {
                            tag: 'Visuels à venir',
                            title: 'Le sac à dos',
                            summary: 'Pratique et elegant. Ce n’est pas incompatible.',
                            desc: 'Composé de raisins et d’une doublure en lin francais. Indispensable pour' +
                                ' vous déplacer en journée. Il est concu pour durer.'
                        },

                    ]
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .productSection {
        position: relative;
        min-height: 900px;
        @media(max-width: 425px) {
            display: flex;
            flex-direction: column;
        }

        .parent-left {
            @media(max-width: 425px) {
                max-width: 100%;
            }

            .vertical {
                height: 65%;
                display: flex;
                @media(max-width: 425px) {
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
                    @media(max-width: 768px) {
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
                    @media(max-width: 768px) {
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
            @media(max-width: 425px) {
                max-width: 100%;
            }

            .vertical {
                height: 65%;
                display: flex;
                @media(max-width: 425px) {
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
                    @media(max-width: 768px) {
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
                    @media(max-width: 768px) {
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