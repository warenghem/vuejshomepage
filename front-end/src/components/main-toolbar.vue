<template>
    <section class="appBar">
        <div class="topBar text-center d-none">
            {{$t('secondtoolbar.message')}}
        </div>
        <v-navigation-drawer v-model="sidebar" app class="d-md-none">
            <v-list>
                <v-list-item
                        v-for="(link,l_idx) in $store.state.link.links"
                        :class="{'current':$root.currentId===link.elId}"
                        @click="$root.scrollToElement(link.elId)"
                        :key="'link_'+l_idx"
                >
                    <v-list-item-content>
                        {{$t(link.name)}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar class="menu-bar" flat height="50px">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="d-md-none ml-3">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="d-none d-md-block" v-for="(link,l_idx) in $store.state.link.links"
                             :key="'link_btn_l_'+l_idx">
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId===link.elId}"
                       @click="$root.scrollToElement(link.elId)"
                       v-if="link.position==='left'"
                >
                    {{$t(link.name)}}
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title class="centerabsolute v-toolbar__logo">
                <router-link to="/" tag="span" style="cursor: pointer" class="brand">
                    <img src="../assets/images/logo.svg" width="140px" alt="logo"/>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="d-none d-md-block"
                             v-for="(link,l_idx) in $store.state.link.links"
                             :key="'link_btn_r_'+l_idx">
                <v-btn text class="text-uppercase item"
                       :class="{'current':$root.currentId===link.elId}"
                       @click="$root.scrollToElement(link.elId)"
                       v-if="link.position==='right'"
                >
                    {{$t(link.name)}}
                </v-btn>
            </v-toolbar-items>
            <v-toolbar-items class="d-none d-md-block">
                <v-btn
                        text
                        class="px-0"
                >
                    <v-menu
                            offset-y
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    text
                                    v-bind="attrs"
                                    v-on="on"
                                    :ripple="false"
                                    class="nohover"
                            >
                                <div v-for="(flag,idx) in $store.state.flags" :key="'flag_'+idx">
                                    <img :src="flag.img"
                                         width="24"
                                         alt="lang flag"
                                         v-if="$i18n.locale===flag.lang"
                                    />
                                </div>

                            </v-btn>
                        </template>
                        <v-list
                        >
                            <v-list-item
                                    v-for="(flag,idx) in $store.state.flags"
                                    :key="'flag_list_'+idx"
                            >
                                <v-list-item-title class="cursor-pointer">
                                    <router-link :to="{path:flag.path}">
                                        <img :src="flag.img"
                                             width="24"
                                             alt="flag"
                                        />
                                    </router-link>

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
        z-index: 300001;

        .topBar {
            background: #0A3137;
            color: #fff;
            padding: 7px;
            font-size: 12px;
        }

        @media(min-width: 961px) {
            border-bottom: solid 1px rgba(255, 255, 255, 0.5);
        }

        .menu-bar {
            background: transparent !important;
            @media(min-width: 961px) {
                &:hover {
                    background: white !important;

                    .brand {
                        filter: brightness(1) invert(0);
                    }

                    .item {
                        color: #000000;
                    }
                }
            }

            .brand {

                filter: brightness(0) invert(1);

                img {
                    padding-top: 5px;
                }
            }

            .item {
                color: #ffffff;
            }
        }

    }
</style>