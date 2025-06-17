const config = {
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
    "name": "Burger Jabs Feast",
    "heroHeadline": "Win a <span class='highlight'>$100 Burger Feast</span> at Burger Jabs!",
    "heroSubheadline": "Enter for a chance to indulge in a $100 meal at Burger Jabs—where family, flavor, and community come together!",
    "promotionDates": "Promotion runs from May 9, 2025 until June 9, 2025.",
    "endDate": "2025-07-09T23:59:59",
    "heroBackgroundImageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1990&q=80",
    "heroCtaText": "Enter Now for a Feast!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Burger Jabs $100 Feast Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after the draw date. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Burger Jabs $100 Family Feast Voucher",
    "value": "$100 Value",
    "description": "Get ready to treat your family (or yourself!) to an unforgettable meal. You're entering for a chance to win a $100 gift voucher to enjoy juicy burgers, crispy fries, refreshing drinks, and more at Burger Jabs—the newest local hotspot that brings community and incredible flavor together under one roof.",
    "images": [
      {
        "src": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        "alt": "Delicious Burger Combo"
      },
      {
        "src": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        "alt": "Another view of burgers"
      },
      {
        "src": "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "alt": "Fries and Burger"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Exclusive $100 gift voucher for anything on the menu" },
      { "icon": "fas fa-users", "text": "Perfect for a family feast or a treat with friends" },
      { "icon": "fas fa-store-alt", "text": "Support a fantastic local business: Burger Jabs" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy online entry!" }
    ],
    "limitedTimeOfferText": "🎁 Limited Time Giveaway!",
    "ctaButtonText": "I WANT TO WIN THIS!"
  },
  "howToEnter": { //Do Not Change
    "steps": [ //Do Not Change
      {
        "icon": "fas fa-keyboard",
        "title": "Fill the Form",
        "description": "Simply enter your name and email address in the form below. It takes less than 30 seconds!"//Do Not Change
      },
      {
        "icon": "fas fa-share-alt",
        "title": "Share (Optional)",
        "description": "Spread the word on social media using the links after you enter. (Sharing is caring, but not required for entry!)" //Do Not Change
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Email",
        "description": "We'll contact the winner via email. Make sure you enter a valid email address and check your spam folder too!" //Do Not Change
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-gift", "text": "Amazing $100 Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win this delicious prize!",
    "entryCountText": "Over 500+ entries already! Don't miss out!",
    "socialSharePrompt": "Tell your friends about this awesome giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Check out this amazing Burger Jabs giveaway!")
    },
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Our winner selection process is completely random and unbiased, ensuring everyone has an equal chance. The draw will be conducted using a certified random number generator."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The lucky winner will be contacted exclusively via the email address provided during entry. Please ensure your email is correct. We recommend checking your inbox, promotions tab, and spam/junk folder regularly after the giveaway concludes."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "This giveaway is open to legal residents of [Your City/Region/Country] who are 18 years of age or older at the time of entry."
      },
      {
        "q": "How long does the giveaway run?",
        "a": "The giveaway starts on May 9, 2025, and all entries must be received by June 9, 2025, at 11:59 PM [Your Timezone]."
      },
      {
        "q": "How will the winner be selected?",
        "a": "One (1) winner will be selected in a random drawing from all eligible entries received during the promotion period."
      },
      {
        "q": "When and how will the winner be notified?",
        "a": "The potential winner will be notified by email on or about June 12, 2025. They will have [e.g., 48 hours] to respond and claim their prize."
      },
      {
        "q": "How many times can I enter?",
        "a": "Limit one (1) entry per person/email address during the entire promotion period. Duplicate entries will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "We respect your privacy. Your information will be used solely for the purpose of this giveaway and in accordance with our Privacy Policy. We do not sell your data."
      }
    ],
    "tips": [
      "Double-check your email address for typos before submitting.",
      "Add our contact email (if provided in footer) to your address book to ensure you receive notifications.",
      "Follow [Organizer Name] on social media for winner announcements (optional)."
    ]
  },
  "footerContact": {
    "organizerName": "Burger Jabs Restaurant",
    "organizerLogoUrl": "https://via.placeholder.com/200x60/FF7A00/4A3F35?text=Burger+Jabs",
    "email": "hello@burgerjabs.com",
    "phone": "(555) 123-BURGER",
    "address": "123 Delicious Lane, Foodie Town, USA",
    "social": {
      "facebook": "",
      "instagram": ""
    },
    "copyrightOwner": "Burger Jabs Co."
  },
  "meta": {
    "pageTitle": "Burger Jabs $100 Feast Giveaway!",
    "navBrandLogoText": "Burger Jabs",
    "privacyPolicyLink": "",
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#FF7A00", "#FFC107", "#4CAF50", "#FFFFFF", "#FFF5E6"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "openhouse",
    "repoUrl": "https://github.com/arslvn93/openhouse",
    "tag": "Open House 168 Abbey",
    "netlifyUrl": "https://openhousetester.netlify.app/",
    "netlifyId": "547dc1ef-2c83-4d08-815f-344d40fc3ca2"
  }
};