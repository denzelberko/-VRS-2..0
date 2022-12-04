<template>
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button @click="close('Modal closed')" class="btn btn-primary">Close Modal</button>
        <button @click="dismiss('Modal dismissed')" class="btn btn-primary">Dismiss Modal</button>
      </ModalFooter>
    </Modal>
  </template>
  
  <script>
  import Modal from './Modal.vue';
  import ModalHeader from './ModalHeader.vue';
  import ModalFooter from './ModalFooter.vue';
  import ModalBody from './ModalBody.vue';
  import ModalMixin from './ModalMixin';
  export default {
    components: { Modal, ModalHeader, ModalBody, ModalFooter },
    mixins: [ModalMixin],
  }
  </script>