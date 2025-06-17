import React from 'react';
import { Button } from 'carbon-components-react';

export default {
  title: 'Carbon/Button Examples',
  component: Button,
  parameters: {
    layout: 'centered',
  },
};

export const AllVariations = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', alignItems: 'flex-start' }}>
    <div>
      <h6 style={{ marginBottom: '1rem' }}>Variants</h6>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button kind="primary">Primary</Button>
        <Button kind="secondary">Secondary</Button>
        <Button kind="tertiary">Tertiary</Button>
        <Button kind="ghost">Ghost</Button>
        <Button kind="danger">Danger</Button>
      </div>
    </div>

    <div>
      <h6 style={{ marginBottom: '1rem' }}>Sizes</h6>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>

    <div>
      <h6 style={{ marginBottom: '1rem' }}>Disabled</h6>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button disabled>Disabled</Button>
        <Button kind="secondary" disabled>Disabled</Button>
        <Button kind="danger" disabled>Disabled</Button>
      </div>
    </div>
  </div>
);
