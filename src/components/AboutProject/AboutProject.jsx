import { Link } from "react-router";
import { facts } from "../../content/facts.js";
import { about } from "../../content/site.js";
import { Blocks } from "../RichText/RichText.jsx";
import Section from "../Section/Section.jsx";

export default function AboutProject({ showLink = true }) {
  return (
    <Section id="about" title={about.heading} split>
      <Blocks items={about.body} />
      {facts.institution && <p>{facts.institution}</p>}
      {showLink && (
        <p>
          <Link to={about.link.to}>{about.link.label}</Link>
        </p>
      )}
    </Section>
  );
}
