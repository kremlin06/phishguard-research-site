export const research = {
  title: "PhishGuard: Lightweight Offline SMS Phishing Detector for Android Using Hybrid Heuristic and Naive Bayes",
  notice:
    "This page summarizes the thesis research behind PhishGuard. The only classification results reported so far are preliminary. They come from an initial baseline experiment and are not the final performance of the system.",
  lastUpdated: "30 October 2026",

  sections: [
    {
      id: "overview",
      heading: "Overview",
      body: [
        "PhishGuard is a Bachelor of Science in Computer Science thesis at STI College Balagtas. The manuscript is titled *PhishGuard: Development and Evaluation of a Lightweight Offline SMS Phishing Detector for Android Using Hybrid Heuristic and Naive Bayes*. It describes the design, development and evaluation of a native Android application that checks SMS messages for signs of phishing and scam-related content on the phone itself.",
        "This page is a summary of that manuscript. It is not a substitute for it, and it will change as the evaluation is completed.",
        "**Status of the findings.** The manuscript reports one set of classification results so far, from an initial baseline experiment, and describes them as preliminary. Later experiments are described under [Dataset preparation and methodology](#dataset), but no results from them are reported here. The final evaluation of the hybrid system has not been completed.",
        "For what the app does today, see [Features](/features), [How it works](/how-it-works) and the [FAQ](/faq). For how the app handles data, see the [Privacy policy](/privacy).",
      ],
    },
    {
      id: "background",
      heading: "Research background and problem statement",
      body: [
        "The Philippines relies heavily on SMS for banking, financial transactions, government services and personal communication. Text messages commonly deliver one-time passwords, transaction notifications, government announcements and e-commerce updates. This widespread use also makes SMS a target for phishing, commonly called smishing.",
        "Attackers impersonate trusted institutions, direct recipients to fraudulent links, request sensitive information, or use deceptive claims involving prizes, refunds and payouts. Smishing is not limited to messages that contain suspicious links: it can also involve impersonation, requests for sensitive information or money, and deceptive claims.",
        "Reports indicate that smishing remains a concern. In the first quarter of 2024, Smart Communications reported blocking more than 13 million smishing messages (Rosales, 2024). Network-level defenses help, but deceptive messages can still reach users as attackers change their wording, impersonation tactics and links.",
        "The manuscript identifies a need for an additional, accessible and lightweight way to examine SMS content on the device, one that depends less on external services and can be used by people with limited connectivity or lower-resource phones. It also notes that the effectiveness of any such system depends on its implementation, training data and evaluation results.",
        "The related literature reviewed in the manuscript includes a survey of natural language processing and machine learning techniques for SMS spam detection (Al Saidat et al., 2024) and a multi-signal model for detecting evasive smishing (Hosseinpour & Das, 2025). The manuscript also considers the Philippine context, including perceptions of SIM card registration and concerns about the security of personal information (Diaz & Balbacal, 2024).",
      ],
    },
    {
      id: "objectives",
      heading: "Research objectives",
      body: [
        "**General objective.** To design, develop and evaluate PhishGuard, a native Android application that uses a hybrid approach combining rule-based heuristics and the Naive Bayes machine learning algorithm to identify potential phishing and scam-related SMS messages through local analysis.",
        "**Specific objectives.**",
        [
          "To develop a native Android application that analyzes incoming and previously received SMS messages for characteristics associated with potential phishing and scam-related activity.",
          "To implement a hybrid detection approach that combines rule-based heuristics, including suspicious keyword and URL pattern analysis, with the Naive Bayes machine learning algorithm.",
          "To integrate a user notification and warning mechanism that communicates potential phishing risks and helps users make informed decisions when handling suspicious SMS messages.",
          "To evaluate the detection performance of the developed system using appropriate classification metrics, including accuracy, precision, recall and F1-score, based on the finalized evaluation dataset and testing procedure.",
        ],
      ],
    },
    {
      id: "proposed-solution",
      heading: "Proposed solution",
      body: [
        "PhishGuard is a native Android application designed to analyze SMS content locally and warn the user when a message looks potentially suspicious. Its purpose is to give users an additional way to identify suspicious messages. It is not meant to replace mobile network filtering, web security services or other existing protections.",
        "The scope described in the manuscript includes:",
        [
          "analysis of incoming SMS messages;",
          "text preprocessing and feature extraction;",
          "hybrid classification that combines heuristic analysis and Naive Bayes classification;",
          "attention to message patterns relevant to Filipino users, including Filipino or Taglish expressions and scam-related wording, to the extent represented in the selected dataset and the implemented detection rules;",
          "warnings or notifications when a message is assessed as potentially suspicious;",
          "manual analysis of previously received messages;",
          "performance evaluation with the testing procedures documented in the study.",
        ],
        "The warnings are advisory. The application does not automatically delete, quarantine or block the original message.",
      ],
    },
    {
      id: "hybrid-approach",
      heading: "Hybrid heuristic and Naive Bayes approach",
      body: [
        "**Heuristic component.** A set of predefined rules checks the message for characteristics associated with suspicious messages, such as suspicious keywords and URL patterns. It returns a deterministic score and the identifiers of the rules that were triggered. Rules can miss messages that use unfamiliar wording and can flag legitimate messages that share similar characteristics.",
        "**Naive Bayes component.** The machine-learning component is a Complement Naive Bayes classifier. It uses TF-IDF text features together with message-level metadata features, and it classifies messages using patterns learned from labeled training data. Its performance depends on the quality, diversity and representativeness of that data.",
        "**Metadata features.** Fourteen message-level features describe characteristics such as the presence of URLs and phone numbers, currency indicators, urgency-related terms, payment-platform references, banking, delivery and government-related terms, prize-related terms, obfuscation indicators, Filipino-language word indicators, message length, uppercase-word count and digit ratio.",
        "**Fusion.** The two component outputs are combined as a weighted sum into one fused score between 0 and 1, which is compared with an alert threshold. A message is treated as potentially suspicious when the fused score meets or exceeds the threshold. The fused score is a decision score. It is not assumed to be a calibrated probability.",
        "The weights and threshold differ between the development stages documented in the manuscript, so each configuration is reported separately. The final selection of the primary configuration remains subject to confirmation by the researchers and their adviser.",
        "The manuscript is explicit that combining the two methods does not by itself make the approach better. The effectiveness of the hybrid approach has to be established through the study's evaluation results.",
      ],
    },
    {
      id: "architecture",
      heading: "System architecture and message-processing workflow",
      body: [
        "The architecture separates acquiring a message from detecting and presenting it. It consists of the user-interface entry point, components that read and receive SMS messages, a central detection engine, preprocessing and detection components, structured result objects, and model and rule assets stored inside the app. Because those assets are part of the app, the main detection process does not need an external classification service.",
        "**Real-time flow for a new message.**",
        [
          "Android delivers the SMS broadcast to the app, which obtains the sender address and the message text.",
          "The central engine passes the message to the text preprocessor, which produces a cleaned version of the text and the 14 metadata features.",
          "The heuristic component analyzes the original message and returns a rule score and the triggered rules.",
          "The Naive Bayes component builds TF-IDF features from the cleaned text, scales the metadata features, combines them and returns the estimated probability that the message belongs to the phishing class.",
          "The engine combines the two outputs into the fused score, applies the alert threshold and records the result, including the processing time.",
          "The app shows a warning notification for a message assessed as potentially suspicious and a normal notification otherwise.",
        ],
        "**Manual scan of stored messages.** When the user requests a scan, the app checks that SMS-reading permission has been granted, reads the stored messages through Android's SMS content provider, analyzes each one, totals the scan and threat counts, and stores the time of the completed scan locally.",
        "**Usage and battery overview.** A separate, optional module uses Android's Usage Access permission to list application foreground activity for the last 24 hours, 7 days or 30 days and to show an estimated battery share for each application. Android does not provide direct per-application battery consumption through this interface, so the figures are estimates and not direct measurements.",
      ],
    },
    {
      id: "dataset",
      heading: "Dataset preparation and methodology",
      body: [
        "The study used several datasets and experiments. The manuscript documents them separately because they used different data, labeling procedures and configurations, and their results are not combined.",
        "**Initial baseline dataset.** 1,200 SMS messages: 800 labeled as smishing and 400 labeled as legitimate. The manuscript states that the original source composition and labeling procedure were not fully documented, so this dataset is treated as a preliminary development dataset and not as an independently validated collection. It was split at random, stratified by class, into 960 training and 240 test messages. That split did not prevent duplicate and near-duplicate messages from appearing in both parts.",
        "**Reviewed UCI subset and the build 10t experiment.** The publicly available UCI SMS Spam Collection contains 5,574 messages. From it, 747 messages labeled as spam were selected for review and 105 exact duplicates were removed, leaving 642 messages. These were categorized using a codebook, with phishing and fraud categories assigned to the positive class. The result was 211 positive-class and 431 negative-class messages. Combined with the baseline dataset this gave 1,842 rows, and 1,357 remained after removing duplicates based on the cleaned message text. Messages were then grouped by text similarity (TF-IDF cosine similarity of at least 0.90) before being split into 1,085 training and 272 test messages, with no shared near-copy groups reported between the two parts.",
        "**Batch 01 and the M1 candidate.** A later collection of 630 respondent-provided SMS records was prepared to support development for Filipino and Taglish messages. Of these, 625 had determinate labels. The project reconciliation identified 483 records as eligible for training and 121 as reserved for a development holdout. They were used in a separate candidate configuration called M1, and its results are not combined with those of the other experiments. The manuscript notes that the records do not fully establish contributor-level grouping or all collection and consent details.",
        "**Preprocessing and leakage control.** Before training, the datasets were checked for structure, the message text was cleaned using the application's text-cleaning rules, exact duplicates were removed, near-duplicate messages were grouped, and training and test partitions were created. The documented final-study procedure fits the TF-IDF transformation and the metadata scaler using the training data. The initial baseline experiment instead fitted these components before the split, so its results are treated as preliminary.",
        "**Model development.** The classifier is a Complement Naive Bayes model. The documented build 10t configuration uses 500 TF-IDF features and 14 metadata features, 514 in total. The trained model and its scaling parameters are exported for use in the Android application.",
        "This page does not publish the datasets, message contents, labeling records or consent records.",
      ],
    },
    {
      id: "evaluation",
      heading: "Testing and evaluation",
      body: [
        "**Evaluation design.** Classification performance is assessed with accuracy, precision, recall and F1-score, calculated from the confusion matrix for each dataset and model configuration. The manuscript treats classification results, software tests, emulator demonstrations, physical-device tests, processing time and battery usage as different kinds of evidence. They are not interchangeable.",
        "**Preliminary results: initial baseline experiment (240-message test set).** These are the only classification results reported in the manuscript so far.",
        [
          "Model: Complement Naive Bayes with 500 TF-IDF features and 14 metadata features (514 in total); smoothing parameter alpha of 0.1, selected from the range 0.1 to 1.5 with five-fold cross-validation.",
          "Accuracy 99.17%, precision 100.00%, recall 98.75%, F1-score 99.37%.",
          "Confusion matrix: 80 true negatives, 0 false positives, 2 false negatives, 158 true positives.",
        ],
        "**How to read these results.** The manuscript describes them as the initial model experiment and states that they should not be interpreted as the final performance of the complete hybrid detection system. The baseline dataset's composition and labeling were not fully documented, it contained augmented samples, and duplicate and near-duplicate messages appeared across its training and test parts. The numbers show that the initial model could separate the two classes in that dataset. They do not show how it would perform on messages in general.",
        "**Later experiments.** The build 10t experiment used a better-documented separation of training and test messages (1,085 and 272). The M1 configuration was evaluated on a 326-message development holdout, 205 of whose messages had already appeared in the earlier build 10t training pool, so it is development evidence and not an independent acceptance test. No results from these experiments are reported on this page.",
        "**Application testing.** Software unit tests, instrumented tests, emulator runs and physical-device tests are documented as separate activities. Recorded emulator demonstrations on Android 8.0 and Android 16 used invented SMS messages. They show application behavior in those emulator environments. They do not establish that real messages are delivered or intercepted through a mobile carrier. Physical-device experiments were limited to earlier prototype builds and are treated separately.",
        "**Processing time and battery use.** These are measured separately from classification metrics. Where the measurement records are not available, the manuscript makes no numerical performance claim, and none is made here.",
        "**What comes next.** The refined dataset is to be used to retrain and re-evaluate the model with the same core measures, including processing time. Those results will be presented separately from the initial baseline experiment.",
      ],
    },
    {
      id: "scope-limitations",
      heading: "Research scope and limitations",
      body: [
        "**Scope.** The study covers SMS-based phishing and scam-related message detection on Android. It is not a general-purpose detector for phishing delivered by email, social media or other messaging platforms. The application is designed for devices with API level 23 (Android 6.0) and above. The manuscript states that this describes the intended compatibility range and does not imply that the application has been successfully tested on every supported Android version.",
        "**Limitations stated in the manuscript.**",
        [
          "**Platform and channel.** The tool is designed for Android and for SMS only.",
          "**Advisory functionality.** It classifies and warns. It does not delete, quarantine or block messages, and users remain responsible for how they respond.",
          "**Updates.** Detection runs locally without continuous internet access, so changes to the rules or the trained model may require an application or model update.",
          "**Dependence on training data.** The classifier's performance depends on the quality, diversity and representativeness of its training data. Messages that differ substantially from that data may be classified incorrectly.",
          "**Limited representation of real-world threats.** The datasets cover only the messages selected for collection and evaluation. The results do not establish that all existing or future phishing messages can be detected.",
          "**Testing environment.** Findings are based on the devices, Android versions, datasets and procedures actually used. Compatibility with an API level is not proof of successful testing on every device in that range.",
          "**Changing phishing techniques.** Scam wording, impersonation strategies and link patterns change over time, and detection may vary for patterns that the training data and rules do not represent.",
          "**Scope of the privacy evaluation.** Local analysis reduces the need to transmit message content, but the study is not a comprehensive security or privacy audit of the application, Android or the device.",
        ],
        "**Limitations of the data and evaluation.** The baseline dataset's source and labeling were not fully documented, and it has duplicate and near-duplicate overlap between its training and test parts. The build 10t results depend on the composition and labeling quality of the available datasets. The M1 holdout overlaps with the earlier training pool. The records for the Filipino and Taglish collection do not fully establish all collection, consent and contributor-level grouping details, so claims about representativeness and about generalization to all Filipino mobile users remain limited. Classification metrics, application behavior, processing time and battery use are different dimensions, and evidence for one does not establish another.",
      ],
    },
    {
      id: "privacy-considerations",
      heading: "Privacy considerations",
      body: [
        "PhishGuard is designed to analyze messages on the device, which reduces the need to send message content to external servers during detection. The manuscript is careful to add that local processing does not by itself guarantee complete privacy or remove every data-handling risk, and that the study is not a privacy audit.",
        "Privacy and responsible handling of personal data are part of the study's context. The literature the manuscript reviews on SIM card registration reports concerns about the security and possible misuse of personal information (Diaz & Balbacal, 2024).",
        "The app has one separate, optional feature that sends information over the internet: feedback that a user chooses to type and send. How the app stores and sends data is described on the [Privacy policy](/privacy) page, which is a draft.",
        "The data used in the research is not published on this site. The manuscript also states that the available records do not fully document the collection and consent details of the later Filipino and Taglish collection, and that further evaluation should come with complete data-governance documentation.",
      ],
    },
    {
      id: "references",
      heading: "References",
      body: [
        [
          "Al Saidat, M. R., Yerima, S. Y., & Shaalan, K. (2024). Advancements of SMS spam detection: A comprehensive survey of NLP and ML techniques. *Procedia Computer Science, 244*, 248–259. [https://doi.org/10.1016/j.procs.2024.10.198](https://doi.org/10.1016/j.procs.2024.10.198)",
          "Diaz, A. L., & Balbacal, R. M. (2024). Filipino attitude and perception on Subscriber Identity Module (SIM) Card Registration Act. *International Review of Social Sciences Research, 4*(4), 58–79. [https://doi.org/10.53378/irssr.353125](https://doi.org/10.53378/irssr.353125)",
          "Hosseinpour, S., & Das, S. (2025). POSTER: A multi-signal model for detecting evasive smishing. In *Proceedings of the 18th ACM Conference on Security and Privacy in Wireless and Mobile Networks (WiSec 2025)* (pp. 292–293). ACM. [https://doi.org/10.1145/3734477.3736147](https://doi.org/10.1145/3734477.3736147)",
          "Rosales, E. F. (2024, April 18). Smart blocks 13 million smishing messages. *The Philippine Star*. [https://www.philstar.com/headlines/2024/04/18/2348534/smart-blocks-13-million-smishing-messages](https://www.philstar.com/headlines/2024/04/18/2348534/smart-blocks-13-million-smishing-messages)",
        ],
      ],
    },
  ],
};
