"use client";

import {motion} from "framer-motion";

const dimensions = [
  "Relevance", "Topic", "Narrative", "Sentiment", "Stance", "Emotion",
  "Audience perspective", "Related entities", "Reputation impact", "Risk / opportunity"
];

const cover="https://images.pexels.com/photos/3816395/pexels-photo-3816395.jpeg?auto=compress&cs=tinysrgb&w=1800";
const mediaWall="https://images.pexels.com/photos/13578524/pexels-photo-13578524.jpeg?auto=compress&cs=tinysrgb&w=1800";
const projected="https://images.pexels.com/photos/18327489/pexels-photo-18327489.jpeg?auto=compress&cs=tinysrgb&w=1800";

export default function AIIntelligenceMonitor(){return <main>
<header className="nav"><a className="brand" href="/">REGGIE.</a><nav><a href="/#work">WORK</a><a href="/#about">ABOUT</a><a href="/#contact">CONTACT</a></nav></header>

<section className="aim-hero">
<div className="aim-hero-copy"><a className="back" href="/">← BACK TO WORK</a><p className="section-label">04 / AI & AUTOMATION</p><h1>AI Social &amp; Media<br/>Intelligence Monitor</h1><p className="case-lead">Turning fragmented media and social conversations into structured, actionable intelligence.</p><div className="aim-meta"><span>BUILD<b>n8n automation</b></span><span>AI<b>Gemini</b></span><span>SOURCES<b>Google News · Bluesky · YouTube</b></span></div></div>
<figure className="aim-hero-image"><img src={cover} alt="Person observing projected media"/><figcaption>LISTENING / SIGNALS / INTERPRETATION</figcaption></figure>
</section>

<section className="aim-challenge"><div><p className="section-label">THE CHALLENGE</p><h2>Social listening creates a lot of noise before it creates insight.</h2></div><div className="aim-challenge-copy"><p>Monitoring conversations often means searching across multiple platforms, reviewing large volumes of mentions and trying to identify which narratives actually matter.</p><p>I wanted to explore whether that process could be automated without reducing every conversation to a simple positive-or-negative sentiment score.</p></div></section>

<section className="aim-solution"><p className="section-label">THE SOLUTION</p><div className="aim-solution-grid"><div><h2>One configurable system.<br/>Two ways to listen.</h2><p>I designed an n8n workflow that collects conversations from multiple media and social sources, filters and deduplicates the results, and uses Gemini AI to transform relevant mentions into structured intelligence.</p></div><div className="aim-modes"><article><small>OPEN LISTENING</small><strong>Discover what is emerging.</strong><p>Monitor an entity or topic without predefined secondary themes so narratives can surface naturally.</p></article><article><small>FOCUSED LISTENING</small><strong>Investigate a specific issue.</strong><p>Combine the monitored entity with selected themes or keywords to examine a particular conversation.</p></article></div></div></section>

<section className="aim-process"><p className="section-label">THE SYSTEM</p><div className="aim-process-strip"><span>LISTEN</span><i>→</i><span>COLLECT</span><i>→</i><span>FILTER</span><i>→</i><span>ANALYZE</span><i>→</i><span>STRUCTURE</span></div><div className="aim-source-grid"><figure><img src={mediaWall} alt="Wall of digital media imagery"/><figcaption>MULTI-SOURCE MONITORING</figcaption></figure><div><small>INPUT SOURCES</small><h2>Google News<br/>Bluesky<br/>YouTube</h2><p>Incoming mentions are normalized into a common structure, filtered by the chosen lookback period, deduplicated and volume-controlled before AI analysis.</p></div></div></section>

<section className="aim-workflow"><div className="aim-workflow-head"><p className="section-label">THE ACTUAL AUTOMATION</p><h2>Built to move from search to structured intelligence automatically.</h2><p>The workflow dynamically builds search combinations, gathers mentions across three sources, standardizes incoming data and processes relevant mentions through an AI analysis loop.</p></div><div className="aim-video-frame"><video className="aim-workflow-video" autoPlay muted loop playsInline preload="metadata"><source src="/video/n8n-intelligence-monitor-portfolio-20s.mp4" type="video/mp4"/></video><span>20-SECOND WORKFLOW / N8N</span></div></section>

<section className="aim-analysis"><figure><img src={projected} alt="Person with projected media fragments and text"/><figcaption>FROM MEDIA MENTION TO INTERPRETATION</figcaption></figure><div><p className="section-label">FROM MENTION TO INTELLIGENCE</p><h2>Sentiment is not the same as stance.</h2><p>A negative-sounding headline can still support the entity being discussed. The analysis therefore separates emotional tone from the position taken toward the monitored entity.</p><div className="aim-example"><small>RAW MENTION</small><p>“Nike shareholders reject climate proposal backed by Norway wealth fund”</p><div className="aim-example-grid"><span><b>TOPIC</b>Corporate Governance</span><span><b>SENTIMENT</b>Neutral</span><span><b>STANCE</b>Neutral</span><span><b>REPUTATION IMPACT</b>Negative</span><span><b>CLASSIFICATION</b>Risk</span></div></div></div></section>

<section className="aim-dimensions"><p className="section-label">WHAT THE SYSTEM ANALYZES</p><h2>Beyond positive, neutral and negative.</h2><div className="aim-dimension-grid">{dimensions.map((item,index)=><motion.div key={item} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.035}}><small>{String(index+1).padStart(2,"0")}</small><span>{item}</span></motion.div>)}</div></section>

<section className="aim-role"><div><p className="section-label">MY ROLE</p><h2>From listening question to working automation.</h2></div><div><p>Concept development, workflow architecture, API integration, data normalization, prompt design, AI classification framework, testing and QA.</p><div className="tags"><span>N8N</span><span>GEMINI AI</span><span>GOOGLE NEWS RSS</span><span>BLUESKY API</span><span>YOUTUBE DATA API</span><span>GOOGLE SHEETS</span></div></div></section>

<section className="aim-close"><p className="section-label">THE VALUE</p><h2>Less time collecting mentions.<br/>More time understanding what they mean.</h2><p>The project combines marketing intelligence, automation and AI analysis in a reusable system that can monitor a brand, person, organization, product, campaign or broader topic.</p><a href="/">← BACK TO SELECTED WORK</a></section>
</main>}