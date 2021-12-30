/* eslint-disable */
<template>
    <div class="results">
      <h3>n Results</h3>
      <div class="results__cover">
          <div class="results__result--item">
          <div class="results__item--cover">
              <div class="results__avt--cover">
                  <img src="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg" alt="" class="results__avt">
              </div>
              <div class="results__item--infor">
                    <div class="results__name">DINH CHI NGUYEN</div>
                    <div class="results__major">Information Technology, Computer Science</div>
                    <div class="results__uni">Oxford University</div>
                    <div class="results__add">207 Giai Phong, Hai Ba Trung, Ha Noi</div>
               </div>
              </div>
          </div>
       </div>
      
      <div class="results__cover">
          <div class="results__result--item">
          <div class="results__item--cover">
              <div class="results__avt--cover">
                  <img src="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg" alt="" class="results__avt">
              </div>              
              <div class="results__item--infor "> 
                    <div class="results__name">THANH LUAN BUI</div>
                    <div class="results__major">Information Technology, Computer Science</div>
                    <div class="results__uni">Oxford University</div>
                    <div class="results__add">207 Giai Phong, Hai Ba Trung, Ha Noi</div>
              </div>
          </div>
          </div>
      </div>

      <div class="results__cover">
          <div class="results__result--item">
          <div class="results__item--cover">
              <div class="results__avt--cover">
                  <img src="https://scr.vn/wp-content/uploads/2020/07/%E1%BA%A2nh-%C4%91%E1%BA%A1i-di%E1%BB%87n-FB-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF.jpg" alt="" class="results__avt">
              </div>             
              <div class="results__item--infor">
                    <div class="results__name">TRUNG HIEU PHAM</div>
                    <div class="results__major">Information Technology, Computer Science</div>
                    <div class="results__uni">Oxford University</div>
                    <div class="results__add">207 Giai Phong, Hai Ba Trung, Ha Noi</div>
             </div>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .results{
        width: 100%;
    }

    .results__cover{
        /* position: relative; */
        width: 100%;
        height: 268px;
        top: 21px;

        display: flex;
        margin-bottom: 40px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }

    .results__result--item{
        position: relative;
        width: 75%;
        height: 268px;
        top: 21px;


        background: #ECF4F1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        margin-bottom: 40px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }

    .results__item--cover{
        margin: 0 auto;
        display: flex;
        width: 100%;
        height: 100%;

    }

    .results__item--infor{
        flex: 1;
        position: relative;
        display: flex;
        align-items: flex-start;
        flex-flow: wrap;
        width: 40%;
        text-align: left;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: space-evenly;
    }


    .results__avt--cover{
        flex: 1;
    }

    .results__avt{
        position: absolute;
        width: 202px;
        height: 231px;
        left: 5%;
        top: 10px;

        border-radius: 10px;
        margin-top: 9px;
    }

    .results__name{
        /* position: relative; */
        width: 330px;
        height: 30px;
        left: 394px;
        top: 46px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }

    .results__major{
        /* position: relative; */
        width: 340px;
        height: 21px;
        left: 458px;
        top: 121px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-transform: capitalize;

        color: #000000;
    }

    .results__uni{
        /* position: relative; */
        width: 214px;
        height: 21px;
        left: 458px;
        top: 166px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        text-transform: capitalize;

        color: #000000;

    }

    .results__add{
        /* position: relative; */
        width: 538px;
        height: 21px;
        left: 458px;
        top: 212px;

        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        /* identical to box height */

        text-transform: capitalize;

        color: #000000;  
    }

    h3{
        font-weight: 300;
        font-size: 26px;
        margin-left: 50px;
        text-align: left;
    }
</style>