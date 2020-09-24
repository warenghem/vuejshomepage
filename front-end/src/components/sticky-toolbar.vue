<template>
    <section class="appBar">
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
                <v-btn text class="text-uppercase item">
                    Reforestation
                </v-btn>
                <v-btn text class="text-uppercase item">
                    Studio
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="140px"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer style="flex-grow: 2!important;"></v-spacer>
            <v-toolbar-items class="hidden-xs-only py-1">
                <v-btn rounded color="#0081a7" dark >Je plante un arbre gratuitement</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </section>
</template>

<script>
    export default {
        name: "sticky-toolbar",
        data() {
            return {
                sidebar: false,
            }
        }
    }
</script>

<style scoped lang="scss">
    .appBar {
        position: fixed;
        border-bottom: 1px solid #fff;
        z-index: 1;
        top: 0;
        width: 100%;

        .topBar {
            background: #0A3137;
            color: #fff;
            padding: 7px;
            font-size: 12px;
        }

        .menu-bar {
            border-bottom: none!important;
            background: #1d1d1fb3 !important;

            .brand {

                filter: brightness(0) invert(1);

                img {
                    padding-top: 5px;
                }
            }

            .item {
                color:white;
                &:before {
                    display: none;
                }
            }
        }

    }
</style>