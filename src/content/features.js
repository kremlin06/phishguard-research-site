export const features = {
  title: "Features",
  lead: "What PhishGuard does today, what it's designed to do, and what isn't included. Labels show which is which.",

  groups: [
    {
      id: "detection",
      heading: "Detection",
      items: [
        {
          name: "On-device analysis",
          description:
            "Each message is analyzed on your phone. PhishGuard doesn't need a server to decide whether a message looks suspicious.",
          label: "app",
        },
        {
          name: "Works without internet",
          description: "Detection doesn't require a connection. The rules and the model are part of the app.",
          label: "app",
        },
        {
          name: "Two methods together",
          description:
            "Hand-written rules check known warning signs; a Naive Bayes model weighs the message's wording against examples it learned from.",
          label: "app",
        },
        {
          name: "Designed to be small",
          description:
            "A small rule set and a small statistical model, built to be quick enough for a phone. The design target is under 50 milliseconds per message. No published performance result is claimed.",
          label: "target",
        },
      ],
    },
    {
      id: "your-control",
      heading: "Your control",
      items: [
        {
          name: "Warning notifications",
          description: "When a message looks suspicious, you get a notification.",
          label: "app",
        },
        {
          name: "Manual inbox scan",
          description: "Check messages already on your phone whenever you like.",
          label: "app",
        },
        {
          name: "Optional feedback",
          description:
            "Send a bug report or suggestion from inside the app. Only if you choose to. It is separate from detection; see the [privacy policy](/privacy).",
          label: "app",
        },
        {
          name: "Mark as Safe",
          description:
            "Mark as Safe lets you keep a private local note for a message. It does not change the detector, train the model, or send the message anywhere.",
          label: "app",
        },
        {
          name: "How to Report",
          description:
            "A screen that explains what to do after a suspicious message and lists official places to report it. It can open the phone dialer or a browser, or let you copy or share a short report note, but only when you tap those buttons. PhishGuard doesn't report anything for you.",
          label: "app",
        },
      ],
    },
    {
      id: "transparency",
      heading: "Transparency",
      items: [
        {
          name: "App usage and battery overview",
          description:
            "An optional screen lists recently used apps and an estimate of their share of battery use, using Android's Usage Access setting. It is for information only and PhishGuard does not claim to save battery. Usage Access isn't needed to check messages, and the information isn't sent anywhere.",
          label: "app",
        },
      ],
    },
  ],

  notIncluded: {
    id: "not-included",
    heading: "What PhishGuard doesn't do",
    items: [
      "It doesn't delete, block, or modify your messages.",
      "It checks SMS only. It doesn't scan RCS chat, MMS, WhatsApp, email, or other messaging apps.",
      "It doesn't open or check links. Its rules look at how a link is written, such as a shortened address, but PhishGuard never visits it.",
      "It isn't a messaging app and doesn't replace yours.",
      "It doesn't promise to catch every phishing message.",
    ],
  },
};
