<template>
    <section class="studio">
        <div class="studioContainer" id="studioContainer">
            <div class="items" id="col1">
                <div class="content"   @mouseleave="reset"  @mouseover="slideOne">
                  <h1 class="heading text--gray">
                      <span>La noblesse du vin.</span>
                      Complètement végétal.
                      Performantes, naturelles, solides, nos matières sont issues de la terre et des vendanges.
                  </h1>
                </div>
            </div>

            <div class="items" id="col2" >
                <div class="content"   @mouseleave="reset"  @mouseover="slideTwo" >
                    hello 2
                </div>
            </div>

            <div class="items" id="col3" >
                <div class="content"   @mouseleave="reset"  @mouseover="slideThree" >
                    assaasdadsadsa
                </div>
            </div>

            <div class="items" id="col4" >
                <div class="content"  @mouseleave="reset"  @mouseover="slideFour" >
rtrtret
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{

            }

        },
        methods:{
            slideOne(){
                document.getElementById("studioContainer").style.cssText="background:url(/img/banner-red.f6ee98b2.jpg); ";
                document.getElementById("col1").style.cssText="background:none; )";
                document.getElementById("col2").style.cssText="background:none; )";
                document.getElementById("col3").style.cssText="background:none; )";
                document.getElementById("col4").style.cssText="background:none; )";
            },

            slideTwo(){
                document.getElementById("studioContainer").style.cssText="background:url(./img/roche-min.b3e3ff1c.jpg)";
                document.getElementById("col1").style.cssText="background:none; )";
                document.getElementById("col2").style.cssText="background:none; )";
                document.getElementById("col3").style.cssText="background:none; )";
                document.getElementById("col4").style.cssText="background:none; )";
            },

            slideThree(){
                document.getElementById("studioContainer").style.cssText="background:url(./img/Studio-e1593525488356-min-1.563a9fe7.jpg)";
                document.getElementById("col1").style.cssText="background:none; )";
                document.getElementById("col2").style.cssText="background:none; )";
                document.getElementById("col3").style.cssText="background:none; )";
                document.getElementById("col4").style.cssText="background:none; )";
            },

            slideFour(){
                document.getElementById("studioContainer").style.cssText="background:url(./img/Tech-02-min-1-scaled.60d17f7c.jpg)";
                document.getElementById("col1").style.cssText="background:none;)";
                document.getElementById("col2").style.cssText="background:none;)";
                document.getElementById("col3").style.cssText="background:none;)";
                document.getElementById("col4").style.cssText="background:none;)";
            },


            reset(){
                document.getElementById("studioContainer").style.cssText="background:none";
                document.getElementById("col1").style.cssText="background:url(/img/banner-red.f6ee98b2.jpg); opacity:1;)";
                document.getElementById("col2").style.cssText="background:url(./img/roche-min.b3e3ff1c.jpg); opacity:1;)";
                document.getElementById("col3").style.cssText="background:url(./img/Studio-e1593525488356-min-1.563a9fe7.jpg); opacity:1;)";
                document.getElementById("col4").style.cssText="background:url(./img/Tech-02-min-1-scaled.60d17f7c.jpg); opacity:1;)";
            }

        }
    }

</script>

<style scoped lang="scss">
    .studio {
        margin-top: -51px;
        z-index: 1;
        position: relative;
        .studioContainer {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            height: 100vh;
            position: relative;
            .items {
                height: inherit;
                position: relative;
                flex: 1;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                .content {
                    position: absolute;
                    bottom: 0;
                    padding: 15px;
                    right: 0;
                    left: 0;
                    height:150px;
                    transition: height 0.5s ease-in-out;
                    overflow: hidden;
                    &:hover{
                        height:70%;
                    }
                }

                &:nth-child(1) {
                    background: url("../assets/images/banner-red.jpg");
                }
                &:nth-child(2) {
                    background: url("../assets/images/roche-min.jpg");
                }
                &:nth-child(3) {
                    background: url("../assets/images/Studio-e1593525488356-min-1.jpg");
                }
                &:nth-child(4) {
                    background: url("../assets/images/Tech-02-min-1-scaled.jpg");
                }

            }
        }

    }

    @keyframes fadeInOpacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>