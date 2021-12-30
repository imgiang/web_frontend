/* eslint-disable */
<template>
    <div class="rlt">
        <div class="rlt-cover"> 
            <h1>RELATED EXPERT</h1>
        <div class="items">
            <div class="item-name">DINH CHI NGUYEN</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/8/8/8801237806517-xanhnhat.jpg" alt="" class="item-avt">
        </div>
        <div class="items">
            <div class="item-name">THUY GIANG NGUYEN</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/8/8/8801237806517-xanhnhat.jpg" alt="" class="item-avt">
        </div>
        <div class="items">
            <div class="item-name">THU HUONG DUONG</div>
            <div class="item-job">Professional, Doctor</div>
            <div class="item-address">Harvard University, Cambridge University</div>
            <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/8/8/8801237806517-xanhnhat.jpg" alt="" class="item-avt">
        </div>
        </div>
    </div>
</template>



<style scoped>

    .rlt{
        /* position: absolute; */
        height: 257px;
        left: 0px;
        top: 0px;
        width: 100%;
        display: flex;
        text-align: center;
    }

    .rlt-cover{
        /* position: absolute; */
        width: 80%;
        height: 257px;
        left: 0px;
        top: 0px;
        background: #D1E0DB;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        margin: auto;
    }

    .items{
        position: relative;
        /* width: auto; */
        height: 155px;
        left: auto;
        top: 50px;
        background: #ECF4F1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        flex: 1;
        text-align:left;
        display: inline-block;
        margin: 10px 18px;
    }

    /* .item-1{
        flex: 4;
    } */

    .item-name{
        position: absolute;
        width: 180px;
        height: 43px;
        left: 15px;
        top: 10px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 1;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        flex-flow: wrap;

        color: #000000;
    }

    .item-job{
        position: absolute;
        width: 180px;
        height: 43px;
        left: 13px;
        top: 55px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 1;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        flex-flow: wrap;

        color: #000000;

    }

    .item-address{
        position: absolute;
        width: 180px;
        height: 43px;
        left: 13px;
        /* top: 85px; */
        bottom: 12px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        flex-flow: wrap;

        color: #000000;
    }

    .item-avt{
        position: absolute;
        width: 89px;
        height: 129.58px;
        /* left: 290px; */
        top: 13px;
        border-radius: 5px;
        right: 8px;
        flex: 1;
    }

    h1{
        position: absolute;
        width: 295px;
        height: 50px;
        left: 12.1%;
        margin: auto;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        display: flex;
        align-items: center;

        color: #000000;
    }
</style>