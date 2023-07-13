export const json = {
  title: "Needs Assesment!",
  logoPosition: "right",
  focusFirstQuestionAutomatic: false,
  completedHtml: "<h3>Needs Assesment Completed</h3>",
  questionErrorLocation: "bottom",
  showQuestionsNumbers: true,
  elements: [
    {
      type: "checkbox",
      name: "current-services",
      title: "Current Services",
      description: "",
      choices: [
        "Supplemental Nutrition Assistance Program (SNAP)",
        "Temporary Assistance for Needy Families (TANF)",
        "Oregon Health Plan (OHP)"
      ],
      isRequired: false,
      colCount: 1,
      showOtherItem: true,
      showNoneItem: true,
      separateSpecialChoices: true
    },
    {
      type: "dropdown",
      name: "veteran-status",
      title: "Veteran Status",
      description:
        "A person who served in the ACTIVE military, navel, or air service and who was discharged or released under conditions other than dishonorable. Or, a RESERVIST or member of the NATIONAL GUARD called to Federal active duty or disabled from a disease or injury incurred or aggravated in line of duty or while in training status also qualify as a veteran.",
      choices: ["Yes", "No"],
      isRequired: false
    },
    {
      type: "checkbox",
      name: "household-urgent-basic-needs",
      title: "Household Urgent Basic Needs",
      choices: ["Food", "Water", "Shelter", "Medical Care"],
      isRequired: false,
      colCount: 1,
      showOtherItem: true,
      showNoneItem: true,
      separateSpecialChoices: true
    },
    {
      type: "checkbox",
      name: "individual-household-circumstance",
      title: "Individual/Household Circumstance",
      choices: [
        "Household is still in process of recovering from previous disaster",
        "Household Suffered damage to primary residence",
        "Displaced from damaged residence",
        "Living in unsafe/unsanitary household",
        "Single Head of Household",
        "Household has limited access to information and resources",
        "Household has limited access to transportation"
      ],
      isRequired: false,
      colCount: 1,
      showOtherItem: true,
      separateSpecialChoices: true
    },
    {
      type: "dropdown",
      name: "primary-or-preferred-language",
      title: "Primary or Preferred Language",
      choices: [
        "Spanish",
        "Chinese",
        "French",
        "German",
        "Tagalog",
        "Vietnamese"
      ],
      isRequired: false
    },
    {
      type: "dropdown",
      name: "human-impact-priority",
      title: "Human Impact Priority",
      choices: [
        "Tier 1: Immediate needs met",
        "Tier 2: Some remaining unmet needs",
        "Tier 3: Significant unmet needs",
        "Tier 4: Immediate and long term unmet needs"
      ],
      isRequired: false
    },
    {
      type: "dropdown",
      name: "additional-assistance",
      title: "Additional Assistance",
      choices: ["Yes", "No"],
      isRequired: false
    }
  ]
};
