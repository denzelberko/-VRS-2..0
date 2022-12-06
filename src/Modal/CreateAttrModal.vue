<template>
    <Modal>
      <ModalHeader>
        <h3>Create Attraction</h3>
      </ModalHeader>
      <ModalBody>
        <textarea v-model= "attraction.name" rows="1" cols="10" class="textarea1" placeholder = "Name"></textarea> 
        <pre></pre>
        <b>ID:</b>
        <pre></pre>
        <textarea v-model= "attraction.id" rows="1" cols="7" class="textarea1" placeholder = "Attraction ID"></textarea> 
        <textarea v-model= "attraction.destinationId" rows="1" cols="7" class="textarea1" placeholder = "Destination ID"></textarea>
        <pre></pre>
        <b>GENERAL INFO:</b>
        <pre></pre>
        <label for="hoursToVisit">Hours to Visit:</label>
        <input v-model= "attraction.hoursToVisit" id="hoursToVisit" type="number" min="1" max="24" size="5">
        <pre></pre>
        <label for="cost">Cost ($):</label>
        <input v-model= "attraction.cost" id="cost" type="number" min="0" max="1000000" size="5">
        <pre></pre>
        <label for="type">Attraction Type:</label>
        <textarea v-model= "attraction.type" id="type" rows="1" cols="43" class="textarea1" placeholder = "Type"></textarea> 
        <pre></pre>
        <label for="imageURL">Image URL:</label>
        <textarea v-model= "attraction.imageURL" id="imageURL" rows="1" cols="43" class="textarea1" placeholder = "Type"></textarea> 
        <pre></pre>
        <label for="description">Description:</label>
        <textarea v-model= "attraction.description" id="description" rows="3" cols="43" class="textarea1" placeholder = "Type"></textarea> 
        <pre></pre>
        
      </ModalBody>
      <ModalFooter>
        <button @click="close('Modal closed')" class="btn btn-danger">Cancel</button>
        <button @click="dismiss('Modal dismissed'); addAttraction();" class="btn btn-primary">Submit</button>
      </ModalFooter>
    </Modal>


  </template>
  
  <script>
  import axios from 'axios';
  import Modal from './Modal.vue';
  import ModalHeader from './ModalHeader.vue';
  import ModalFooter from './ModalFooter.vue';
  import ModalBody from './ModalBody.vue';
  import ModalMixin from './ModalMixin';
  import {EventBus} from '../main'
  export default {
    data() {
        return {
            attraction: {
              id: null,
              destinationId: null,
              name: "",
              hoursToVisit: null,
              type: "",
              description: "",
              cost: null,
              imageURL: "",
            }
        };
    },
    created(){

      EventBus.$on("tripId", (data) => {
            this.tripId = data;
            
        });

    },
    mounted(){

      EventBus.$on("tripId", (data) => {
            this.tripId = data;
            
        });

    },
    methods: {

      addAttraction(){

        this.attraction.id = parseFloat(this.attraction.id)
        this.attraction.destinationId = parseFloat(this.attraction.destinationId)
        this.attraction.hoursToVisit = parseFloat(this.attraction.hoursToVisit)
        this.attraction.cost = parseFloat(this.attraction.cost)

        axios.post('http://localhost:8085/attractions', 
              this.attraction
            ).then(response => {
              console.log('Submit Success')
            }).catch(e => {
              console.log('Submit Failed')
            });
      }

    },
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    mixins: [ModalMixin],
  }
  </script>

<style>

.textarea1 {
  resize: none;
  text-align: left;
}

</style>