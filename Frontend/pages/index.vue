<template>
  <HomePageImage />
  <div class="home">
    <pagetitle>Welcome to Genesis Capital</pagetitle>
<p>We're delighted to have you here, where our passion lies in supporting visionary entrepreneurs with game-changing ideas. Our mission is simple yet powerful: to help turn your bold ideas into successful businesses.</p>
<p>
As a venture capital firm, we provide the capital, resources, and expertise you need to bring your dreams to life. We invest in early-stage and high-growth companies with the potential to make a significant impact. Beyond funding, we offer strategic guidance, mentorship, and a wealth of industry-specific insights.
</p>
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
      <h3>Unleashing Innovation</h3>
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

.section {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 3rem;
  margin: 4rem;
  color: #000000;
  border-radius: 2rem;
}

.section h3 {
  color: #FF7A00;
  font-size: 30px;
  font-family: Poppins;
  margin-left: 5px;
}

.section p {
  font-size: 28px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 5px;
  margin-right: 10px;
}

.image-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.image-wrapper img {
  min-width: 100%;
  border-radius: 2rem;
}

.content {
  flex: 0 0 50%;
  padding: 4rem;
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

@media (max-width: 1080px) {
  .content {
    flex: 50 1 80%;
    flex-direction: column;
    padding: 1rem;
  }
  .section p {
    font-size: 19px;
  }
  .section h3 {
    font-size: 20px;
  }
  .section {
    flex-direction: column-reverse;
  }
  .image-wrapper {
    margin-top: 2rem;
  }
  .image-wrapper img {
    width: 100%; 
    max-width: 100px;
    border-radius: 2rem;
  }
}

@media (max-width: 786px) {
  .section {
    margin: 2rem;
  }
  .section p {
    font-size: 16px;
  }
  .section h3 {
    font-size: 18px;
  }
  .section button {
    font-size: 16px;
  }
  .home {
    font-size: 20px;
  }
  .home {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .home {
    margin-bottom: 1rem;
  }
  .section {
    margin: 1rem;
  }
  .section p {
    margin-bottom: 1rem;
  }
  .section h3 {
    margin-bottom: 1rem;
  }
  .section button {
    margin-top: 0.5rem;
  }
  .image-wrapper img {
    width: 100%; 
    max-width: 100px;
    border-radius: 2rem;
  }
}
</style>
