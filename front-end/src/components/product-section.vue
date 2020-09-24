<template>
    <div class="productSection">
        <v-row no-gutters>
            <v-col cols="9" md="9" sm="12">
                <div class="bannerLeft">
                    <h2 class="title text-center"> La maroquinerie végétale du futur. Dès à présent.</h2>
                    <h4 class="subtitle text-center">Rencontre entre les traditions maroquinières francaises et nos cuirs de
                        vin</h4>
                </div>
            </v-col>
            <v-col cols="3" md="3" sm="12"> wqeqweqwe</v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "product-section"
    }
</script>

<style scoped lang="scss">

    .productSection {
        color: #fff;
        padding: 80px 0;
        position: relative;
        top: -51px;
        height: 100vh;
        animation-name: changeBg;
        animation-duration: 15s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-delay: 0.1s;
        background-size: cover;
        background-repeat: no-repeat;
        transition: background-image 0.4s ease-in-out;

        .bannerLeft {
            .title {
                padding-bottom: 20px;
                font-size: 40px!important;
                color: white;
                letter-spacing: -.009em;
                font-family: 'teradeli-medium',sans-serif!important;
                line-height: 1!important;
                transition: all .3s cubic-bezier(.39,.575,.565,1);
            }
            .subtitle {
                letter-spacing: .004em;
                font-family: 'teradeli-light',sans-serif!important;
                color: #fff;
                line-height: 1.10722!important;
                transition: all .3s cubic-bezier(.39,.575,.565,1);
                padding-bottom: 20px;
                font-size: 23px!important;
            }
        }
    }

    @keyframes changeBg {
        0% {
            background-image: url("../assets/images/banner2.jpg");
        }
        10% {
            background-image: url("../assets/images/banner2.jpg");
        }
        20% {
            background-image: url("../assets/images/banner1.jpg");
        }
        30% {
            background-image: url("../assets/images/banner1.jpg");
        }
        40% {
            background-image: url("../assets/images/banner1.jpg");
        }
        50% {
            background-image: url("../assets/images/banner2.jpg");
        }
        60% {
            background-image: url("../assets/images/banner2.jpg");
        }
        70% {
            background-image: url("../assets/images/banner2.jpg");
        }
        80% {
            background-image: url("../assets/images/banner1.jpg");
        }
        90% {
            background-image: url("../assets/images/banner1.jpg");
        }
        100% {
            background-image: url("../assets/images/banner1.jpg");
        }

    }

</style>