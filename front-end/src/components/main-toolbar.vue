<template>
    <section class="appBar">
        <div class="topBar text-center">
            Livraison gratuite dans le monde
        </div>
        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-item>
                    <v-list-item-content>MISSION</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>PRODUITS</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>CALENDRIER</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>MISSION</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>MISSION</v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>MISSION</v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hidden-sm-and-up">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text class="text-uppercase item">
                    Mission
                </v-btn>
                <v-btn text class="text-uppercase item">
                    Products
                </v-btn>
                <v-btn text class="text-uppercase item">
                    Calender
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="100%"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text class="text-uppercase item">
                    Reforestation
                </v-btn>
                <v-btn text class="text-uppercase item">
                    Studio
                </v-btn>
                <v-btn text>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <img src="../assets/images/flag.jpg" width="24" alt=""/>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item

                            >
                                <v-list-item-title><img src="../assets/images/flag.jpg" width="24" alt=""/>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item

                            >
                                <v-list-item-title><img src="../assets/images/flag.jpg" width="24" alt=""/>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </section>
</template>

<script>
    export default {
        name: "main-toolbar",
        data() {
            return {
                sidebar: false,
            }
        }
    }
</script>

<style scoped lang="scss">
    .appBar {
        position: relative;
        border-bottom: 1px solid #fff;
        z-index: 1;

        .topBar {
            background: #0A3137;
            color: #fff;
            padding: 7px;
            font-size: 12px;
        }

        .menu-bar {
            border-bottom: solid 1px rgba(255, 255, 255, .5);
            background: transparent !important;

            &:hover {
                background: white !important;

                .brand {
                    filter: brightness(1) invert(0);
                }
            }

            .brand {

                filter: brightness(0) invert(1);
                img{
                    padding-top: 5px;
                }
            }
            .item{
                &:before{
                    display: none;
                }
                &:after{
                        content:'';
                        position: absolute;
                        height: 1px;
                        width: 1px;
                        transition:width 0.6s ease;
                        left: 14px;
                        bottom: 0;
                    }
                   &:hover{
                       &:after{
                           background: #000;
                           width: 70%;
                       }
                   }
            }
        }

    }
</style>