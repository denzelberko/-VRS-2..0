<template>
    <Modal>
      <ModalHeader>
        <h3>Create Hotel</h3>
      </ModalHeader>
      <ModalBody>
        <textarea v-model= "hotel.name" rows="1" cols="10" class="textarea1" placeholder = "Name"></textarea> 
        <pre></pre>
        <b>ID:</b>
        <pre></pre>
        <textarea v-model= "hotel.id" rows="1" cols="7" class="textarea1" placeholder = "Hotel ID"></textarea> 
        <textarea v-model= "hotel.destinationId" rows="1" cols="7" class="textarea1" placeholder = "Destination ID"></textarea>
        <pre></pre>
        <b>GENERAL INFO:</b>
        <pre></pre>
        <label for="rating">Rating (1-5):</label>
        <input v-model= "hotel.rating" id="rating" type="number" min="1" max="10" size="5">
        <pre></pre>
        <label for="cost">Nightly Cost ($):</label>
        <input v-model= "hotel.cost" id="cost" type="number" min="0" max="1000000" size="5">
        <pre></pre>
      </ModalBody>
      <ModalFooter>
        <button @click="close('Modal closed')" class="btn btn-danger">Cancel</button>
        <button @click="dismiss('Modal dismissed'); addDestination();" class="btn btn-primary">Submit</button>
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
            hotel: {
              id: null,
              destinationId: null,
              name: "",
              cost: null,
              rating: null,
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

      addDestination(){

        this.hotel.id = parseFloat(this.hotel.id)
        this.hotel.destinationId = parseFloat(this.hotel.destinationId)
        this.hotel.cost = parseFloat(this.hotel.cost)
        this.hotel.rating = parseFloat(this.hotel.rating)

        axios.post('http://localhost:8085/hotels', 
              this.hotel
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