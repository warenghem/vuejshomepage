<template>
    <div>
        <div class="productSection">
            <div class="page-title absolute-title">{{$t('productTitle')}}</div>
            <div class="catalogue-grid h-100">
                <div class="row h-100">
                    <div class="cross p-0 col-lg-3 col-md-6 fineborderb-sm-0 fineborderb-md h-66 h-lg-33">
                        <div class="catalogue-item h-100">
                            <div class="h-100">
                                <div class="catalogue-item-background bg-white">
                                    <div :style="{'background-image': 'url(' + require('../assets/images/WA-mif-seamless-REVISION.png') + ')'}"
                                         style="top: 0%;"
                                         class="h-100 bgi"></div>
                                </div>
                                <div class="catalogue-item-content-title sub-title mt-4 mt-lg-0">
                                    <a>
                                        <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                            {{$t('products[0].tag')}}
                                        </div>
                                        <div class="text-white"> {{$t('products[0].title')}}</div>
                                        <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                            {{$t('products[0].summary')}}
                                        </div>
                                    </a>
                                    <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                        {{$t('products[0].desc')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cross p-0 col-lg-3 col-md-6 fineborderl-sm-0 fineborderl fineborderl-md fineborderb-sm-0 fineborderb-md fineborderl-sm-0 h-66 h-lg-33">
                        <div class="catalogue-item h-100">
                            <div class="h-100">
                                <div class="catalogue-item-background bg-white">
                                    <div :style="{'background-image': 'url(' + require('../assets/images/PC-rendu-scaled.jpg') + ')'}"
                                         style="top: 0%;"
                                         class="h-100 bgi"></div>
                                </div>
                                <div class="catalogue-item-content-title sub-title">
                                    <a>
                                        <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                            {{$t('products[1].tag')}}
                                        </div>
                                        <div class="text-white"> {{$t('products[1].title')}}</div>
                                        <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                            {{$t('products[1].summary')}}
                                        </div>
                                    </a>
                                    <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                        {{$t('products[1].desc')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cross p-0 col-lg-6 col-md-6 d-lg-flex d-xl-block h-lg-33">
                        <div class="catalogue-item fineborderb fineborderb-md fineborderb-sm-0 col-lg-12 col-xl-12 fineborderr-sm-0 fineborderl-xl h-50 h-lg-100 p-0">
                            <div class="h-100">
                                <div class="catalogue-item-background bg-white">
                                    <div :style="{'background-image': 'url(' + require('../assets/images/WA-mif-seamless-REVISION.png') + ')'}"
                                         style="top: 0%;"
                                         class="h-100 bgi"></div>
                                </div>
                                <div class="catalogue-item-content-title sub-title">
                                    <a>
                                        <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                            {{$t('products[2].tag')}}
                                        </div>
                                        <div class="text-white"> {{$t('products[2].title')}}</div>
                                        <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                            {{$t('products[2].summary')}}
                                        </div>
                                    </a>
                                    <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                        {{$t('products[2].desc')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cross p-0 catalogue-item fineborderb-sm-0 fineborderb-lg fineborderb-md col-md-6 finebordert fineborderl-sm-0 h-50 h-33 finebordert-md-0 fineborderl-md h-lg-33">
                        <div class="h-100">
                            <div class="catalogue-item-background bg-white">
                                <div :style="{'background-image': 'url(' + require('../assets/images/WA-mif-seamless-REVISION.png') + ')'}"
                                     style="top: 0%;"
                                     class="h-100 bgi"></div>
                            </div>
                            <div class="catalogue-item-content-title sub-title">
                                <a>
                                    <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                        {{$t('products[3].tag')}}
                                    </div>
                                    <div class="text-white"> {{$t('products[3].title')}}</div>
                                    <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                        {{$t('products[3].summary')}}
                                    </div>
                                </a>
                                <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                    {{$t('products[3].desc')}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-0 col-lg-6 col-md-12 catalogue-double row h-100 h-lg-33">
                        <div class="cross catalogue-item col-md-6 fineborderr-sm-0 col-12 h-66 fineborderl h-md-33 fineborderl-md-0 h-lg-100">
                            <div class="h-100">
                                <div class="catalogue-item-background bg-white">
                                    <div :style="{'background-image': 'url(' + require('../assets/images/Sac-rendu-10-07-2020.2-min.jpg') + ')'}"
                                         style="top: 0%;"
                                         class="h-100 bgi"></div>
                                </div>
                                <div class="catalogue-item-content-title sub-title">
                                    <a>
                                        <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                            {{$t('products[4].tag')}}
                                        </div>
                                        <div class="text-white"> {{$t('products[4].title')}}</div>
                                        <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                            {{$t('products[4].summary')}}
                                        </div>
                                    </a>
                                    <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                        {{$t('products[4].desc')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cross p-0 catalogue-item fineborderb-sm-0 fineborderb-lg fineborderl-md fineborderb-md col-md-6 fineborderl-xl fineborderl-sm-0 col-12 h-66 h-md-33 fineborderb-md-0 h-lg-100">
                            <div class="h-100">
                                <div class="catalogue-item-background bg-white">
                                    <div :style="{'background-image': 'url(' + require('../assets/images/WA-mif-seamless-REVISION.png') + ')'}"
                                         style="top: 0%;"
                                         class="h-100 bgi"></div>
                                </div>
                                <div class="catalogue-item-content-title sub-title">
                                    <a>
                                        <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                            {{$t('products[5].tag')}}
                                        </div>
                                        <div class="text-white"> {{$t('products[5].title')}}</div>
                                        <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                            {{$t('products[5].summary')}}
                                        </div>
                                    </a>
                                    <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                        {{$t('products[5].desc')}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-section",
        i18n: {
            messages: {
                en: {
                    productTitle: 'Objects in creation',
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

    @import "../assets/scss/home/product";

</style>