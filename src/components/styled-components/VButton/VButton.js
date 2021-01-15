import styled from 'vue-styled-components';

const btnProps = {
  primary: {
    type: Boolean,
    default: false,
  },
};

const StyledButton = styled('button', btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
`;

export default StyledButton;
