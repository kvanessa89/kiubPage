import { useState } from 'react';

interface FaqItem { q: string; a: string }
interface Props { items: FaqItem[] }

function PlusIcon() {
  return (
    <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>
  );
}

function FaqItemComp({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`card faq-item${open ? ' open' : ''}`} onClick={() => setOpen((o) => !o)}>
      <div className="faq-q">
        {q}
        <span className="pm"><PlusIcon /></span>
      </div>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function FaqAccordion({ items }: Props) {
  return (
    <div className="faq" style={{ marginTop: 44 }}>
      {items.map((item, i) => (
        <FaqItemComp key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
