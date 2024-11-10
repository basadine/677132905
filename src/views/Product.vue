<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Fitness Gear Gallery</h1>
    <div class="row">
      <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <!-- รูปภาพจะถูกจัดให้อยู่ตรงกลาง -->
          <div class="image-container">
            <img :src="product.image" class="card-img-top image-size" alt="Product Image">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              {{ product.shortDescription }}
              <span v-if="product.description.length > 20 && !product.isExpanded">
                ... 
                <button @click="toggleDescription(product)" class="btn btn-link p-0">Read More</button>
              </span>
              <span v-if="product.isExpanded">
                {{ product.description }}
                <button @click="toggleDescription(product)" class="btn btn-link p-0">Show Less</button>
              </span>
            </p>
            <p class="card-text text-success">${{ product.price.toFixed(2) }}</p>
            <button class="btn btn-primary" @click="addToCart(product)">
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      products: [
        { 
          id: 1, name: 'Yoga Mat', 
          description: 'Non-slip yoga mat for comfortable workouts. This is a longer description to test the "Read More" functionality. The yoga mat is made from high-quality material that ensures durability and comfort during your sessions.',
          shortDescription: 'Non-slip yoga mat', 
          price: 25.99, 
          image: 'https://easyogathailand.com/cdn/shop/products/unnamed_384ca1cd-9e5d-41d2-81fc-c41c368ea84c.jpg?v=1578375062',
          isExpanded: false
        },
        { 
          id: 2, name: 'Dumbbell Set', 
          description: 'Adjustable dumbbell set for strength training. It comes with various weights, perfect for home gyms. The set includes a range of weights that can be easily adjusted for different exercises.',
          shortDescription: 'Adjustable dumbbell', 
          price: 59.99, 
          image: 'https://www.equippedgym.co.uk/cdn/shop/files/5-25kg3tier1000x1000px_1000x.png?v=1704049841',
          isExpanded: false
        },
        { 
          id: 3, name: 'Resistance Bands', 
          description: 'Set of resistance bands for versatile workouts. These bands come in different resistances to challenge your muscles in different ways. Ideal for improving strength, flexibility, and toning.',
          shortDescription: 'Resistance bands', 
          price: 19.99, 
          image: 'https://bucket.fitwhey.com/ProductType/7ccc39cc0a5267474ec910a131f8f124.png', 
          isExpanded: false
        },
        { 
          id: 4, name: 'Exercise Ball', 
          description: 'Durable exercise ball for core training. The exercise ball is an excellent tool for improving balance, posture, and strengthening core muscles. It can also be used for stretching and stability training.',
          shortDescription: 'Durable exercise', 
          price: 35.99, 
          image: 'https://contents.mediadecathlon.com/p2737633/k$d89a32ad5f911cd14e2f0f9c56624f33/size-2-65-cm-durable-swiss-ball-blue-domyos-8603634.jpg?f=1920x0&format=auto',
          isExpanded: false
        },
        { 
          id: 5, name: 'Jump Rope', 
          description: 'Speed jump rope for cardio workouts. This jump rope is lightweight, durable, and designed for high-speed workouts. Perfect for improving cardiovascular fitness, endurance, and agility.',
          shortDescription: 'Speed jump rope', 
          price: 15.99, 
          image: 'https://www.gaiam.com/cdn/shop/products/05-64484_GAIAM-WEIGHTED-JUMP-ROPE_A.jpg?v=1635877894',
          isExpanded: false
        },
        { 
          id: 6, name: 'Kettlebell', 
          description: 'Cast iron kettlebell for full body workouts. This kettlebell is designed for strength training, toning, and building endurance. The ergonomic handle ensures a secure grip during your workout.',
          shortDescription: 'Cast iron kettlebell', 
          price: 39.99, 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaF_6bTFpa_qe3GE4004gkZ1yBTDjAbsWAg&s',
          isExpanded: false
        },
        { 
          id: 7, name: 'Gym Bag', 
          description: 'Spacious gym bag for all your gear. The gym bag is made with durable materials and has plenty of space to carry your gym essentials like shoes, clothes, water bottle, and accessories.',
          shortDescription: 'Spacious gym bag', 
          price: 29.99, 
          image: 'https://underarmour.scene7.com/is/image/Underarmour/1369222-001_SLB_SL?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
          isExpanded: false
        },
        { 
          id: 8, name: 'Foam Roller', 
          description: 'High-density foam roller for muscle recovery. This foam roller is perfect for alleviating sore muscles, increasing flexibility, and promoting faster recovery after intense workouts.',
          shortDescription: 'High-density foam', 
          price: 24.99, 
          image: 'https://yorkfitness.com.au/wp-content/uploads/2023/12/82030-product.jpg',
          isExpanded: false
        }
      ]
    };
  },
  methods: {
    addToCart(product) {
      alert(`${product.name} has been added to cart!`);
    },
    toggleDescription(product) {
      product.isExpanded = !product.isExpanded;
    }
  },

created() {
    // ดึงข้อมูลจาก query parameters ใน URL
    if (this.$route.query.name) {
      this.product = {
        name: this.$route.query.name,
        shortDescription: this.$route.query.shortDescription,
        description: this.$route.query.description,
        price: this.$route.query.price,
        image: this.$route.query.image
      };
    }
  }
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  height: 100%;
}

.image-container {
  display: flex;
  justify-content: center; /* จัดภาพให้อยู่กลางในแนวนอน */
  align-items: center; /* จัดภาพให้อยู่กลางในแนวตั้ง */
  height: 150px; /* กำหนดความสูงของ container ให้อยู่ที่ 150px */
}

.card-img-top {
  width: 150px; /* กำหนดความกว้าง */
  height: 150px; /* กำหนดความสูง */
  object-fit: cover; /* ปรับภาพให้พอดีกับขนาด 150x150 */
}

.card:hover {
  transform: scale(1.05);
}

.btn i {
  margin-right: 5px;
}

.btn-link {
  color: #007bff;
  text-decoration: none;
  padding: 0;
}

.btn-link:hover {
  text-decoration: underline;
}
</style>
