<template>
  
  
  <div>
    <Header />
    <ModalRoot/> 
    <ReviewModal/>
    

    <pre>{{''}}</pre>
    <pre>{{''}}</pre>
    
    
    <h2> Search Trips </h2>
    <pre>{{''}}</pre>

    

    <div id = "search"><input id = "in" size = 50 type = "search" v-model="search" placeholder=" Search Trips..."/></div>
   
    <pre>{{''}}</pre>
    <pre>{{''}}</pre>
  
      
     <div id = "table"> <b-table class = 'center' striped hover responsive :items= "filteredTrips" :fields="fields">
        

        <template v-slot:cell(MoreDetails)="data">
            
            
            <button class="btn btn-primary" @click="getdestination(data.item.id)">More Details  </button>
           
    


        </template>

        
        <template v-slot:cell(AddReview)="data">

            <button class = "btn btn-secondary" @click="addModal() ; setId(data.item.id);">Add Review
            
        </button>
       
            
          
    


        </template>
     


      </b-table>
      
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Header from './Header.vue';
  import ModalRoot from '@/Modal/ModalRoot.vue';
  import ModalService from '@/Modal/ModalService';  
  import {EventBus} from '../main';
  import ReviewModal from '../Modal/ReviewModal.vue';


  
  export default {
    components: {
    Header,
    ModalRoot,
    ReviewModal
},
    name: "HelloWorld",
   
    created() {
        this.load();
        EventBus.$on("insertReview", (data) => {
            this.review = data;
            //put an axios put request here and set the destination review using the reviewId and review variables
            
            
        });
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
            review : '',
            destinations: [],
            singleDestination: null,
            search: "",
            reviewId: '',
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

    setId(id){

        this.reviewId = id;

        
    

    },

    addModal() {
        ModalService.open(ReviewModal);
      
    },
  

        getdestination(destinationId){

           
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
  #in {
    border-radius: 100px;
    border: 2px solid rgb(11, 70, 137);
  
  
}
#table {

    text-align: center;
}
 
  </style>
  