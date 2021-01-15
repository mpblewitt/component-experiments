import VButton from './VButton';

export default {
  title: 'StylesComponents/VButton',
  component: VButton,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VButton },
  template: '<VButton v-bind="$props">Button</VButton>',
});

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
