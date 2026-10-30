import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import { Blocks } from "../../components/RichText/RichText.jsx";
import Section from "../../components/Section/Section.jsx";
import SpecList from "../../components/SpecList/SpecList.jsx";
import { features } from "../../content/features.js";

export default function Features() {
  return (
    <div className="container">
      <PageHeader title={features.title} lead={features.lead} />

      {features.groups.map((group) => (
        <Section key={group.id} id={group.id} title={group.heading}>
          <SpecList items={group.items} />
        </Section>
      ))}

      <Section id={features.notIncluded.id} title={features.notIncluded.heading}>
        <Blocks items={[features.notIncluded.items]} />
      </Section>
    </div>
  );
}
