<template>
  <div class="hello">
    
    

    <Header/>
    <pre>{{''}}</pre>
  <div style="margin-left: 10%; margin-right: 10%;">
  <h2 class = "center"> Trip Parameters </h2>

  

<table style="width:100%">
  <tr>
    <td style="width:7%"><label>Price Range: </label>
    
      </td>
      <td style="width:8%">
    <select v-model="trip.priceRange" style=" width: 115px">
    <option v-for = "price in prices">{{price}}</option>
</select>

  </td>
  

    <td style="width:6%"><label> Importance</label>
    </td>
    <td style="width:12%">
    <select v-model="trip.priceRangeImp">
    <option v-for = "priceImp in imps">{{priceImp}}</option>

</select>
  </td>


<td  style="width:7%"><label>Trip Length:</label>
</td>
    <td style="width:8%">
    <select v-model="trip.tripLength" style=" width: 115px">
  <option v-for = "length in lengths">{{length}}</option>

</select>
  </td>

<td style="width:6%"><label>Importance</label>
</td>
    <td style="width:12%">
    <select v-model="trip.tripLengthImp">
  <option v-for = "lengthImp in imps">{{lengthImp}}</option>

</select>
  </td>

<td style="width:7%">
<label>Continent: </label>
</td>
    <td style="width:8%">
    <select v-model="trip.continent" style=" width: 115px">
  <option disabled value=""></option>
  <option v-for = "cont in continents">{{cont}}</option>

</select>
</td>

<td style="width:7%">
<label>Importance</label>
</td>
    <td style="width:12%">
    <select v-model="trip.continentImp">
  <option v-for = "contImp in imps">{{contImp}}</option>

</select>
</td>
</tr>
<tr>
<td style="width:7%">
<label>Purpose:</label>
</td>
    <td style="width:8%">
    <select v-model="trip.purpose" style=" width: 115px">
  <option disabled value=""></option>
  <option v-for = "purp in purposes">{{purp}}</option>

</select>

</td>
<td style="width:6%">
<label>Importance</label>
</td>
    <td style="width:12%">
    <select v-model="trip.purposeImp">
  <option v-for = "purpImp in imps">{{purpImp}}</option>

</select>
</td>
<td style="width:7%">
<label>Climate:</label>
</td>
    <td style="width:8%">
    <select v-model="trip.climate" style=" width: 115px">
  <option disabled value=""></option>
  <option v-for = "clim in climates">{{clim}}</option>

</select>
</td>
<td style="width:6%">
<label>Importance</label>
</td>
    <td style="width:12%">
    <select v-model="trip.climateImp">
  <option v-for = "climImp in imps">{{climImp}}</option>

</select>
</td>

<td style="width:7%">
<label>Busyness</label>
</td>
    <td style="width:8%">
    <select v-model="trip.busyLevel" style=" width: 115px">
  <option v-for = "busy in busyLevels">{{busy}}</option>

</select>
</td>
<td style="width:6%">
<label>Importance</label>
</td>
    <td style="width:12%">
    <select v-model="trip.busyLevelImp">
  <option v-for = "busyImp in imps">{{busyImp}}</option>

</select>
</td>
</tr>
</table>

<br>
<br>

<table style="width:100%">
<tr>
<td style="width:10%">
<label>English Speaking</label>
</td>
<td style="width:15%">
    <select v-model="trip.language">
  <option v-for = "lang in imps">{{lang}}</option>

</select>
</td>
<td style="width:10%">
<label>Food Quality</label>
</td>
<td style="width:15%">
    <select v-model="trip.food">
  <option v-for = "fd in imps">{{fd}}</option>

</select>
</td>
<td style="width:11%">

<label>Quality of Attractions</label>
</td>
<td style="width:14%">
    <select v-model="trip.attractions">
  <option v-for = "attr in imps">{{attr}}</option>

</select>
</td>

<td style="width:10%">
<label>Hotel Quality</label>
</td>
<td style="width:15%">
    <select v-model="trip.hotel">
  <option v-for = "hot in imps">{{hot}}</option>

</select>
</td>
</tr>
<tr>
<td style="width:10%">

<label>Picturesque</label>
</td>
<td style="width:15%">
    <select v-model="trip.instagramability">
  <option v-for = "insta in imps">{{insta}}</option>

</select>

</td>
<td style="width:10%">

<label>Child-friendliness</label>
</td>
<td style="width:15%">
    <select v-model="trip.childFriendly">
  <option v-for = "child in imps">{{child}}</option>

</select>
</td>
<td style="width:11%">

<label>Safety</label>
</td>
<td style="width:14%">
    <select v-model="trip.safety">
  <option v-for = "safe in imps">{{safe}}</option>

</select>
</td>
</tr>
</table>
<br>


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
      lengths: ["weekend", "one week", "over a week"],
      continents: ["N. America", "S. America", "Europe", "Asia", "Africa", "Australia"],
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
  },
  
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
