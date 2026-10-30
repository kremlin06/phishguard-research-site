import { facts } from "./facts.js";

const whoWeAreBody = [
  facts.owner,
  facts.contactEmail && `Contact: [${facts.contactEmail}](mailto:${facts.contactEmail})`,
].filter(Boolean);

const privacySections = [
  {
    id: "summary",
    heading: "Summary",
    body: [
      "PhishGuard reads the SMS messages on your phone so it can check them for signs of phishing. Detection is designed to run on your phone and doesn't send your messages to a server. Optional feedback is separate: it is sent only if you choose to send it. PhishGuard doesn't contain analytics, advertising or crash-reporting libraries. The sections below describe each part in more detail.",
    ],
  },
  whoWeAreBody.length > 0 && {
    id: "who-we-are",
    heading: "Who we are",
    body: whoWeAreBody,
  },
  {
    id: "what-it-accesses",
    heading: "What PhishGuard accesses on your device",
    body: [
      "PhishGuard accesses the text and sender of SMS messages on your phone. It does this through two Android permissions: one to receive new messages and one to read the messages already on your phone.",
      [
        "**Notifications.** PhishGuard asks for notification permission so it can warn you when a message looks suspicious.",
        "**Usage Access (optional).** Used only for the app-usage and battery overview. It isn't needed to check messages.",
        "**Background work.** For the periodic recheck described below, PhishGuard uses Android's standard library for scheduled work. That library adds three routine permissions that show no prompt: to keep the phone awake while the work runs, to let the library read the network state, and to restore the schedule after a restart. None of them gives PhishGuard network access.",
      ],
      "Alert notifications for flagged messages show the sender and, by default, the start of the message. They can appear on your lock screen, depending on your phone's settings. You can turn the message preview off in PhishGuard's notification settings. The sender is still shown.",
    ],
  },
  {
    id: "how-messages-are-analyzed",
    heading: "How messages are analyzed",
    body: [
      "When a message arrives, or when you ask PhishGuard to scan your inbox, the message is analyzed on your phone: the text is prepared, checked against hand-written rules and a Naive Bayes model, and given a combined score. Detection doesn't send your message to a server. The steps are described on [How it works](/how-it-works).",
      "While protection is on, PhishGuard can also ask Android to recheck your inbox from time to time, using the same analysis on your phone. Android decides if and when that work runs, so a recheck can be late or skipped. New messages are still checked as they arrive.",
    ],
  },
  {
    id: "what-is-stored",
    heading: "What is stored on your device",
    body: [
      "PhishGuard stores its settings, the time of your last scan and, if you use the usage and battery overview, battery-level readings. It does not keep your messages in its own storage. To avoid repeating an alert, it also keeps short codes (hashes), internal message numbers, times and counts for messages it has already checked. These identify messages. They are not the message text.",
      "If you use Mark as Safe, PhishGuard also stores a short code (a hash) for each message you mark. The code identifies that one message. It is not the message text.",
      "If you export your scan history, the file is saved as a plain, unencrypted file in your Downloads folder. It can include sender numbers and the first 60 characters of the conversation, and it stays there until you delete it.",
      "To clear what PhishGuard stores, open Settings → Apps → PhishGuard → Storage on your phone.",
    ],
  },
  {
    id: "optional-feedback",
    heading: "Optional feedback",
    body: [
      "Feedback is optional. It is sent only when you choose to send it from inside the app.",
      "What is sent is the category you pick (bug, suggestion, or other) and the text you type. The app adds nothing else.",
      "Before you send, the app warns you not to include SMS text, one-time codes, passwords, account numbers, or other personal information.",
      "The text goes over the internet to a form hosted by Google Forms, and your network address is visible in the request. Because you type the text yourself, please follow that warning.",
    ],
  },
  {
    id: "reporting-a-message",
    heading: "Reporting a message",
    body: [
      "The app has a How to Report screen. PhishGuard does not send any report itself. The screen can open the phone dialer or a web browser, or let you copy or share a short report note, and it does so only when you tap those buttons.",
      "The note includes the sender and the time of the last message. It includes the message text only if you switch that on. If you share the note, it goes to the app you choose.",
    ],
  },
  {
    id: "network-use",
    heading: "Network use",
    body: ["PhishGuard requests the INTERNET permission for optional feedback. Detection doesn't need it."],
  },
  {
    id: "third-parties",
    heading: "Third parties",
    body: [
      "PhishGuard doesn't include analytics, advertising or crash-reporting libraries. Optional feedback goes to a form hosted by Google Forms.",
    ],
  },
  {
    id: "security",
    heading: "Security",
    body: [
      "For detection, PhishGuard is designed to run on your phone and does not send your messages to a server. PhishGuard is a research project, not a guarantee of security. It does not claim to encrypt the data it stores.",
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices",
    body: [
      "You can turn off any permission PhishGuard has been given in Android Settings. Without SMS access, PhishGuard can't check your messages.",
      "You can also switch protection off inside PhishGuard. While it is off, new messages are not checked and no notification is shown for them.",
      "You can undo a Mark as Safe note at any time. Uninstalling PhishGuard removes the settings the app stores itself. Files you exported to your Downloads folder stay there until you delete them.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: ["When this policy changes, the updated version will be published on this page with its date."],
  },
  facts.contactEmail && {
    id: "contact",
    heading: "Contact",
    body: [`[${facts.contactEmail}](mailto:${facts.contactEmail})`],
  },
].filter(Boolean);

const termsSections = [
  {
    id: "about-these-terms",
    heading: "About these terms",
    body: ["These terms cover the PhishGuard app, which is a research prototype, and this website."],
  },
  {
    id: "research-project",
    heading: "The app is a research project",
    body: [
      "PhishGuard is provided as is, for research and evaluation. It is not a certified security product.",
    ],
  },
  {
    id: "no-guarantee",
    heading: "No guarantee of detection",
    body: [
      "PhishGuard may miss phishing messages, and it may flag legitimate ones. You remain responsible for your own decisions.",
    ],
  },
  {
    id: "permissions-and-your-device",
    heading: "Permissions and your device",
    body: ["You choose which permissions to grant, and you can revoke them at any time in Android Settings."],
  },
  {
    id: "changes",
    heading: "Changes",
    body: ["These terms may change. Updated terms will be published on this page."],
  },
];

export const policies = {
  lastUpdatedLabel: "Last updated:",

  privacy: {
    title: "Privacy policy",
    notice: "This privacy policy is a draft that is still being finalized. It will be completed before PhishGuard is released.",
    lastUpdated: "22 October 2026",
    sections: privacySections,
  },

  terms: {
    title: "Terms of use",
    notice: "These terms are a draft that is still being finalized. They will be completed before PhishGuard is released.",
    lastUpdated: null,
    sections: termsSections,
  },
};
