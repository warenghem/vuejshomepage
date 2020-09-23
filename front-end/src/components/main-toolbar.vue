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
                <a href="" class="link text-capitalize">STUDIO</a>
                <a href="" class="link text-capitalize"> </a>
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
            padding: 10px;
            background: beige;
            .items {
                display: flex;
                flex: 1;
                justify-content: space-around;
                padding: 0 15px;
                a{
                    font-size: 14px;
                    text-decoration: none;
                    color: white;
                }
                &.brand{
                    img{
                        &:last-child{
                            display: none;
                        }
                    }
                }
            }
            &:hover{
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
                        color: #000!important;
                    }
                }

            }
        }
    }
</style>