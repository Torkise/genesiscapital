<template>
  <HomePageImage />
  <!-- <img src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> -->
  <div class="home">
    <h1>Welcome to Genesis Capital</h1>
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
    <div class="content">
      <p>If you're an entrepreneur with a groundbreaking idea, we invite you to learn more about how we can support you on your journey. We're always on the lookout for the next big thing, and we're proud to partner with some of the industry's most innovative and visionary entrepreneurs.</p>
      <NuxtLink to="/areas/"><button>Learn More</button></NuxtLink>
    </div>
    <div class="image-wrapper">
      <img src="https://thumbs.dreamstime.com/b/technology-logo-tech-firm-logo-vector-design-full-vector-template-technology-logo-tech-firm-logo-vector-design-full-vector-109273835.jpg" alt="Employees Photo">
    </div>
  </div>
  <div class="home"></div>
</template>

<style>
  .home {
    display: flex;
    flex-direction: column;
    padding: 8rem;
  }

  .section {
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
    padding: 3rem;
    color: #000000;
  }

  .image-wrapper {
    flex: 0 0 50%;
    overflow: hidden;
  }

  .image-wrapper img {
    width: 100%;
    border-radius: 50px;
  }

  .content {
    flex: 0 0 50%;
    padding: 4rem;
  }

  .section button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 0;
    background-color: hsla(160, 100%, 37%, 1);
    color: #000000;
    cursor: pointer;
    border-radius: 5px;
  }

  .section button:hover {
    background-color: rgb(0, 141, 94);
  }
</style>
