<template>
    <Modal>
      <ModalHeader>
        <h3>Add Review For </h3>
      </ModalHeader>
      <ModalBody>
        <textarea v-model= "review" rows="4" cols="60" class="textarea1" placeholder = "Enter your review!"></textarea> 
        
      </ModalBody>
      <ModalFooter>
        <button @click="close('Modal closed')" class="btn btn-danger">Cancel</button>
        <button @click="dismiss('Modal dismissed') ; insertReview(review);" class="btn btn-primary">Add Review</button>
        
      </ModalFooter>
    </Modal>


  </template>
  
  <script>
  import Modal from './Modal.vue';
  import ModalHeader from './modalHeader.vue';
  import ModalFooter from './modalFooter.vue';
  import ModalBody from './modalBody.vue';
  import ModalMixin from './ModalMixin';
  import {bus} from '../main'
  export default {
    data() {
        return {
          
            review: "",
            
           
        };
    },
    methods: {

      insertReview(review){
        bus.$emit('insertReview', review);
        console.log("hello there")
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