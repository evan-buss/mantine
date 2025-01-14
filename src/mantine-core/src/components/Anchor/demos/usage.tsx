import React from 'react';
import { Anchor } from '../Anchor';

const code = `
<Anchor href="https://mantine.dev/" target="_blank">Mantine docs</Anchor>
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
