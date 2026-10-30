export const faq = {
  title: "Frequently asked questions",
  lead: "Plain answers about what PhishGuard does, what it asks for, and where it falls short.",
  jumpLabel: "FAQ categories",

  categories: [
    {
      id: "basics",
      title: "The basics",
      items: [
        {
          id: "what-is-phishguard",
          question: "What is PhishGuard?",
          answer: [
            "PhishGuard is an Android app that checks SMS messages for signs of phishing. It combines hand-written rules with a small statistical model called Naive Bayes, and it's designed to do the analysis on your phone. It's a thesis research project, not a commercial security product.",
          ],
        },
        {
          id: "what-is-smishing",
          question: "What is smishing?",
          answer: [
            "Smishing is phishing by text message. The sender pretends to be a bank, a delivery company, or an agency, and tries to get you to open a link, call a number, or share information such as a password or a one-time code. Common signs are a sense of urgency, an unexpected link, a request for sensitive details, and a sender you don't recognize. If you're unsure, don't tap the link. Contact the organization through its official app or a website address you already know.",
          ],
        },
        {
          id: "not-antivirus",
          question: "Does PhishGuard replace antivirus software?",
          answer: [
            "No. PhishGuard does one narrow job: assessing SMS messages for signs of phishing. It doesn't scan apps or files for malware, block websites, or protect against other threats. Think of it as an extra check, not a replacement for security software or your own judgment.",
          ],
        },
      ],
    },

    {
      id: "privacy-and-data",
      title: "Privacy and data",
      items: [
        {
          id: "works-offline",
          question: "Does PhishGuard work offline?",
          answer: [
            "Yes. Detection is designed to work without an internet connection. The rules and the model are part of the app, and the analysis happens on your phone. Within PhishGuard itself, only sending feedback needs a connection.",
          ],
        },
        {
          id: "no-internet",
          question: "What happens when the phone has no internet?",
          answer: [
            "Message checking and warnings continue as normal. If you try to send feedback without a connection, the app tells you it couldn't send it and offers a retry. It doesn't save the feedback to send later.",
          ],
        },
        {
          id: "uploads",
          question: "Does PhishGuard upload SMS messages?",
          answer: [
            "No. PhishGuard analyzes messages on your phone and doesn't upload them for detection. The one thing to know about is optional feedback: you can choose to send a bug report or suggestion, and what you type there is sent over the internet. PhishGuard doesn't attach your messages to it. Nothing is sent unless you choose to.",
            [
              "[What information is sent through optional feedback?](#feedback-contents)",
              "[Privacy policy](/privacy)",
            ],
          ],
        },
        {
          id: "feedback-contents",
          question: "What information is sent through optional feedback?",
          answer: [
            "If you send feedback, PhishGuard sends the category you pick (bug, suggestion, or other) and the text you type. The app adds no other fields: not your messages, the sender of any message, or your phone number. The text goes over the internet to a form hosted by Google Forms, so Google receives it together with technical details of the request, such as your network address.",
            "Before you send, the app warns you not to include SMS text, one-time codes, passwords, account numbers, or other personal information. Please follow that warning, because you type the text yourself.",
          ],
        },
      ],
    },

    {
      id: "permissions",
      title: "Permissions",
      items: [
        {
          id: "permissions-sms",
          question: "Why does PhishGuard need SMS permissions?",
          answer: [
            "Android treats text messages as sensitive, so apps must ask first. PhishGuard asks for permission to receive new messages, so it can check them as they arrive, and to read messages, so it can scan your inbox when you ask and recheck it from time to time while protection is on. Without SMS access, PhishGuard can't check your messages. You can decline, or turn the permission off later in Android settings.",
          ],
        },
        {
          id: "permissions-notifications",
          question: "Why does PhishGuard need notification permission?",
          answer: [
            "So it can warn you when a message looks suspicious. Android 13 and later require apps to ask for this permission; on earlier versions notifications are allowed by default. If you decline, PhishGuard can't show warning notifications.",
          ],
        },
        {
          id: "permissions-usage-access",
          question: "Why does PhishGuard request Usage Access?",
          answer: [
            "Usage Access is a special Android setting you grant in Settings, not in a pop-up. PhishGuard uses it only for an optional screen that lists recently used apps and an estimated share of battery use. It isn't needed to analyze your messages, and the information isn't sent anywhere. If you don't grant it, that overview has no app usage to show.",
          ],
        },
      ],
    },

    {
      id: "how-detection-works",
      title: "How detection works",
      items: [
        {
          id: "how-detector-works",
          question: "How does the detector work?",
          answer: [
            "When a message arrives, PhishGuard prepares the text, picks out measurable signals, and checks the message in two ways: a set of hand-written rules for known warning signs, and a small statistical model trained on examples. It combines the two results into one score and warns you if the message looks suspicious.",
            "[The full walkthrough](/how-it-works)",
          ],
        },
        {
          id: "how-the-model-works",
          question: "How does the machine learning model work?",
          answer: [
            "The model uses Naive Bayes, a classic method that estimates how likely a message is to be phishing based on how often its words and features appeared in phishing and legitimate examples. It's small enough to run on a phone. It was trained on a limited set of examples, and it doesn't learn from your messages.",
          ],
        },
        {
          id: "when-detected",
          question: "What happens when a suspicious SMS is detected?",
          answer: [
            "PhishGuard shows you a notification, and the message appears as flagged in the app's message list. Nothing is deleted or blocked. Your message stays where it is. Treat the warning as a reason to be careful: don't tap links or reply with personal details, and check with the organization through an official channel.",
          ],
        },
        {
          id: "auto-delete",
          question: "Can PhishGuard automatically delete malicious SMS?",
          answer: [
            "No. PhishGuard warns you; it doesn't delete, block, or change messages. On Android, only your default messaging app can modify the SMS inbox, and PhishGuard isn't set up as one.",
          ],
        },
        {
          id: "false-positive",
          question: "What happens if PhishGuard incorrectly flags a message?",
          answer: [
            "Detectors make mistakes; a legitimate message flagged as suspicious is called a false positive. PhishGuard's model is fixed, so a correction on your phone does not change how it detects. You can send optional feedback describing the mistake, or keep a private note on that message with [Mark as Safe](#mark-as-safe).",
          ],
        },
        {
          id: "mark-as-safe",
          question: "What does Mark as Safe do?",
          answer: [
            "Mark as Safe lets you keep a private local note for a message. It does not change the detector, train the model, or send the message anywhere.",
            "The note applies to that one message. It doesn't trust the sender: later messages from the same sender are still checked normally. PhishGuard saves a short code that identifies the message, not the message text, and you can undo the note at any time.",
          ],
        },
        {
          id: "report-a-message",
          question: "Can PhishGuard report a scam message for me?",
          answer: [
            "No. PhishGuard doesn't report anything for you. The app has a How to Report screen that explains what to do after a suspicious message and lists official places to report it.",
            "The screen can open the phone dialer or a web browser, or let you copy or share a short report note, but only when you tap those buttons. The note includes the sender and the time of the last message, and it leaves out the message text unless you choose to include it.",
          ],
        },
      ],
    },

    {
      id: "limitations-heading",
      title: "Limitations",
      items: [
        {
          id: "limitations",
          question: "What are the system limitations?",
          answer: [
            [
              "It can miss phishing messages and can flag legitimate ones. We haven't published accuracy figures.",
              "It was trained on a limited set of examples, so new scams, unusual wording, or other languages may be handled poorly.",
              "It checks SMS only, not RCS chat, MMS, or other messaging apps.",
              "It doesn't check whether a link is safe by visiting it. It only looks at how the message and link are written.",
              "It can't work without the permissions it needs; if you revoke them, checks stop.",
              "Only the first 2,000 characters of a message are analyzed.",
              "If PhishGuard can't load its detection files, it tells you a message was not checked. It does not treat unchecked messages as safe.",
              "It's a research project, not a certified security product, and has no guarantee of any kind.",
            ],
          ],
        },
      ],
    },
  ],

  jump: [
    { label: "The basics", to: "#basics" },
    { label: "Privacy and data", to: "#privacy-and-data" },
    { label: "Permissions", to: "#permissions" },
    { label: "How detection works", to: "#how-detection-works" },
    { label: "Limitations", to: "#limitations" },
  ],
};
