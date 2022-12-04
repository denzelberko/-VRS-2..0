<template>
  <div>
    <Header/>
  <div class="wel">
    <Welcome>Welcome to your all-in-one vacation guide!</Welcome>
  </div>

  <div class="info">
    <info>Using our own unique algorithm, we will find the perfect destination for all of your needs. With over 100+ locations to search from, your next trip is waiting. </info>
  </div>
    
    
    <div style="position:relative; top:55px;">
    <b-carousel
      id="carousel-2"
      :interval="4000"
      controls
      indicators
      fade
      img-width="512"
      img-height="580"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->


      <b-carousel-slide
        caption="Paris"
        img-src="https://picsum.photos/2048/960/?image=318"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="San Francisco"
        img-src="https://picsum.photos/2048/960/?image=392"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Punta Cana"
        img-src="https://picsum.photos/2048/960/?image=521"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Florence"
        img-src="https://picsum.photos/2048/960/?image=629"
      ></b-carousel-slide>

      <b-carousel-slide
      caption="New York"  
      img-src="https://picsum.photos/2048/960/?image=411"
      >
      </b-carousel-slide>

    </b-carousel>
  </div>

  <div class="info">
    <info>Visit <a href="http://localhost:3000/#/recommendations/">recommendations</a>  to find your next adventure! </info>
  </div>

  </div>

  

</template>

<script>
import Header from './Header.vue';

export default {
  components: {
    Header
  },
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #297fc0;
}
.wel{
  background-color: #e4e4e4f2;
  padding: 5px 0px;
  text-align: center;
  position:relative; top:50px;
}

.info{
  color: #000000;
  padding: 20px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  position:relative; top:50px;
}
Welcome {
  font-size: 30px;
  color: #0D0047;
  text-decoration: none;
  background-position: center;
  font-weight: bold;
}

info{
  font-size: 15px;
  padding: 50px 0px;
  color: #000000;
  text-decoration: none;
  background-position: center;
}

hyper{
  white-space:pre;
  margin-left: auto;
  margin-right:100px;
  font-size: 15px;
  text-decoration: none;
}

.hyper{
  color: #000000;
  font-size: 20px;
  position:relative; top:100px;
}

</style>
