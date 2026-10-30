import { policies } from "../../content/policies.js";
import OnThisPage from "../OnThisPage/OnThisPage.jsx";
import PageHeader from "../PageHeader/PageHeader.jsx";
import { Blocks } from "../RichText/RichText.jsx";
import "./PolicyPage.css";

export default function PolicyPage({ policy }) {
  return (
    <div className="container policy">
      <PageHeader title={policy.title}>
        <p className="policy__notice">{policy.notice}</p>
        {policy.lastUpdated && (
          <p className="policy__updated">
            {policies.lastUpdatedLabel} {policy.lastUpdated}
          </p>
        )}
      </PageHeader>

      <div className="policy__layout">
        <OnThisPage items={policy.sections.map((section) => ({ id: section.id, label: section.heading }))} />

        <div className="policy__content">
          {policy.sections.map((section) => (
            <section key={section.id} className="policy__section" aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              <div className="policy__body stack">
                <Blocks items={section.body} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
