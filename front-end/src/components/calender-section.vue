<template>
    <section class="calender">

        <div class="section_info">
            <h2>
               {{$t('calendarSection.title')}}
            </h2>
            <h5>
              {{$t('calendarSection.subtitle')}}
            </h5>
        </div>

        <div class="calender-container">
            <div class="items">
                <div class="inner left-caret">
                    <div class="icon-left-block">
                        <img src="../assets/images/calender-icons/fanel.svg" alt="fanel">
                    </div>
                    <div class="title">{{$t('calendarSection.step1.tag')}}</div>
                    <div class="subTitle">{{$t('calendarSection.step1.title')}}</div>
                    <div class="desc">{{$t('calendarSection.step1.subtitle')}}</div>
                </div>
                <div class="inner vh"></div>
            </div>
            <div class="items">
                <div class="inner vh"></div>
                <div class="inner right-caret">
                    <div class="icon-right-block">
                        <img src="../assets/images/calender-icons/bug.svg" alt="bug">
                    </div>
                    <div class="title">{{$t('calendarSection.step2.tag')}}</div>
                    <div class="subTitle">{{$t('calendarSection.step2.title')}}</div>
                    <div class="desc">{{$t('calendarSection.step2.subtitle')}}</div>
                </div>
            </div>
            <div class="items">
                <div class="inner left-caret">
                    <div class="icon-left-block">
                        <img src="../assets/images/calender-icons/user.svg" alt="user">
                    </div>
                    <div class="title">{{$t('calendarSection.step3.tag')}}</div>
                    <div class="subTitle">{{$t('calendarSection.step3.title')}}</div>
                    <div class="desc">{{$t('calendarSection.step3.subtitle')}}</div>
                </div>
                <div class="inner vh"></div>
            </div>
            <div class="items">
                <div class="inner vh"></div>
                <div class="inner right-caret">
                    <div class="icon-right-block">
                        <img src="../assets/images/calender-icons/rocket.svg" alt="rocket">
                    </div>
                    <div class="title">{{$t('calendarSection.step4.tag')}}</div>
                    <div class="subTitle">{{$t('calendarSection.step4.title')}}</div>
                    <div class="desc">{{$t('calendarSection.step4.subtitle')}}</div>
                </div>
            </div>
            <div class="items">
                <div class="icon-complete">
                    <img src="../assets/images/calender-icons/right.svg" alt="right">
                </div>
            </div>
        </div>
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
                        subtitle: 'To follow the progress of the project. It will refine over time. '+
                            'Subscribe to the Newsletter and follow us on Instagram and Facebook for' +
                            'be notified.',
                        tag: 'We are here',
                        step1: {
                            tag: 'Step 1',
                            title: 'Creating perfect 3D objects with you.',
                            subtitle: "Thanks to photorealistic 3D technology, we create endlessly. With our "+
                                "community, we demand performance, design, and purism. "+
                                "All of our choices will be documented on our blog."
                        },
                        step2: {
                            tag: 'Step 2',
                            title: 'Prototyping on the chosen objects.',
                            subtitle: 'Development of prototypes with our French leatherworkers on the basis of our' +
                                '3D. Daily tests of objects with a selection of people. Press articles.'
                        },
                        step3: {
                            tag: 'Step 3',
                            title: 'Limited edition online pre-order campaign.',
                            subtitle: 'Based on our community, we will launch a crowdfunding campaign' +
                                'on the Ulule platform. The parts will be limited to avoid the '+
                                'overproduction and waste.'
                        },
                        step4: {
                            tag: 'Step 4',
                            title: 'Making objects and sending orders',
                            subtitle: 'Our French leather workers will sign and number each object.' +
                                'Before sending them carefully to your home.'
                        },
                    }
                },
                fr: {
                    calendarSection: {
                        title: 'Le calendrier avant le lancement de chaque objet',
                        subtitle: 'Pour suivre le déroulement du projet. Il s’affinera au fil du temps. ' +
                            'Inscrivez vous à la Newsletter et suivez nous sur Instagram et Facebook pour ' +
                            'en être notifié.',
                        tag: 'Nous en sommes ici',
                        step1: {
                            tag: 'Etape 1',
                            title: 'Créations d’objets parfaits en 3D avec vous.',
                            subtitle: 'Grâce à la technologie photoréalistique 3D, nous créons à l’infini. Avec notre ' +
                                'communauté, nous revandiquons performance, design, et purisme. ' +
                                'Tous nos choix seront documentés sur notre blog.'
                        },
                        step2: {
                            tag: 'Etape 2',
                            title: 'Prototypage sur les objets choisis.',
                            subtitle: 'Développement des prototypes avec nos maroquiniers francais sur la base de nos ' +
                                '3D. Tests des objets au quotidien avec une selection de personnes. Articles de presse.'
                        },
                        step3: {
                            tag: 'Etape 3',
                            title: 'Campagne de précommande en ligne en édition limité.',
                            subtitle: 'Sur la base de notre communauté, nous lancerons une campagne de crowdfunding ' +
                                'sur la plateforme Ulule. Les pièces seront limités pour éviter la ' +
                                'surproduction et les déchets.'
                        },
                        step4: {
                            tag: 'Etape 4',
                            title: 'Fabrication des objets et envoi des commandes',
                            subtitle: 'Nos maroquiniers francais signerons et numéroterons chaque objet.' +
                                ' Avant de les envoyer soigneusement chez vous.'
                        },
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .vh {
        visibility: hidden;

        @media(max-width: 425px) {
            visibility: unset;
            display: none;
        }
    }

    .icon-complete {
        height: 40px;
        background: #3781a7;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        bottom: 0;
        position: absolute;

        img {
            width: 16px;
        }

        @media(max-width: 425px) {
            left: -5px;
        }
    }

    .calender {
        padding: 50px 15px;
        background: #1a1a1a;
        color: #fff;

        .section_info {
            h2 {
                font-family: 'teradeli-medium', sans-serif;
                line-height: 2;
                color: #888;
                font-size: 20px;
            }

            h5 {
                font-size: 13px;
                max-width: 400px;
                line-height: 1rem !important;
                color: #fff;
                font-family: 'teradeli-light', sans-serif;
            }
        }

        .calender-container {
            position: relative;
            max-width: 760px;
            padding-bottom: 30px;
            min-height: 100vh;
            margin: 50px auto 0;

            &:before {
                content: "";
                width: 3px;
                height: 100%;
                background: #0081a7;
                left: 50%;
                top: 0;
                position: absolute;

                @media(max-width: 425px) {
                    left: 12px;
                }
            }

            .items {
                display: flex;
                justify-content: space-around;
                align-items: center;

                .inner {
                    flex: 1;
                    background: #151515;
                    margin: 0 20px;
                    max-width: 300px;
                    padding: 20px 20px;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    position: relative;


                    &.left-caret {
                        &:after {
                            content: "";
                            height: 15px;
                            width: 15px;
                            background: #151515;
                            position: absolute;
                            right: -8px;
                            top: 15px;
                            transform: rotate(45deg);
                            @media(max-width: 425px) {
                                left: -8px;
                            }
                        }
                    }

                    &.right-caret {
                        &:after {
                            content: "";
                            height: 15px;
                            width: 15px;
                            background: #151515;
                            position: absolute;
                            left: -8px;
                            top: 15px;
                            transform: rotate(45deg);
                        }
                    }


                    .icon-left-block {
                        position: absolute;
                        height: 40px;
                        background: #3781a7;
                        width: 40px;
                        border-radius: 50%;
                        right: -62px;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        @media(max-width: 768px) {
                            top: -1px;
                            right: -56px;
                        }

                        @media(max-width: 425px) {
                            left: -53px;
                        }

                        img {
                            width: 16px;
                        }


                    }

                    .icon-right-block {
                        position: absolute;
                        height: 40px;
                        background: #3781a7;
                        width: 40px;
                        border-radius: 50%;
                        left: -59px;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @media(max-width: 768px) {
                            left: -54px;
                        }

                        img {
                            width: 16px;
                        }
                    }

                    .title {
                        color: #0081a7;
                        font-size: 16px;
                    }

                    .subTitle {
                        font-size: 18px;
                        color: #fff;
                        font-family: 'teradeli-medium', sans-serif;
                        line-height: 1rem !important;
                        margin: 10px 0;
                    }

                    .desc {
                        color: #86868b;
                        font-size: 13px;
                        line-height: 1.47059;
                        letter-spacing: -.022em;
                        font-family: 'teradeli-light', sans-serif;
                    }
                }
            }
        }
    }
</style>