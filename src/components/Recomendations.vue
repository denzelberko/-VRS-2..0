<template>
  <div class="hello">
    
    

    <Header/>
    <pre>{{''}}</pre>
  <h2 class = "center"> Trip Parameters </h2>


<label>What is your price range?</label>
    <select v-model="trip.priceRange">
  <option v-for = "price in prices">{{price}}</option>

</select>
<pre>{{''}}</pre>


<label>How important is it that your trip is in this price range?</label>
    <select v-model="trip.priceRangeImp">
  <option v-for = "priceImp in imps">{{priceImp}}</option>

</select>

<pre>{{''}}</pre>

<label>How long do you want your trip to be?</label>
    <select v-model="trip.tripLength">
  <option v-for = "length in lengths">{{length}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that your trip is this long?</label>
    <select v-model="trip.tripLengthImp">
  <option v-for = "lengthImp in imps">{{lengthImp}}</option>

</select>

<pre>{{''}}</pre>

<label>Are there any continents you wish to visit?</label>
    <select v-model="trip.continent">
  <option disabled value=""></option>
  <option v-for = "cont in continents">{{cont}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that you visit one of these continents?</label>
    <select v-model="trip.continentImp">
  <option v-for = "contImp in imps">{{contImp}}</option>

</select>

<pre>{{''}}</pre>

<label>How would you describe the purpose of your trip?</label>
    <select v-model="trip.purpose">
  <option disabled value=""></option>
  <option v-for = "purp in purposes">{{purp}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that your trip satisfies this purpose?</label>
    <select v-model="trip.purposeImp">
  <option v-for = "purpImp in imps">{{purpImp}}</option>

</select>

<pre>{{''}}</pre>

<label>What types of climates are you looking to visit?</label>
    <select v-model="trip.climate">
  <option disabled value=""></option>
  <option v-for = "clim in climates">{{clim}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that you visit one of these climate types?</label>
    <select v-model="trip.climateImp">
  <option v-for = "climImp in imps">{{climImp}}</option>

</select>

<pre>{{''}}</pre>

<label>How busy do you want your destination to be?</label>
    <select v-model="trip.busyLevel">
  <option v-for = "busy in busyLevels">{{busy}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that your destination is this busy?</label>
    <select v-model="trip.busyLevelImp">
  <option v-for = "busyImp in imps">{{busyImp}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it that English is a native language at your destination?</label>
    <select v-model="trip.language">
  <option v-for = "lang in imps">{{lang}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is the quality of the food at your destination?</label>
    <select v-model="trip.food">
  <option v-for = "fd in imps">{{fd}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is the quality of the attractions at your destination?</label>
    <select v-model="trip.attractions">
  <option v-for = "attr in imps">{{attr}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is the quality of the hotels at your destination?</label>
    <select v-model="trip.hotel">
  <option v-for = "hot in imps">{{hot}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it for your destination to have opportunities to take nice photos?</label>
    <select v-model="trip.instagramability">
  <option v-for = "insta in imps">{{insta}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it for your destination to be child-friendly?</label>
    <select v-model="trip.childFriendly">
  <option v-for = "child in imps">{{child}}</option>

</select>

<pre>{{''}}</pre>

<label>How important is it for your destination to be safe?</label>
    <select v-model="trip.safety">
  <option v-for = "safe in imps">{{safe}}</option>

</select>

<pre>{{''}}</pre>

    <b-button @click="search(trip.priceRange, trip.priceRangeImp, trip.tripLength, trip.tripLengthImp, trip.continent, trip.continentImp, trip.purpose, trip.purposeImp, trip.climate, trip.climateImp, trip.busyLevel, trip.busyLevelImp, trip.language, trip.food, trip.attractions, trip.hotel, trip.instagramability, trip.childFriendly, trip.safety) ">
          Search Parameters
  </b-button>

    
    <b-table striped hover responsive :items="destinations" :fields="fields">
      
      <template v-slot:cell(MoreDetails)="data">
            <router-link :to="
            {

                name: 'TripPage',
              
                }"
            tag="button"
            class="btn btn-primary">More Details
            </router-link>
    


        </template>  
        
      
    </b-table>
    
  </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
  name: 'HelloWorld',
  components: {
    Header
  },
  data () {
    return {
      destinations: null,
      //field key must match attribute of object
      fields: [
      {key: 'rank', label: 'Rank', sortable: false},
      {key: 'name', label: 'Destination', sortable: false},
      {key: 'score', label: 'Score', sortable: false},
      {key: 'MoreDetails', label: 'More Details'}
    ],
      form: {
          email: '',
          first_name: '',
          last_name: '',
          id: ''
        },
      trip:{
        priceRange: "",
        priceRangeImp: "",
        tripLength: "",
        tripLengthImp: "",
        continent: "",
        continentImp: "",
        purpose: "",
        purposeImp: "",
        climate: "",
        climateImp: "",
        busyLevel: "",
        busyLevelImp: "",
        language: "",
        food: "",
        attractions: "",
        hotel: "",
        instagramability: "",
        childFriendly: "",
        safety: ""
      },

      prices: ["low", "medium", "high"],
      imps: ["not at all", "not too much", "somewhat", "very", "extremely"],
      lengths: ["weekend", "one week", "more than one week"],
      continents: ["North America", "South America", "Europe", "Asia", "Africa", "Australia"],
      purposes: ["Sightseeing", "Relaxation", "Nature"],
      climates: ["Tropical", "Dry", "Temperate", "Continental", "Cold"],
      busyLevels: ["not busy", "somewhat", "very"]
    }
  },
  
  methods: {
    init() {
      axios
        .get('http://localhost:8085/students')
        .then(response => (this.students = response.data))
    },

    search(priceRange, priceRangeImp, tripLength, tripLengthImp, continent, continentImp, purpose, purposeImp, climate, climateImp, busyLevel, busyLevelImp, language, food, attractions, hotel, instagramability, childFriendly, safety){
       
      axios
        .get('http://localhost:8085/destinations/'+priceRange +'/'+ priceRangeImp +'/'+ tripLength +'/'+ tripLengthImp +'/'+ continent +'/'+ continentImp +'/'+ purpose +'/'+ purposeImp +'/'+ climate +'/'+ climateImp +'/'+ busyLevel +'/'+ busyLevelImp +'/'+ language +'/'+ food +'/'+ attractions +'/'+ hotel +'/'+ instagramability +'/'+ childFriendly +'/'+ safety) 
        .then(response => (this.destinations = response.data))

    },
    edit(item, index, button) {
      this.form.id = item.id
      this.form.email = item.email
      this.form.first_name = item.firstName
      this.form.last_name = item.lastName
    },
    resetEditModal() {
      this.form.id=''
      this.form.email=''
      this.form.first_name=''
      this.form.last_name=''
    },
    onSave(event) {
      var numId;
      numId = parseInt(this.form.id);
      axios
        .put('http://localhost:8085/students/' + numId, {
          "id": numId,
          "firstName": this.form.first_name,
          "lastName": this.form.last_name,
          "email": this.form.email,
        })
        .then(() => this.init())
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
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
