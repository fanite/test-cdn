<template>
  <div id="myfullpage">
    <home-header />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section " id="section0">
        <video id="myVideo" loop muted data-autoplay>
          <source :data-src="backImg.bgMp4" type="video/mp4">
          <source :data-src="backImg.bgWebm" type="video/webm">
        </video>
        <div class="layer">
          <h1>中国之家</h1>
        </div>
      </div>
      <div class="section" id="section1">
        <div class="slide" id="slide1" :style="{backgroundImage: 'url('+backImg.bg2+')'}"><h1>Slide Backgrounds</h1></div>
        <div class="slide" id="slide2" :style="{backgroundImage: 'url('+backImg.bg3+')'}"><h1>Totally customizable</h1></div>
      </div>
      <div class="section" id="section2" :style="{backgroundImage: 'url('+backImg.bg4+')'}"><h1>Lovely images <br />for a lovely page</h1></div>
      <div class="section" id="section3" :style="{backgroundImage: 'url('+backImg.bg5+')'}"><h1>One Image = One thousand words</h1></div>
    </full-page>
  </div>
</template>
<script>
import 'fullpage.js/dist/fullpage.min.css'
import 'fullpage.js/vendors/easings.min'
import 'fullpage.js/vendors/scrolloverflow.min'
import {FullPage} from 'vue-fullpage.js'
import {lazyLoadVue} from '@/libs/utils'
export default {
  data() {
    return {
      backImg: {
        bg1: require("@/assets/images/background/bg1.jpg"),
        bg2: require("@/assets/images/background/bg2.jpg"),
        bg3: require("@/assets/images/background/bg3.jpg"),
        bg4: require("@/assets/images/background/bg4.jpg"),
        bg5: require("@/assets/images/background/bg5.jpg"),
        bgMp4: require("@/assets/images/background/flowers.mp4"),
        bgWebm: require("@/assets/images/background/flowers.webm"),
      },
      options: {
        licenseKey: 'HC1dWr^b(0X@zMq2G*Dar',
        verticalCentered: true,
        css3: false,
        recordHistory: true,
        scrollingSpeed: 1200,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2500,
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE','#1bbc9b', '#4BBFC3', '#7BAABE'],
        menu: '#mymenu',
        lloopTop: true,
        loopBottom: true,
        lazyLoad: true
      },
    }
  },
  props: {},
  components: {
    FullPage,
    HomeHeader: lazyLoadVue('components/home/HomeHeader.vue')
  }
}
</script>

<style>
/* Style for our header texts
* --------------------------------------- */
h1{
  font-size: 5em;
  font-family: arial,helvetica;
  color: #fff;
  margin:0;
  padding:0;
}

/* Centered texts in each section
* --------------------------------------- */
.section{
  text-align:center;
	overflow: hidden;
}


/* Backgrounds will cover all the section
* --------------------------------------- */
#section0,
#section1,
#section2,
#section3,
  #slide1,
  #slide2{
  background-size: cover;
  background-attachment: fixed;
}

#section3 h1{
  color: #000;
}
#myVideo{
  position: absolute;
  right: 0;
  bottom: 0;
  top:0;
  right:0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black; /* in case the video doesn't fit the whole page*/
  background-image: /* our video */;
  background-position: center center;
  background-size: contain;
  object-fit: cover; /*cover video background */
  z-index:3;
}



/* Layer with position absolute in order to have it over the video
* --------------------------------------- */
#section0 .layer{
  position: absolute;
  z-index: 4;
  width: 100%;
  left: 0;
  top: 43%;

  /*
  * Preventing flicker on some browsers
  * See http://stackoverflow.com/a/36671466/1081396  or issue #183
  */
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
video::-webkit-media-controls {
  display:none !important;
}
.el-menu.el-menu--horizontal{
  border-bottom: unset;
}
#mymenu .active {
  box-sizing: border-box;
  border-bottom: 1px solid rgb(255, 208, 75) !important;
}
#mymenu .active, .active a {
  color: rgb(255, 208, 75) !important;
}
</style>

