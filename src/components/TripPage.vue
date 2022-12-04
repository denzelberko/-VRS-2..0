<template>
    <div>
    <Header/>

    
    
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <h1 id= "name">{{singleDestination.name}}</h1>

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>


    <h2 id = "attractionHead">Attractions</h2>
    
    <pre>{{''}}</pre>
    
    <ul>

    <div v-for='attraction in attractions'> <h4>{{attraction.name}}</h4> <pre>{{''}}</pre> 
    
    <p>Description:</p>

    <p>{{attraction.description}}</p>
    
    <p>Type of attraction:{{attraction.type}}</p>
    <p>Hous to visit: {{attraction.hoursToVisit}}</p>
    <p>Cost: {{attraction.cost}}</p>

    </div>
      
    </ul>


    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <h2 id = "hotelHead">Hotels</h2>

    <pre>{{''}}</pre>
    
    <ul>

    <div v-for='hotel in hotels'> <h4>{{hotel.name}}</h4> <pre>{{''}}</pre> 

    <p>Cost:{{hotel.cost}}</p>
    <p>Rating: {{hotel.rating}}</p>
   

    </div>
      
    </ul>
    
    <h2 id = "specsHead">Specifications</h2>
    
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <p>Weather: {{singleDestination.weather}}</p>
   

    <pre>{{''}}</pre>
    

    
    <p>Kid Friendly Score: {{singleDestination.kidFriendlyScore}}</p>

    <pre>{{''}}</pre>
    

    
    <p>Food Quality Score: {{singleDestination.foodQualityScore}}</p>

    <pre>{{''}}</pre>
    

   
    <p>Price Index: {{singleDestination.priceIndex}}</p>

    <pre>{{''}}</pre>
    

    
    <p>Instagram Ability Score: {{singleDestination.instagramAbilityScore}}</p>

    <pre>{{''}}</pre>
    


    <p>Native Language: {{singleDestination.nativeLanguage}}</p>

   
    <pre>{{''}}</pre>

  
    <p>Purpose: {{singleDestination.purpose}}</p>

    
    <pre>{{''}}</pre>

   
    <p>Hotel Quality Score: {{singleDestination.hotelQualityScore}}</p>
   
   
    <pre>{{''}}</pre>

    <p>Country: {{singleDestination.country}}</p>

    
    <pre>{{''}}</pre>

    
    <p>Continent: {{singleDestination.continent}}</p>

    <pre>{{''}}</pre>

    
    <p>Popularity: {{singleDestination.popularity}}</p>

  
    <pre>{{''}}</pre>

   
    <p>Rec Trip Length: {{singleDestination.recTripLength}}</p>

  
    <pre>{{''}}</pre>

  
    <p>Currency: {{singleDestination.currency}}</p>

    <pre>{{''}}</pre>

  
    <p>Attraction Score: {{singleDestination.attractionScore}}</p>

  
    <pre>{{''}}</pre>

    
    <p>Safety Score: {{singleDestination.safetyScore}}</p>

    <pre>{{''}}</pre>
     
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  import { EventBus } from '../main';


  
  export default {
   
    components: {
    Header
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
      init() {
        axios
          .get('http://localhost:8085/students')
          .then(response => (this.students = response.data))
      },
      loadSingleDestination(id) {

          
            axios
                .get("http://localhost:8085/destinations/" + id)
                .then(response => (this.singleDestination = response.data,this.hotels = response.data.hotels, this.attractions = response.data.attractions));
              
        },

  
      search(price, purpose, weather){
         
        axios
          .get('http://localhost:8085/destinations/'+price +'/'+ purpose+'/'+weather) 
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
    created() {
      EventBus.$on('tripData', (data) => {
        this.tripData = data;
        console.log(data)

      })
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
  #name {
    color: #3086ae;
    text-align: center;
  }

  #hotelHead, #attractionHead, #specsHead {
    color: #1b526a;
    text-align: center;
  }
 
  </style>
  