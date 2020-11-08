<template>
    <section class="appBar">
        <v-navigation-drawer v-model="sidebar" dark app class="d-lg-none">
            <v-list>
                <v-list-item
                        v-for="(link,l_idx) in $store.state.link.links"
                        :class="{'current':$root.currentId===link.elId}"
                        @click="$root.scrollToElement(link.elId)"
                        :key="'slink_'+l_idx"
                >
                    <v-list-item-content>
                        {{$t(link.name)}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-lg-none ml-3">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                             :key="'slink_btn_l_'+l_idx">
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId===link.elId}"
                       @click="$root.scrollToElement(link.elId)"
                >
                    {{$t(link.name)}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title class="d-md-block d-none centerabsolute v-toolbar__logo">
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="140px" alt="logo"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer style="flex-grow: 1.8!important;" class="d-none d-md-block"></v-spacer>
            <v-spacer class="d-md-none"></v-spacer>
            <v-toolbar-items class="py-1 mr-3" style="max-width: 240px;">
                <button class="nav-btn" @click="$store.state.plantModal=true">{{$t('btnTitle')}}</button>
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

            &.whiteBack {
                border-bottom: #eae8e4 solid 1px !important;

                background-color: rgba(255, 255, 255, .74) !important;

                .item {
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

                &.current {
                    color: #0081a7 !important;
                }
            }
        }

    }
</style>