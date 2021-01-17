<template>
  <AppTheme>
    <div id="app">
      <ScssButton variant="secondary" size="sm">SCSS Button</ScssButton>
      <br/><br/>
      <StyledComponentButton variant="secondary" size="sm">
        Styled Components Button
      </StyledComponentButton>
      <br/><br/>
      <CssModuleButton variant="secondary" size="sm">CSS module button</CssModuleButton>
    </div>
  </AppTheme>
</template>

<script>
import AppTheme from '@/components/styled-components/AppTheme';
import ScssButton from '@/components/scss-components/VButton';
import CssModuleButton from '@/components/css-module/VButton';
import StyledComponentButton from '@/components/styled-components/VButton';

export default {
  name: 'App',
  components: {
    AppTheme,
    ScssButton,
    CssModuleButton,
    StyledComponentButton,
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
}
</style>
