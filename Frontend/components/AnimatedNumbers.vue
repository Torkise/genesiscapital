<template>
    <div>{{ formattedNumber }}</div>
  </template>
  
  <script>
  export default {
    props: {
      number: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 6000 // 1 second by default
      },
      noText: {
        type: String,
        default: '+'
      }
    },
    data() {
      return {
        displayNumber: 0,
        startTime: null,
        interval: null
      }
    },
    computed: {
      formattedNumber() {
        return this.displayNumber >= this.number ? `${Math.round(this.displayNumber)}+`: Math.round(this.displayNumber);
      }
    },
    mounted() {
      this.animateNumber();
    },
    watch: {
      number() {
        this.animateNumber();
      }
    },
    methods: {
      animateNumber() {
        clearInterval(this.interval);
        this.startTime = Date.now();
        this.interval = setInterval(() => {
          let t = (Date.now() - this.startTime) / this.duration;
          if(t < 1) {
            // Quadratic ease out function
            this.displayNumber = this.number * (1 - (1 - t) * (1 - t));
          } else {
            this.displayNumber = this.number; // make sure the final value is exactly the target number
            clearInterval(this.interval);
          }
        }, 20);
      }
    }
  };
  </script>
  