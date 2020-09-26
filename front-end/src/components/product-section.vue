<template>
    <div>
        <v-row no-gutters class="productSection">
            <v-col cols="6" md="6" sm="12" class="parent-left">
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </v-col>

            <v-col cols="6" md="6" sm="12" class="parent-left">
                <div class="horizontal">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="vertical">
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                    <div class="inner">
                        <div class="content">
                            <small>Visuals to come</small>
                            <h1>Wallet</h1>
                            <p> Plant like its leaves. <br> Obviously.</p>
                            <article>
                                Ally of your daily life, it is designed around oblique lines representing the emblematic
                                W
                                of the brand. Each of them has space for your cards.
                            </article>

                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </v-col>

        </v-row>
    </div>
</template>

<script>
    export default {
        name: "product-section",
        data() {
            return {
                interval: {},
                progressValue: 0,
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            setInterval(() => {
                this.progressValue = 30
            }, 3000)
        },
    }
</script>

<style scoped lang="scss">

    .productSection {
        min-height: 100vh;
        .parent-left {
            .vertical{
                height: 65%;
                display: flex;

                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    &:nth-child(1) {
                        /*background: url(../assets/images/WA-mif-seamless-REVISION.png);*/
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay{
                        position: absolute;
                        background:#1f4046f2;
                        opacity:0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover{
                        cursor: url(../assets/images/cross_100185.svg),auto;
                        .overlay{
                            opacity: 1;
                        }
                        .content{
                            position: relative;
                            z-index: 1;
                            article{
                               opacity: 1;
                            }
                        }
                    }
                }

            }
            .horizontal {
                height: 35%;
                .inner {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    height: 100%;
                    &:nth-child(1) {
                        //background: url(../assets/images/WA-mif-seamless-REVISION.png);
                    }
                    .content {
                        padding: 20px;
                        text-align: center;
                        small {
                            color: #0083A4;
                            font-family: 'teradeli-light', sans-serif !important;
                            font-size: 13px;
                        }
                        h1 {
                            color: #fff;
                        }
                        p {
                            font-family: 'teradeli-book', sans-serif !important;
                            font-size: 20px;
                            color: rgba(255, 255, 255, .65) !important;

                        }
                        article {
                            font-size: 14px;
                            letter-spacing: 1px;
                            opacity: 0;
                            color: #fff;
                        }

                    }
                    .overlay{
                        position: absolute;
                        background:#1f4046f2;
                        opacity:0;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        transition: opacity 0.4s ease-in-out;
                    }
                    &:hover{
                        cursor: url(../assets/images/cross_100185.svg),auto;
                        .overlay{
                            opacity: 1;
                        }
                        .content{
                            position: relative;
                            z-index: 1;
                            article{
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }


</style>