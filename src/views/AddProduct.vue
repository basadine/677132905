<template>
  <div class="container vh-100 col-md-4">
    <br>
    <h2>เพิ่มข้อมูลสินค้า</h2>
    <form @submit.prevent="addProduct">
      <div class="text-start">
        <label for="name">ชื่อสินค้า:</label>
        <input v-model="newProduct.name" id="name" ref="nameInput" class="form-control" required />
      </div>

      <div class="text-start">
        <label for="shortDescription">คำอธิบายสั้น (20 ตัวอักษร):</label>
        <input 
          v-model="newProduct.shortDescription" 
          id="shortDescription" 
          class="form-control" 
          required 
          maxlength="20" 
        />
      </div>

      <div class="text-start">
        <label for="Description">คำอธิบายเต็ม:</label>
        <input 
          v-model="newProduct.Description" 
          id="Description" 
          class="form-control" 
          required 
        />
      </div>

      <div class="text-start">
        <label for="price">ราคา:</label>
        <input type="number" v-model="newProduct.price" id="price" class="form-control" required />
      </div>

      <!-- ภาพสินค้า -->
      <div class="text-start">
        <label for="image">ภาพสินค้า:</label>
        <input v-model="newProduct.image" id="image" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-primary my-4">เพิ่มสินค้า</button>
    </form>

    <!-- ใช้ v-if เพื่อตรวจสอบว่ามีสินค้าใน products หรือไม่ -->
    <h2 v-if="products.length > 0">รายการสินค้า</h2>
    <table v-if="products.length > 0">
      <thead>
        <tr>
          <th>ชื่อสินค้า</th>
          <th>คำอธิบายสั้น</th>
          <th>คำอธิบายเต็ม</th>
          <th>ราคา</th>
          <th>ลิงก์ภาพสินค้า</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.shortDescription }}</td>
          <!-- จำกัดคำอธิบายเต็มให้แสดงแค่ 30 ตัวอักษร -->
          <td>{{ product.Description.length > 30 ? product.Description.slice(0, 30) + '...' : product.Description }}</td>
          <td>{{ product.price }}</td>
          <!-- แสดงภาพจาก URL -->
          <td><img :src="product.image" alt="Product Image" style="width: 100px; height: auto;" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const products = ref([]); // ตัวแปรเก็บรายการสินค้า
    const newProduct = ref({ name: '', shortDescription: '', Description: '', price: 0, image: '' }); // ตัวแปรเก็บข้อมูลสินค้าใหม่
    const nameInput = ref(null); // ใช้สำหรับอ้างถึงช่องกรอกชื่อสินค้าเพื่อจัดการโฟกัส

    const addProduct = () => {
      // ตรวจสอบว่ามีข้อมูลที่จำเป็นหรือไม่
      if (newProduct.value.name && newProduct.value.shortDescription && newProduct.value.Description && newProduct.value.price) {
        // เพิ่มสินค้าใหม่ในรายการสินค้า
        products.value.push({ ...newProduct.value });

        // ล้างข้อมูลฟอร์มหลังเพิ่มเสร็จ
        newProduct.value = { name: '', shortDescription: '', Description: '', price: 0, image: '' };
        
        // โฟกัสที่ช่องกรอกชื่อสินค้าใหม่
        nameInput.value.focus();
      }
    };

    // จัดการโฟกัสที่ช่องกรอกชื่อสินค้าเมื่อติดตั้งองค์ประกอบ
    onMounted(() => {
      nameInput.value.focus();
    });

    return {
      products,
      newProduct,
      addProduct,
      nameInput,
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.container {
  margin-top: 50px;
}

form {
  margin-bottom: 20px;
}

img {
  width: 100px; /* กำหนดขนาดภาพ */
  height: auto; /* ให้สูงต่ำของภาพปรับตามสัดส่วน */
}
</style>
