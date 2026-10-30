import "./PipelineList.css";

export default function PipelineList({ stages }) {
  return (
    <ol className="pipeline" role="list">
      {stages.map((stage, index) => {
        const startsPhase = stage.phase && stage.phase !== stages[index - 1]?.phase;
        return (
          <li key={stage.title} className="pipeline__stage">
            <span className="pipeline__number" aria-hidden="true">
              {index + 1}
            </span>
            {startsPhase && <p className="pipeline__phase">{stage.phase}</p>}
            <h2 className="pipeline__title">{stage.title}</h2>
            <p>{stage.description}</p>
          </li>
        );
      })}
    </ol>
  );
}
