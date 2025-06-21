const config = {
  "modalQuestions": [
    {
      "id": "live_event_experience",
      "questionText": "When it comes to experiences, how do you rate attending live sports events?",
      "options": [
        { "value": "must_have_regular", "text": "Must-have, I attend games regularly" },
        { "value": "enjoyable_few_times", "text": "Enjoyable, I go a few times a year" },
        { "value": "fun_rarely", "text": "Fun, but I rarely go" },
        { "value": "not_sports_fan", "text": "I'm not a sports fan" }
      ]
    },
    {
      "id": "current_living_situation",
      "questionText": "Which of the following best describes your current living situation?",
      "options": [
        { "value": "own_consider_upgrading", "text": "I own my home and am considering upgrading" },
        { "value": "own_happy", "text": "I own my home and am happy with it" },
        { "value": "rent_plan_buy_soon", "text": "I rent but plan to buy soon" },
        { "value": "rent_no_plans", "text": "I rent with no immediate plans to purchase" }
      ]
    },
    {
      "id": "canada_day_celebration",
      "questionText": "How do you usually celebrate national holidays, like Canada Day?",
      "options": [
        { "value": "hosting_events", "text": "Hosting/attending events or parties" },
        { "value": "traveling_vacations", "text": "Travelling or planning vacations" },
        { "value": "local_public_events", "text": "Enjoying local public events or festivals" },
        { "value": "relaxing_home", "text": "Relaxing at home" }
      ]
    },
    {
      "id": "transport_preference",
      "questionText": "What is your preference for transportation to a sporting event?",
      "options": [
        { "value": "public_transport", "text": "Public transport" },
        { "value": "drive", "text": "Drive my own car" },
        { "value": "ride_sharing", "text": "Ride-sharing services" },
        { "value": "walk", "text": "I live close enough to walk" }
      ]
    }
  ],
  "giveaway": {
    "name": "Jays Tickets Canada Day Giveaway",
    "heroHeadline": "Win <span class='highlight'>Free Jays Game Tickets</span> At Our Canada Day Booth!",
    "heroSubheadline": "Love baseball? Celebrate Canada Day in style with your chance to catch the Jays live! Enter now for a shot at tickets worth $100 	6ront miss out!",
    "promotionDates": "Enter at our Canada Day booth on July 1st. Winner will be drawn July 2, 2025!",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/38xw2wnjphrma0cqgnk8eq6n2r.jpg",
    "heroCtaText": "Enter to Win Now",
    "entryFormCtaText": "Enter for Jays Tickets!",
    "successModalHeaderText": "You're In!",
    "successModalMainMessage": "Your entry for the <strong>Jays Tickets Canada Day Giveaway</strong> has been received! We9ll draw and notify the winner by email on July 2, 2025. Good luck!",
    "successModalEmailPrompt": "Watch your inbox on July 2nd for winner news!"
  },
  "prize": {
    "name": "Jays Game Ticket Giveaway",
    "value": "$100 Value",
    "description": "Imagine yourself cheering in the stands, feeling the excitement as the Jays play under the bright summer sun. Win tickets for a Toronto Blue Jays game and enjoy a day of fun, food, and unforgettable moments. We love going to the ballpark and want to share that with you!",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/9cjh4n7sanrmc0cqgnk9ntmzfc.jpg",
        "alt": "People cheering in the stands at a Toronto Blue Jays game"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/zszwdhstedrme0cqgnkrxegrq0.jpg",
        "alt": "Jays fans smiling and having fun at the ballpark"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/v4bsm43t2hrma0cqgnktq7jajc.jpg",
        "alt": "Canada Day celebration at a baseball stadium"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/9keqpgnt8hrme0cqgnksjdkxf4.jpg",
        "alt": "Kids and adults enjoying a summer Jays game"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Tickets for a Jays baseball game" },
      { "icon": "fas fa-baseball-ball", "text": "Choose your game date (from available options)" },
      { "icon": "fas fa-users", "text": "Perfect for friends, families, or fans" },
      { "icon": "fas fa-star", "text": "$100 total prize value" }
    ],
    "limitedTimeOfferText": "Limited Canada Day Giveaway 	6 Only One Winner!",
    "ctaButtonText": "I Want Jays Tickets!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-edit",
        "title": "Fill Out the Form",
        "description": "Stop by our booth on Canada Day and fill out a quick entry form. Just your name and email needed!"
      },
      {
        "icon": "fas fa-check-circle",
        "title": "Submit Your Entry",
        "description": "Drop your entry into our giveaway box 	6 it only takes a few seconds."
      },
      {
        "icon": "fas fa-trophy",
        "title": "Winner Announced",
        "description": "We9ll draw and contact the winner on July 2, 2025 	6 just in time for summer fun!"
      }
    ],
    "highlights": [
      { "icon": "fas fa-clock", "text": "Entry takes less than 1 minute" },
      { "icon": "fas fa-gift", "text": "No purchase, completely free" },
      { "icon": "fas fa-users", "text": "Open to anyone who loves baseball" },
      { "icon": "fas fa-random", "text": "Fair and random winner" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win Jays tickets 	6 perfect for baseball fans!",
    "entryCountText": "Hundreds of neighbors have already entered 	6 don9t miss out!",
    "socialSharePrompt": "Love this chance? Share with your fellow baseball fans!",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Celebrate Canada Day with a chance to win Jays tickets!")
    },
    "entryFormCtaText": "Enter for Jays Tickets!"
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Every Entry Counts!",
      "text": "All entries go into a fair, random draw. No tricks or hidden rules."
    },
    "importantNotice": {
      "title": "Winner Chosen July 2nd!",
      "text": "The lucky winner will be contacted by email on July 2, 2025. Watch your inbox!"
    },
    "faq": [
      {
        "q": "Who can enter this giveaway?",
        "a": "Anyone who loves baseball can enter. All ages welcome!"
      },
      {
        "q": "Do I need to buy anything to enter?",
        "a": "No! Stopping by the booth and filling out the entry form is all it takes."
      },
      {
        "q": "How is the winner chosen?",
        "a": "A random draw from all valid entries. It9s fair and simple!"
      },
      {
        "q": "When will the winner be announced?",
        "a": "We will contact the winner by email on July 2, 2025."
      },
      {
        "q": "What if I can9t make it to the Jays game?",
        "a": "We9ll discuss alternative dates if possible 	6 but the prize is for Jays tickets only."
      }
    ],
    "tips": [
      "Double-check your email for accuracy",
      "Add shar@theskygroup.ca to your contacts to get winner updates",
      "Tell your friends and enjoy the booth fun on Canada Day",
      "Follow us on Instagram and Facebook for prize updates"
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFL2HBOV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T232937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGecz6R5WMRJ39mO4X9uZiwszyoeZfExmst4AxoYWbcVAiEA%2BYO%2Fu2Uey7e8UO2ahVk6rP2uDWFR9VhVc8S%2Fu7TmIM0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiIO382jJwxty9tpyrcAwELds8vvPeW6qyLvgUnQ0WH4VamcQG0mFgBpkci5o6iVkrZTCkWlV8Qc%2BV2rsnjljjLwsKTPNnFtfGM%2FYT1JwrYGb9HBw2707rIEFa4xgWUdjWJT4FqtCWbiOmlMhBd8S6G1ZI2rSp5iAbCDgrNt7exXqlULGs8DJgPlTqXG69K6iRRxE3RL06I883NpWy5rko0FS2qlrq1T4fzd66hUrcOCAqgxxQkBcjGb1Ry05phxsnp%2Fd0x4PgH25JFzQZMDe8J5xyXyH17RHiGk0HjPSe9kfWKe5p%2Fo%2B0uNb4Ds9gyMpaTouugQixH3VOMaBK49%2BFw3vXwUqK93n35nl%2BnQTzxBs5eXKJLEYnhcte8tvT7jLeHvymzh1PvFTEhwgEsRjAAOYTC4zk7SXCuprzs%2BnQTNiVddaVZIqK8znhIgrG3V0z7M6OlrgMvJTgFrxqdd0chPBBEwu5lHACTCafaMA905NhaOexmaps45Jkiy%2F3lhqEzrx23GlK1iKn4832Ofu9nP2P3cHfZ7YxU6qAWSN5PFdUd8RW%2F41ERgZ5R%2Be%2BhpucM1IGYfjGCpMAZbdHyfkvgairyR8xTZvmNz4HRwXSP485uNCwsbitqj72W%2FP%2BH8%2FfyuYOYlhxf2BnMMMD3zMIGOqUBh6q489Wjxh55K55TqXIEXZ24sGDWV0Ib6iPy0CDmtDgTBKBh5l%2F8tVYgXL27iQvQyjVp%2Bhd3MIvNQm3fHYrRz%2FIOPeSUuJYQq85eVvh9gocJfpUPCyqg7G%2FeEmlzTOqLBtldd8CqZjRhSE0cIOHZ7Nx70x0g%2B%2Bd1aYgF309UG7A%2F8hx%2BujBo%2Fx27syn5YFy7IJDn25cmqQjaMr5q1C4oONGUYvRl&X-Amz-Signature=53488ac36a5877db5a5f3156fc0032f963734cfd0c7b75cdfba6c479e58fd9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "secondaryLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFL2HBOV%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T232937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGecz6R5WMRJ39mO4X9uZiwszyoeZfExmst4AxoYWbcVAiEA%2BYO%2Fu2Uey7e8UO2ahVk6rP2uDWFR9VhVc8S%2Fu7TmIM0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiIO382jJwxty9tpyrcAwELds8vvPeW6qyLvgUnQ0WH4VamcQG0mFgBpkci5o6iVkrZTCkWlV8Qc%2BV2rsnjljjLwsKTPNnFtfGM%2FYT1JwrYGb9HBw2707rIEFa4xgWUdjWJT4FqtCWbiOmlMhBd8S6G1ZI2rSp5iAbCDgrNt7exXqlULGs8DJgPlTqXG69K6iRRxE3RL06I883NpWy5rko0FS2qlrq1T4fzd66hUrcOCAqgxxQkBcjGb1Ry05phxsnp%2Fd0x4PgH25JFzQZMDe8J5xyXyH17RHiGk0HjPSe9kfWKe5p%2Fo%2B0uNb4Ds9gyMpaTouugQixH3VOMaBK49%2BFw3vXwUqK93n35nl%2BnQTzxBs5eXKJLEYnhcte8tvT7jLeHvymzh1PvFTEhwgEsRjAAOYTC4zk7SXCuprzs%2BnQTNiVddaVZIqK8znhIgrG3V0z7M6OlrgMvJTgFrxqdd0chPBBEwu5lHACTCafaMA905NhaOexmaps45Jkiy%2F3lhqEzrx23GlK1iKn4832Ofu9nP2P3cHfZ7YxU6qAWSN5PFdUd8RW%2F41ERgZ5R%2Be%2BhpucM1IGYfjGCpMAZbdHyfkvgairyR8xTZvmNz4HRwXSP485uNCwsbitqj72W%2FP%2BH8%2FfyuYOYlhxf2BnMMMD3zMIGOqUBh6q489Wjxh55K55TqXIEXZ24sGDWV0Ib6iPy0CDmtDgTBKBh5l%2F8tVYgXL27iQvQyjVp%2Bhd3MIvNQm3fHYrRz%2FIOPeSUuJYQq85eVvh9gocJfpUPCyqg7G%2FeEmlzTOqLBtldd8CqZjRhSE0cIOHZ7Nx70x0g%2B%2Bd1aYgF309UG7A%2F8hx%2BujBo%2Fx27syn5YFy7IJDn25cmqQjaMr5q1C4oONGUYvRl&X-Amz-Signature=53488ac36a5877db5a5f3156fc0032f963734cfd0c7b75cdfba6c479e58fd9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "secondaryLogoAlt": "Property.Ca Brokerage Logo",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "brokerageName": "Property.Ca",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "agentContact": {
      "name": "Shar Banifatemi",
      "title": "Realtor, Sky Group",
      "phone": "1 647 887 4996",
      "email": "shar@theskygroup.ca"
    },
    "copyrightOwner": "Property.Ca",
    "footerDisclaimer": "This giveaway is not sponsored by or affiliated with the Toronto Blue Jays or Rogers Centre. Winner will be drawn at random from all entries on July 2, 2025. Open to all attendees. No purchase necessary."
  },
  "meta": {
    "pageTitle": "Win Free Jays Tickets This Canada Day 	6 $100 Value!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "theme": "dark",
    "primaryColorOverride": "",
    "showCountdownInHero": true,
    "facebookPixelId": "1057475448873422",
    "salesGeniusAppApi": "",
    "followUpBossEmail": ""
  },
"thankYouPage": {
    "pageTitle": "Thank You for Your Entry!",
    "headerText": "🎉 Thank You! 🎉",
    "mainMessage": "Your entry has been successfully submitted. We'll announce the winner soon. Good luck!",
    "socialPromptText": "To complete your giveaway entry and stay updated, please follow us on our social media channels:"
    
  },
  "deploymentInfo": {
    "repoName": "Giveaway-598",
    "repoUrl": "https://github.com/arslvn93/Giveaway-598",
    "netlifyUrl": "http://Giveaway-598.netlify.app",
    "netlifyId": "1004625043"
  }
};