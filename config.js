const config = {
  "settings": {
    "webhookUrl": "https://n8n.salesgenius.co/webhook/giveaway", // Updated for live giveaway form submissions
    "confettiColors": ["#FF7A00", "#FFC107", "#4CAF50", "#FFFFFF", "#FFF8F0"] // Default theme colors
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "giveaway": {
    "name": "Awesome Giveaway", // Default name, can be updated
    "heroHeadline": "Win an <span class='highlight'>Amazing Prize</span> in Our Giveaway!",
    "heroSubheadline": "Enter now for your chance to win big. Don't miss out on this incredible opportunity.",
    "promotionDates": "Promotion runs from July 1st to July 31st",
    "endDate": "2025-07-31T23:59:59", // Example end date
    "heroCtaText": "Enter the Giveaway",
    "entryFormCtaText": "Submit My Entry",
    "heroBackgroundImageUrl": "https://via.placeholder.com/1920x1080/eee/ccc?text=Hero+Background",
    "successModalHeaderText": "Entry Submitted!",
    "successModalMainMessage": "Your entry for the [GiveawayName] has been successfully submitted. Good luck!",
    "successModalEmailPrompt": "Winners will be contacted via email after the draw."
  },
  "prize": {
    "name": "Grand Prize Package",
    "value": "$500 Value",
    "description": "This amazing grand prize package includes a collection of fantastic items you won't want to miss. Perfect for treating yourself or sharing with someone special.",
    "images": [
      { "src": "https://via.placeholder.com/600x400/ddd/bbb?text=Prize+Image+1", "alt": "Main prize view" },
      { "src": "https://via.placeholder.com/600x400/ccc/aaa?text=Prize+Image+2", "alt": "Another view of the prize" }
    ],
    "includedItems": [
      { "icon": "fas fa-star", "text": "Exclusive Item A" },
      { "icon": "fas fa-gift", "text": "Special Bonus B" },
      { "icon": "fas fa-check-circle", "text": "Guaranteed Fun C" }
    ],
    "ctaButtonText": "I Want This Prize!",
    "limitedTimeOfferText": "Limited entries available - enter soon!"
  },
  "howToEnter": {
    "steps": [
      { "icon": "fas fa-user-plus", "title": "Sign Up", "description": "Fill out the entry form with your details." },
      { "icon": "fas fa-question-circle", "title": "Answer Questions", "description": "Complete a short, fun questionnaire." },
      { "icon": "fas fa-share-alt", "title": "Share (Optional)", "description": "Share with friends for bonus entries (if applicable)." }
    ],
    "highlights": [
      { "icon": "fas fa-trophy", "text": "Huge Grand Prize" },
      { "icon": "fas fa-clock", "text": "Limited Time Only" },
      { "icon": "fas fa-check", "text": "Easy to Enter" }
    ]
  },
  "entryForm": {
    "subtitle": "Fill in your details below to participate.",
    "entryCountText": "Over 1,000 entries so far!",
    "socialSharePrompt": "Share on social media for more chances (if applicable):",
    "sharePlatforms": {
        "facebook": "#",
        "twitter": "#"
    },
    "termsText": "By entering, you agree to the <a href='YOUR_TERMS_LINK_HERE' target='_blank'>Terms & Conditions</a> and <a href='YOUR_PRIVACY_POLICY_LINK_HERE' target='_blank'>Privacy Policy</a>."
  },
  "rules": {
    "fairSelectionInfo": {
        "title": "Fair & Random Selection",
        "text": "Winners are chosen through a fair and random selection process after the giveaway period ends. All valid entries have an equal chance."
    },
    "importantNotice": {
        "title": "Important Notice",
        "text": "No purchase necessary to enter or win. Void where prohibited. Open to residents aged 18+ in eligible regions. See full rules for details."
    },
    "faq": [
        { "q": "How will winners be notified?", "a": "Winners will be contacted via the email address provided during entry within 7 days of the giveaway closing." },
        { "q": "Can I enter more than once?", "a": "Typically, entries are limited to one per person, unless bonus entries for actions like sharing are specified." }
    ],
    "fullRulesPdfLink": "#", // Link to a PDF if you have one
    "tips": [
        "Ensure your email address is correct.",
        "Check your spam folder for notifications from [Organizer Name].",
        "Follow [Organizer Name] on social media for updates."
    ]
  },
  "footerContact": {
    "organizerName": "Giveaway Organizer Inc.",
    "organizerLogoUrl": "https://via.placeholder.com/150x50/ddd/bbb?text=Organizer+Logo",
    "email": "contact@example.com",
    "phone": "1-800-555-GIVE",
    "address": "123 Giveaway Lane, Contest City, CS 12345",
    "social": {
        "facebook": "#",
        "instagram": "#"
    },
    "copyrightOwner": "Giveaway Organizer Inc."
  },
  "meta": {
    "pageTitle": "Enter Our Amazing Giveaway!",
    "navBrandLogoText": "GiveawayTime",
    "privacyPolicyLink": "#",
    "termsLink": "#"
  },
  "deploymentInfo": { // Added from openhouse for potential future use
    "repoName": "Giveaway-Page-XYZ",
    "repoUrl": "https://github.com/yourusername/Giveaway-Page-XYZ",
    "tag": "Giveaway Campaign Summer 2025",
    "netlifyUrl": "https://n8n.salesgenius.co/webhook/giveawayupdate" // This would be for the main form, not the modal
  }
};