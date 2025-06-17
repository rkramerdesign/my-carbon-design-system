import React, { useState } from 'react';
import { Accordion, AccordionItem, Button } from 'carbon-components-react';
import 'carbon-components/scss/globals/scss/styles.scss';

export default {
  title: 'Carbon/Accordion/Controlled with Expand All',
  component: Accordion,
};

export const ControlledAccordion = () => {
  const sectionCount = 3;
  const indices = Array.from({ length: sectionCount }, (_, i) => i);
  const [openSections, setOpenSections] = useState([0]);

  const handleClick = (index) => {
    setOpenSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const expandAll = () => setOpenSections(indices);
  const collapseAll = () => setOpenSections([]);

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Button size="sm" onClick={expandAll}>Expand All</Button>
        <Button size="sm" kind="tertiary" onClick={collapseAll}>Collapse All</Button>
      </div>

      <Accordion>
        {indices.map((idx) => (
          <AccordionItem
            key={idx}
            title={`Section ${idx + 1} title`}
            open={openSections.includes(idx)}
            onHeadingClick={() => handleClick(idx)}
          >
            Section {idx + 1} content.
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
