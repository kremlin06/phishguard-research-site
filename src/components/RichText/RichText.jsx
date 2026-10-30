import { Link } from "react-router";
import "./RichText.css";

const TOKENS = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

export default function RichText({ text }) {
  return text.split(TOKENS).map((part, index) => {
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;

    const link = part.match(LINK);
    if (link) {
      const [, label, target] = link;
      if (target.startsWith("/")) {
        return (
          <Link key={index} to={target}>
            {label}
          </Link>
        );
      }
      return (
        <a key={index} href={target}>
          {label}
        </a>
      );
    }

    return part;
  });
}

export function Blocks({ items }) {
  return items.map((item, index) =>
    Array.isArray(item) ? (
      <ul key={index} className="rich-list">
        {item.map((entry, entryIndex) => (
          <li key={entryIndex}>
            <RichText text={entry} />
          </li>
        ))}
      </ul>
    ) : (
      <p key={index}>
        <RichText text={item} />
      </p>
    ),
  );
}
