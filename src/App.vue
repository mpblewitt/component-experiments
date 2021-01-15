<template>
  <AppTheme>
    <div id="app">
      <VButton variant="secondary" size="sm">Button</VButton>
    </div>
  </AppTheme>
</template>

<script>
import AppTheme from '@/components/styled-components/AppTheme';
import VButton from '@/components/styled-components/VButton';

export default {
  name: 'App',
  components: {
    AppTheme,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: $bg; */
}
</style>
