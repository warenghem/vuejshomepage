<template>
    <div class="py-10 border-bottom-2" v-intersect.once="mapIntersect">
        <h2 class="page-title pt-md-5 pt-4 pr-4"> {{$t('title')}}</h2>
        <h3 class="page-details pb-md-5 py-2 teradeli-light pr-4"> {{$t('subtitle')}}</h3>
        <div class="d-flex justify-center py-3 py-md-0 flex-column flex-sm-row">
            <div class="text-center py-4 px-7">
                <div class="sub-title">
                    <animated-number ref="treeCount"
                                     :from="0"
                                     :to="treeCount"
                                     :duration="3"
                                     :delay="2"
                                     easing="Power1.easeOut"
                    />
                </div>
                <div style="color: #888;"> {{$t('term1')}}</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">
                    <animated-number ref="co2"
                                     :from="0"
                                     :to="co2"
                                     :format="2"
                                     :duration="3"
                                     :delay="2"
                                     easing="Power1.easeOut"
                    />
                    tonnes
                </div>
                <div style="color: #888;">{{$t('term2')}}</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">
                    <animated-number ref="reforest"
                                     :from="0"
                                     :to="reforest"
                                     :duration="3"
                                     :delay="2"
                                     :format="3"
                                     easing="Power1.easeOut"
                    />
                </div>
                <div style="color: #888;">{{$t('term3')}}</div>
            </div>

        </div>
        <div id="mapSection"></div>
        <div class="slideArea mgforest">
            <div class="card">
                <div style="height: 60px" class="d-flex justify-space-between align-center border-bottom-2">
                    <div class="py-1 border-right-2 pl-3" style="width: 100%">
                        <button class="btn-theme my-0"
                                @click="dialog = true">
                            {{$t('btnTitle')}}
                        </button>
                    </div>
                    <v-btn
                            text
                            color="black"
                            @click="closeSlide"
                            style="font-size: 32px"
                            class="px-0 h-100"
                    >
                        &times;
                    </v-btn>
                </div>
                <div class="px-7 pb-3  map-modal">
                    <v-row>
                        <v-col lg="6">
                            <div class="para-title">{{$t('madagascar.section1.title')}}</div>
                            <div class="para-subtitle">{{$t('madagascar.section1.subtitle')}}</div>
                            <div class="para-img">
                                <v-img src="../assets/images/specie-mango.jpg" alt="mango"></v-img>
                            </div>
                            <v-row>
                                <v-col class="text-center ">
                                    <div class="para-subtitle">
                                        20kg
                                    </div>
                                    <div class="para-text">{{$t('madagascar.section1.term1')}}</div>
                                </v-col>
                                <v-col class="text-center">
                                    <div class="para-subtitle">{{$t('madagascar.section1.term2bis')}}</div>
                                    <div class="para-text">{{$t('madagascar.section1.term2')}}</div>
                                </v-col>
                                <v-col class="text-center ">
                                    <div class="para-subtitle">2 – 10 m</div>
                                    <div class="para-text">{{$t('madagascar.section1.term3')}}</div>
                                </v-col>
                            </v-row>
                            <div class="para-subtitle-small">{{$t('madagascar.section1.paraTitle')}}</div>
                            <div class="para-text" v-html="$t('madagascar.section1.paraText')">
                            </div>
                        </v-col>
                        <v-col lg="6">
                            <div class="para-title">{{$t('madagascar.section2.title')}}</div>
                            <div class="para-subtitle">{{$t('madagascar.section2.subtitle')}}</div>
                            <div class="para-img">
                                <v-img src="../assets/images/river.png" alt="tiger"></v-img>
                            </div>
                            <div class="para-subtitle-small">{{$t('madagascar.section2.paraTitle1')}}</div>
                            <div class="para-text" v-html="$t('madagascar.section2.paraText1')">
                            </div>
                            <div class="para-subtitle-small">{{$t('madagascar.section2.paraTitle2')}}</div>
                            <div class="para-text" v-html="$t('madagascar.section2.paraText2')">
                            </div>
                        </v-col>
                        <v-col>
                            <div class="para-title">{{$t('madagascar.section3.title')}}</div>
                            <a href="https://www.google.com/maps/d/edit?mid=17AwywoebWVZcltzhsfdwTKS7IC5yDtvN&usp=sharing">
                                <v-img class="py-3" src="../assets/images/map1.png" alt="map"></v-img>
                            </a>
                        </v-col>
                    </v-row>

                </div>
            </div>
        </div>
        <div class="slideArea indianforest">
            <div class="card">
                <div style="height: 60px" class="d-flex justify-space-between align-center border-bottom-2 pl-3">
                    <div class="py-1 border-right-2" style="width: 100%">
                        <button class="btn-theme my-0"
                                @click="dialog = true">
                            {{$t('btnTitle')}}
                        </button>
                    </div>
                    <v-btn
                            text
                            color="black"
                            @click="closeSlide"
                            style="font-size: 32px"
                            class="px-0 h-100"
                            large
                    >
                        &times;
                    </v-btn>
                </div>
                <div class="px-7 pb-3  map-modal">
                    <v-row>
                        <v-col lg="6">
                            <div class="para-title">{{$t('india.section1.title')}}</div>
                            <div class="para-subtitle">{{$t('india.section1.subtitle')}}</div>
                            <div class="para-img">
                                <v-img src="../assets/images/mango.jpg" alt="mango"></v-img>
                            </div>
                            <v-row>
                                <v-col class="text-center ">
                                    <div class="para-subtitle">
                                        800kg
                                    </div>
                                    <div class="para-text">{{$t('india.section1.term1')}}</div>
                                </v-col>
                                <v-col class="text-center">
                                    <div class="para-subtitle">{{$t('india.section1.term2bis')}}</div>
                                    <div class="para-text">{{$t('india.section1.term2')}}</div>
                                </v-col>
                                <v-col class="text-center ">
                                    <div class="para-subtitle">35–45m</div>
                                    <div class="para-text">{{$t('india.section1.term3')}}</div>
                                </v-col>
                            </v-row>
                            <div class="para-subtitle-small">{{$t('india.section1.paraTitle')}}</div>
                            <div class="para-text" v-html="$t('india.section1.paraText')">
                            </div>
                        </v-col>
                        <v-col lg="6">
                            <div class="para-title">{{$t('india.section2.title')}}</div>
                            <div class="para-subtitle">{{$t('india.section2.subtitle')}}</div>
                            <div class="para-img">
                                <v-img src="../assets/images/tiger.jpg" alt="tiger"></v-img>
                            </div>
                            <div class="para-subtitle-small">{{$t('india.section2.paraTitle1')}}</div>
                            <div class="para-text" v-html="$t('india.section2.paraText1')">
                            </div>
                            <div class="para-subtitle-small">{{$t('india.section2.paraTitle2')}}</div>
                            <div class="para-text" v-html="$t('india.section2.paraText2')">
                            </div>
                        </v-col>
                        <v-col>
                            <div class="para-title">{{$t('india.section3.title')}}</div>
                            <a href="https://www.google.com/maps/d/edit?mid=1bayTFmMWGfd9RN9Yia5q4Vt-lOcOEkbl&usp=sharing">
                                <v-img class="py-3" src="../assets/images/map2.png" alt="map2"></v-img>
                            </a>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core"
    import * as am4maps from "@amcharts/amcharts4/maps"
    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"
    import AnimatedNumber from "./animated-number";


    export default {
        name: "we-plant-tree-map",
        components: {AnimatedNumber},
        i18n: {
            messages: {
                en: {
                    title: 'We also plant trees. And you?',
                    subtitle: 'To offset the CO2 emissions linked to the creation of our objects, your visits to our ' +
                        'site, and the electricity consumption of our technologies. Our projects are exclusively ' +
                        'reserved for the regeneration of biodiversity. Our trees are traced and certified.',
                    term1: 'planted trees',
                    term2: 'of CO2 compensated',
                    term3: 'reforested hectares',
                    madagascar: {
                        section1: {
                            title: 'Forest',
                            subtitle: 'Black mangrove',
                            paraTitle: 'Local flora and fauna.',
                            paraText: '<p>Madagascar has over 200,000 species of plants and animals that do not exist' +
                                ' anywhere else in the world. 90% of the forests have been destroyed, ' +
                                'displacing entire animal species and Malagasy people.</p>',
                            term1: 'CO2 compensation',
                            term2: 'Lifetime',
                            term2bis: '25y',
                            term3: 'Cut',
                        },
                        section2: {
                            title: 'Project',
                            subtitle: 'Paradis project, Madagascar',
                            paraTitle1: 'Incredible project. Total success.',
                            paraText1: "<p>Eden Reforestation Projects launched this program in 2007 following the" +
                                " critical loss of forests.</p><p>16 million mangroves have been planted. Healthy " +
                                "forests are starting to emerge and all the negative effects of deforestation are " +
                                "starting to disappear.</p>",
                            paraTitle2: 'An active local community. To remember.',
                            paraText2: "<p>The Vilamatsa were eager to be part of this reforestation initiative due " +
                                "to the success of a nearby plantation.</p><p>It gives them a decent income so that " +
                                "they can support their families again.</p>"
                        },
                        section3: {
                            title: 'Google Map link.'
                        }
                    },
                    india: {
                        section1: {
                            title: 'Forest',
                            subtitle: 'Mango trees',
                            paraTitle: 'Local flora and fauna.',
                            paraText: '<p>Similipal National Park is the 7th largest national park in India (2,750 km2), ' +
                                'and has been part of the UNESCO World Network of Biosphere Reserves since 2009. ' +
                                'It is home to the Bengal tiger, elephant Asia, the gaur and the chausingha. ' +
                                'As well as the most beautiful waterfalls like Joranda and Barehipani Falls.</p>',
                            term1: 'CO2 compensation',
                            term2: 'Lifetime',
                            term2bis: '100y',
                            term3: 'Cut',
                        },
                        section2: {
                            title: 'Project',
                            subtitle: 'Trees for tigers, India',
                            paraTitle1: 'The Jungle Book 2.',
                            paraText1: "<p>The project is targeting 50,000 trees on the edge of the Similipal National " +
                                "Park to enrich the local virgin forest, especially for Bengal tigers.</p>",
                            paraTitle2: 'How about we drop by to help them?',
                            paraText2: "<p>The project area is inhabited by a variety of tribal communities (Bhumija, " +
                                "Gondas, Kolha… About 4,093 working days will be created for them.</p>" +
                                "<p>The nearest airport is Biju Patnaik, located 200 km from the site. " +
                                "The nearest town is Jamshedpur 105 km away.</p>"
                        },
                        section3: {
                            title: 'Google Map link.'
                        }
                    }

                },
                fr: {
                    title: 'Nous plantons aussi des arbres. Et vous?',
                    subtitle: 'Pour compenser les émissions de CO2 liées à la création de nos objets, à vos visites' +
                        ' sur notre site, et à la consommation d’électricité de nos technologies. Nos projets sont' +
                        ' exclusivement réservés à la régénération de la biodiversité. Nos arbres sont tracés' +
                        ' et certifiés.',
                    term1: 'arbres plantés',
                    term2: 'de CO2 compensées',
                    term3: 'hectares reforestés',
                    madagascar: {
                        section1: {
                            title: 'Fôret',
                            subtitle: 'Mangrove noire',
                            paraTitle: 'Faune et Flore locale.',
                            paraText: '<p>Madagascar dispose de plus de 200 000 espèces de plantes et d’animaux qui ' +
                                'n’existent nulle part ailleurs dans le monde. 90% des forêts ont été détruites, ' +
                                'déplaçant des espèces animales entières et les Malgaches.</p>',
                            term1: 'Compensation CO2',
                            term2: 'Durée de vie',
                            term2bis: '25ans',
                            term3: 'Taille',
                        },
                        section2: {
                            title: 'Projet',
                            subtitle: 'Projet Paradis, Madagascar',
                            paraTitle1: 'Incroyable projet. Réussite totale.',
                            paraText1: "<p>Eden Reforestation Projects a lancé ce programme en 2007 suite à la perte" +
                                " critique de fôrets.</p><p>16 millions de mangroves ont été plantés. Des forêts " +
                                "saines commencent à émerger et tous les effets négatifs de la déforestation " +
                                "commencent à disparaître.</p>",
                            paraTitle2: 'Une communauté locale active. A ne pas oublier.',
                            paraText2: "<p>Les Vilamatsa avaient hâte de faire partie de cette initiative " +
                                "de reboisement en raison du succès d’une plantation à proximité.</p>" +
                                "<p>Cela leur donne un revenu décent afin qu’ils puissent à nouveau " +
                                "subvenir aux besoins de leur famille.</p>"
                        },
                        section3: {
                            title: 'Lien Google Map.'
                        }
                    },
                    india: {
                        section1: {
                            title: 'Fôret',
                            subtitle: 'Manguiers',
                            paraTitle: 'Faune et Flore locale.',
                            paraText: '<p>Le parc national de Similipal est le 7e plus grand parc national d’Inde ' +
                                '(2 750 km2), et fait partie du Réseau mondial des réserves de biosphère ' +
                                'de l’UNESCO depuis 2009. Il abrite le tigre du Bengale, l’éléphant d’Asie, ' +
                                'le gaur et le chausingha. Ainsi que les plus belles chutes d’eau comme Joranda ' +
                                'et Barehipani Falls.</p>',
                            term1: 'Compensation CO2',
                            term2: 'Durée de vie',
                            term2bis: '100ans',
                            term3: 'Taille',
                        },
                        section2: {
                            title: 'Projet',
                            subtitle: 'Des arbres pour les tigres, Inde',
                            paraTitle1: 'Le livre de la jungle 2.',
                            paraText1: "<p>Le projet vise 50 000 arbres en bordure du parc national de Similipal " +
                                "pour enrichir la fôret vierge locale, en particulier pour les tigres du Bengale.</p>",
                            paraTitle2: 'Et si nous passions les aider ?',
                            paraText2: "<p>La région du projet est habitée par une variété de communautés tribales " +
                                "(Bhumija, Gondas, Kolha… Environ 4 093 jours de travail seront créés pour eux.</p>" +
                                "<p>L’aéroport le plus proche est celui de Biju Patnaik, situé de 200 km du site." +
                                " La ville la plus proche est Jamshedpur à 105 km.</p>"
                        },
                        section3: {
                            title: 'Lien Google Map.'
                        }
                    }
                }
            }
        },
        data() {
            return {
                intersectionOptions: {
                    root: null,
                    rootMargin: '0px 0px 0px 0px',
                    threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
                },
                wPointActive: true,
                treeCount: 0,
                co2: 0,
                reforest: 0
            }
        },
        mounted() {
            this.mapCreate();
        },
        beforeDestroy() {
            if (this.chart) {
                this.chart.dispose()
            }
        },
        methods: {
            mapCreate() {
                am4core.options.queue = true;
                am4core.options.onlyShowOnViewport = true;
                am4core.ready(function () {
                    // Create map instance
                    var chart = am4core.create("mapSection", am4maps.MapChart);

                    chart.tapToActivate = true;
                    chart.chartContainer.wheelable = false;
                    chart.seriesContainer.draggable = false;
                    chart.seriesContainer.resizable = false;
                    chart.seriesContainer.events.disableType("doublehit");
                    chart.chartContainer.background.events.disableType("doublehit");

                    // Set map definition
                    chart.geodata = am4geodata_worldLow;

                    // Set projection
                    chart.projection = new am4maps.projections.Miller();

                    // Create map polygon series
                    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

                    // Exclude Antartica
                    polygonSeries.exclude = ["AQ"];

                    // Make map load polygon (like country names) data from GeoJSON
                    polygonSeries.useGeodata = true;

                    // Configure series
                    var polygonTemplate = polygonSeries.mapPolygons.template;
                    polygonTemplate.fill = am4core.color("#153038");
                    polygonTemplate.strokeOpacity = 0.4;

                    // Add image series
                    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
                    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
                    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
                    imageSeries.data = [
                        {
                            id: "Trees_for_Tiger",
                            text: "India - Trees for Tiger",
                            latitude: 22.003975,
                            longitude: 86.06648,
                            image: "../assets/images/map2.png",
                            modal: ".indianforest",
                        },
                        {
                            id: "Eden_Projet",
                            text: "Madagascar - Eden Project",
                            latitude: -16.270975,
                            longitude: 44.445852,
                            image: "../assets/images/map1.png",
                            modal: ".mgforest",
                        },
                    ];

                    // add events to recalculate map position when the map is moved or zoomed
                    chart.events.on("ready", updateCustomMarkers);
                    chart.events.on("mappositionchanged", updateCustomMarkers);

                    // this function will take current images on the map and create HTML elements for them
                    function updateCustomMarkers() {
                        // go through all of the images
                        imageSeries.mapImages.each(function (image) {
                            // check if it has corresponding HTML element
                            if (!image.dummyData || !image.dummyData.externalElement) {
                                // create onex
                                image.dummyData = {
                                    externalElement: createCustomMarker(image),
                                };
                            }

                            // reposition the element accoridng to coordinates
                            var xy = chart.geoPointToSVG({longitude: image.longitude, latitude: image.latitude});
                            image.dummyData.externalElement.style.top = xy.y + "px";
                            image.dummyData.externalElement.style.left = xy.x + "px";
                        });
                    }

                    // responsive Zoom
                    var x = window.matchMedia("(max-width: 768px)");
                    if (x.matches) {
                        chart.homeZoomLevel = 3;
                        chart.maxZoomLevel = 3;
                        chart.homeGeoPoint = {
                            latitude: 3.770449,
                            longitude: 64.38911,
                        };
                    } else {
                        chart.maxZoomLevel = 1;
                    }

                    // this function creates and returns a new marker element
                    function createCustomMarker(image) {
                        var chart = image.dataItem.component.chart;
                        var elt = image.dataItem.dataContext;

                        // create holder
                        var holder = document.createElement("div");
                        holder.className = "map-marker";
                        holder.title = elt.text;
                        holder.style.position = "absolute";

                        // create dot
                        var dot = document.createElement("div");
                        dot.className = "dot";
                        holder.appendChild(dot);

                        // create pulse
                        var pulse = document.createElement("div");
                        pulse.className = "dotpulse";
                        holder.appendChild(pulse);

                        // create conttext
                        var conttext = document.createElement("div");
                        conttext.className = "conttext appshadow hand";
                        conttext.id = elt.id + "Container";
                        holder.appendChild(conttext);

                        var t = document.createElement("div");
                        t.textContent = elt.text;
                        t.className = "text";
                        conttext.appendChild(t);

                        var img = document.createElement("img");
                        img.setAttribute("src", elt.image);
                        img.className = "img";
                        conttext.appendChild(img);

                        // Modal system
                        conttext.onclick = function () {
                            document.querySelector(elt.modal).classList.add('active');
                            document.getElementById('blackContent').classList.add('overlay');
                            const el = document.body;
                            el.classList.add("modal-open");
                            document.documentElement.style.overflowY = 'hidden'
                        };
                        dot.onclick = function () {
                            document.querySelector(elt.modal).classList.add('active');
                            document.getElementById('blackContent').classList.add('overlay');
                            const el = document.body;
                            el.classList.add("modal-open");
                            document.documentElement.style.overflowY = 'hidden'
                        };
                        // append the marker to the map container
                        chart.svgContainer.htmlElement.appendChild(holder);

                        return holder;
                    }
                });
            },


            closeSlide() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto'
            },
            closeSlideUp() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto';
                this.$root.scrollToElement('formSection')
            },
            mapIntersect() {

                this.treeCount = this.$store.state.tree_count;
                this.co2 = parseFloat(this.$store.state.co2_compensated);
                this.reforest = parseFloat(this.$store.state.reforest)
            },


        },


    }

</script>
<style lang="scss" scoped>

    .slideArea {
        position: fixed;
        top: 0;
        bottom: 0;
        height: 100%;
        z-index: 100000 !important;
        background: #fff;
        max-height: 100%;
        overflow-y: scroll;
        transition: right 0.4s;

        .card-header {
            position: fixed;
            z-index: 1;
            background: white;
        }

        @media only screen and (min-width: 1291px) {
            width: 50vw !important;
            right: -50vw !important;
            .card-header {
                width: 49vw !important;
            }
        }

        @media only screen and (max-width: 1290px) {
            width: 70vw !important;
            right: -70vw;
            .card-header {
                width: 69vw !important;
            }
        }
        @media only screen and (max-width: 48em) {
            width: 100vw !important;
            right: -100vw;
            .card-header {
                width: 99vw !important;
            }
        }

        &.active {
            right: 0 !important;
            visibility: visible !important;
        }

    }

    .map-modal {
        .para-title {
            font-weight: 700;
            margin-bottom: 5px;
            color: #888;
            font-size: 16px;
        }

        .para-subtitle {
            font-size: 18px;
            font-family: 'teradeli-medium', sans-serif;
            line-height: 1rem;
            color: #153038;
            margin: 0;
        }

        .para-subtitle-small {
            font-size: 15px;
            font-family: 'teradeli-medium', sans-serif;
            line-height: 1rem;
            color: #153038;
            margin: 0;
        }

        .para-img {
            padding-bottom: 1rem;
            padding-top: 1rem;
        }

        .para-text {
            color: #888;
            font-size: 14px;
        }

    }

</style>