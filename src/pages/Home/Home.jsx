import { Link } from "react-router";
import AboutProject from "../../components/AboutProject/AboutProject.jsx";
import Button from "../../components/Button/Button.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import ExampleMessage from "../../components/ExampleMessage/ExampleMessage.jsx";
import { Blocks } from "../../components/RichText/RichText.jsx";
import Section from "../../components/Section/Section.jsx";
import SpecList from "../../components/SpecList/SpecList.jsx";
import { facts } from "../../content/facts.js";
import { home } from "../../content/home.js";
import "./Home.css";

export default function Home() {
  const hero = home.distributionStates[facts.distribution];

  return (
    <div className="container">
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title" tabIndex={-1}>
            {home.hero.title}
          </h1>
          <p className="hero__lead">{home.hero.lead}</p>
          {hero && (
            <>
              <div className="hero__actions">
                <Button to={hero.primary.to}>{hero.primary.label}</Button>
                <Button to={hero.secondary.to} variant="secondary">
                  {hero.secondary.label}
                </Button>
              </div>
              <p className="hero__status">{hero.status.join(" · ")}</p>
            </>
          )}
        </div>
        <ExampleMessage {...home.exampleMessage} />
      </div>

      <Section id={home.problem.id} title={home.problem.heading} split>
        <Blocks items={home.problem.body} />
      </Section>

      <Section id={home.does.id} title={home.does.heading}>
        <SpecList items={home.does.rows} />
        <p>
          <Link to={home.does.link.to}>{home.does.link.label}</Link>
        </p>
      </Section>

      <Section id={home.onDevice.id} title={home.onDevice.heading} split>
        <Blocks items={home.onDevice.body} />
        <ul className="link-row">
          {home.onDevice.links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id={home.limits.id} title={home.limits.heading} split>
        <Callout {...home.limits.callout} />
        <p>
          <Link to={home.limits.link.to}>{home.limits.link.label}</Link>
        </p>
      </Section>

      <AboutProject />
    </div>
  );
}
