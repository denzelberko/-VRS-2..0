<template>
    <div>
    <Header/>

  
    <div style="margin-left: 10%; margin-right: 10%;">
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    
    <h1 id= "name">{{singleDestination.name}}</h1>

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

   
    <img v-bind:src= "singleDestination.imageURL" class="center" alt="INSERT PICTURE" width="960" height="540"> 

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <div>
    <h3 id = "attractionHead" style ="text-decoration:none;" ><u>Attractions</u></h3>
    </div>
    
    <pre>{{''}}</pre>
    
    <ul>
    <div class = "scroller" >
    <div class = "media" v-for='attraction in attractions'> <h4>{{attraction.name}}</h4> <pre>{{''}}</pre> 
        <td style = "align-content: center; width: 21%"><img v-bind:src= "attraction.imageURL" alt="INSERT PICTURE" width="550" height="360">
        <!--<img :src="attraction.imageURL" alt="INSERT PICTURE" width="300" height="200"> --></td>
        <p><b>Description:</b></p>

    <p>{{attraction.description}}</p>
    <p><b>Type of attraction: </b>{{attraction.type}}</p>
    <p><b>Hours to visit: </b>{{attraction.hoursToVisit}}</p>
    <p><b>Cost:</b> ${{attraction.cost}}</p>
    
    

    </div>
    </div>  
    </ul>


    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <h2 id = "hotelHead"><u>Hotels</u></h2>

    <pre>{{''}}</pre>
    
    <ul>

    <div class = "scroller" >
    <div class = "media" v-for='hotel in hotels'> <h4>{{hotel.name}}</h4> <pre>{{''}}</pre> 
        <td style = "align-content: center; width: 21%"><img v-bind:src= "hotel.imageURL" alt="INSERT PICTURE" width="550" height="360">
        <!--<img :src="attraction.imageURL" alt="INSERT PICTURE" width="300" height="200"> --></td>

   

    <p><b>Cost:</b>{{hotel.cost}}</p>
    <p><b>Rating:</b> {{hotel.rating}}</p>
    <pre>{{''}}</pre> 
    <pre>{{''}}</pre> 

    </div>
    </div>
   
      
    </ul>
    
    <h2 id = "specsHead"><u>Specifications</u></h2>
    

    <table style = "width: 100%">
      <tr>
        <td style = "width: 20%">
    <p><b>Weather: </b> {{singleDestination.weather}}</p>
  </td>
  <td style = "width: 20%">

    <pre>{{''}}</pre>
    

    
    <p><b>Kid Friendly Score: </b> {{singleDestination.kidFriendlyScore}}</p>

    <pre>{{''}}</pre>
    
  </td>
  <td style = "width: 20%">
    
    <p><b>Food Quality Score: </b> {{singleDestination.foodQualityScore}}</p>

    <pre>{{''}}</pre>
    
  </td>
  <td style = "width: 20%">
   
    <p><b>Price Index: </b> {{singleDestination.priceIndex}}</p>

    <pre>{{''}}</pre>
    
  </td>
  <td style = "width: 20%">
    
    <p><b>Instagramability Score: </b> {{singleDestination.instagramAbilityScore}}</p>

    <pre>{{''}}</pre>
    

  </td>
  </tr>
  <tr>
    <td style = "width: 20%">
    <p><b>Native Language: </b> {{singleDestination.nativeLanguage}}</p>

   
    <pre>{{''}}</pre>
  </td>
  <td style = "width: 20%">
  
    <p><b>Purpose: </b> {{singleDestination.purpose}}</p>

    
    <pre>{{''}}</pre>
  </td>
  <td style = "width: 20%">
   
    <p><b>Hotel Quality Score: </b> {{singleDestination.hotelQualityScore}}</p>
   
   
    <pre>{{''}}</pre>


  </td>
  <td style = "width: 20%">

    <p><b>Country: </b> {{singleDestination.country}}</p>

    
    <pre>{{''}}</pre>

  </td>
  <td style = "width: 20%">
    
    <p><b>Continent: </b> {{singleDestination.continent}}</p>

    <pre>{{''}}</pre>
</td>
</tr>
<tr>
    <td style = "width: 20%">
    <p><b>Popularity: </b> {{singleDestination.popularity}}</p>

  
    <pre>{{''}}</pre>

  </td>
  <td style = "width: 20%">
    <p><b>Rec Trip Length: </b> {{singleDestination.recTripLength}}</p>

  
    <pre>{{''}}</pre>
  </td>
  <td style = "width: 20%">
  
    <p><b>Currency: </b> {{singleDestination.currency}}</p>

    <pre>{{''}}</pre>
  </td>
  <td style = "width: 20%">
  
    <p><b>Attraction Score: </b> {{singleDestination.attractionScore}}</p>

  </td>
  <td style = "width: 20%">
    <pre>{{''}}</pre>

    
    <p><b>Safety Score: </b> {{singleDestination.safetyScore}}</p>

    <pre>{{''}}</pre>
  </td>
  </tr>
  </table>

  <h2 id = "reviewHead"><u>Reviews</u></h2>

  <ul>

<div v-for='review in reviews'> <h4>{{review.message}}</h4> <pre>{{''}}</pre> 


<p><b>Rating:</b> {{review.rating}}</p>
<pre>{{''}}</pre> 
<pre>{{''}}</pre> 

</div>
  
</ul>

  </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  import { EventBus } from '../main';


  
  export default {
   
    components: {
    Header, 
  },
    props: ['singleTrip'],
    name: 'HelloWorld',
    mounted() {
        this.loadSingleDestination(this.$route.params.id);
       
        
    },
    data () {
      return {
      
        singleDestination: null,
        destinations: null,
        hotels: null, 
        attractions: null,
        reviews: null,
        //field key must match attribute of object
        fields: [
        {key: 'id', label: 'Trip ID', sortable: true},
        {key: 'name', label: 'Destination Name', sortable: true},
        {key: 'weather', label: 'Weather', sortable: true},
        {key: 'priceIndex', label: 'Price', sortable: true},
        {key: 'purpose', label: 'Purpose', sortable: true, sortable: true}],
        form: {
            email: '',
            first_name: '',
            last_name: '',
            id: ''
          },
        trip:{
          priceIndex:"",
          weather: "",
          purpose: ""
        },
        priceIndicies: [0,1,2,3,4,5,6,7,8,9],
        weathers: ["Hot", "Cold", "Mild", "Continental", "Tropical"],
        purposes: ["Family Get Away", "Sightseeing", "Historical Monuments", "Relaxation"]
      }
    },
    
    methods: {

     
     
      loadSingleDestination(id) {

          
            axios
                .get("http://localhost:8085/destinations/" + id)
                .then(response => (this.singleDestination = response.data, this.hotels = response.data.hotels, this.attractions = response.data.attractions, this.reviews = response.data.reviews));
              
        },

  
    },
    created() {
    
    }
  }
  </script>
  
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  h3 {
    text-decoration:line-through;
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
  #name {
    color: #3086ae;
    text-align: center;
   
  }
  .center{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }


  #hotelHead, #attractionHead, #specsHead, #reviewHead {
    text-align: center;
    background-color:#e4e4e4f2;
    padding: 5px;
    text-decoration: none;
    color: #0D0047;
  }

  #name{
    background-color: #0D0047;
    padding: 20px 20px;
    color: #ffffff;
  }

  #attractionHead{
    background-color:#e4e4e4f2;
    padding: 5px;
    text-decoration: none;
    color: #0D0047;
  }

  .scroller{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 45%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }
  .media{
    display: grid;
    grid-template-rows: min-content;
    gap: 1%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 5% 5%;
    background: #f8f8f8;
    border-radius: 5%;
    box-shadow: 2%;
  }
  

 
  </style>
  