import React from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import 'carbon-components/scss/globals/scss/styles.scss';

export default {
  title: 'Carbon/Accordion',
  component: Accordion,
};

export const Default = () => (
  <Accordion>
    <AccordionItem title="Section 1 title">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </AccordionItem>
    <AccordionItem title="Section 2 title">
      Aenean commodo ligula eget dolor. Aenean massa.
    </AccordionItem>
    <AccordionItem title="Section 3 title">
      Cum sociis natoque penatibus et magnis dis parturient montes.
    </AccordionItem>
  </Accordion>
);

