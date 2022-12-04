<template>
  
  
    <div>

    

    <Header />
    <ModalRoot/> 

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>
    
    
    <h2> Search Trips </h2>
    <pre>{{''}}</pre>

    <div id = "search"><input id = "in" size = 50 type = "text" v-model="search" placeholder="Search Trips"/></div>
   
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>
  
      
      <b-table striped hover responsive :items= "filteredTrips" :fields="fields">
        

        <template v-slot:cell(MoreDetails)="data">
            
            
            <button class="btn btn-primary" @click="getdestination(data.item.id)">More Details  </button>
           
    


        </template>

        
        <template v-slot:cell(AddReview)="data">

            <button class = "btn btn-secondary" @click="addModal">Add Review
            
        </button>
       
            
          
    


        </template>
     


      </b-table>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  import { EventBus } from '../main';
  import ModalRoot from '@/Modal/ModalRoot.vue';
  import ModalService from '@/Modal/ModalService';
  import ReviewModal from '@/Modal/ReviewModal.vue';
  import bus from '../main';


  
  export default {
    components: {
    Header , ModalRoot
   
    },
    name: "HelloWorld",
    created() {
        this.load();
        bus.$on("insertReview", (data) => {
            this.title = data
        })
    },
    computed: {
        filteredTrips: function () {
            return this.destinations.filter((destination) => {
                return destination.name.match(this.search);
            });
        }
    },
    data() {
        return {
            
            destinations: [],
            singleDestination: null,
            search: "",
            //field key must match attribute of object
            fields: [
                { key: "id", label: "Trip ID" },
                { key: "name", label: "Destination Name" },
                { key: "MoreDetails", label: "More Details" },
                { key: "AddReview", label: "Add Review" },
            ],
            form: {
                email: "",
                first_name: "",
                last_name: "",
                id: ""
            },
            trip: {
                priceIndex: "",
                weather: "",
                purpose: ""
            },
            priceIndicies: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            weathers: ["Hot", "Cold", "Mild", "Continental", "Tropical"],
            purposes: ["Family Get Away", "Sightseeing", "Historical Monuments", "Relaxation"]
        };
    },
    methods: {

        addModal() {
      ModalService.open(ReviewModal);
      console.log("hello there")
    },

      test(){
        
        EventBus.$emit('trip-data', 'Denzel Berko');

      },

      

        getdestination(destinationId){

            //this.$router.push('http://localhost:3000/#/trippage/' + destinationId );
            this.$router.push({ name: 'TripPage', params: { id: destinationId }})
        
        },

        init() {
            axios
                .get("http://localhost:8085/students")
                .then(response => (this.students = response.data));
        },
        load() {
            axios
                .get("http://localhost:8085/destinations/")
                .then(response => (this.destinations = response.data));
        },
        edit(item, index, button) {
            this.form.id = item.id;
            this.form.email = item.email;
            this.form.first_name = item.firstName;
            this.form.last_name = item.lastName;
        },
        resetEditModal() {
            this.form.id = "";
            this.form.email = "";
            this.form.first_name = "";
            this.form.last_name = "";
        },
        onSave(event) {
            var numId;
            numId = parseInt(this.form.id);
            axios
                .put("http://localhost:8085/students/" + numId, {
                "id": numId,
                "firstName": this.form.first_name,
                "lastName": this.form.last_name,
                "email": this.form.email,
            })
                .then(() => this.init())
                .catch(function (error) {
                console.log(error);
            });
        },
        toTripPage() {
        },
        addReview(trip) {
            $("#trip").modal("show");
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
  #search {
    
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
  