import AboutProject from "../../components/AboutProject/AboutProject.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import PipelineList from "../../components/PipelineList/PipelineList.jsx";
import { Blocks } from "../../components/RichText/RichText.jsx";
import Section from "../../components/Section/Section.jsx";
import { howItWorks } from "../../content/howItWorks.js";
import { pipeline } from "../../content/pipeline.js";
import "./HowItWorks.css";

export default function HowItWorks() {
  const { whyTwo, naiveBayes, onPhone, speed, limits } = howItWorks;

  return (
    <div className="container">
      <PageHeader title={howItWorks.title} lead={howItWorks.lead}>
        <Callout {...howItWorks.callout} />
      </PageHeader>

      <div className="section">
        <PipelineList stages={pipeline} />
      </div>

      <Section id={whyTwo.id} title={whyTwo.heading} split>
        <p className="how__label">{whyTwo.label}</p>
        <Blocks items={whyTwo.body} />
      </Section>

      <Section id={naiveBayes.id} title={naiveBayes.heading} split>
        <Blocks items={naiveBayes.body} />
      </Section>

      <Section id={onPhone.id} title={onPhone.heading} split>
        <Blocks items={onPhone.body} />
      </Section>

      <Section id={speed.id} title={speed.heading} split>
        <Blocks items={speed.body} />
      </Section>

      <Section id={limits.id} title={limits.heading} split>
        <Blocks items={limits.body} />
      </Section>

      <AboutProject showLink={false} />
    </div>
  );
}
