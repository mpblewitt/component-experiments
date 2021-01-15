<template>
  <ThemeProvider :theme="theme">
      <slot/>
  </ThemeProvider>
</template>

<script>
export default {
  data() {
    return {
      theme: {
        primary: 'palevioletred',
      },
    };
  },

};
</script>
