export const howItWorks = {
  title: "How PhishGuard works",
  lead: "A message arrives, PhishGuard analyzes it on your phone, and you're warned if it looks suspicious. Here's what happens in between.",
  callout: {
    lead: "This page describes the detector's design.",
    text: "It does not report accuracy or speed.",
  },

  whyTwo: {
    id: "why-two-methods",
    heading: "Why two methods?",
    label: "Design rationale",
    body: [
      "Rules are easy to read and good at catching known tricks, but they're rigid and attackers can word around them. A statistical model can pick up on wording patterns no one wrote a rule for, but it can be wrong in ways that are hard to explain. PhishGuard combines them so each covers some of the other's weaknesses.",
    ],
  },

  naiveBayes: {
    id: "naive-bayes",
    heading: "What is Naive Bayes?",
    body: [
      'Imagine a mail sorter who has seen many examples. Words like "verify", "suspended", and "urgent" show up more often in phishing messages; words like "see you at 6" show up more in ordinary ones. Naive Bayes adds up that evidence for each clue in a message and estimates which group it resembles. It\'s called "naive" because it treats each clue as independent of the others. That isn\'t strictly true, but it keeps the model small and fast, which suits a phone.',
      "The model is fixed inside the app. It doesn't learn from your messages on your phone.",
    ],
  },

  onPhone: {
    id: "what-stays-on-your-phone",
    heading: "What stays on your phone",
    body: [
      "PhishGuard analyzes each message in memory and does not keep a copy of your messages in its own storage. It stores its settings, the time of your last scan and, if you use the usage and battery overview, battery-level readings. If you use Mark as Safe, it also stores a short code for each message you mark, not the message text.",
      "If you export your scan history, the file is saved as a plain, unencrypted file in your Downloads folder. It can include sender numbers and the first 60 characters of the conversation, and it stays there until you delete it.",
      "[Privacy policy](/privacy)",
    ],
  },

  speed: {
    id: "speed-and-resource-use",
    heading: "Speed and resource use",
    body: [
      "The design target is under 50 milliseconds per message. No published performance result is claimed.",
    ],
  },

  limits: {
    id: "limits",
    heading: "Limits",
    body: [
      "PhishGuard can miss phishing messages, and it can flag legitimate ones. Only the first 2,000 characters of a message are analyzed. If PhishGuard can't load its detection files, it tells you a message was not checked rather than calling it safe.",
      "[Read the full list of limitations](/faq#limitations)",
    ],
  },
};
