<template>
    <v-app>
        <router-view/>
    </v-app>
</template>

<script>


    import * as InstagramFeed from 'instafeed'

    export default {
        name: 'App',
        components: {},


        mounted() {
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

    };
</script>
