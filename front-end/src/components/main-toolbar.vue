<template>
    <section class="appBar">
        <div class="topBar text-center">
            Livraison gratuite dans le monde
        </div>
        <div class="menuBar">
            <div class="items">
                <a href="" class="link text-capitalize">MISSION</a>
                <a href="" class="link text-capitalize">PRODUITS</a>
                <a href="" class="link text-capitalize">CALENDRIER</a>
            </div>
            <a href="#" class="items brand">
                    <img src="../assets/images/logo.png" />
                    <img src="../assets/images/logo-alt.png" />
            </a>
            <div class="items">
                <a href="" class="text-capitalize">
                    REFORESTATION
                </a>
                <a href="#" class="link text-capitalize">STUDIO</a>
                <a href="#" class="link text-capitalize" >
                    <img src="../assets/images/flag.jpg" width="24px" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "main-toolbar",
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
        .menuBar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 45px;
             
            .items {
                display: flex;
                flex: 1;
                justify-content: space-around;
                padding: 0 15px;
                a{
                    font-size: 14px;
                    text-decoration: none;
                    color: white;
                    padding: 12px;
                    position: relative;

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
                &.brand{
                    img{
                        &:last-child{
                            display: none;
                        }
                    }
                }
                &:last-child{
                    a{
                        &:last-child{
                            &:hover{
                                &:after{
                                    width:0!important;
                                    background: transparent;
                                }
                            }
                        }
                    }
                }
            }
            &:hover{
                background: #fff;
                .items{
                    &.brand{
                        img{
                            &:first-child{
                                display: none;
                            }
                            &:last-child{
                                display: block!important;
                            }
                        }
                    }

                    a{
                        color:#000!important;
                    }
                }

            }
        }
    }
</style>