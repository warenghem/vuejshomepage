<template>
    <div>
        <MainToolbar></MainToolbar>
        <sticky-toolbar v-show="stickyToolbar" style="transform: translate3D(0,0,0);transition: ease-in-out 3s;"/>
        <VideoSection id="videoSection"></VideoSection>
        <MissionSection id="missionSection"></MissionSection>
        <ProductSection id="productSection"></ProductSection>
        <CalenderSection id="calendarSection"></CalenderSection>
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
    import ProductSection from '../components/product-section';
    import StudioSection from '../components/studio-section';
    import CalenderSection from '../components/calender-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";
    import * as InstagramFeed from 'instafeed'

    export default {
        name: 'Home',
        components: {
            MissionSection,
            ProductSection,
            WePlantTreeMap,
            VideoSection,
            StudioSection,
            AppFooter,
            StickyToolbar,
            MainToolbar,
            CalenderSection
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
                'username': 'warenghem_paris',
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
                this.getItemRow();
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
                }else{
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
            getItemRow() {
                const slider = document.querySelector('.instagram_gallery').getElementsByTagName('a');
                switch (this.$vuetify.breakpoint.name) {

                    case 'xs':
                        slider.forEach(element => {
                            element.style.minWidth = '50%';
                        });
                        break;
                    case 'sm':
                        slider.forEach(element => {
                            element.style.minWidth = '50%';
                        });
                        break;
                    case 'md':
                        slider.forEach(element => {
                            element.style.minWidth = '50%';
                        });
                        break;
                    case 'lg':
                        slider.forEach(element => {
                            element.style.minWidth = '25%';
                        });
                        break;

                    case 'xl':
                        slider.forEach(element => {
                            element.style.minWidth = '16.66%';
                        });
                        break;
                }
            }
        },
    }


</script>
