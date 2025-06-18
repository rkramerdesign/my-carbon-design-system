import{r as x,e as t}from"./iframe-BXziMUZT.js";import{A as d,a as S}from"./AccordionItem-BsLNlBoB.js";import{B as l}from"./Button-DP923CtE.js";import"./deprecate-CSeGSs8k.js";const B={title:"Carbon/Accordion/Controlled with Expand All",component:d},o=()=>{const i=Array.from({length:3},(e,n)=>n),[p,c]=x.useState([0]),m=e=>{c(n=>n.includes(e)?n.filter(C=>C!==e):[...n,e])},A=()=>c(i),u=()=>c([]);return t.createElement(t.Fragment,null,t.createElement("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem"}},t.createElement(l,{size:"sm",onClick:A},"Expand All"),t.createElement(l,{size:"sm",kind:"tertiary",onClick:u},"Collapse All")),t.createElement(d,null,i.map(e=>t.createElement(S,{key:e,title:`Section ${e+1} title`,open:p.includes(e),onHeadingClick:()=>m(e)},"Section ",e+1," content."))))};o.__docgenInfo={description:"",methods:[],displayName:"ControlledAccordion"};var s,r,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const sectionCount = 3;
  const indices = Array.from({
    length: sectionCount
  }, (_, i) => i);
  const [openSections, setOpenSections] = useState([0]);
  const handleClick = index => {
    setOpenSections(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const expandAll = () => setOpenSections(indices);
  const collapseAll = () => setOpenSections([]);
  return <>
      <div style={{
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem'
    }}>
        <Button size="sm" onClick={expandAll}>Expand All</Button>
        <Button size="sm" kind="tertiary" onClick={collapseAll}>Collapse All</Button>
      </div>

      <Accordion>
        {indices.map(idx => <AccordionItem key={idx} title={\`Section \${idx + 1} title\`} open={openSections.includes(idx)} onHeadingClick={() => handleClick(idx)}>
            Section {idx + 1} content.
          </AccordionItem>)}
      </Accordion>
    </>;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const h=["ControlledAccordion"];export{o as ControlledAccordion,h as __namedExportsOrder,B as default};
