<template>
    <div>
    <Header/>

    
    
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <h1 id= "name">{{singleDestination.name}}</h1>

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>


    <h2 id = "attractionHead"><u>Attractions</u></h2>
    
    <pre>{{''}}</pre>
    
    <ul>

    <div v-for='attraction in attractions'> <h4>{{attraction.name}}</h4> <pre>{{''}}</pre> 
    
    <p><b>Description:</b></p>

    <p>{{attraction.description}}</p>
    
    <p><b>Type of attraction: </b>{{attraction.type}}</p>
    <p><b>Hous to visit: </b>{{attraction.hoursToVisit}}</p>
    <p><b>Cost: </b>{{attraction.cost}}</p>

    <pre>{{''}}</pre> 
    <pre>{{''}}</pre> 

    </div>
      
    </ul>


    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <h2 id = "hotelHead"><u>Hotels</u></h2>

    <pre>{{''}}</pre>
    
    <ul>

    <div v-for='hotel in hotels'> <h4>{{hotel.name}}</h4> <pre>{{''}}</pre> 

    <p><b>Cost:</b>{{hotel.cost}}</p>
    <p><b>Rating:</b> {{hotel.rating}}</p>
    <pre>{{''}}</pre> 
    <pre>{{''}}</pre> 

    </div>
      
    </ul>
    
    <h2 id = "specsHead"><u>Specifications</u></h2>
    
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>

    <p><b>Weather: </b> {{singleDestination.weather}}</p>
   

    <pre>{{''}}</pre>
    

    
    <p><b>Kid Friendly Score: </b> {{singleDestination.kidFriendlyScore}}</p>

    <pre>{{''}}</pre>
    

    
    <p><b>Food Quality Score: </b> {{singleDestination.foodQualityScore}}</p>

    <pre>{{''}}</pre>
    

   
    <p><b>Price Index: </b> {{singleDestination.priceIndex}}</p>

    <pre>{{''}}</pre>
    

    
    <p><b>Instagram Ability Score: </b> {{singleDestination.instagramAbilityScore}}</p>

    <pre>{{''}}</pre>
    


    <p><b>Native Language: </b> {{singleDestination.nativeLanguage}}</p>

   
    <pre>{{''}}</pre>

  
    <p><b>Purpose: </b> {{singleDestination.purpose}}</p>

    
    <pre>{{''}}</pre>

   
    <p><b>Hotel Quality Score: </b> {{singleDestination.hotelQualityScore}}</p>
   
   
    <pre>{{''}}</pre>

    <p><b>Country: </b> {{singleDestination.country}}</p>

    
    <pre>{{''}}</pre>

    
    <p><b>Continent: </b> {{singleDestination.continent}}</p>

    <pre>{{''}}</pre>

    
    <p><b>Popularity: </b> {{singleDestination.popularity}}</p>

  
    <pre>{{''}}</pre>

   
    <p><b>Rec Trip Length: </b> {{singleDestination.recTripLength}}</p>

  
    <pre>{{''}}</pre>

  
    <p><b>Currency: </b> {{singleDestination.currency}}</p>

    <pre>{{''}}</pre>

  
    <p><b>Attraction Score: </b> {{singleDestination.attractionScore}}</p>

  
    <pre>{{''}}</pre>

    
    <p><b>Safety Score: </b> {{singleDestination.safetyScore}}</p>

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
  