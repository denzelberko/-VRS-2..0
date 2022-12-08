<template>
  <div>
    <Header/>
    <div style="margin-left: 15%; margin-right: 15%;">
  <div class="wel">
    <Welcome>This is a student project for MIE350 and should not be used for anything other than educational purposes.</Welcome>
  </div>

  <div class="info2">
    <b>Purpose</b><p>The purpose of this website is to create a unique tool to help users find their ideal vacation. Using a unique algorithm based on a variety of parameters, our team has created an effective method of finding your next destination.</p>
  </div>
  <div class="info2"><b>Functionality</b><p>There are a broad set of functions that this website is capable of. Using the recommendations feature, based on your own personal parameters, the site will provide you with the top 5 destinations for you. 
    Alternatively, the site can also be used to search from a variety of our included destinations by simply using a search bar. There, you will be able to find out more information about each location, including attractions and hotels.
  You are also welcome to provide us with your own reviews, that other users will be able to see going forward.</p>
  </div>
  <div class="info2"><b>The Team</b><p>Our team consists of 6 Industrial Engineering students from the University of Toronto. Each with a unique set of skills, we have put our strengths together to create an innovative product. The individuals involved with the making of the site are: <br>Denzel the Front-End Wizard<br>Matthew the Algorithm King<br>Max the Report Maestro<br>Noah the Style Master<br>Pascal the Back-End Magician<br>Rai'd the Mobile Expert</p></div>
    
  <div class="info2" ><b>Special Thanks</b><p>Thank you to Trivago and Tripadvisor for providing information as the basis for our destination data. </p><info>“Trivago.com - compare hotel prices worldwide,” trivago, 2022. [Online]. Available: https://www.trivago.com/. [Accessed: 07-Dec-2022]. </info>
    <pre>{{''}}</pre>
    <info>“Tripadvisor,” Tripadvisor, 2022. [Online]. Available: https://www.tripadvisor.ca/. [Accessed: 07-Dec-2022]. </info>
  </div>

  <div class="info2">
    <info>What are you waiting for? Visit <a href="http://localhost:3000/#/recommendations/">recommendations</a>  to find your next adventure! </info>
  </div>
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
  text-align: left;
  text-decoration: none;
  font-size: 20px;
  position:relative; top:50px;
}

.info2{
  color: #000000;
  padding: 20px 30px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  position:relative; top:50px;
}
Welcome {
  font-size: 20px;
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
