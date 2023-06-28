<template>
  <div class="about">
    <pagetitle>About Us</pagetitle>
    <p>Welcome to Genesis Capital, the leading firm in investment and startup funding. Our mission is
      to help entrepreneurs build successful businesses by providing them with the capital, resources, and expertise
      they need to succeed.</p>
  </div>
  
  <div class="statistics">
      <div class="statistic">
        <h3 class="statistic-number">100+</h3>
        <p class="statistic-label">Successful Investments</p>
      </div>
      <div class="statistic">
        <h3 class="statistic-number">1,000+</h3>
        <p class="statistic-label">Jobs Created</p>
      </div>
      <div class="statistic">
        <h3 class="statistic-number">$1B+</h3>
        <p class="statistic-label">Funds Raised</p>
      </div>
    </div>
</template>

<style>
.about {
  margin-left: 4rem;
  margin-right: 4rem;
}

.statistics {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.statistic {
  text-align: center;
  margin: 0 2rem;
}

.statistic-number {
  font-size: 36px;
  font-weight: bold;
}

.statistic-label {
  font-size: 14px;
  color: #888;
}
</style>