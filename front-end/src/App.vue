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
    import * as InstagramFeed from 'instafeed'
    export default {
        name: 'App',
        components: {AppFooter, StickyToolbar, MainToolbar},

        data() {
            return {
                stickyToolbar: false
            }
        },
        mounted(){
          new InstagramFeed({
            'username': 'warenghem_paris',
            'container': document.getElementById("instaFeed"),
            'display_profile': false,
            'display_biography': false,
            'display_gallery': true,
            'callback': null,
            'styling': true,
            'items': 7,
            'items_per_row': 6,
            'margin': 0,
            'lazy_load': true,
            'on_error': console.error
        });
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                if(document.getElementById('jePlanetBtn')){
                    if(window.pageYOffset-70>document.getElementById('jePlanetBtn').offsetTop ){
                    this.stickyToolbar=true;
                }else {
                     this.stickyToolbar=false;
                }
                }

            }
        },
    };
</script>
