<template>
    <div>

        <h2 class="page-title pt-md-5 pt-4">Nous plantons aussi des arbres. Et vous?</h2>
        <h3 class="page-details pb-md-5 py-2 teradeli-light">Pour compenser les émissions de CO2 liées à la création de
            nos objets, à vos visites sur notre site, et à la consommation d’électricité de nos technologies. Nos
            projets sont exclusivement réservés à la régénération de la biodiversité. Nos arbres sont tracés et
            certifiés.</h3>
        <div class="d-flex justify-center py-4 py-md-0">
            <div class="text-center py-4 px-7">
                <div class="sub-title">{{$store.state.tree_count}}</div>
                <div style="color: #888;">arbres plantés</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">{{$store.state.co2_compensated}} tonnes</div>
                <div style="color: #888;">de CO2 compensées</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">{{$store.state.reforest}}</div>
                <div style="color: #888;">hectares reforestés</div>
            </div>

        </div>
        <div id="mapSection"></div>
        <div class="slideArea">
            <div class="content">
                <div class="card">
                    <div class="card-header d-flex justify-space-between px-3 align-center">
                        <button class="btn-theme">Je plante un arbre gratuitement</button>
                        <v-btn
                                text
                                color="black"
                                @click="closeSlide"
                        >
                            &times;
                        </v-btn>
                    </div>
                    <div class="px-7 py-3 border-top-2 map-modal mgforest">
                        <v-row>
                            <v-col lg="6">
                                <div class="para-title">Fôret</div>
                                <div class="para-subtitle">Mangrove noire</div>
                                <div class="para-img">
                                    <v-img src="../assets/images/specie-mango.jpg"></v-img>
                                </div>
                                <v-row>
                                    <v-col class="text-center ">
                                        <div class="para-subtitle">20 Kg</div>
                                        <div class="para-text">Compensation CO2</div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="para-subtitle">25 ans</div>
                                        <div class="para-text">Durée de vie</div>
                                    </v-col>
                                    <v-col class="text-center ">
                                        <div class="para-subtitle">2 – 10 m</div>
                                        <div class="para-text">Taille</div>
                                    </v-col>
                                </v-row>
                                <div class="para-subtitle-small">Faune et Flore locale.</div>
                                <div class="para-text">
                                    <p>Madagascar dispose de plus de 200 000 espèces de plantes et d’animaux qui
                                        n’existent nulle part ailleurs dans le monde. 90% des forêts ont été détruites,
                                        déplaçant des espèces animales entières et les Malgaches.</p>

                                </div>
                            </v-col>
                            <v-col lg="6">
                                <div class="para-title">Projet</div>
                                <div class="para-subtitle">Projet Paradis, Madagascar</div>
                                <div class="para-img">
                                    <v-img src="../assets/images/river.png"></v-img>
                                </div>
                                <div class="para-subtitle-small">Incroyable projet. Réussite totale.</div>
                                <div class="para-text">
                                    <p>Eden Reforestation Projects a lancé ce programme en 2007 suite à la perte
                                        critique
                                        de fôrets.</p>

                                    <p>16 millions de mangroves ont été plantés. Des forêts saines commencent à émerger
                                        et
                                        tous les effets négatifs de la déforestation commencent à disparaître.</p>
                                </div>
                                <div class="para-subtitle-small">Une communauté locale active. A ne pas oublier.</div>
                                <div class="para-text">
                                    <p>Les Vilamatsa avaient hâte de faire partie de cette initiative de reboisement en
                                        raison du succès d’une plantation à proximité.</p>

                                    <p>Cela leur donne un revenu décent afin qu’ils puissent à nouveau subvenir aux
                                        besoins
                                        de leur famille.</p>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="para-title">Lien Google Map.</div>
                                <v-img class="py-3" src="../assets/images/map1.png"></v-img>
                            </v-col>
                        </v-row>

                    </div>
                    <div class="px-7 py-3 border-top-2 map-modal indianforest">
                        <v-row>
                            <v-col lg="6">
                                <div class="para-title">Fôret</div>
                                <div class="para-subtitle">Manguiers</div>
                                <div class="para-img">
                                    <v-img src="../assets/images/mango.jpg"></v-img>
                                </div>
                                <v-row>
                                    <v-col class="text-center ">
                                        <div class="para-subtitle">
                                            800 Kg
                                        </div>
                                        <div class="para-text">Compensation CO2</div>
                                    </v-col>
                                    <v-col class="text-center">
                                        <div class="para-subtitle">100 ans</div>
                                        <div class="para-text">Durée de vie</div>
                                    </v-col>
                                    <v-col class="text-center ">
                                        <div class="para-subtitle">35 – 45 m</div>
                                        <div class="para-text">Taille</div>
                                    </v-col>
                                </v-row>
                                <div class="para-subtitle-small">Faune et Flore locale.</div>
                                <div class="para-text">
                                    <p>Le parc national de Similipal est le 7e plus grand parc national d’Inde (2 750
                                        km2), et fait partie du Réseau mondial des réserves de biosphère de l’UNESCO
                                        depuis 2009. Il abrite le tigre du Bengale, l’éléphant d’Asie, le gaur et le
                                        chausingha. Ainsi que les plus belles chutes d’eau comme Joranda et Barehipani
                                        Falls.
                                    </p>

                                </div>
                            </v-col>
                            <v-col lg="6">
                                <div class="para-title">Projet</div>
                                <div class="para-subtitle">Des arbres pour les tigres, Inde</div>
                                <div class="para-img">
                                    <v-img src="../assets/images/tiger.jpg" alt="tiger"></v-img>
                                </div>
                                <div class="para-subtitle-small">Le livre de la jungle 2.</div>
                                <div class="para-text">
                                    <p>Le projet vise 50 000 arbres en bordure du parc national de Similipal pour
                                        enrichir la fôret vierge locale, en particulier pour les tigres du Bengale.</p>

                                </div>
                                <div class="para-subtitle-small">Et si nous passions les aider ?</div>
                                <div class="para-text">
                                    <p>La région du projet est habitée par une variété de communautés tribales (Bhumija,
                                        Gondas, Kolha… Environ 4 093 jours de travail seront créés pour eux.</p>

                                    <p>L’aéroport le plus proche est celui de Biju Patnaik, situé de 200 km du site. La
                                        ville la plus proche est Jamshedpur à 105 km.</p>
                                </div>
                            </v-col>
                            <v-col>
                                <div class="para-title">Lien Google Map.</div>
                                <v-img class="py-3" src="../assets/images/map2.png"></v-img>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core"
    import * as am4maps from "@amcharts/amcharts4/maps"
    import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow"


    export default {
        name: "we-plant-tree-map",
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
                            image: "https://www.warenghem.com/wp-content/uploads/2020/07/Cahjukjhpture-e1593881403399.png",
                            modal: ".indianforest",
                        },
                        {
                            id: "Eden_Projet",
                            text: "Madagascar - Eden Project",
                            latitude: -16.270975,
                            longitude: 44.445852,
                            image: "https://www.warenghem.com/wp-content/uploads/2020/07/Capture-d’écran-2020-06-09-à-21.51.54-e1593881234941.png",
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
                        conttext.className = "conttext appshadow";
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
                            document.querySelector('.slideArea').style.visibility = 'visible';
                            document.querySelector(elt.modal).style.display = 'block';
                            const el = document.body;
                            el.classList.add("modal-open");
                            document.documentElement.style.overflowY='hidden'
                        };
                        dot.onclick = function () {
                            document.querySelector('.slideArea').style.visibility = 'visible';
                            document.querySelector(elt.modal).style.display = 'block';
                            const el = document.body;
                            el.classList.add("modal-open");
                            document.documentElement.style.overflowY='hidden'
                        };
                        // append the marker to the map container
                        chart.svgContainer.htmlElement.appendChild(holder);

                        return holder;
                    }
                });
            },


            closeSlide() {
                document.querySelector('.slideArea').style.visibility = 'hidden';
                document.querySelector('.indianforest').style.display = 'none';
                document.querySelector('.mgforest').style.display = 'none';
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY='auto'
            }
        },


    }

</script>
<style lang="scss" scoped>

    .page-details {
        color: #888;
        font-size: 13px;
        padding-left: 20px;
        max-width: 400px;
        line-height: 1rem !important;
    }

    .slideArea {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        z-index: 120000;
        background: #0000007d;
        display: flex;
        flex-direction: row;
        visibility: hidden;
        justify-content: flex-end;

        .card-header {
            position: fixed;
            z-index: 1;
            background: white;
        }

        .content {
            background: #fff;
            max-height: 100%;
            overflow-y: scroll;
            @media only screen and (min-width: 1291px) {
                width: 50vw !important;
                .card-header{
                     width: 49vw !important;
                }
            }

            @media only screen and (max-width: 1290px) {
                width: 70vw !important;
                .card-header{
                     width: 69vw !important;
                }
            }
            @media only screen and (max-width: 48em) {
                width: 100% !important;
                .card-header{
                     width: 99vw !important;
                }
            }
        }


    }

    .map-modal {
        display: none;

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