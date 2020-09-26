<template>
    <div>
        <button class="btn-theme" @click.prevent="openSlide">slide modal</button>

        <h2 class="page-title pt-md-5 pt-4">Nous plantons aussi des arbres. Et vous?</h2>
        <h3 class="page-details pb-md-5 py-2 teradeli-light">Pour compenser les émissions de CO2 liées à la création de
            nos objets, à vos visites sur notre site, et à la consommation d’électricité de nos technologies. Nos
            projets sont exclusivement réservés à la régénération de la biodiversité. Nos arbres sont tracés et
            certifiés.</h3>
        <div class="d-flex justify-center py-4 py-md-0">
            <div class="text-center py-4 px-7">
                <div class="sub-title">4</div>
                <div style="color: #888;">arbres plantés</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">0.92 tonnes</div>
                <div style="color: #888;">de CO2 compensées</div>
            </div>
            <div class="text-center py-4 px-7">
                <div class="sub-title">0.004</div>
                <div style="color: #888;">hectares reforestés</div>
            </div>

        </div>
        <div id="mapSection"></div>
        <div v-if="slide" class="modal-overlay"></div>
        <div class="slideArea" v-if="slide">
            <div class="content">
                <div class="card">
                    <div class="header">
                        <button class="btn-theme">Je plante un arbre gratuitement</button>
                        <v-btn
                                icon
                                dark
                                @click="closeSlide"
                        >
                            &times;
                        </v-btn>
                    </div>
                    <div class="body">
                        <h1>design will be letter more , after your work </h1>
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
        data() {
            return {
                slide: false,
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

                        // // Modal system
                        // conttext.onclick = function () {
                        //     $(elt.modal).addClass("is-visible");
                        //     $("#blackcontent").addClass("blackcontentoverlay");
                        //     $("body").addClass("blocked");
                        // };
                        // dot.onclick = function () {
                        //     $(elt.modal).addClass("is-visible");
                        //     $("#blackcontent").addClass("blackcontentoverlay");
                        //     $("body").addClass("blocked");
                        // };
                        // append the marker to the map container
                        chart.svgContainer.htmlElement.appendChild(holder);

                        return holder;
                    }
                });
            },

            openSlide() {
                this.slide = true;
                const el = document.body;
                el.classList.add("modal-open")
            },


            closeSlide() {
                this.slide = false;
                const el = document.body;
                el.classList.remove('modal-open');
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
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0 !important;
        position: fixed;
        z-index: 100000 !important;
        transition: right 0.4s;
        background: #fff;
        margin-top: 0 !important;
        padding: 0;
        overflow: auto;
        @media only screen and (min-width: 1291px) {
            width: 50vw !important;
        }

        @media only screen and (max-width: 1290px) {
            width: 70vw !important;
        }
        @media only screen and (max-width: 48em) {
            width: 100% !important;
        }

    }

    .modal-overlay {
        background-color: #000;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.5;
        transition: opacity 0.5s, visibility 0s linear 0.5s;
        -webkit-transition: opacity 0.5s, visibility 0s linear 0.5s;
        z-index: 100000;
    }


</style>