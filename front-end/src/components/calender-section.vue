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
        <div class="timeline-container">
            <div class="timeline-item ">
                <div class="timeline-icon">
                    <img src="../assets/images/calender-icons/fanel.svg" alt="fanel">
                </div>
                <div class="timeline-content ">
                    <div class="time">{{$t('calendarSection.step1.tag')}}</div>
                    <h4 class="smalltitle">{{$t('calendarSection.step1.title')}}</h4>
                    <div class="item-details">
                        {{$t('calendarSection.step1.subtitle')}}
                    </div>
                    <div class="d-block d-md-none position-relative">
                        <div class="d-flex align-items-center">
                            <img src="../assets/images/Arrowleftwhite.svg" class="d-none d-md-block" alt="fanel" width="26px">
                            <span class="time pl-3 mb-0" style="color: #888!important;">{{$t('calendarSection.tag')}}</span>
                        </div>

                    </div>
                </div>
                <div class="d-none d-md-block position-absolute"
                     style="right: 0;padding-right: 130px;bottom: 80px;">
                    <div class="d-flex align-items-center">
                        <img src="../assets/images/Arrowleftwhite.svg" alt="fanel" width="26px">
                        <span class="time pl-3 mb-0" style="color: #888!important;">{{$t('calendarSection.tag')}}</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item ">
                <div class="timeline-icon">
                    <img src="../assets/images/calender-icons/bug.svg" alt="bug">
                </div>
                <div class="timeline-content right ">
                    <div class="time">{{$t('calendarSection.step2.tag')}}</div>
                    <h4 class="smalltitle">{{$t('calendarSection.step2.title')}}</h4>
                    <div class="item-details">
                        {{$t('calendarSection.step2.subtitle')}}
                    </div>
                </div>
            </div>
            <div class="timeline-item ">
                <div class="timeline-icon">
                    <img src="../assets/images/calender-icons/user.svg" alt="user">
                </div>
                <div class="timeline-content ">
                    <div class="time">{{$t('calendarSection.step3.tag')}}</div>
                    <h4 class="smalltitle">{{$t('calendarSection.step3.title')}}</h4>
                    <div class="item-details">
                        {{$t('calendarSection.step2.subtitle')}}
                    </div>
                </div>
            </div>

            <div class="timeline-item ">
                <div class="timeline-icon">
                    <img src="../assets/images/calender-icons/rocket.svg" alt="user">
                </div>
                <div class="timeline-content right ">
                    <div class="time">{{$t('calendarSection.step4.tag')}}</div>
                    <h4 class="smalltitle">{{$t('calendarSection.step4.title')}}</h4>
                    <div class="item-details">
                        {{$t('calendarSection.step4.subtitle')}}
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-icon complete">
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
                        subtitle: 'To follow the progress of the project. It will refine over time. ' +
                            'Subscribe to the Newsletter and follow us on Instagram and Facebook for' +
                            'be notified.',
                        tag: 'We are here',
                        step1: {
                            tag: 'Step 1',
                            title: 'Creating perfect 3D objects with you.',
                            subtitle: "Thanks to photorealistic 3D technology, we create endlessly. With our " +
                                "community, we demand performance, design, and purism. " +
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
                                'on the Ulule platform. The parts will be limited to avoid the ' +
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

        &:before {
            content: "";
            width: 3px;
            height: 100%;
            background: #0081a7;
            left: 50%;
            top: 0;
            position: absolute;
        }

        .timeline-item {
            position: relative;
            margin-bottom: 30px;

            &:after {
                display: block;
                clear: both;
                content: "";
            }
        }

        .timeline-content {
            width: 45%;
            background: #151515;
            padding: 20px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            border-radius: 15px;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            -ms-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;

            &:before {
                content: '';
                position: absolute;
                left: 45%;
                top: 20px;
                width: 0;
                height: 0;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 7px solid #151515;
            }
        }

        .timeline-content.right {
            float: right;

            &:before {
                content: '';
                right: 45%;
                left: inherit;
                border-left: 0;
                border-right: 7px solid #151515;
            }
        }

        .timeline-icon {
            background: #0081a7;
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            left: 50.9%;
            overflow: hidden;
            margin-left: -25px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            -o-border-radius: 50%;
            border-radius: 50%;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 16px;
            }

            .icon {
                color: #fff;
                font-size: 18px;
                margin-top: -14px;
            }
        }

        .timeline-icon.complete {
            background: #0081a7;
        }
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

    @media (max-width: 767px) {
        .timeline-container {
            width: 90%;

            &:before {
                left: 0;
            }

            .timeline-icon {
                left: 5px;
            }

            .timeline-content {
                width: 90%;
                float: right;

                &:before {
                    left: 10%;
                    margin-left: -7px;
                    border-left: 0;
                    border-right: 7px solid #151515;
                }
            }

            .timeline-content.right {
                &:before {
                    left: 10%;
                    margin-left: -7px;
                    border-left: 0;
                    border-right: 7px solid #151515;
                }
            }
        }
    }

</style>