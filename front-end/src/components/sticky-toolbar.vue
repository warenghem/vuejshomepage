<template>
    <section class="appBar ">
        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-item
                        :class="{'current':$root.currentId==='missionSection'}"
                        @click="$root.scrollToElement('missionSection')"
                >
                    <v-list-item-content>
                        MISSION
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='productSection'}"
                        @click="$root.scrollToElement('productSection')"
                >
                    <v-list-item-content>PRODUITS</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='calenderSection'}"
                        @click="$root.scrollToElement('calenderSection')"
                >
                    <v-list-item-content>CALENDRIER</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='mapTreeSection'}"
                        @click="$root.scrollToElement('mapTreeSection')"
                >
                    <v-list-item-content>Reforestation</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='studioSection'}"
                        @click="$root.scrollToElement('studioSection')"
                >
                    <v-list-item-content>Studio</v-list-item-content>
                </v-list-item>
                <v-list-item
                >
                    <v-list-item-content>
                        <button class="nav-btn">Je plante un arbre gratuitement</button>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px"
                   :class="{'whiteBack':$root.currentId==='mapTreeSection'||$root.currentId==='studioSection'}">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hidden-md-and-up">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="d-none d-md-block">
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='missionSection'}"
                       @click="$root.scrollToElement('missionSection')"
                >
                    Mission
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='productSection'}"
                       @click="$root.scrollToElement('productSection')"
                >
                    Products
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='calenderSection'}"
                       @click="$root.scrollToElement('calenderSection')">
                    Calender
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='mapTreeSection'}"
                       @click="$root.scrollToElement('mapTreeSection')"
                >
                    Reforestation
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='studioSection'}"
                       @click="$root.scrollToElement('studioSection')"
                >
                    Studio
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="140px" alt="logo"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer style="flex-grow: 2!important;" class="d-none d-md-block"></v-spacer>
            <v-spacer class="d-md-none"></v-spacer>
            <v-toolbar-items class="py-1 d-none d-md-block">
                <button class="nav-btn">Je plante un arbre gratuitement</button>
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
        z-index: 1000;
        top: 0;
        width: 100%;

        .topBar {
            background: #0A3137;
            color: #fff;
            padding: 7px;
            font-size: 12px;
        }

        .menu-bar {
            border-bottom: none !important;
             backdrop-filter: saturate(180%) blur(20px);
            background: #1d1d1fb3 !important;
            &.whiteBack{
                border-bottom: #eae8e4 solid 1px!important;

                background-color: rgba(255,255,255,.74)!important;
                .item{
                    color: black;
                }
                .brand {
                    filter: brightness(1) invert(0);
                }
            }

            .brand {

                filter: brightness(0) invert(1);

                img {
                    padding-top: 5px;
                }
            }

            .item {
                color: white;
                padding: 0 10px;

                &:before {
                    display: none;
                }

                &.current {
                    color: #0081a7 !important;
                }
            }
        }

    }
</style>