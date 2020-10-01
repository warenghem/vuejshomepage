<template>
    <section class="appBar">
        <div class="topBar text-center">
            Livraison gratuite dans le monde
        </div>
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
                <v-list-item
                >
                    <v-list-item-content>
                        <button class="nav-btn">{{$t('btnTitle')}}</button>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hidden-sm-and-up">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="hidden-xs-only">
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
                       @click="$root.scrollToElement('calendarSection')"
                >
                    {{$t('toolbar.calendar')}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="100%" alt="logo"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
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
                <v-btn text>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <img src="../assets/images/flag.jpg" width="24" alt="" v-if="$i18n.locale==='fr'"/>
                                <img src="../assets/images/united-kingdom.svg" width="24" alt="" v-else/>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                            >
                                <v-list-item-title class="cursor-pointer">
                                    <img src="../assets/images/united-kingdom.svg"
                                         width="24"
                                         alt=""
                                         @click="$store.dispatch('setLang', 'en')"

                                    />
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item

                            >
                                <v-list-item-title class="cursor-pointer">
                                    <img src="../assets/images/flag.jpg"
                                         width="24"
                                         alt=""
                                         @click="$store.dispatch('setLang', 'fr')"

                                    />
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
       border-bottom: solid 1px rgba(255, 255, 255, 0.5);
        z-index: 300001;

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

                img {
                    padding-top: 5px;
                }
            }

            .item {
                &:before {
                    display: none;
                }

                &:after {
                    content: '';
                    position: absolute;
                    height: 1px;
                    width: 1px;
                    transition: width 0.6s ease;
                    left: 14px;
                    bottom: 0;
                }

                &:hover {
                    &:after {
                        background: #000;
                        width: 70%;
                    }
                }
            }
        }

    }
</style>