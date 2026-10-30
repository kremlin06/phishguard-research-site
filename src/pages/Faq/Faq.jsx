import { useEffect } from "react";
import { useLocation } from "react-router";
import Accordion from "../../components/Accordion/Accordion.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { Blocks } from "../../components/RichText/RichText.jsx";
import Section from "../../components/Section/Section.jsx";
import { faq } from "../../content/faq.js";
import "./Faq.css";

export default function Faq() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!(target instanceof HTMLDetailsElement)) return;

    target.open = true;
    const timer = setTimeout(() => target.querySelector("summary")?.focus(), 0);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <div className="container faq">
      <PageHeader title={faq.title} lead={faq.lead}>
        <nav aria-label={faq.jumpLabel}>
          <ul className="link-row">
            {faq.jump.map((link) => (
              <li key={link.to}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {faq.categories.map((category) => (
        <Section key={category.id} id={category.id} title={category.title}>
          <div className="faq__group">
            {category.items.map((item) => (
              <Accordion key={item.id} id={item.id} question={item.question}>
                <Blocks items={item.answer} />
              </Accordion>
            ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
