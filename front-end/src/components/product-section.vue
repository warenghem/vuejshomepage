<template>
        <div class="productSection finebordert">
            <div class="page-title absolute-title d-none">{{$t('productTitle')}}</div>
                <v-row no-gutters class="pa-md-4">
                    <v-col v-for="(product,p_idx) in products"
                           :key="p_idx"
                           lg="3"
                           sm="6"
                           cols="6"
                           class="p-0 cross product">
                        <div class="catalogue-item h-100">
                            <div class="h-100">
                                <v-img :src="backgroundImages[p_idx]"
                                       class="img-fluid catalogue-item-background bg-white"
                                >
                                    <div class="catalogue-item-content-title sub-title mt-4 mt-lg-0">
                                        <a>
                                            <div class="text-lightblue teradeli-light mb-1" style="font-size:13px">
                                                {{product.tag}}
                                            </div>
                                            <div class="text-white"> {{product.title}}</div>
                                            <div class="teradeli-book mt-2 px-3" style="font-size: 20px;">
                                                {{product.summary}}
                                            </div>
                                        </a>
                                        <div class="catalogue-item-content-list px-4 py-4 teradeli-light text-white">
                                            {{product.desc}}
                                        </div>
                                    </div>
                                </v-img>
                            </div>
                        </div>
                    </v-col>
                </v-row>
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
                            title: 'The belt',
                            summary: "She won't let you down.All in nobility.",
                            desc: 'Wide and thick, with saddle finish, it also fits well on' +
                                'a suit than jeans.'
                        },
                        {
                            tag: 'Visuals to come',
                            title: 'The portfolio',
                            summary: 'Plant like its leaves. Obviously.',
                            desc: 'Ally of your daily life, it is competed around oblique lines representing the' +
                                'W emblematic of the brand. Each of them has space for your cards.'
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
                            title: 'The shoes',
                            summary: "",
                            desc: ""
                        },
                    ]
                },
                fr: {
                    productTitle: 'Les objets en création',
                    products: [
                        {
                            tag: 'Visuels à venir',
                            title: 'La ceinture',
                            summary: 'Elle ne vous laissera pas tomber. Tout en noblesse.',
                            desc: 'Large et épaisse, aux finitions sellier, elle s’integre aussi bien sur ' +
                                'un costume que sur un jean.'
                        },
                        {
                            tag: 'Visuels à venir',
                            title: 'Le portefeuille',
                            summary: 'Végétal comme ses feuilles. Evidemment.',
                            desc: 'Allié de votre quotidien, il est concu autours de lignes obliques représentant le' +
                                ' W emblématique de la marque. Chacune d’entre elles abrite un espace pour vos cartes.'
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
                            title: 'La chaussure',
                            summary: '',
                            desc: ''
                        },

                    ]
                }
            }
        },
        data() {
            return {
                backgroundImages:[
                    require('../assets/images/WA-mif-seamless-REVISION.png'),
                    require('../assets/images/WA-mif-seamless-REVISION.png'),
                    require('../assets/images/Sac-rendu-10-07-2020.2-min.jpg'),
                    require('../assets/images/WA-mif-seamless-REVISION.png'),
                ],
                products: this.$t('products')
            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../assets/scss/home/product";

    .catalogue-item-content-title {
        a {
            cursor: url(../assets/images/cross_100185.svg), auto;
        }
    }



</style>