<template>
    <section class="calender">

        <div class="section_info px-md-4 py-5">
            <div class="page-title">
                {{$t('calendarSection.title')}}
            </div>
            <div class="subtitle teradeli-light pb-md-5 py-4">
                {{$t('calendarSection.subtitle')}}
            </div>
        </div>
        <v-container class="timeline-container">
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                        :color="'#151515'"
                        fill-dot
                        v-for="(item,i) in $t('calendarSection.steps')"
                        :key="'time_'+i"
                >
                    <template v-slot:icon>
                        <img :src="images[i]" alt="timeline-icon" width="16px">
                    </template>
                    <div slot="opposite" v-if="i===0">
                        <div class="d-flex align-items-center">
                            <img src="../assets/images/Arrowleftwhite.svg" class="d-none d-md-block" alt="fanel"
                                 width="26px">
                            <span class="time pl-3 mb-0"
                                  style="color: #888!important;">{{$t('calendarSection.tag')}}</span>
                        </div>
                    </div>
                    <v-card
                            :color="'#151515'"
                            dark
                            class="pa-4"
                    >

                        <div class="time">{{item.tag}}</div>
                        <h4 class="smalltitle">{{item.title}}</h4>
                        <div class="item-details">
                            {{item.subtitle}}
                        </div>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item
                        :color="'#151515'"
                        fill-dot
                >
                    <template v-slot:icon>
                        <img :src="images[4]" alt="timeline-icon" width="16px">
                    </template>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </section>
</template>
<script>
    export default {
        name: "calender-section",
        i18n: {
            messages: {
                en: {
                    calendarSection: {
                        title: 'The calendar before the launch of each object',
                        subtitle: 'To follow the progress of the project. It will refine over time. ' +
                            'Subscribe to the Newsletter and follow us on Instagram and Facebook for' +
                            'be notified.',
                        tag: 'We are here',
                        steps: [{
                            tag: 'Step 1',
                            title: 'Creating perfect 3D objects with you.',
                            subtitle: "Thanks to photorealistic 3D technology, we create endlessly. With our " +
                                "community, we demand performance, design, and purism. " +
                                "All of our choices will be documented on our blog."
                        }, {
                            tag: 'Step 2',
                            title: 'Prototyping on the chosen objects.',
                            subtitle: 'Development of prototypes with our French leatherworkers on the basis of our' +
                                '3D. Daily tests of objects with a selection of people. Press articles.'
                        }, {
                            tag: 'Step 3',
                            title: 'Limited edition online pre-order campaign.',
                            subtitle: 'Based on our community, we will launch a crowdfunding campaign' +
                                'on the Ulule platform. The parts will be limited to avoid the ' +
                                'overproduction and waste.'
                        }, {
                            tag: 'Step 4',
                            title: 'Making objects and sending orders',
                            subtitle: 'Our French leather workers will sign and number each object.' +
                                'Before sending them carefully to your home.'
                        }],
                    }
                },
                fr: {
                    calendarSection: {
                        title: 'Le calendrier avant le lancement de chaque objet',
                        subtitle: 'Pour suivre le déroulement du projet. Il s’affinera au fil du temps. ' +
                            'Inscrivez vous à la Newsletter et suivez nous sur Instagram et Facebook pour ' +
                            'en être notifié.',
                        tag: 'Nous en sommes ici',
                        steps: [{
                            tag: 'Etape 1',
                            title: 'Créations d’objets parfaits en 3D avec vous.',
                            subtitle: 'Grâce à la technologie photoréalistique 3D, nous créons à l’infini. Avec notre ' +
                                'communauté, nous revandiquons performance, design, et purisme. ' +
                                'Tous nos choix seront documentés sur notre blog.'
                        }, {
                            tag: 'Etape 2',
                            title: 'Prototypage sur les objets choisis.',
                            subtitle: 'Développement des prototypes avec nos maroquiniers francais sur la base de nos ' +
                                '3D. Tests des objets au quotidien avec une selection de personnes. Articles de presse.'
                        }, {
                            tag: 'Etape 3',
                            title: 'Campagne de précommande en ligne en édition limité.',
                            subtitle: 'Sur la base de notre communauté, nous lancerons une campagne de crowdfunding ' +
                                'sur la plateforme Ulule. Les pièces seront limités pour éviter la ' +
                                'surproduction et les déchets.'
                        }, {
                            tag: 'Etape 4',
                            title: 'Fabrication des objets et envoi des commandes',
                            subtitle: 'Nos maroquiniers francais signerons et numéroterons chaque objet.' +
                                ' Avant de les envoyer soigneusement chez vous.'
                        }],
                    }
                }
            }
        },
        data() {
            return {
                images: [
                    require('../assets/images/calender-icons/fanel.svg'),
                    require('../assets/images/calender-icons/bug.svg'),
                    require('../assets/images/calender-icons/user.svg'),
                    require('../assets/images/calender-icons/rocket.svg'),
                    require('../assets/images/calender-icons/right.svg'),
                ]
            }
        }
    }
</script>
<style lang="scss">

    .calender {
        border-top: solid 1px rgba(255, 255, 255, 0.5);
        background: #1a1a1a;
        background: radial-gradient(circle at 50% 45%, #292929 0%, #0a0a0a 100%);
        color: #fff;
        padding-bottom: 90px;

        .subtitle {
            font-size: 13px;
            padding-left: 20px;
            max-width: 400px;
            line-height: 1rem !important;
        }

    }

    .timeline-container {
        position: relative;
        max-width: 760px;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .timeline-item {
        position: relative;
        margin-bottom: 30px;
    }

    .timeline-content {
        border-radius: 15px;
    }

    .time {
        font-weight: 700;
        margin-bottom: 5px;
        color: #0081a7;
        font-size: 16px;
    }

    .smalltitle {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
        color: #fff;
        font-family: 'teradeli-medium', sans-serif;
        line-height: 1rem !important;
        font-weight: 100;
    }

    .item-details {
        margin-bottom: 15px;
        color: #86868b;
        text-align: left;
        font-size: 13px;
        line-height: 1.47059;
        font-weight: 900;
        letter-spacing: -.022em;
        font-family: 'teradeli-light', sans-serif;
    }

    .v-timeline::before {
        background: #0081a7 !important;
    }
</style>