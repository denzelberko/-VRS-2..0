<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      fade
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="New York"
        img-src="https://picsum.photos/1024/480/?image=411"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Paris"
        img-src="https://picsum.photos/1024/480/?image=420"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="San Francisco"
        img-src="https://picsum.photos/1024/480/?image=392"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Punta Cana"
        img-src="https://picsum.photos/1024/480/?image=521"
      ></b-carousel-slide>

      <b-carousel-slide
        caption="Rome"
        img-src="https://picsum.photos/1024/480/?image=629"
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
</style>
