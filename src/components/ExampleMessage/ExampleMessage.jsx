import "./ExampleMessage.css";

export default function ExampleMessage({ sender, message, url, caption }) {
  return (
    <figure className="example-message">
      <div className="example-message__object">
        <p className="example-message__sender">{sender}</p>
        <div className="example-message__bubble">
          <p>{message}</p>
          <p className="example-message__url">{url}</p>
        </div>
      </div>
      <figcaption className="example-message__caption">{caption}</figcaption>
    </figure>
  );
}
