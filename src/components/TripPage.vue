<template>
    <div>
    
    
      <p>{{tripya}}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['tripya'],
    name: 'HelloWorld',
    data () {
      return {
        destinations: null,
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
  