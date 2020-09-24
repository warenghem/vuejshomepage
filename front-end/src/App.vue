<template>
    <v-app>
        <MainToolbar></MainToolbar>
        <sticky-toolbar v-if="stickyToolbar"/>
        <router-view/>
        <app-footer></app-footer>
    </v-app>
</template>

<script>

    import MainToolbar from './components/main-toolbar';
    import StickyToolbar from "./components/sticky-toolbar";
    import AppFooter from "./components/app-footer";

    export default {
        name: 'App',
        components: {AppFooter, StickyToolbar, MainToolbar},

        data() {
            return {
                stickyToolbar: false
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
                if(window.pageYOffset-70>document.getElementById('jePlanetBtn').offsetTop ){
                    this.stickyToolbar=true;
                }else {
                     this.stickyToolbar=false;
                }
            }
        },
    };
</script>
