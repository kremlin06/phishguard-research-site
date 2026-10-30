import PolicyPage from "../../components/PolicyPage/PolicyPage.jsx";
import { policies } from "../../content/policies.js";

export default function Privacy() {
  return <PolicyPage policy={policies.privacy} />;
}
