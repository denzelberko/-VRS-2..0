
<template>


    <div>
     
      <Header/>
      <ModalRoot/>
      <CreateDestModal/> 
    


    <pre>{{''}}</pre>
    <pre>{{''}}</pre>


    <h2 id = "adminHeader"> Admin Page </h2>

    <pre>{{''}}</pre>


    <div id ='adminsearch'><input id = 'in2' size = 50 type = "search" v-model="search" placeholder="Search Trips..." /> 
      <pre>{{''}}</pre>
    <button id = "addDestButton" class="btn btn-primary" @click="addDestModal()"> Add Destination</button>
    <button id = "addAttrButton" class="btn btn-primary" @click="addAttrModal()"> Add Attraction</button>
    <button id = "addHotButton" class="btn btn-primary" @click="addHotModal()"> Add Hotel</button>
      <pre>{{''}}</pre>
  </div>

   

  
      
      <div id = 'tableadmin'><b-table striped hover responsive :items= "filteredTrips" :fields="fields">
        <template v-slot:cell(Edit)="data">
            <button class = "btn btn-secondary" @click="editDestModal() ; setTempId(data.item.id);">Edit</button>
        </template>

        
        <template v-slot:cell(Delete)="data">
            <button class = "btn btn-danger" @click="deleteTrip(data.item.id)">Delete
            
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
  import TestModal from '@/Modal/TestModal.vue';
  import {EventBus} from '../main';
  import CreateDestModal from '../Modal/CreateDestModal.vue';
  import EditDestModal from '../Modal/EditDestModal.vue';
  import CreateAttrModal from '../Modal/CreateAttrModal.vue';
  import CreateHotModal from '../Modal/CreateHotModal.vue';
 

  
  export default {
    components: {
    Header,
    ModalRoot,
    CreateDestModal
},

    
    name: 'HelloWorld',
    created () {
        this.load()
        EventBus.$on("editDestination", (data) => {
            axios.put('http://localhost:8085/destinations/' + this.tempId, 
            data
            ).then(response => {
              console.log('Submit Success')
            }).catch(e => {
              console.log(data)
            });
        })
    },
    computed: {
        filteredTrips : function(){
            return this.destinations.filter((destination) => {

                return destination.name.match(this.search);

            });
        }
    },
    data () {
      return {
        tempId: "",
        destinations: [],
        search: "",
        //field key must match attribute of object
        fields: [
        {key: 'id', label: 'Trip ID'},
        {key: 'name', label: 'Destination Name'},
        {key: 'Edit', label: 'Edit'},
        {key: 'Delete', label: 'Delete'},
        ],
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

      setTempId(id){
        this.tempId = id
        console.log(this.tempId)
    },

      addDestModal() {
        ModalService.open(CreateDestModal);
    },

      editDestModal() {
        ModalService.open(EditDestModal);
    },

    addAttrModal() {
        ModalService.open(CreateAttrModal);
    },

    addHotModal() {
        ModalService.open(CreateHotModal);
    },

      init() {
        axios
          .get('http://localhost:8085/students')
          .then(response => (this.students = response.data))
      },
  
      load(){
         
        axios
          .get('http://localhost:8085/destinations/') 
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
      },

      toTripPage(){




      },

      deleteTrip(itemId){


        axios
          .delete('http://localhost:8085/destinations/' + itemId)
          .then((response) => {
            console.log(response)

            this.$router.go()
            
          })
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
  #adminHeader {
    text-align: center;

  }
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#divbut {
    text-align: right;

  }
  #adminsearch {
    
    text-align: center;
    
  }
  #in2 {
    border-radius: 100px;
    border: 2px solid rgb(11, 70, 137);
  
  
}
#tableadmin {

text-align: center;
}
  </style>
  