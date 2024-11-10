<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Contact Us</h1>
      <div class="row">
        <div class="col-md-6 mx-auto">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // คุณสามารถเพิ่มฟังก์ชันการส่งข้อมูลที่นี่
        alert(`Message sent! \nName: ${this.form.name}\nEmail: ${this.form.email}\nMessage: ${this.form.message}`);
        this.resetForm();
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: 20px;
  }
  </style>
  