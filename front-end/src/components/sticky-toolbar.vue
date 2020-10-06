<template>
    <section class="appBar">
        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-item
                        :class="{'current':$root.currentId==='missionSection'}"
                        @click="$root.scrollToElement('missionSection')"
                >
                    <v-list-item-content>
                        {{$t('toolbar.mission')}}
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='productSection'}"
                        @click="$root.scrollToElement('productSection')"
                >
                    <v-list-item-content>{{$t('toolbar.product')}}</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='calendarSection'}"
                        @click="$root.scrollToElement('calendarSection')"
                >
                    <v-list-item-content>{{$t('toolbar.calendar')}}</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='mapTreeSection'}"
                        @click="$root.scrollToElement('mapTreeSection')"
                >
                    <v-list-item-content>{{$t('toolbar.reforest')}}</v-list-item-content>
                </v-list-item>
                <v-list-item
                        :class="{'current':$root.currentId==='studioSection'}"
                        @click="$root.scrollToElement('studioSection')"
                >
                    <v-list-item-content>{{$t('toolbar.studio')}}</v-list-item-content>
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
                    {{$t('toolbar.mission')}}
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='productSection'}"
                       @click="$root.scrollToElement('productSection')"
                >
                    {{$t('toolbar.product')}}
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='calendarSection'}"
                       @click="$root.scrollToElement('calendarSection')">
                    {{$t('toolbar.calendar')}}
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='mapTreeSection'}"
                       @click="$root.scrollToElement('mapTreeSection')"
                >
                    {{$t('toolbar.reforest')}}
                </v-btn>
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId==='studioSection'}"
                       @click="$root.scrollToElement('studioSection')"
                >
                    {{$t('toolbar.studio')}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title class="d-md-block d-none">
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="140px" alt="logo"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer style="flex-grow: 1.8!important;" class="d-none d-md-block"></v-spacer>
            <v-spacer class="d-md-none"></v-spacer>
            <v-toolbar-items class="py-1" style="max-width: 240px;">
                <button class="nav-btn" @click="$root.scrollToElement('formSection')">{{$t('btnTitle')}}</button>
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