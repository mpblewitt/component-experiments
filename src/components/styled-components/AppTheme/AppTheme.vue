<template>
  <ThemeProvider :theme="theme">
    <slot/>
  </ThemeProvider>
</template>

<script>
import { ThemeProvider } from 'vue-styled-components';

export default {
  components: {
    ThemeProvider,
  },
  data() {
    return {
      theme: {
        primary: '#C44536',
        secondary: '#197278',
        space: [
          '0.25rem',
          '0.5rem',
          '0.75rem',
          '1rem',
          '1.5rem',
          '2rem',
          '3rem',
          '4rem',
          '6rem',
          '8rem',
          '12rem',
          '16rem',
          '24rem',
        ],
      },
    };
  },

};
</script>
