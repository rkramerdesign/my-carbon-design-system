import React from 'react';
import { Button } from 'carbon-components-react';

export default {
  title: 'Carbon/Button',
  component: Button,
};

export const Primary = () => (
  <Button kind="primary">Primary Button</Button>
);

export const Secondary = () => (
  <Button kind="secondary">Secondary Button</Button>
);

export const Ghost = () => (
  <Button kind="ghost">Ghost Button</Button>
);

export const Danger = () => (
  <Button kind="danger">Danger Button</Button>
);

