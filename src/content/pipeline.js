export const pipeline = [
  {
    phase: null,
    title: "A message arrives",
    description: "Android delivers the new SMS to PhishGuard, if you've allowed SMS access.",
  },
  {
    phase: "Prepare",
    title: "Text preparation",
    description:
      'Only the first 2,000 characters of a message are analyzed. For the statistical model, the text is lowercased and punctuation is removed, and links, phone numbers, amounts of money and runs of "!!" or "??" are replaced with generic placeholders, so the model sees the pattern rather than the specific address or number.',
  },
  {
    phase: "Prepare",
    title: "Signals",
    description:
      "PhishGuard also counts simple signals in the message: whether it has a link, a phone number or an amount of money; whether it mentions a bank, payment service, delivery or government body; how many urgency words it uses; how long it is; and how much of it is in capitals or digits.",
  },
  {
    phase: "Analyze",
    title: "Rule check",
    description:
      "About two dozen hand-written rules check the original text for known warning signs. Examples: a shortened link, a link to a suspicious domain or a raw IP address, urgent or threatening language, a request for sensitive information, or wording that imitates a bank or payment service. A few rules lower the score for patterns typical of legitimate messages.",
  },
  {
    phase: "Analyze",
    title: "Naive Bayes check",
    description:
      "A small statistical model compares the prepared text and the signals with patterns it learned from examples of phishing and legitimate messages.",
  },
  {
    phase: "Decide",
    title: "Combined score",
    description:
      "The rule score and the model's estimate are combined into one score, with the model counting for somewhat more than the rules. If the score reaches a fixed alert threshold, the message is treated as suspicious.",
  },
  {
    phase: "Decide",
    title: "Your warning",
    description: "If the message is flagged, PhishGuard shows a notification. The message isn't deleted or changed.",
  },
];
