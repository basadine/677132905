<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">About Me</h1>
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card shadow">
          <img src="../assets/BSzII.jpg" class="card-img-top" alt="Your Photo" />
          <div class="card-body">
            <h5 class="card-title text-primary">Hello, I'm PHANUPONG BUA.</h5>
            <p class="card-text">
              My UID is 67713905
            </p>
            <p class="card-text">
              I'm Studying in SPU Chonburi at Department of Innovation Technology and Community
            </p>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe'
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa; /* สีพื้นหลังของคอนเทนเนอร์ */
  padding: 30px;
  border-radius: 10px; /* มุมมน */
}

.card {
  background-color: #ffffff; /* สีพื้นหลังของการ์ด */
  border: none; /* ไม่ให้มีกรอบ */
  border-radius: 10px; /* มุมมน */
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05); /* ขยายการ์ดเมื่อเอาเมาส์ไปชี้ */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* เงาเมื่อขยาย */
}

.card-title {
  color: #007bff; /* เปลี่ยนสีหัวข้อ */
}

.card-img-top {
  border-top-left-radius: 10px; /* มุมมนด้านบนซ้าย */
  border-top-right-radius: 10px; /* มุมมนด้านบนขวา */
}
</style>
