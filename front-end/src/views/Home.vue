<template>
    <div>
        <div id="blackContent" @click="hideModal"></div>
        <MainToolbar></MainToolbar>
        <sticky-toolbar class="stickyBar" :class="{'active':stickyToolbar}"/>
        <VideoSection id="videoSection"></VideoSection>
        <MissionSection id="missionSection"></MissionSection>
        <CalenderSection id="calenderSection"></CalenderSection>
        <ProductSection id="productSection"></ProductSection>
        <we-plant-tree-map id="mapTreeSection"></we-plant-tree-map>
        <StudioSection id="studioSection"></StudioSection>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import MainToolbar from '../components/main-toolbar';
    import StickyToolbar from "../components/sticky-toolbar";
    import AppFooter from "../components/app-footer";
    import VideoSection from '../components/video-section';
    import MissionSection from '../components/mission-section';
    import CalenderSection from '../components/calender-section';
    import ProductSection from '../components/product-section';
    import StudioSection from '../components/studio-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";
    import * as InstagramFeed from 'instafeed'

    export default {
        name: 'Home',
        components: {
            MissionSection,
            CalenderSection,
            ProductSection,
            WePlantTreeMap,
            VideoSection,
            StudioSection,
            AppFooter,
            StickyToolbar,
            MainToolbar,
        },
        data() {
            return {
                stickyToolbar: false,

            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            this.$store.dispatch('getForestDetail')
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() {

            new InstagramFeed({
                'username': 'warenghem.studios',
                'container': document.getElementById("instaFeed"),
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'callback': null,
                'styling': false,
                'margin': 0,
                'lazy_load': true,
                'on_error': console.error
            });
            setTimeout(() => {
                const slider = document.querySelector('.instagram_gallery');
                let isDown = false;
                let startX;
                let scrollLeft;
                if (slider) {
                    slider.addEventListener('mousedown', (e) => {
                        isDown = true;
                        slider.classList.add('active');
                        startX = e.pageX - slider.offsetLeft;
                        scrollLeft = slider.scrollLeft;
                    });
                    slider.addEventListener('mouseleave', () => {
                        isDown = false;
                        slider.classList.remove('active');
                    });
                    slider.addEventListener('mouseup', () => {
                        isDown = false;
                        slider.classList.remove('active');
                    });
                    slider.addEventListener('mousemove', (e) => {
                        if (!isDown) return;
                        e.preventDefault();
                        const x = e.pageX - slider.offsetLeft;
                        const walk = (x - startX) * 3; //scroll-fast
                        slider.scrollLeft = scrollLeft - walk;
                    });
                }

            }, 3000);


        },
        methods: {
            handleScroll() {
                if (document.getElementById('jePlanetBtn') && document.getElementById('jePlanetBtn').offsetTop > 0) {

                    if (window.pageYOffset - 70 > document.getElementById('jePlanetBtn').offsetTop) {
                        this.stickyToolbar = true;
                    } else {
                        this.stickyToolbar = false;
                    }
                } else if (document.getElementById('jePlanetBtn2') && document.getElementById('jePlanetBtn2').offsetTop > 0) {
                    if (window.pageYOffset - 70 > document.getElementById('jePlanetBtn2').offsetTop) {
                        this.stickyToolbar = true;
                    } else {
                        this.stickyToolbar = false;
                    }
                } else {
                    this.stickyToolbar = false;
                }
                if (window.pageYOffset > document.getElementById('studioSection').offsetTop - 51) {
                    this.$root.currentId = 'studioSection'

                } else if (window.pageYOffset > document.getElementById('mapTreeSection').offsetTop - 51) {
                    this.$root.currentId = 'mapTreeSection'
                } else if (window.pageYOffset > document.getElementById('calendarSection').offsetTop - 51) {
                    this.$root.currentId = 'calendarSection'
                } else if (window.pageYOffset > document.getElementById('productSection').offsetTop - 51) {
                    this.$root.currentId = 'productSection'
                } else if (window.pageYOffset > document.getElementById('missionSection').offsetTop - 51) {
                    this.$root.currentId = 'missionSection'
                } else {
                    this.$root.currentId = ''
                }

            },
            hideModal() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto'
            }
        },
    }


</script>
