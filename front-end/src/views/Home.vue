<template>
    <div>
        <MainToolbar></MainToolbar>
        <sticky-toolbar v-if="stickyToolbar"/>
        <VideoSection id="videoSection"></VideoSection>
        <MissionSection id="missionSection"></MissionSection>
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
    import ProductSection from '../components/product-section';
    import StudioSection from '../components/studio-section';
    import WePlantTreeMap from "../components/we-plant-tree-map";


    export default {
        name: 'Home',
        components: {
            ProductSection,
            WePlantTreeMap,
            VideoSection,
            StudioSection,
            MissionSection,
            AppFooter,
            StickyToolbar,
            MainToolbar
        },
        data() {
            return {
                stickyToolbar: false,

            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                if (document.getElementById('jePlanetBtn')) {
                    if (window.pageYOffset - 70 > document.getElementById('jePlanetBtn').offsetTop) {
                        this.stickyToolbar = true;
                    } else {
                        this.stickyToolbar = false;
                    }
                }
                if (window.pageYOffset > document.getElementById('studioSection').offsetTop-51) {
                    this.$root.currentId = 'studioSection'
                } else if (window.pageYOffset > document.getElementById('mapTreeSection').offsetTop-51) {
                    this.$root.currentId = 'mapTreeSection'
                } else if (window.pageYOffset > document.getElementById('productSection').offsetTop-51) {
                    this.$root.currentId = 'productSection'
                } else if (window.pageYOffset > document.getElementById('missionSection').offsetTop-51) {
                    this.$root.currentId = 'missionSection'
                } else {
                    this.$root.currentId = ''
                }

            }
        },
    }
</script>
