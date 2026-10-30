import PolicyPage from "../../components/PolicyPage/PolicyPage.jsx";
import { policies } from "../../content/policies.js";

export default function Terms() {
  return <PolicyPage policy={policies.terms} />;
}
