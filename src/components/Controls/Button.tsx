import styled from 'styled-components';
import tw from 'twin.macro';

const Button = styled.button`
  ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
`;

export function CustomButton() {
  return <Button>Normal Button</Button>;
}
