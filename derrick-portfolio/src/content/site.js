// The portfolio's content, in one place. Every page reads from here.
//
// Sources (nothing here is invented):
//   - the live portfolio at derrick-data-insight.lovable.app (roles, dates, projects, case studies, capabilities, services)
//   - Derrick's CV in public/Derrick-Lubanga-Data-Scientist-CV.pdf (degrees, CV-only role details)
//   - this repository's records and Derrick's own GitHub repositories (code and demo links, the IMARIKA pipeline,
//     the ABC-VEN thesis app, the insurance hackathon chatbot, the database retrieval chatbot)
//
// TODO lists live next to the data they belong to. A null or empty value is never shown on the site:
// the page leaves that link, section or line out.

export const profile = {
  name: 'Derrick Lubanga',
  title: 'Data Scientist & ML Engineer',
  location: 'Nairobi, Kenya',
  motto: 'Evidence, engineering, and empathy in equal measure.',
  email: 'lubanga.derrickn@gmail.com',
  phone: '+254743684173',
  phoneShown: '+254 743 684 173',
  links: {
    // confirmed by Derrick (November 2026); the older /in/lubanga99 is no longer used
    linkedin: 'https://www.linkedin.com/in/lubangaderrick/',
    github: 'https://github.com/LubangaD',
  },
  // the flattened portrait (share image and structured data); the pages show the transparent derrick-cutout.webp
  portrait: '/assets/img/derrick-portrait.webp',
  // Derrick's resume (November 2026, with the Stahili Commerce role)
  cvUrl: '/Derrick-Lubanga-Data-Scientist-CV.pdf',
  // TODO(Derrick): a booking link (Calendly, Cal.com). While null the site says "Discuss an Opportunity", never "Book a Discovery Call".
  calendarUrl: null,
  // TODO(Derrick): the production domain once this site is deployed there. The resume lists https://de-lubanga.onrender.com/
  // as the portfolio. While null no sitemap, robots.txt or canonical URL is generated.
  siteUrl: null,
  languages: ['English (proficient)', 'Swahili (native)'],
  // TODO(Derrick): genuine testimonials only: { quote, author, title, organisation, photo }. While empty none render.
  testimonials: [],
  // The one verified headline figure (live portfolio, Stahili Commerce)
  headlineMetric: { value: '1M+', label: 'consumer response data points transformed into executive-level market reports', context: 'Stahili Commerce' },
};

export const organisations = [
  { name: 'Stahili Commerce', relationship: 'Professional role', kind: 'employment' },
  { name: 'iLab Africa', relationship: 'Professional and research roles', kind: 'employment' },
  { name: 'SUGAR Network for Design Innovation', relationship: 'Design innovation collaboration', kind: 'collaboration' },
  { name: 'Meru County Government', relationship: 'Data analyst internship', kind: 'employment' },
  { name: 'CNEAT Research Academy', relationship: 'Research assistantship', kind: 'employment' },
  { name: 'Tunga Innovation Ltd', relationship: 'AbleSpeak and the AKI hackathon chatbot', kind: 'collaboration' },
  { name: 'Strathmore University', relationship: 'Education and iLab Africa affiliation', kind: 'education' },
  { name: 'Kenya Methodist University', relationship: 'Education and digital support role', kind: 'education' },
];

// Challenge, action and outcome for each role. Outcomes only where the live portfolio, the earlier CV or the
// November 2026 resume documents them. A role without a written challenge shows its action and outcome only.
export const experience = [
  {
    role: 'Data Scientist', organisation: 'Stahili Commerce', location: 'Nairobi, Kenya', period: 'October 2025 – Present',
    challenge: 'Leadership needs consumer insight it can act on from a large body of survey responses.',
    action: 'I build the Survey-to-Story pipeline from BigQuery and Dataform into the analytics dashboard, including an AI-driven report synthesis step that writes narrative summaries with embedded charts from filtered survey data. I also built geospatial layers that track purchasing behaviour across Living Standards Measure groups in East Africa, an interactive dashboard across demographic and geographic segments with end-to-end QA testing, and I migrate legacy BigQuery logic into modular Dataform and SQLX workflows.',
    outcome: 'More than 1 million consumer response data points turned into executive-level market reports.',
    caseStudy: 'survey-to-story',
  },
  {
    role: 'Junior Data Scientist', organisation: 'iLab Africa, Strathmore University', location: 'Nairobi, Kenya', period: 'July 2025 – October 2025',
    challenge: 'The Kenya Livestock Masterplan and a weather programme for farmers needed data they could trust.',
    action: 'I built statistical models and validation frameworks to forecast poultry population for the Kenya Livestock Masterplan, automated pipelines with built-in validation for IMARIKA LoRaWAN sensors across remote agricultural stations, anomaly detection inside the live streams, and Neural GCM weather forecasts for local farming communities.',
    outcome: 'Dataset consistency across five regional sources improved by 25%; the sensor pipelines process more than 100,000 telemetry readings a day for Power BI reporting.',
    caseStudy: 'kenya-livestock-masterplan',
  },
  {
    role: 'Design Thinking Innovator', organisation: 'SUGAR Network for Design Innovation', location: 'Potsdam, Germany (hybrid)', period: 'December 2024 – June 2025',
    challenge: 'Cross-functional innovation teams across two continents needed a shared way to work.',
    action: 'I ran 12 cross-functional design-thinking workshops across international teams, managed work across European and African time zones, turned data requirements into technical task backlogs, and set data governance and privacy checks for the prototypes.',
    outcome: 'A 91% stakeholder agreement score on the workshops’ business and technical roadmaps; international collaborative research opportunities up 42% as Kenyan institutions joined the network.',
    caseStudy: 'ablespeak',
  },
  {
    role: 'Data Science Research Scholar', organisation: 'iLab Africa, Strathmore University', location: 'Nairobi, Kenya', period: 'May 2023 – June 2025',
    challenge: 'Research and industry partners needed working analytics, from streaming data to forecasts and patient feedback.',
    action: 'I built real-time ETL pipelines with Kafka, Spark and SQL on GCP and Azure, a real-time AI chatbot, NLP analysis of hospital reviews, forecasting and reorder-point models, Docker and CI/CD set-ups for shared research projects, and taught data science.',
    outcome: 'Anomaly-detection latency under 5 minutes for healthcare data; financial planning accuracy up 15%; hospital overstocking and holding costs down 20%; a Power BI dashboard presented at the Kenya–EU Economic Partnership Agreement forum.',
    caseStudy: 'weather-iot-pipeline',
  },
  {
    role: 'Data Analyst Intern', organisation: 'Meru County Government', location: 'Meru, Kenya', period: 'May 2022 – October 2022',
    challenge: 'County departments planned budgets from procurement and consumption data that was hard to use.',
    action: 'I cleaned and validated the data in Python and built Power BI dashboards for evidence-based policy planning.',
    outcome: 'Reports that informed strategic budget reallocations across county departments.',
  },
  {
    role: 'Data Science Research Assistant', organisation: 'CNEAT Research Academy', location: 'Meru, Kenya', period: 'October 2020 – April 2022',
    challenge: 'Students with physical disabilities needed accessible tools, and programmes needed evidence on what worked.',
    action: 'I supported assistive-technology research and data analysis, contributed to inclusive learning programmes and delivered accessibility-technology training.',
    outcome: 'More than 60 students with physical disabilities trained on screen readers and accessibility software.',
  },
  {
    role: 'Digital Support Associate', organisation: 'Kenya Methodist University', location: 'Meru, Kenya', period: 'September 2019 – November 2022',
    action: 'I developed websites and internal tools with HTML, CSS, JavaScript and WordPress, and ran IT support for students and staff.',
    outcome: 'Club engagement up 20% through social media analytics and content management.',
  },
];

export const education = [
  { degree: 'Master of Science, Data Science and Analytics', school: 'Strathmore University', note: 'Thesis: Predictive Analytics for ABC-VEN Inventory Optimization in Kenyan Hospitals' },
  { degree: 'Bachelor of Science, Mathematics and Computer Science', school: 'Kenya Methodist University', note: 'Major in Mathematics, minor in Computer Science' },
];

// Work types: Professional, Academic research, Prototype
export const caseStudies = [
  {
    slug: 'survey-to-story', featured: true, title: 'Survey-to-Story Pipeline', context: 'Stahili Commerce', workType: 'Professional',
    summary: 'A survey data pipeline: responses stream from the member app into BigQuery, Dataform cleans and weights them, and nightly data cubes feed an analytics dashboard with AI-written narratives and executive market reports.',
    outcome: 'Executive-level market reports built from 1M+ consumer response data points.',
    role: 'Data Scientist at Stahili Commerce. I developed the Survey-to-Story pipeline and its AI-driven report synthesis, the analytics dashboard and its QA testing, and the geospatial layers, and I migrate legacy BigQuery views and stored procedures into modular Dataform and SQLX workflows.',
    problem: 'Make large-scale consumer response data useful for executive market reporting.',
    dataContext: 'More than 1 million consumer response data points, segmented by demographics, geography and Living Standards Measure group across East Africa. Further counts and dataset details are not documented here.',
    approach: 'Members answer surveys in the mobile app, and every answer is written as an event to Firestore. A Cloud Function streams each event into BigQuery. A daily Dataform run (SQLX) turns the raw events into staging models and a star schema of dimensions and facts, scores respondent quality (attention checks, straight-lining, speed), weights results to census and audience targets, and checks itself with assertions. A nightly job then builds pre-aggregated DuckDB cubes on Cloud Storage. The analytics dashboard, a Next.js app on Cloud Run that replaced earlier Looker Studio reports, queries those cubes in memory and draws its charts with D3 across demographic, geographic and Living Standards Measure segments. Gemini writes the narrative summaries and the monthly PDF reports from the same filtered data, and every dashboard module goes through end-to-end QA testing.',
    // from the member app to the analytics dashboard: cards across the band, BigQuery and Dataform as the core,
    // Gemini writing narratives from the cubes into the dashboard; a snake of tiles on tablets and phones
    workflow: {
      layout: 'free',
      alt: 'Survey answers from the member app are written to Firestore as events, streamed into BigQuery and modelled by Dataform, built nightly into DuckDB cubes, and shown in the analytics dashboard, with Gemini writing narratives and reports from the same cubes.',
      nodes: [
        { id: 'app', label: 'Member app', sub: 'Survey answers', icon: 'ui:smartphone', kind: 'card', kindCompact: 'tile', at: [0.08, 0.62], atCompact: [0.18, 0.2] },
        { id: 'events', label: 'Firestore', sub: 'Answer events', icon: 'logos:firebase-icon', kind: 'card', kindCompact: 'tile', at: [0.26, 0.62], atCompact: [0.5, 0.2] },
        { id: 'bq', label: 'BigQuery', sub: 'Dataform models', icon: 'si:googlebigquery', kind: 'core', at: [0.45, 0.62], atCompact: [0.82, 0.2] },
        { id: 'cubes', label: 'DuckDB cubes', sub: 'Built nightly', icon: 'si:duckdb', kind: 'card', kindCompact: 'tile', at: [0.64, 0.62], atCompact: [0.82, 0.54] },
        { id: 'ai', label: 'Gemini', sub: 'Narratives, PDFs', icon: 'si:googlegemini', kind: 'card', kindCompact: 'tile', at: [0.78, 0.2], atCompact: [0.5, 0.86] },
        { id: 'dash', label: 'Analytics dashboard', sub: 'Next.js, D3 charts', icon: 'logos:nextjs-icon', kind: 'card', kindCompact: 'tile', done: true, at: [0.91, 0.62], atCompact: [0.18, 0.54] },
      ],
      edges: [
        { from: 'app', to: 'events' },
        { from: 'events', to: 'bq' },
        { from: 'bq', to: 'cubes' },
        { from: 'cubes', to: 'dash' },
        { from: 'cubes', to: 'ai' },
        { from: 'ai', to: 'dash' },
      ],
    },
    evidence: 'The portfolio record confirms 1M+ consumer response data points transformed into executive-level market reports; my resume describes the report synthesis, geospatial and dashboard work.',
    tools: ['BigQuery', 'Dataform', 'SQLX', 'Firestore', 'DuckDB', 'Next.js', 'D3', 'Gemini', 'Cloud Run', 'Geospatial mapping'],
    scopeNote: 'No time savings, adoption figures or further market counts are claimed.',
    // TODO(Derrick): lessons learned, and any figures you can share (report cadence, markets covered, time saved).
    lessons: null, links: {}, related: 'kenya-livestock-masterplan',
  },
  {
    slug: 'kenya-livestock-masterplan', featured: true, title: 'Kenya Livestock Masterplan: Data Quality and Validation', short: 'Kenya Livestock Masterplan', context: 'iLab Africa, Strathmore University', workType: 'Professional',
    summary: 'Statistical models and data validation frameworks developed for the Kenya Livestock Masterplan.',
    outcome: 'Dataset consistency across five regional sources improved by 25%.',
    role: 'Junior Data Scientist at iLab Africa, Strathmore University. I built the statistical models and the data validation frameworks, including forecasts of poultry population and production.',
    problem: 'Support the Kenya Livestock Masterplan with statistical modelling and data that is accurate and consistent across sources.',
    dataContext: 'Five regional data sources. The dataset, sample size and specific validation constraints are not documented in the available materials.',
    approach: 'Predictive statistical models forecast poultry population, and validation frameworks check accuracy and consistency across the regional sources. Further architecture and model details are not available.',
    evidence: 'My resume records the 25% improvement in dataset consistency across the five regional sources; model accuracy figures were not supplied.',
    tools: ['Statistical modelling', 'Data validation', 'Python'],
    scopeNote: 'No model accuracy figures or programme outcomes are claimed.',
    // TODO(Derrick): validation rules, data sources and any results the programme allows you to share.
    lessons: null, links: {}, related: 'weather-iot-pipeline',
  },
  {
    slug: 'abc-ven-hospital-inventory-research', featured: true, title: 'Predictive Analytics for ABC-VEN Inventory Optimization in Kenyan Hospitals', short: 'ABC-VEN hospital inventory research', context: 'MSc thesis, Strathmore University', workType: 'Academic research',
    summary: 'MSc research that predicts reorder points for hospital pharmaceuticals, combining ABC classification by inventory value with VEN classification by clinical criticality.',
    outcome: 'A reorder-point model and a working Streamlit tool for hospital pharmacy stock.',
    role: 'My MSc thesis. I built the ABC-VEN classification, the reorder-point models and the Streamlit application (github.com/LubangaD/mythesis).',
    problem: 'Hospitals must decide when to restock each medicine, and a medicine’s cost and its clinical importance pull in different directions.',
    dataContext: 'Historical pharmaceutical demand, lead times and consumption patterns (thesis application). ABC groups items by inventory value; VEN groups them as vital, essential or non-essential by clinical criticality. The hospitals and sample size are not specified here.',
    approach: 'Items are classified on the ABC-VEN matrix, machine-learning models (including a stacking model) predict each product’s reorder point, and SHAP explanations show why a prediction was made. The application plots stock against the reorder point and safety stock.',
    // vertical everywhere: beside the words on the case study, down the panel on Home and Research
    workflow: { layout: 'timeline', orient: 'v', alt: 'Data collection, ABC-VEN classification, model training, reorder-point prediction, inventory optimisation, order placement and stock replenishment, in a loop.',
      steps: [
        { label: 'Demand data', sub: 'Lead times', icon: 'ui:database' },
        { label: 'ABC-VEN', sub: 'Value, criticality', icon: 'ui:shield-check' },
        { label: 'ML models', sub: 'Stacking', icon: 'ui:bot' },
        { label: 'ROP', sub: 'Per product', icon: 'ui:chart-line' },
        { label: 'Replenish', sub: 'Order placed', icon: 'ui:file-text' },
      ] },
    evidence: 'The thesis title, the ABC-VEN method and the working application are confirmed. My resume records that the reorder-point prediction work at iLab Africa reduced hospital overstocking and holding costs by 20%; the thesis’s own measured findings and validation results are not yet published here.',
    tools: ['Python', 'Scikit-learn', 'SHAP', 'Streamlit', 'Plotly'],
    scopeNote: 'Thesis file, publication status and measured findings are not available in the current materials.',
    // TODO(Derrick): the thesis abstract, measured findings and the thesis PDF (it would go in public/ and in research.thesisFile).
    lessons: null,
    links: { code: 'https://github.com/LubangaD/mythesis', demo: 'https://avenuehealthcaretool.streamlit.app/' },
    image: { src: '/assets/img/photo-f177726226-960.jpg', alt: 'Shelves of labelled medicine jars in an old pharmacy', standIn: true },
    related: 'hospital-review-intelligence',
  },
  {
    // Sources: the Chrome Web Store listing (published from Derrick's developer account) and the AbleSpeak for
    // Windows page, both read on 12 November 2026.
    slug: 'ablespeak', featured: true, title: 'AbleSpeak', context: 'Tunga Innovation Ltd, Nairobi', workType: 'Product',
    summary: 'Voice control for people who cannot easily use a mouse or keyboard: a Chrome extension for hands-free browsing and dictation, and a Windows app that opens apps, reads the screen and dictates by voice.',
    outcome: 'Live on the Chrome Web Store (version 2.2.1, rated 5.0) and available as a Windows download.',
    // role confirmed by Derrick (November 2026): he built AbleSpeak himself
    role: 'Designing and building the Chrome extension and the Windows app, published under Tunga Innovation Ltd in Nairobi.',
    problem: 'People with motor impairments, and anyone who cannot easily use a mouse or keyboard, are shut out of much of the web and the desktop.',
    dataContext: 'Privacy and reach shaped the design. The Chrome extension needs no account and runs no servers of its own: it uses Chrome’s built-in Web Speech API for recognition and keeps settings on the device. It understands several English accents, including African English, as well as Swahili and Japanese. The work builds on accessibility-technology training and research at CNEAT Research Academy.',
    approach: 'The Chrome extension turns speech into browser actions: scrolling, going back, clicking and searching, with numbered tags on the clickable parts of complex sites, dictation into text fields and Google Docs, personal voice shortcuts, extra listening time and confirmation prompts. AbleSpeak for Windows extends the same idea to the whole computer: simple commands run at once (“Open Notepad”), requests that start with “AbleSpeak”, such as “AbleSpeak, what’s on my screen?”, are sent to Google to interpret, and a companion browser extension lets it act on websites.',
    evidence: 'The Chrome Web Store lists AbleSpeak in Accessibility, version 2.2.1 (updated 16 September 2026), rated 5.0 from 6 ratings as of November 2026. The Windows app is a public download from Tunga Innovation.',
    tools: ['Chrome extension', 'Web Speech API', 'JavaScript', 'Windows', 'Voice interaction', 'Accessibility'],
    scopeNote: 'Early adoption; no impact study or usage analytics are claimed.',
    lessons: null,
    links: { site: 'https://ablespeakcompnav.tungainnovation.com/', store: 'https://chromewebstore.google.com/detail/ablespeak/gmelenkemekbdhfjbdmfkjhjahhnaila' },
    related: 'abc-ven-hospital-inventory-research',
  },
  {
    slug: 'weather-iot-pipeline', title: 'IMARIKA Weather and IoT Pipeline', context: 'iLab Africa, Strathmore University', workType: 'Academic research',
    summary: 'A streaming pipeline for IMARIKA LoRaWAN weather stations: Kafka and Spark Streaming clean and check the readings, Neural GCM forecasts, Power BI reports.',
    outcome: 'Sensor pipelines that process more than 100,000 telemetry readings a day, with anomaly detection built into the stream.',
    role: 'I developed the pipeline (github.com/LubangaD/lorowandatapipiline).',
    problem: 'Process continuous sensor data reliably for analysis and forecasting.',
    dataContext: 'IMARIKA LoRaWAN weather stations at remote agricultural sites; the pipelines handle more than 100,000 telemetry readings a day. This repository fetches from the stations’ API every three hours.',
    approach: 'A Kafka producer publishes raw readings; Spark Structured Streaming cleans them, applies level-1 quality checks with location thresholds, imputes gaps, flags anomalies by Z-score and writes daily aggregates to PostgreSQL. Neural GCM forecasts from the clean data, and the results are shown in Power BI. The stack runs in Docker Compose.',
    // the card pipeline: cards across a wide band, Spark as the dark core; a snake of tiles on tablets and phones
    workflow: {
      layout: 'free',
      alt: 'Readings from the IMARIKA LoRaWAN stations go through Kafka to Spark, which cleans and quality-checks them; Neural GCM forecasts the weather from the clean data, and the results are shown in Power BI.',
      nodes: [
        { id: 'lora', label: 'LoRaWAN stations', sub: 'IMARIKA, every 3 h', icon: 'ui:radio-tower', kind: 'card', kindCompact: 'tile', at: [0.1, 0.5], atCompact: [0.18, 0.28] },
        { id: 'kafka', label: 'Kafka', sub: 'Raw readings', icon: 'kafka', kind: 'card', kindCompact: 'tile', at: [0.3, 0.5], atCompact: [0.5, 0.28] },
        { id: 'spark', label: 'Spark', sub: 'Clean and QC', icon: 'logos:apache-spark', kind: 'core', at: [0.5, 0.5], atCompact: [0.82, 0.28] },
        { id: 'gcm', label: 'Neural GCM', sub: 'Forecast', icon: 'ui:cloud-sun', kind: 'card', kindCompact: 'tile', at: [0.7, 0.5], atCompact: [0.82, 0.72] },
        { id: 'pbi', label: 'Power BI', sub: 'Dashboards', icon: 'power-bi', kind: 'card', kindCompact: 'tile', done: true, at: [0.9, 0.5], atCompact: [0.5, 0.72] },
      ],
      edges: [
        { from: 'lora', to: 'kafka' },
        { from: 'kafka', to: 'spark' },
        { from: 'spark', to: 'gcm' },
        { from: 'gcm', to: 'pbi' },
      ],
    },
    evidence: 'The repository documents the architecture, the quality checks and the storage schema; the daily volume comes from my resume.',
    tools: ['Apache Kafka', 'Spark Streaming', 'PostgreSQL', 'Docker', 'Power BI'],
    scopeNote: 'No uptime or production-impact figures are claimed.',
    lessons: null, links: { code: 'https://github.com/LubangaD/lorowandatapipiline' },
    image: { src: '/assets/img/photo-f85085759-960.jpg', alt: 'A rain gauge on a weather station mast', standIn: true },
    related: 'kenya-livestock-masterplan',
  },
  {
    slug: 'hospital-review-intelligence', title: 'Hospital Review Intelligence', context: 'iLab Africa, Strathmore University', workType: 'Academic research',
    summary: 'Sentiment and thematic analysis of hospital reviews.',
    outcome: 'Structured insight from qualitative healthcare feedback.',
    role: 'I performed the NLP and sentiment analysis of hospital reviews, with validation rules for review quality.',
    problem: 'Turn unstructured patient feedback into interpretable themes.',
    dataContext: 'Thousands of hospital reviews. The dataset and sample size are not otherwise specified.',
    approach: 'Natural language processing with spaCy, NLTK and BERT for sentiment and thematic analysis.',
    evidence: 'The experience record confirms the work; performance metrics were not supplied.',
    tools: ['NLP', 'spaCy', 'NLTK', 'BERT'],
    scopeNote: 'No performance metrics or clinical outcomes are claimed.',
    lessons: null, links: {},
    image: { src: '/assets/img/photo-f104570836-960.jpg', alt: 'Hospital beds along the wall of an empty ward', standIn: true },
    related: 'abc-ven-hospital-inventory-research',
  },
  {
    slug: 'llm-innovation-in-insurance', title: 'LLM Innovation in Insurance', context: 'AKI insurance hackathon, with the Tunga team', workType: 'Prototype',
    summary: 'A chatbot and an insights dashboard for insurance data: ask about customers, policies or claims in plain English and GPT-4 answers with a table or a chart.',
    outcome: 'A working chatbot, reports page and data upload, live on Streamlit.',
    role: 'Data scientist in the Tunga hackathon team (repository: github.com/LubangaD/tunga-AKI-hackathon).',
    problem: 'Insurance teams want answers from their data without writing queries.',
    dataContext: 'Insurance customer, policy and claims data supplied for the AKI hackathon.',
    approach: 'A LangChain pandas-dataframe agent on GPT-4 Turbo answers questions over the uploaded data and generates charts; a reports page presents the analysis.',
    evidence: 'The repository and the live demo show the chatbot, reports and data upload.',
    tools: ['GPT-4 Turbo', 'LangChain', 'Streamlit', 'Plotly', 'Pandas'],
    scopeNote: 'No adoption or business results are claimed.',
    lessons: null,
    links: { code: 'https://github.com/LubangaD/tunga-AKI-hackathon', demo: 'https://tunga-chat-hackathon.streamlit.app/' },
    image: { src: '/assets/img/tunga-chatbot.webp', alt: 'The insurance chatbot drawing a bar chart of the three most common ways customers are contacted' },
    related: 'database-retrieval-chatbot',
  },
  {
    slug: 'database-retrieval-chatbot', title: 'Database Retrieval Chatbot', context: 'Insurance data, open-source prototype', workType: 'Prototype',
    summary: 'Ask a question about an insurance database in plain English; Vanna writes the SQL, runs it and returns a table, a chart, a summary and follow-up questions.',
    outcome: 'A Streamlit app that shows the SQL and chart code it ran.',
    role: 'I built the application (github.com/LubangaD/database-retrieval-MySQL).',
    problem: 'Make a SQL database explorable by people who do not write SQL.',
    dataContext: 'SQLite databases of insurance records in the repository.',
    approach: 'Vanna generates SQL from the question; the app runs it, renders the result as a table and a Plotly chart, summarises it and suggests follow-up questions.',
    workflow: { layout: 'lanes', alt: 'A question in plain English goes to Vanna, which returns the SQL query, a Plotly chart and a short summary.',
      input: { label: 'Your question', icon: 'ui:message-square', sub: 'Plain English' },
      core: { label: 'Vanna', icon: 'ui:bot' },
      lanes: [
        { label: 'SQL query', icon: 'ui:database', done: true, sub: 'SQLite' },
        { label: 'Plotly chart', icon: 'ui:chart-line', done: true, sub: 'Chart' },
        { label: 'Summary', icon: 'ui:file-text', done: true, sub: 'Follow-ups' },
      ] },
    evidence: 'The repository documents the capabilities.',
    tools: ['Vanna', 'Streamlit', 'Plotly', 'SQLite'],
    scopeNote: 'No usage figures are claimed.',
    lessons: null,
    // TODO(Derrick): the live demo currently fails ("Error generating questions"); add demo back once it works:
    // https://database-retrieval-mysql-k33darydmgcunjlgltem22.streamlit.app/
    links: { code: 'https://github.com/LubangaD/database-retrieval-MySQL' },
    related: 'llm-innovation-in-insurance',
  },
  {
    slug: 'real-time-ai-chatbot', title: 'Real-time AI Chatbot', context: 'iLab Africa, Strathmore University', workType: 'Prototype',
    summary: 'A conversational interface for querying and visualising live analytics.',
    outcome: 'A real-time interface for analytics queries and visualisation.',
    role: 'I built a real-time AI chatbot using Python, Streamlit and LLMs.',
    problem: 'Make live analytics easier to explore through natural language.',
    dataContext: 'The underlying dataset and deployment details are not specified in the available materials.',
    approach: 'A conversational application connected to real-time analytical workflows.',
    evidence: 'The experience record confirms the work.',
    tools: ['Python', 'Streamlit', 'LLMs'],
    scopeNote: 'No usage or adoption results are claimed.',
    lessons: null, links: {}, related: 'database-retrieval-chatbot',
  },
  {
    slug: 'revenue-customer-forecasting', title: 'Revenue and Customer Forecasting', context: 'iLab Africa, Strathmore University', workType: 'Academic research',
    summary: 'Forecasting workflows for revenue and customer patterns.',
    outcome: 'Forward-looking insight for planning; a documented 15% improvement in financial planning accuracy.',
    role: 'I compared statistical and machine-learning forecasting methods for revenue and customer patterns.',
    problem: 'Anticipate changing business patterns from historical data.',
    dataContext: 'The source dataset, forecast horizon and validation results are not specified.',
    approach: 'ARIMA, XGBoost and Prophet compared on historical revenue and customer data.',
    evidence: 'Documented outcome: financial planning accuracy improved by 15%.',
    tools: ['ARIMA', 'XGBoost', 'Prophet'],
    scopeNote: 'No further accuracy metrics or business outcomes are claimed.',
    lessons: null, links: {}, related: 'abc-ven-hospital-inventory-research',
  },
  {
    slug: 'product-recommendation-system', title: 'Product Recommendation System', context: 'iLab Africa, Strathmore University', workType: 'Academic research',
    summary: 'Customer transaction analysis designed to improve targeted product offers.',
    outcome: 'A data-driven basis for more relevant product targeting.',
    role: 'I developed product recommendation systems and analysed customer transaction patterns using Python and SQL.',
    problem: 'Identify relevant products from customer purchasing behaviour.',
    dataContext: 'The transaction dataset and evaluation details are not specified in the available materials.',
    approach: 'Transaction patterns analysed with Python and SQL to recommend products.',
    evidence: 'The experience record confirms the work.',
    tools: ['Python', 'SQL', 'Recommendation systems'],
    scopeNote: 'No uplift, adoption or revenue results are claimed.',
    lessons: null, links: {}, related: 'revenue-customer-forecasting',
  },
  {
    slug: 'covid-19-analytics-dashboard', title: 'COVID-19 Analytics Dashboard', context: 'Personal project', workType: 'Prototype',
    summary: 'An interactive dashboard of COVID-19 cases and deaths by country, with a data table, line and pie charts.',
    outcome: 'An interactive Dash dashboard of cases and deaths over time.',
    role: 'I built the dashboard (github.com/LubangaD/coviddashboard).',
    problem: 'Compare how COVID-19 cases and deaths developed across countries.',
    dataContext: 'A COVID-19 dataset in the repository (coviddata.xlsx).',
    approach: 'Dash and Plotly callbacks drive a country table, a line chart over time and a pie chart of the selected countries.',
    evidence: 'The repository documents the dashboard.',
    tools: ['Dash', 'Plotly', 'Pandas'],
    scopeNote: 'A learning project; no outcomes are claimed.',
    lessons: null, links: { code: 'https://github.com/LubangaD/coviddashboard' }, related: 'hospital-review-intelligence',
  },
];

export const capabilities = [
  { title: 'Predictive Modelling and Forecasting', deliver: 'Demand and time-series forecasts, model comparisons, and inventory reorder decision support.', example: 'Reorder-point models for hospital pharmaceuticals and revenue and customer forecasting.', tools: ['ARIMA', 'XGBoost', 'Prophet', 'Python'], caseStudy: 'abc-ven-hospital-inventory-research' },
  { title: 'NLP and LLM Applications', deliver: 'Conversational analytics and structured sentiment and theme analysis from open text.', example: 'Hospital review intelligence, and chatbots that answer questions over insurance data.', tools: ['NLP', 'BERT', 'spaCy', 'LangChain', 'Streamlit'], caseStudy: 'hospital-review-intelligence' },
  { title: 'Real-Time and Cloud Data Engineering', deliver: 'Streaming pipelines and modular analytical workflows for dependable data use.', example: 'LoRaWAN sensor and weather pipelines; legacy BigQuery logic migration at Stahili Commerce.', tools: ['Apache Kafka', 'Spark Streaming', 'BigQuery', 'Dataform', 'SQLX'], caseStudy: 'weather-iot-pipeline' },
  { title: 'Analytics Engineering and Business Intelligence', deliver: 'Structured data models, dashboards, and reporting for decision-makers.', example: 'The survey analytics dashboard at Stahili Commerce and Power BI dashboards for Meru County Government.', tools: ['BigQuery', 'Dataform', 'Power BI', 'SQL'], caseStudy: 'survey-to-story' },
  { title: 'Data Quality and Validation', deliver: 'Statistical models, data validation frameworks, and quality monitoring workflows.', example: 'Data validation frameworks for the Kenya Livestock Masterplan.', tools: ['Statistical modelling', 'Data validation', 'Anomaly detection'], caseStudy: 'kenya-livestock-masterplan' },
  { title: 'Human-Centred and Inclusive Innovation', deliver: 'Human-centred discovery, accessible interaction concepts, and collaborative prototypes.', example: 'SUGAR Network design-thinking work, and AbleSpeak, a live voice-control product for the web and Windows.', tools: ['Design thinking', 'Accessibility', 'Voice interaction'], caseStudy: 'ablespeak' },
];

export const techStrip = ['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'BigQuery', 'Dataform', 'dbt', 'Snowflake', 'Apache Kafka', 'Apache Spark', 'Apache Airflow', 'MLflow', 'Docker', 'GeoPandas', 'Power BI', 'Looker', 'Tableau', 'Streamlit', 'LangChain'];

export const services = [
  { title: 'Predictive Analytics and Forecasting', problem: 'Planning with uncertain demand or replenishment needs.', description: 'Demand and inventory forecasting, model validation, and decision-support outputs.', deliverables: ['Forecasting workflow', 'Model validation', 'Decision-support outputs'], timeline: '3–4 weeks' },
  { title: 'Data Pipeline and Warehouse Engineering', problem: 'Legacy or disconnected data workflows that are hard to maintain and analyse.', description: 'BigQuery and Dataform workflows, legacy SQL migration, and streaming architecture.', deliverables: ['Modular data workflows', 'Legacy SQL migration', 'Streaming architecture'], timeline: '4–6 weeks' },
  { title: 'NLP and Customer Feedback Intelligence', problem: 'Large amounts of open-text feedback that are hard to review consistently.', description: 'Sentiment and thematic analysis of reviews, surveys, and open-text feedback.', deliverables: ['Text preparation', 'Sentiment and theme analysis', 'Structured insight'], timeline: '2–3 weeks' },
  { title: 'AI Analytics Assistants', problem: 'Teams need a more approachable way to explore existing analytical data.', description: 'A scoped prototype that helps teams query and explore their data in plain language.', deliverables: ['Scoped prototype', 'Data-query workflow', 'Exploration experience'], timeline: 'about 3 weeks' },
];

export const research = {
  thesis: {
    title: 'Predictive Analytics for ABC-VEN Inventory Optimization in Kenyan Hospitals',
    degree: 'MSc Data Science and Analytics, Strathmore University',
    summary: 'The research brings together inventory value, clinical criticality, forecasting and reorder planning. ABC classification groups items by value; VEN separates vital, essential and non-essential items by clinical criticality. Machine-learning models predict each product’s reorder point, with SHAP explanations.',
    status: 'The thesis topic, method and application are confirmed. The abstract, study sample, measured findings and publication status are not yet published here, and potential benefits are not presented as measured outcomes.',
    // TODO(Derrick): thesis PDF and publication link. While null, no download or publication link is shown.
    thesisFile: null,
    publicationUrl: null,
    caseStudy: 'abc-ven-hospital-inventory-research',
  },
  themes: [
    { title: 'Healthcare inventory', text: 'Forecasting and reorder planning that weigh what a medicine costs against how critical it is.' },
    { title: 'Assistive technology', text: 'Accessibility training and research at CNEAT, and AbleSpeak, voice control now live on the web and Windows.' },
    { title: 'Applied machine learning', text: 'Models that people can question: explanations with SHAP, validation built into pipelines.' },
  ],
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/research', label: 'Research' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export const caseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);
