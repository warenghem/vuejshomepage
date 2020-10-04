<template>
    <section class="team-section">
        <h2 class="page-title py-md-5 py-4">The studio</h2>
        <v-row no-gutters>
            <v-col lg="4" sm="6">
                <div class="item-inner">
                    <div class="profile-holder mb-3">
                        <img src="../assets/images/profile/kevin.png"
                             alt="Wait for it">
                    </div>
                    <div class="content-holder text-left">
                        <h4 class="name">Kevin Brosseau</h4>
                        <div class="role"> Founder &amp; Artistic Director
                        </div>
                        <div class="item-details">
                            {{$t('kevin')}}
                        </div>
                    </div>
                </div>

            </v-col>
            <v-col lg="4" sm="6">
                <div class="item-inner">
                    <div class="profile-holder mb-3">
                        <img src="../assets/images/profile/alex.jpg"
                             alt="Wait for it">
                    </div>
                    <div class="content-holder text-left">
                        <h4 class="name">Alexandre marty</h4>
                        <div class="role"> Designate
                        </div>
                        <div class="item-details">
                            {{$t('alex')}}
                        </div>
                    </div>
                </div>

            </v-col>
            <v-col lg="4" sm="6">
                <div class="item-inner">
                    <div class="profile-holder mb-3">
                        <img src="../assets/images/profile/julie.png"
                             alt="Wait for it">
                    </div>
                    <div class="content-holder text-left">
                        <h4 class="name">Julie maurence</h4>
                        <div class="role"> Designate
                        </div>
                        <div class="item-details">
                            {{$t('julie')}}
                        </div>
                    </div>
                </div>

            </v-col>
            <v-col lg="4" sm="6">
                <div class="item-inner">
                    <div class="profile-holder mb-3">
                        <img src="../assets/images/profile/quentin.png"
                             alt="Wait for it">
                    </div>
                    <div class="content-holder text-left">
                        <h4 class="name">Quentin Brosseau</h4>
                        <div class="role"> Research & Development / Materials & Technologies
                        </div>
                        <div class="item-details">
                            {{$t('quentin')}}
                        </div>
                    </div>
                </div>

            </v-col>
        </v-row>
    </section>
</template>

<script>
    export default {
        i18n: {
            messages: {
                en: {
                    kevin: "Convinced by a world where nature would be omnipresent around us, I decided to use my " +
                        "knowledge acquired in the business world for causes that are close to our hearts. Let's " +
                        "create together ecologically perfect and intuitive French objects.",
                    alex: "After studying style and model making at Esmod Paris, I learned my skills in the creative " +
                        "studio of the Maison Courrèges. I create products that are both functional and aesthetic," +
                        " combining architectural references, graphic design, and fashion, convinced that these" +
                        " different types are complementary.",
                    julie: "Former student at Esmod Paris, I started my career as a stylist in various houses, " +
                        "and then by launching my leather goods brand. Today, I work through different worlds that " +
                        "combine design and photography. I love taking a global look at a creation, and finding a " +
                        "strong identity for it that will set it apart from others.",
                    quentin: 'After a few years working as a space engineer at Airbus, I took up a Masters in ' +
                        'Ecosystem and Biodiversity Management at the University of Montreal. I am looking for the ' +
                        'most ecological plant materials and sustainable technologies that could support us.'
                },
                fr: {
                    kevin: 'Convaincu par un monde ou la nature serait omniprésente autours de nous, j’ai décidé ' +
                        'd’utiliser mes connaissances acquises dans le monde de l’entreprise pour des causes qui nous ' +
                        'tiennent à cœur. Créons ensemble des objets français écologiquement parfaits et intuitifs.',
                    alex: 'Après avoir étudié le style et le modélisme à Esmod Paris, j’ai fait mes armes au sein du ' +
                        'studio créatif de la maison Courrèges. Je créé des produits à la fois fonctionnels et' +
                        ' esthétiques, mêlant références architecturales, design graphique, et mode, convaincu que ces ' +
                        'différentes typologies sont complémentaires.',
                    julie: 'Ancienne étudiante à Esmod Paris, jai commencé ma carrière en tant que styliste au sein ' +
                        'de diverses maisons, et dans un second temps en lancant ma marque de maroquinerie. ' +
                        'Aujourd’hui, j’évolue à travers différents univers qui mêlent design et photographie. ' +
                        'J’adore porter un regard global sur une création, et lui trouver une identité forte ' +
                        'qui la distinguera des autres.',
                    quentin: 'Après quelques années à travailler comme ingénieur spatial chez Airbus, j’ai repris un ' +
                        'Master Gestion de l’écosystème et de la biodiversité à l’Université de Montréal. Je recherche ' +
                        'les matières végétales les plus écologiques et les technologies durables qui pourraient nous' +
                        ' accompagner.'
                }
            }
        },
    }
</script>
<style scoped lang="scss">
    .team-section {
        .item-inner {
            padding: 30px;
            height: 100%;

            .profile-holder {
                text-align: center;

                img {
                    border-radius: 50%;
                    width: 200px;
                    height: 200px;
                }
            }

            .name {
                margin-top: 0;
                margin-bottom: 5px;
                color: #000;
                font-size: 16px;
            }

            .role {
                margin-bottom: 15px;
                color: #888;
                line-height: 15px;
            }

            .item-details {
                margin-bottom: 15px;
                color: #86868b;
                text-align: left;
                font-size: 13px;
                line-height: 1.47059;
                font-weight: 300;
                letter-spacing: -.022em;
                font-family: 'teradeli-light', sans-serif;
            }
        }
    }
</style>
