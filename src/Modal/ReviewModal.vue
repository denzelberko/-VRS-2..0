<template>
    <Modal>
      <ModalHeader>
        <h3>Add Review</h3>
      </ModalHeader>
      <ModalBody>

        <select v-model="rating">
       <option placeholder = "Give this trip a rating!" ></option>
      <option v-for = "rating in ratingChoices">{{rating}}</option>
      </select>

        <textarea v-model= "message" rows="4" cols="60" class="textarea1" placeholder = "Enter your review!"></textarea> 
      
        
      </ModalBody>
      <ModalFooter>
       
        <button @click="close('Modal closed')" class="btn btn-danger">Cancel</button>
        <button @click="dismiss('Modal dismissed'); insertReview();" class="btn btn-primary">Add Review</button>
        
      </ModalFooter>
    </Modal>


  </template>
  
  <script>
  import Modal from './Modal.vue';
  import ModalHeader from './modalHeader.vue';
  import ModalFooter from './modalFooter.vue';
  import ModalBody from './modalBody.vue';
  import ModalMixin from './ModalMixin';
  import {EventBus} from '../main'
  export default {
    data() {
        return {
            ratingChoices: [1,2,3,4,5],
            tripId: '',
            message: '',
            rating: '',
          
            
            
           
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

      insertReview(){
        EventBus.$emit('sendMessage', this.message)
        EventBus.$emit('sendRating', this.rating);
      
      }

    },
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    mixins: [ModalMixin],
  }
  </script>

<style>

.textarea1 {
  resize: none;
}

</style>