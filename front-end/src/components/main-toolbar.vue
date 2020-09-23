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

        <v-app-bar class="menu-bar" flat color="transparent">

            <v-app-bar-nav-icon @click="sidebar = !sidebar" class="hidden-sm-and-up">
            </v-app-bar-nav-icon>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text>
                    Mission
                </v-btn>
                <v-btn text>
                    Mission
                </v-btn>
                <v-btn text>
                    Mission
                </v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer" class="items brand">
                    <svg id="logo" class="noheaderlogo" version="1.2" baseProfile="tiny" width="140px"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 756 145.1">
                        <g>
                            <path stroke-miterlimit="10" d="M253.5,91.9L234,67.3h-17.5v24.6h-13.8V21.4H238
												c4.5,0,8.6,0.5,12.3,1.6c3.7,1,6.7,2.5,9.3,4.4c2.5,1.9,4.5,4.3,5.8,7c1.4,2.8,2,5.9,2,9.3c0,3-0.5,5.6-1.4,7.9
												c-0.9,2.3-2.2,4.4-3.9,6.1c-1.7,1.8-3.6,3.3-5.9,4.5c-2.3,1.2-4.8,2.2-7.6,2.9L270,91.9H253.5z M249,35.6c-2.9-2-6.9-3-12.1-3
												h-20.3v23.8H237c5,0,9-1.1,11.9-3.2c3-2.2,4.4-5.1,4.4-8.7C253.3,40.5,251.9,37.6,249,35.6z"></path>
                            <path stroke-miterlimit="10" d="M335.7,32.6h-44.8v18.1h39.7v11.2h-39.7v18.8h45.4v11.2h-59.2
												V21.4h58.6V32.6z"></path>
                            <path stroke-miterlimit="10" d="M400.6,21.4h13.8v70.5h-11.6l-43.6-50.1v50.1h-13.8V21.4h12.9
												l42.3,48.7V21.4z"></path>
                            <path stroke-miterlimit="10" d="M491.4,86.4c-2.4,1.3-4.9,2.5-7.7,3.5c-2.8,1-5.7,1.8-8.9,2.4
												c-3.2,0.6-6.5,0.9-10,0.9c-6.2,0-11.8-0.9-16.9-2.8c-5.1-1.8-9.4-4.4-13-7.7c-3.6-3.3-6.4-7.1-8.3-11.5c-2-4.4-2.9-9.2-2.9-14.4
												c0-5,1-9.7,3-14.1c2-4.4,4.8-8.3,8.4-11.6s7.9-6,13-7.9c5-1.9,10.5-2.9,16.5-2.9c3.5,0,6.6,0.2,9.4,0.7c2.8,0.4,5.4,1.1,7.9,1.9
												c2.4,0.8,4.7,1.8,6.8,3c2.1,1.2,4.2,2.5,6.3,4.1l-8.8,9.4c-1.5-1.1-3.1-2.2-4.6-3.1c-1.6-0.9-3.2-1.7-5-2.4
												c-1.7-0.6-3.6-1.1-5.7-1.5c-2.1-0.4-4.4-0.6-6.8-0.6c-3.6,0-7,0.7-10.1,2c-3.1,1.3-5.8,3.1-8.1,5.4c-2.3,2.3-4.1,4.9-5.4,8
												c-1.3,3-2,6.3-2,9.7c0,3.6,0.6,7,1.9,10.1c1.3,3.1,3.1,5.8,5.5,8s5.2,4,8.5,5.3c3.3,1.3,7,1.9,11,1.9c3.8,0,7.3-0.5,10.6-1.5
												s6.1-2.3,8.5-3.9V63.3h-20.3V52.5h33.7v29.6C496,83.6,493.8,85,491.4,86.4z"></path>
                            <path stroke-miterlimit="10" d="M522.4,62.2v29.7h-13.8V21.4h13.8v29.3h38V21.4h13.8v70.5h-13.8
												V62.2H522.4z"></path>
                            <path stroke-miterlimit="10" d="M645.7,32.6h-44.8v18.1h39.7v11.2h-39.7v18.8h45.4v11.2h-59.2
												V21.4h58.6V32.6z"></path>
                            <path stroke-miterlimit="10" d="M694.5,74.6H694l-24.8-33v50.3h-13.8V21.4h14.8l24.1,33.3
												l24.1-33.3h14.8v70.5h-13.8V41.4L694.5,74.6z"></path>
                        </g>
                        <path stroke-width="3" stroke-miterlimit="10" d="M141.3,77.8l-6.9,12.9h-11l36.5-67.4l34.5,67.4
											h-10.9l-6.6-12.9H141.3z M159.4,44l-13.6,25.3h26.8L159.4,44z"></path>
                        <g>
                            <path d="M306.7,123.5c-0.4,0.8-1,1.5-1.8,2.1s-1.6,1-2.6,1.3c-1,0.3-2,0.4-3.1,0.4h-5.7v7.8h-1.6v-21h7.6c1.2,0,2.2,0.1,3.2,0.4
												c0.9,0.3,1.8,0.7,2.5,1.3c0.7,0.6,1.2,1.2,1.6,2c0.4,0.8,0.6,1.7,0.6,2.7v0.1C307.4,121.7,307.1,122.7,306.7,123.5z M305.8,120.6
												c0-0.8-0.2-1.6-0.5-2.2c-0.3-0.6-0.7-1.2-1.3-1.6c-0.6-0.4-1.2-0.7-2-1c-0.8-0.2-1.6-0.3-2.6-0.3h-5.9v10.3h5.8
												c1,0,1.9-0.1,2.7-0.4c0.8-0.2,1.5-0.6,2.1-1c0.6-0.5,1-1,1.3-1.6C305.6,122.2,305.8,121.5,305.8,120.6L305.8,120.6z"></path>
                            <path d="M345.4,135.1l-2.7-5.9h-12.4l-2.7,5.9h-1.6l9.8-21.1h1.5l9.8,21.1H345.4z M336.6,115.7l-5.5,12.1h11.1L336.6,115.7z"></path>
                            <path d="M384.7,135.1l-6.7-8.7h-6.9v8.7h-1.6v-21h8.8c1.1,0,2.2,0.1,3.1,0.4c0.9,0.3,1.7,0.7,2.4,1.2c0.7,0.5,1.2,1.2,1.5,1.9
												c0.4,0.7,0.5,1.5,0.5,2.4v0.1c0,0.9-0.2,1.7-0.5,2.4c-0.3,0.7-0.7,1.3-1.3,1.8c-0.5,0.5-1.2,0.9-1.9,1.2c-0.8,0.3-1.6,0.5-2.4,0.6
												l6.9,9H384.7z M384.3,120.1c0-1.4-0.5-2.5-1.6-3.4c-1-0.8-2.5-1.2-4.5-1.2h-7.2v9.5h7.1c0.9,0,1.7-0.1,2.4-0.3
												c0.8-0.2,1.4-0.5,1.9-0.9s1-0.9,1.3-1.5C384.2,121.6,384.3,121,384.3,120.1L384.3,120.1z"></path>
                            <path d="M409.5,135.1v-21h1.6v21H409.5z"></path>
                            <path d="M449,132c-0.4,0.7-0.8,1.3-1.4,1.8c-0.6,0.5-1.3,0.9-2.2,1.2c-0.9,0.3-1.8,0.4-2.8,0.4c-1.7,0-3.2-0.3-4.5-0.8
												c-1.3-0.6-2.7-1.4-3.9-2.5l1-1.2c0.6,0.5,1.2,1,1.7,1.4c0.6,0.4,1.2,0.7,1.8,1c0.6,0.3,1.2,0.4,1.9,0.6c0.7,0.1,1.4,0.2,2.2,0.2
												c0.8,0,1.5-0.1,2.2-0.3c0.7-0.2,1.2-0.5,1.7-0.9c0.5-0.4,0.8-0.8,1.1-1.3c0.3-0.5,0.4-1.1,0.4-1.7v-0.1c0-0.6-0.1-1.1-0.3-1.5
												s-0.5-0.8-0.9-1.2c-0.5-0.4-1.1-0.7-1.8-1c-0.8-0.3-1.7-0.6-2.9-0.8c-1.3-0.3-2.3-0.6-3.2-0.9c-0.9-0.3-1.6-0.8-2.2-1.2
												c-0.6-0.5-1-1-1.2-1.6c-0.3-0.6-0.4-1.3-0.4-2.1v-0.1c0-0.8,0.2-1.5,0.5-2.2c0.3-0.7,0.8-1.3,1.4-1.8c0.6-0.5,1.3-0.9,2.1-1.2
												c0.8-0.3,1.7-0.4,2.7-0.4c1.5,0,2.8,0.2,3.9,0.6c1.1,0.4,2.2,1.1,3.3,1.9l-1,1.2c-1-0.9-2-1.5-3-1.8s-2.1-0.5-3.3-0.5
												c-0.8,0-1.5,0.1-2.1,0.3c-0.6,0.2-1.2,0.5-1.6,0.9c-0.5,0.4-0.8,0.8-1,1.3c-0.2,0.5-0.4,1-0.4,1.5v0.1c0,0.6,0.1,1.1,0.3,1.5
												s0.5,0.9,0.9,1.2c0.4,0.4,1.1,0.7,1.9,1c0.8,0.3,1.8,0.6,3.1,0.8c2.4,0.5,4.2,1.2,5.3,2.1c1.1,0.9,1.6,2.1,1.6,3.7v0.1
												C449.6,130.5,449.4,131.3,449,132z"></path>
                        </g>
                        <g>
                            <path stroke-width="10" stroke-miterlimit="10" d="M63.7,81.5L35.3,25.9h3.9l24.3,47.2l21.8-41.9
												l21.5,41.9l24.5-47.2h3.9l-28.4,55.6L85.3,39L63.7,81.5z"></path>
                        </g>
                    </svg>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn text>
                    Mission
                </v-btn>
                <v-btn text>
                    Mission
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

    }
</style>