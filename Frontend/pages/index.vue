<template>
  <HomePageImage />
  <div class="home">
    <pagetitle>Welcome to Genesis Capital</pagetitle>
    <p>Welcome to Venture Capital, where we are passionate about supporting visionary entrepreneurs with game-changing ideas. Our mission is to help turn your bold ideas into successful businesses by providing the capital, resources, and expertise you need to grow.</p>
  </div>
  <div class="section">
    <div class="image-wrapper">
      <img src="https://imageio.forbes.com/specials-images/imageserve/60cf26d139bf3c0abaef3cdc/Multiracial-business-group-in-office/960x0.jpg?format=jpg&width=960" alt="Employees Photo">
    </div>
    <div class="content">
      <h3>Our Employees</h3>
      <p>At Venture Capital, we specialize in identifying and investing in early-stage startups with the potential for significant growth. Our experienced team of investors has a proven track record of success and is committed to helping you achieve your goals.</p>
      <NuxtLink to="employees"><button>Learn More</button></NuxtLink>
    </div>
  </div>
  <div class="section">
    <div class="image-wrapper">
      <img src="https://thumbs.dreamstime.com/b/technology-logo-tech-firm-logo-vector-design-full-vector-template-technology-logo-tech-firm-logo-vector-design-full-vector-109273835.jpg" alt="Employees Photo">
    </div>
    <div class="content">
      <p>Discover the future through our funded projects. At Genesis Capital, we fuel innovation and support groundbreaking ventures that redefine industries. With a diverse portfolio spanning technology, healthcare, sustainability, and more, we empower visionary entrepreneurs to make a lasting impact. Join us as we shape tomorrow. Explore our website for details on our funded projects and investment opportunities.</p>
      <NuxtLink to="/areas/"><button>Learn More</button></NuxtLink>
    </div>
  </div>
</template>

<style>



.home {
  font-size: 28px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
}
@media (max-width: 768px) {
  .home p {
    font-size: 25px;
    margin-right: 30px;
  }
}

@media (max-width: 480px) {
  .home p {
    margin-right: 10px;
    font-size: 15px;
  }
}

/* Updated styles for small screens */

@media (max-width: 768px) {
  .section {
    flex-direction: column-reverse;
  }

  .section .image-wrapper {
    margin-top: 2rem;
  }
}

.section {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 3rem;
  margin: 4rem;
  color: #000000;
  border-radius: 2rem;
}

@media (max-width: 768px) {
  .section {
    margin: 20px;
  }
}

.section h3 {
  color: #FF7A00;
  font-size: 30px;
  font-family: Poppins;
  margin-left: 5px;
}

@media (max-width: 768px) {
  .section h3 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .section h3 {
    font-size: 15px;
  }
}

.section p {
  font-size: 28px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 5px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .section p {
    font-size: 19px;
  }
}

@media (max-width: 480px) {
  .section p {
    font-size: 15px;
  }
}

.image-wrapper {
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  border-radius: 2rem;
}

.content {
  flex: 0 0 50%;
  padding: 4rem;
}

@media (max-width: 768px) {
  .content {
    flex: 50 1 80%;
    flex-direction: column;
  }
}

.section button {
  margin-top: 1rem;
  font-size: 20px;
  font-family: Poppins;
  padding: 0.5rem 1rem;
  border: 0;
  background-color: hsla(160, 100%, 37%, 1);
  color: #000000;
  cursor: pointer;
  border-radius: 20px;
}

.section button:hover {
  background-color: rgb(108, 112, 111);
}
</style>
