const distributionStates = {
  test: {
    primary: { label: "Download the test build (APK)", href: "file" },
    secondary: { label: "See how it works", to: "/how-it-works" },
    status: ["Research project", "Test build for testers, still in development"],
  },
  none: {
    primary: { label: "See how it works", to: "/how-it-works" },
    secondary: { label: "Read the FAQ", to: "/faq" },
    status: ["Research project", "Not yet available to download"],
  },
};

export const home = {
  distributionStates,

  testBuild: {
    id: "test-build",
    heading: "Test build",
    body: [
      "This is an early test build of PhishGuard for people helping the research team try the app. It is still in development: the detection algorithm is being fixed and refined, so it can make mistakes and it is not a finished or released product.",
      [
        "**Android only.** Open the downloaded file on your phone and allow installs from your browser or file manager when Android asks. Android may also show a security prompt about an unrecognized app.",
        "**Your messages stay on your phone.** Detection runs on the device; the privacy policy describes the one optional feature that goes online.",
        "**Check the file.** The SHA-256 below should match the downloaded file.",
      ],
    ],
  },

  hero: {
    title: "Phishing text detection that runs on your phone.",
    lead: "PhishGuard is an Android app that checks incoming SMS messages for signs of phishing, also called smishing. The analysis is designed to happen on the device itself, so it doesn't depend on an internet connection.",
  },

  exampleMessage: {
    sender: "Unknown sender",
    message:
      "Example Bank: We detected unusual activity on your account. Confirm your details within 24 hours or access will be suspended.",
    url: "https://examplebank-verify.example/login",
    caption: "An invented example of a typical smishing message. Not a screenshot.",
  },

  problem: {
    id: "problem",
    heading: "Phishing now arrives by text message",
    body: [
      "Smishing is phishing sent by SMS. A message pretends to come from a bank, a delivery service, or a government office and pushes you to open a link or share personal details. Text messages are short and informal, and they arrive on the device you carry everywhere, so it's easy to act on one before thinking it through.",
      "Many smishing messages share a few traits:",
      [
        '**Pressure.** A deadline or a threat, such as "within 24 hours".',
        "**A link that imitates a real service.** The address looks close to the real one, but isn't.",
        "**A request you didn't expect.** Confirm details, log in, or read out a code.",
      ],
      "PhishGuard is designed to weigh signals like these and warn you when a message looks suspicious.",
    ],
  },

  does: {
    id: "what-it-does",
    heading: "What PhishGuard does",
    rows: [
      {
        name: "Checks new messages.",
        description:
          "When a text arrives, PhishGuard analyzes it on your phone and warns you through a notification if it looks suspicious.",
      },
      {
        name: "Scans your inbox on request.",
        description: "You can also have it check messages that are already there.",
      },
      {
        name: "Leaves the decision to you.",
        description: "It warns; it doesn't delete or block anything.",
      },
      {
        name: "Takes optional feedback.",
        description:
          "From inside the app you can choose to send a bug report or suggestion. Nothing is sent unless you choose to.",
      },
    ],
    link: { label: "See all features", to: "/features" },
  },

  onDevice: {
    id: "on-device",
    heading: "Built to analyze messages on your phone",
    body: [
      "The detection process, from cleaning up the text to running the model, is designed to happen locally. PhishGuard's detection doesn't send your messages to a server. Optional feedback is separate and is the app's only network feature: it happens only if you choose to send it, and the privacy policy describes it.",
    ],
    links: [
      { label: "Permissions, explained", to: "/faq#permissions" },
      { label: "Privacy policy", to: "/privacy" },
    ],
  },

  limits: {
    id: "limits",
    heading: "What it can't do",
    callout: {
      lead: "No detector catches everything.",
      text: "PhishGuard can miss a phishing message, and it can flag a legitimate one. It isn't antivirus, it doesn't replace your own judgment, and we haven't published accuracy figures. It doesn't delete or block messages.",
    },
    link: { label: "Read the full list of limitations", to: "/faq#limitations" },
  },
};
