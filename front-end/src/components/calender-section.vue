<template>
    <section class="calender">

        <div class="section_info">
            <h2>
                Le calendrier avant le lancement de chaque objet
            </h2>
            <h5>
                Pour suivre le déroulement du projet. Il s’affinera au fil
                du temps. Inscrivez vous à la Newsletter et suivez nous sur Instagram et Facebook pour en être notifié.
            </h5>
        </div>

        <div class="calender-container">
            <div class="items">
               <div class="inner left-caret">
                   <div class="icon-left-block">
                       <img src="../assets/images/calender-icons/fanel.svg">
                   </div>
                   <div class="title">Step 1</div>
                   <div class="subTitle">Create perfect 3D objects with you.</div>
                   <div class="desc">Thanks to 3D photorealistic technology, we create endlessly. With our community, we
                       claim performance, design, and purism. All our choices will be documented on our blog.
                   </div>
               </div>
               <div class="inner vh"> </div>
            </div>
            <div class="items">
               <div class="inner vh"> </div>
               <div class="inner right-caret">
                   <div class="icon-right-block">
                       <img src="../assets/images/calender-icons/bug.svg">
                   </div>
                   <div class="title">2nd step</div>
                   <div class="subTitle">Prototyping on the chosen objects.</div>
                   <div class="desc">Development of prototypes with our French leatherworkers on the basis of our 3D. Daily tests of objects with a selection of people. Press articles.
                   </div>
               </div>
            </div>
            <div class="items">
               <div class="inner left-caret">
                   <div class="icon-left-block">
                       <img src="../assets/images/calender-icons/user.svg">
                   </div>
                   <div class="title">Step 3</div>
                   <div class="subTitle">Limited edition online pre-order campaign.</div>
                   <div class="desc">Based on our community, we will launch a crowdfunding campaign on the Ulule platform. Parts will be limited to avoid overproduction and waste
                   </div>
               </div>
               <div class="inner vh"> </div>
            </div>
            <div class="items">
               <div class="inner vh"> </div>
               <div class="inner right-caret">
                   <div class="icon-right-block">
                       <img src="../assets/images/calender-icons/rocket.svg">
                   </div>
                   <div class="title">Step 4</div>
                   <div class="subTitle">Manufacture of objects and dispatch of orders.</div>
                   <div class="desc">  Our French leatherworkers will sign and number each object. Before sending them carefully to your home.
                   </div>
               </div>
            </div>
            <div class="items">
                <div class="icon-complete">
                    <img src="../assets/images/calender-icons/right.svg">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .vh{
        visibility: hidden;

        @media(max-width:425px){
            visibility: unset;
            display: none;
        }
    }
    .icon-complete{
        height: 40px;
        background: #3781a7;
        width: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        bottom: 0;
        position: absolute;
        img{
            width: 16px;
        }
        @media(max-width:425px){
            left: -5px;
        }
    }
    .calender {
        padding: 50px 15px;
        background: #1a1a1a;
        color: #fff;
        .section_info {
            h2 {
                font-family: 'teradeli-medium', sans-serif;
                line-height: 2;
                color: #888;
                font-size: 20px;
            }
            h5 {
                font-size: 13px;
                max-width: 400px;
                line-height: 1rem !important;
                color: #fff;
                font-family: 'teradeli-light', sans-serif;
            }
        }
        .calender-container {
            position: relative;
            max-width: 760px;
            margin: 0 auto;
            padding-bottom: 30px;
            min-height: 100vh;
            margin-top: 50px;

            &:before {
                content: "";
                width: 3px;
                height: 100%;
                background: #0081a7;
                left: 50%;
                top: 0;
                position: absolute;

                @media(max-width:425px){
                    left: 12px;
                }
            }

            .items{
                display: flex;
                justify-content: space-around;
                align-items: center;
                .inner  {
                    flex: 1;
                    background: #151515;
                    margin: 0 20px;
                    max-width: 300px;
                    padding: 20px 20px;
                    border-radius: 15px;
                    margin-bottom: 20px;
                    position: relative;


                    &.left-caret{
                        &:after{
                            content: "";
                            height: 15px;
                            width: 15px;
                            background: #151515;
                            position: absolute;
                            right: -8px;
                            top: 15px;
                            transform: rotate(45deg);
                            @media(max-width:425px){
                                left: -8px;
                            }
                        }
                    }
                    &.right-caret{
                        &:after{
                            content: "";
                            height: 15px;
                            width: 15px;
                            background: #151515;
                            position: absolute;
                            left: -8px;
                            top: 15px;
                            transform: rotate(45deg);
                        }
                    }


                    .icon-left-block{
                        position: absolute;
                        height: 40px;
                        background: #3781a7;
                        width: 40px;
                        border-radius: 50%;
                        right: -62px;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        @media(max-width:768px){
                            top: -1px;   right: -56px;
                        }

                        @media(max-width:425px){
                            left: -53px;
                        }

                        img{
                            width: 16px;
                        }


                    }
                    .icon-right-block{
                        position: absolute;
                        height: 40px;
                        background: #3781a7;
                        width: 40px;
                        border-radius: 50%;
                        left: -59px;
                        top: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        @media(max-width:768px){
                            left: -54px;
                        }
                        img{
                            width: 16px;
                        }
                    }
                    .title{
                        color: #0081a7;
                        font-size: 16px;
                    }
                    .subTitle{
                        font-size: 18px;
                        color: #fff;
                        font-family: 'teradeli-medium',sans-serif;
                        line-height: 1rem!important;
                        margin: 10px 0;
                    }
                    .desc{
                        color: #86868b;
                        font-size: 13px;
                        line-height: 1.47059;
                        letter-spacing: -.022em;
                        font-family: 'teradeli-light',sans-serif;
                    }
                }
            }
        }
    }
</style>