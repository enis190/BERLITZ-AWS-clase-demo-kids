const calendarios = [
  {
    mes: "MARZO", mesIndex: 2, año: 2026,
    eventos: [
      { dia: 13, nivel: "lvl-1", badge: "Level 1", titulo: "Giving personal details to a client", hora: "19 h" },
      { dia: 13, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Starting communication by, and responding to, an email", hora: "19 h" },
      { dia: 13, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Negotiations: Asserting yourself in bad faith negotiations", hora: "19 h" },
      { dia: 20, nivel: "lvl-1", badge: "Level 1", titulo: "Asking about the menu at a business lunch", hora: "19 h" },
      { dia: 20, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Making and handling a complaint by email", hora: "19 h" },
      { dia: 20, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Customer Service: The importance of Empathy in Customer Service", hora: "19 h" },
      { dia: 27, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about the weather", hora: "19 h" },
      { dia: 27, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Giving instructions by email", hora: "19 h" },
      { dia: 27, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Banking: The Role of Central Banks", hora: "19 h" },
    ]
  },
  {
    mes: "ABRIL", mesIndex: 3, año: 2026,
    eventos: [
      { dia: 10, nivel: "lvl-1", badge: "Level 1", titulo: "Simple Present vs. Present Progressive", hora: "19 h" },
      { dia: 10, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Creating a presentation outline", hora: "19 h" },
      { dia: 10, nivel: "lvl-3", badge: "Levels 5-10", titulo: "Berlitz Business Solutions: Facilitating external meetings", hora: "19 h" },
      { dia: 17, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about shopping", hora: "19 h" },
      { dia: 17, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Describing sales figures", hora: "19 h" },
      { dia: 17, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Sales: Describing the sales cycle and state goals and objectives", hora: "19 h" },
      { dia: 24, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about restaurants", hora: "19 h" },
      { dia: 24, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Suggesting ways to solve problems", hora: "19 h" },
      { dia: 24, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Presentations: Discuss verbal and nonverbal components of your presentation", hora: "19 h" },
    ]
  },
  {
    mes: "MAYO", mesIndex: 4, año: 2026,
    eventos: [
      { dia: 15, nivel: "lvl-1", badge: "Level 1", titulo: "Asking about business hours", hora: "19 h" },
      { dia: 15, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Introducing yourself and opening a presentation", hora: "19 h" },
      { dia: 15, nivel: "lvl-3", badge: "Levels 5-10", titulo: "Customer Service Vocabulary: Responding to an unreasonable client", hora: "19 h" },
      { dia: 22, nivel: "lvl-1", badge: "Level 1", titulo: "Describing your office", hora: "19 h" },
      { dia: 22, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Presenting information in a meeting", hora: "19 h" },
      { dia: 22, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Traveling: Getting medical help and Reporting theft, scams, and other problems", hora: "19 h" },
      { dia: 29, nivel: "lvl-1", badge: "Level 1", titulo: "Saying where you are going and how", hora: "19 h" },
      { dia: 29, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Interviews: Describing your skills", hora: "19 h" },
      { dia: 29, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Writing: Communicating good news, bad news and feedback by email", hora: "19 h" },
    ]
  },
  {
    mes: "JUNIO", mesIndex: 5, año: 2026,
    eventos: [
      { dia: 12, nivel: "lvl-1", badge: "Level 1", titulo: "Introducing yourself to a client", hora: "19 h" },
      { dia: 12, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Making travel arrangements by email", hora: "19 h" },
      { dia: 12, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Law: Advising and updating clients and colleagues, and commenting on developments", hora: "19 h" },
      { dia: 19, nivel: "lvl-1", badge: "Level 1", titulo: "Review of Simple Present", hora: "19 h" },
      { dia: 19, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Introducing your company", hora: "19 h" },
      { dia: 19, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Gastronomy: Talking about wines of the world", hora: "19 h" },
      { dia: 26, nivel: "lvl-1", badge: "Level 1", titulo: "Offering something to eat and drink", hora: "19 h" },
      { dia: 26, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Asking questions in a meeting", hora: "19 h" },
      { dia: 26, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Meetings: Talking about figures", hora: "19 h" },
    ]
  },
  {
    mes: "JULIO", mesIndex: 6, año: 2026,
    eventos: [
      { dia: 17, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about food preferences", hora: "19 h" },
      { dia: 17, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Involving the audience in a presentation", hora: "19 h" },
      { dia: 17, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for the Oil Industry: Identifying equipment and explaining processes", hora: "19 h" },
      { dia: 24, nivel: "lvl-1", badge: "Level 1", titulo: "Saying what you do every day", hora: "19 h" },
      { dia: 24, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Interviews: Describing your personal qualities", hora: "19 h" },
      { dia: 24, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Interviews: Describing your skills", hora: "19 h" },
      { dia: 31, nivel: "lvl-1", badge: "Level 1", titulo: "Describing places near your office", hora: "19 h" },
      { dia: 31, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Talking about data in a meeting", hora: "19 h" },
      { dia: 31, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Presentations: Difficulties during a presentation", hora: "19 h" },
    ]
  },
  {
    mes: "AGOSTO", mesIndex: 7, año: 2026,
    eventos: [
      { dia: 14, nivel: "lvl-1", badge: "Level 1", titulo: "Giving personal details to a client", hora: "19 h" },
      { dia: 14, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Assisting clients by email", hora: "19 h" },
      { dia: 14, nivel: "lvl-3", badge: "Levels 5-10", titulo: "Social Situations for Business: Converting new contacts into partners through networking", hora: "19 h" },
      { dia: 21, nivel: "lvl-1", badge: "Level 1", titulo: "Asking about the menu at a business lunch", hora: "19 h" },
      { dia: 21, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Talking about your career path", hora: "19 h" },
      { dia: 21, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Negotiations: Dealing with problems in a negotiation", hora: "19 h" },
      { dia: 28, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about the weather", hora: "19 h" },
      { dia: 28, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Making suggestions in a meeting", hora: "19 h" },
      { dia: 28, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Writing: Expressing facts versus opinions in writing", hora: "19 h" },
    ]
  },
  {
    mes: "SEPTIEMBRE", mesIndex: 8, año: 2026,
    eventos: [
      { dia: 11, nivel: "lvl-1", badge: "Level 1", titulo: "Simple Present vs. Present Progressive", hora: "19 h" },
      { dia: 11, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Signposting and moving through a presentation", hora: "19 h" },
      { dia: 11, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Customer Service: Developing your team's cultural competence", hora: "19 h" },
      { dia: 18, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about shopping", hora: "19 h" },
      { dia: 18, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Handling technical issues", hora: "19 h" },
      { dia: 18, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Gastronomy: Discussing and understanding issues in the food industry", hora: "19 h" },
      { dia: 25, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about restaurants", hora: "19 h" },
      { dia: 25, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Agreeing and Disagreeing in a meeting", hora: "19 h" },
      { dia: 25, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Project Management: Training someone on time management strategies", hora: "19 h" },
    ]
  },
  {
    mes: "OCTUBRE", mesIndex: 9, año: 2026,
    eventos: [
      { dia: 16, nivel: "lvl-1", badge: "Level 1", titulo: "Asking about business hours", hora: "19 h" },
      { dia: 16, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Emails: Asking for information by email", hora: "19 h" },
      { dia: 16, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Traveling: Interacting with locals in a restaurant, club, or bar", hora: "19 h" },
      { dia: 23, nivel: "lvl-1", badge: "Level 1", titulo: "Describing your office", hora: "19 h" },
      { dia: 23, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business Conferences: Setting up and leading a conference call", hora: "19 h" },
      { dia: 23, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Public Speaking: Integrating nonverbal techniques into a speech", hora: "19 h" },
      { dia: 30, nivel: "lvl-1", badge: "Level 1", titulo: "Saying where you are going and how", hora: "19 h" },
      { dia: 30, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Giving updates at work", hora: "19 h" },
      { dia: 30, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Insurance Professionals: Talking about the insurance industry and explaining insurance concepts", hora: "19 h" },
    ]
  },
  {
    mes: "NOVIEMBRE", mesIndex: 10, año: 2026,
    eventos: [
      { dia: 13, nivel: "lvl-1", badge: "Level 1", titulo: "Introducing yourself to a client", hora: "19 h" },
      { dia: 13, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Presenting visual aids in a presentation", hora: "19 h" },
      { dia: 13, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Negotiations: Defining obstacles to an agreement", hora: "19 h" },
      { dia: 20, nivel: "lvl-1", badge: "Level 1", titulo: "Review of Simple Present", hora: "19 h" },
      { dia: 20, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Meetings: Socializing during breaks", hora: "19 h" },
      { dia: 20, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Team Management: Formulating strategies for handling motivation and burnout", hora: "19 h" },
      { dia: 27, nivel: "lvl-1", badge: "Level 1", titulo: "Offering something to eat and drink", hora: "19 h" },
      { dia: 27, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Customer Service: Assisting people remotely by phone", hora: "19 h" },
      { dia: 27, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Finance and Accounting: Describing typical processes in finance and accounting", hora: "19 h" },
    ]
  },
  {
    mes: "DICIEMBRE", mesIndex: 11, año: 2026,
    eventos: [
      { dia: 11, nivel: "lvl-1", badge: "Level 1", titulo: "Talking about food preferences", hora: "19 h" },
      { dia: 11, nivel: "lvl-2", badge: "Levels 2-4", titulo: "Business English: Welcoming visitors to your company", hora: "19 h" },
      { dia: 11, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Social Situations: Discussing trends in social media", hora: "19 h" },
      { dia: 18, nivel: "lvl-1", badge: "Level 1", titulo: "Describing places near your office", hora: "19 h" },
      { dia: 18, nivel: "lvl-2", badge: "Levels 2-4", titulo: "English for Business Presentations: Handling questions in a presentation", hora: "19 h" },
      { dia: 18, nivel: "lvl-3", badge: "Levels 5-10", titulo: "English for Business Writing: Writing business summaries", hora: "19 h" },
    ]
  }
];
