import styled from 'vue-styled-components';

const btnProps = {
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
};

const StyledButton = styled('button', btnProps)`
  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return props.theme.space[8];
      case 'sm':
        return props.theme.space[4];
      default:
        return props.theme.space[6];
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'lg':
        return `${props.theme.space[4]} ${props.theme.space[6]}`;
      case 'sm':
        return `${props.theme.space[2]} ${props.theme.space[4]}`;
      default:
        return `${props.theme.space[3]} ${props.theme.space[5]}`;
    }
  }};
  border: 0;
  border-radius: 3px;
  background: ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.colors.secondary;
      default:
        return props.theme.colors.primary;
    }
  }};
  color: white;
`;

export default StyledButton;
