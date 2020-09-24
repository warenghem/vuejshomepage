<template>
    <div>
        <div class="d-flex justify-center border-top-2 align-center flex-column flex-md-row">
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/Label-Tech-white.png" width="200px"></v-img>
                </a>
            </div>
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/label-co2-website.png" width="200px"></v-img>
                </a>
            </div>
            <div class="app-box text-center py-3 py-md-4 px-7">
                <a href="https://tree-nation.com/profile/impact/kevin-brosseau#co2">
                    <v-img src="../assets/images/PETAapproved.png" width="200px"></v-img>
                </a>
            </div>
        </div>
        <div class="whole-footer border-top-2">
            <vue-instagram
                    :token="userAccessToken"
                    :count="5" mediaType="image">
                <template slot="feeds" slot-scope="props">
                    <li class="fancy-list"> {{ props.feed.link }}</li>
                </template>
                <template slot="error" slot-scope="props">
                    <div class="fancy-alert"> {{ props.error.error_message }}</div>
                </template>
            </vue-instagram>
        </div>
    </div>
</template>

<script>
    import VueInstagram from 'vue-instagram'

    export default {
        name: "app-footer",
        components: {
            VueInstagram
        },
        data(){
            return{
                userAccessToken:'IGQVJVM1NQRlN1dWlpQWU1cEJySnBXUzdXNWVBQnZADTXBZANWhIYnZAGd3ZAlMldRdEJUUGpZAd3FvaVVsRFBBVV8zbmxETkU5TVB3bUh3TF9kTDN1c3B0RG5KTHh5Mzl6THNGQWRVWGpaNEl3QnhlWnA5UgZDZD',
            }

        }
    }
</script>

<style scoped>

</style>