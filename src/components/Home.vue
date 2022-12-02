<template>
  <div>
    <Header/>
    <Welcome>Welcome to your all-in-one vacation guide!</Welcome>
    
    <info>Using our own unnique algorithm, we will be able to make the perfect destination recommendation for all of your needs. With over 100+ locations to search from, your next trip is waiting.</info>
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
      caption="New York"  
      img-src="https://picsum.photos/2048/960/?image=411"
      >
      </b-carousel-slide>

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
        caption="Rome"
        img-src="https://picsum.photos/2048/960/?image=629"
      ></b-carousel-slide>

    </b-carousel>
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
  color: #42b983;
}
Welcome {
  padding: 40px 0px;
}

</style>
