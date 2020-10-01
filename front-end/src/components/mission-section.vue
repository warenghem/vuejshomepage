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
                                    <a >
                                        <h3 class=" text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                Technologies durables. Tracabilité totale.
                                            </div>
                                            <div class="sub-title text-gray">
                                                Puissantes, neutres en CO2, nos technologies accompagnent la
                                                régénération de la nature.
                                            </div>
                                        </h3>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div>
                                        <ul class="text-left mb-4 teradeli-light">
                                            <li class="fp-list-item">
                                                <div class="count">01
                                                </div>
                                                <div class="col">Technologie Blockchain. Pour une transparence sans
                                                    faille.
                                                </div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">02
                                                </div>
                                                <div class="col">Bio-Technologies. Comme alternative au cuir
                                                    animal.
                                                </div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">03
                                                </div>
                                                <div class="col">Technologies neutres en CO2. Alimentées par des
                                                    énergies renouvelables.
                                                </div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">04
                                                </div>
                                                <div class="col">Technologies et electroniques fabriquées en France.
                                                    Nos usines cherchent à innover sans altérer l’environnement.
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
                                <div class="homepage-catalogue-links-item-title pb-5">
                                    <a >
                                        <h3 class=" text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                Design en studio. Naturellement sobre.
                                            </div>
                                            <div class="sub-title text-gray">
                                                Intuitives, brutes, sans excès, nos créations sont pensées pour
                                                l’usage.
                                            </div>
                                        </h3>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <ul class="list-unstyled list-custom text-left mb-4 teradeli-light">
                                        <li class="fp-list-item">
                                            <div class="count">
                                                01
                                            </div>
                                            <div class="col">Inspirées par les architectes et designers. La
                                                personnalité affirmée de nos objets casse les codes de la
                                                maroquinerie classique.
                                            </div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                02
                                            </div>
                                            <div class="col">Centrés sur relation entre l’Homme et l’objet. Le
                                                design est construit pour la fonctionnalité et le quotidien.
                                            </div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                03
                                            </div>
                                            <div class="col">Focalisés sur un futur que nous devons réinventer. Le
                                                style de chaque matière est étudié pour confondre l’objet dans le
                                                paysage.
                                            </div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                04
                                            </div>
                                            <div class="col">Passionés par des objets qui durent. Le design est
                                                pensé intemporel, échappant à toute mode éphémère.
                                            </div>
                                        </li>
                                    </ul>
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
                                    <a >
                                        <h3 class=" text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                Fabriqué en France. Point.
                                            </div>
                                            <div class="sub-title text-gray">
                                                Raffinés, artisanaux, locaux, nos objets développent l’industrie et
                                                le savoir-faire Français.
                                            </div>
                                        </h3>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <div class="item-desc text-left px-3 mb-4">
                                        <ul class="list-unstyled list-custom text-left mb-4 teradeli-light">
                                            <li class="fp-list-item">
                                                <div class="count">01
                                                </div>
                                                <div class="col">Locaux : Véritable projet français de A à Z.</div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">02
                                                </div>
                                                <div class="col">Sociaux : Développer les emplois et les traditions
                                                    francaises.
                                                </div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">03
                                                </div>
                                                <div class="col">Éthiques : Ne pas profiter de pays à bas couts (y
                                                    compris en Europe).
                                                </div>
                                            </li>
                                            <li class="fp-list-item">
                                                <div class="count">04
                                                </div>
                                                <div class="col">Écologiques : Évitons les transports et l’opacité
                                                    de pays en dehors de nos règlementations nationales.
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
                                    <a >
                                        <h3 class=" text-left px-3 mb-4">
                                            <div class="sub-title text-white">
                                                La noblesse du vin. Complètement végétal.
                                            </div>
                                            <div class="sub-title text-gray">
                                                Performantes, naturelles, solides, nos matières sont issues de la
                                                terre et des vendanges.
                                            </div>
                                        </h3>
                                    </a>
                                </div>
                                <div class="homepage-catalogue-links-item-links">
                                    <ul class="list-unstyled list-custom text-left mb-4 teradeli-light">
                                        <li class="fp-list-item">
                                            <div class="count">
                                                01
                                            </div>
                                            <div class="col">Issues de la rencontre entre la nature et nos
                                                innovations technologiques
                                            </div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                02
                                            </div>
                                            <div class="col">Beaucoup plus écologiques et aussi solides que le cuir
                                                traditionnel.
                                            </div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                03
                                            </div>
                                            <div class="col">Sans matière animale. Sans souffrance.</div>
                                        </li>
                                        <li class="fp-list-item">
                                            <div class="count">
                                                04
                                            </div>
                                            <div class="col">Délaissant le plastique. Nous n’en avons plus besoin.
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
        }
    }
</script>

<style scoped lang="scss">
    .fp-section {
        display: table;
        table-layout: fixed;
        width: 100%;
        position: relative;
        transition: background-position 1200ms cubic-bezier(0.694, 0, 0.335, 1);
        overflow: hidden;
    }

    .fp-tableCell {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        overflow: hidden !important;
    }

    .fp-bg {
        transition: transform 1200ms cubic-bezier(0.694, 0, 0.335, 1);
        top: 0;
        bottom: 0;
        width: 100%;
        position: absolute;
    }

    .homepage-item {
        height: 100%;
    }

    .homepage-catalogue-title {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);
        z-index: 3;
        transition: opacity 0.3s ease;
    }

    .homepage-catalogue-background.active {
        .homepage-catalogue-background-big {
            div {
                transition: transform 30s linear;
                transform: scale(1.3);
            }

            &::after {
                opacity: 1;
            }
        }
    }

    .homepage-catalogue-links-item {
        &:hover {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        position: absolute;
        bottom: 0;
        width: 25%;
        text-align: center;
        line-height: 1.4;
        transform: translateY(100%) translateY(-155px) translateY(-64px);
        padding-bottom: 30px;
        transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
        opacity: 1;
        z-index: 10;
        cursor: url(../assets/images/cross_100185.svg), auto;

        a {
            text-decoration: none;
            transition: color 0.3s ease;
        }

        &:first-of-type {
            right: 0% !important;
        }

        &:nth-of-type(2) {
            right: 25% !important;
        }

        &:nth-of-type(3) {
            right: 50% !important;
        }

        &:nth-of-type(4) {
            right: 75% !important;
        }
    }

    .homepage-catalogue-background {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .homepage-catalogue-background-big {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        overflow: hidden;

        div {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
        }

        &::after {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            content: "";
            background-color: rgba(0, 0, 0, .5);
            z-index: 2;
            opacity: .2;
            transition: opacity 0.5s;
        }
    }

    .homepage-catalogue-background-lines {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 3;
        transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);

        div {
            &:first-of-type {
                right: 25% !important;
            }

            position: absolute;
            top: 0;
            bottom: 0;

            &:not(:last-of-type) {
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 1px;
                    background-color: #fff;
                    opacity: 0.5;
                }
            }

            &:nth-of-type(2) {
                right: 50% !important;
            }

            &:nth-of-type(3) {
                right: 75% !important;
            }

            &:nth-of-type(4) {
                right: 100% !important;
            }
        }
    }

    .homepage-catalogue-background-divided2 {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        overflow: hidden;

        > div {
            &:first-of-type {
                right: 0;
                background-position: right center;

                div {
                    transform: translateX(-75%) !important;
                }
            }

            position: absolute;
            top: 0;
            bottom: 0;
            overflow: hidden;
            width: 25% !important;

            &:nth-of-type(2) {
                div {
                    transform: translateX(-50%) !important;
                }

                background-position: right 20% center;
                right: 25% !important;
            }

            &:nth-of-type(3) {
                div {
                    transform: translateX(-25%) !important;
                }

                background-position: right 40% center;
                right: 50% !important;
            }

            &:nth-of-type(4) {
                div {
                    transform: translateX(-20%);
                }

                right: 60%;
                background-position: right 60% center;
            }

            &:last-of-type {
                div {
                    transform: translateX(0);
                }

                background-position: right 80% center;
                right: 75% !important;
            }

            > div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                -webkit-background-size: cover;
                background-size: cover;
                background-position: center center;
                width: 400% !important;
            }
        }
    }

    .homepage-catalogue-links {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .homepage-catalogue-links-item-title {
        font-size: 22px;
        margin-bottom: 30px;

        > a {
            display: block;

            img {
                margin-bottom: 15px;
            }
        }
    }

    .homepage-catalogue-links-item-links {
        opacity: 1;
        transition: opacity 1.5s ease;
    }

    .homepage-catalogue-background-maintitle {
        opacity: 1;
        transition: opacity 1.5s ease;
    }

    .homepage-catalogue-background-button {
        opacity: 1;
        transition: opacity 1.5s ease;
    }

    .opacityimportant {
        opacity: 0.2 !important;
    }

    .bgi {
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
    }

    .gradientoverlay {
        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: #121217;
            opacity: 0.2;
            z-index: 1;
        }

        &::after {
            background: linear-gradient(0.75deg, #000000 0%, transparent 100%);
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            z-index: 1;
            opacity: 0.5;
        }
    }

    .fp-list-item {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        font-size: 18px;
        color: white;

        .count {
            color: #0081A7 !important;
            font-size: 16px;
            margin-right: 4px !important;
            flex: 0 0 8.3333333333%;
            max-width: 8.3333333333%;
            text-align: center;
        }
    }

    .image1 {
        background-image: url('../assets/images/Studio-e1593525488356-min-1.jpg');
    }


</style>