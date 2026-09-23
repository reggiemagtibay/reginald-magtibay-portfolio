"use client";
import {motion} from "framer-motion";
const stages=[["01","Audience","Parent-first"],["02","Experience","From resources to a learning journey"],["03","Architecture","Organised around real parent questions"],["04","Content","A connected, reusable content system"],["05","Governance","Trusted, traceable and sustainable"]];
const journey=["Pregnancy","Newborn","Crawling","Walking","Toddler","Preschool"];
export default function Home(){return <main>
<header className="nav"><a className="brand" href="#top">REGGIE.</a><nav><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></nav></header>
<section className="hero" id="top"><p className="eyebrow">DIGITAL STRATEGY · MARKETING ANALYTICS · RESEARCH</p><h1>Strategy, data <span>&</span><br/>digital culture.</h1><p className="dek">I turn complex digital behaviour into insights, stories and decisions.</p><a className="down" href="#about-work">SELECTED WORK ↓</a></section>
<section className="intro" id="about-work"><p className="section-label">01 / ABOUT THE WORK</p><h2>I use data to understand what people do and why it matters.</h2><div className="intro-copy"><p>My work spans digital strategy, marketing analytics and research. I use data to understand audiences, evaluate performance and identify patterns that can inform better decisions.</p><p>That can mean analysing campaign performance, developing a digital strategy, studying consumer behaviour or investigating how people respond to issues online.</p><p>The methods change depending on the question. The goal stays the same: turn evidence into something useful.</p></div></section>
<section className="work" id="work"><article className="project bbs"><div className="project-copy"><p className="section-label">02 / STRATEGY</p><h2>Be BiteSmart</h2><p>Be BiteSmart is a child-safety education programme focused on preventing dog-bite injuries and helping families understand safer interactions between children and dogs.</p><p>I developed a parent-first digital strategy to make its educational resources easier to navigate, discover and use. The work covered audience needs, user journeys, information architecture, content strategy, search and measurement, creating a phased roadmap for the Parents Learning Center.</p><div className="tags"><span>DIGITAL STRATEGY</span><span>USER JOURNEYS</span><span>CONTENT STRATEGY</span><span>INFORMATION ARCHITECTURE</span></div><a className="case-link" href="/work/be-bitesmart">VIEW CASE STUDY <b>↗</b></a></div>
<div className="strategy-map"><div className="map-head"><span>PARENT-FIRST</span><small>STRATEGIC PROGRESSION</small></div><div className="stages">{stages.map((s,i)=><motion.div className="stage" key={s[0]} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.6}} transition={{delay:i*.09,duration:.5}}><span className="num">{s[0]}</span><div><strong>{s[1]}</strong><small>{s[2]}</small></div></motion.div>)}</div><div className="journey"><small>PARENT JOURNEY</small><div>{journey.map((x,i)=><span key={x}>{x}{i<journey.length-1&&<i>→</i>}</span>)}</div></div></div></article>
<article className="project pvc pvc-editorial">
<div className="pvc-story">
  <p className="section-label">03 / ANALYTICS</p>
  <h2>The Porter Voice Collective</h2>
  <p className="pvc-lead">A nonprofit media platform elevating the stories of mountain tourism workers across Nepal, Peru and Tanzania.</p>
  <p className="pvc-role">I bring Instagram, Facebook and LinkedIn performance data into a consolidated Power BI reporting system to understand which stories connect, where, and why.</p>
  <div className="tags"><span>MARKETING ANALYTICS</span><span>POWER BI</span><span>SOCIAL MEDIA</span><span>PERFORMANCE REPORTING</span></div>
  <a className="case-link pvc-case-link" href="/work/porter-voice-collective">VIEW CASE STUDY <b>↗</b></a>
</div>
<div className="pvc-photo-story">
  <motion.figure className="pvc-photo pvc-photo-main" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
    <img src="https://images.squarespace-cdn.com/content/v1/690e51b514e0a17d18db36b9/9bf62957-e23d-4e0b-98aa-b37f64bfed7c/yana-druzhinina-zvMD7EfVjFI-unsplash.jpg" alt="Mountain landscape used by The Porter Voice Collective" />
    <figcaption>STORIES FROM THE TRAILS</figcaption>
  </motion.figure>
  <motion.div className="pvc-stat-card" initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.12}}>
    <small>INSTAGRAM / BREAKOUT SIGNAL</small><strong>83.7%</strong><p>of total reach came from one breakout post.</p>
  </motion.div>
  <motion.figure className="pvc-photo pvc-photo-secondary" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.18}}>
    <img src="https://images.squarespace-cdn.com/content/v1/690e51b514e0a17d18db36b9/12cd9ca1-847d-4c01-a5e6-a21596649969/eugene-ga-infssQ2tjeM-unsplash.jpg" alt="Mountain landscape used by The Porter Voice Collective" />
  </motion.figure>
  <div className="pvc-question"><small>THE QUESTION</small><p>Which stories and messages are connecting with people?</p></div>
</div>
</article>
<article className="project research-card">
<div className="research-copy">
<p className="section-label">04 / RESEARCH</p>
<h2>Anthropomorphism and diversity in virtual humans</h2>
<p className="research-lead">Published research into how virtual humans shape the trust, attitudes and purchase intentions of Gen Z consumers.</p>
<p>The study used survey data from 258 participants and PLS-SEM to examine anthropomorphism, social presence, information quality, trust and attitudes.</p>
<div className="tags"><span>CONSUMER BEHAVIOUR</span><span>VIRTUAL HUMANS</span><span>QUANTITATIVE RESEARCH</span><span>PLS-SEM</span></div>
<a className="case-link" href="/work/virtual-humans">VIEW PUBLISHED RESEARCH <b>↗</b></a>
</div>
<div className="research-visual">
<div className="research-portrait-pair">
<figure className="research-photo"><img src="/images/virtual-human-portrait.webp" alt="Editorial CGI portrait representing a virtual human"/><div className="research-photo-note">PEOPLE<br/>TECHNOLOGY<br/>TRUST<br/>BRANDS</div><figcaption>VIRTUAL HUMANS / CONSUMER PERCEPTION</figcaption></figure>
<figure className="research-paper"><div><small>PUBLISHED / 2025</small><strong>258</strong><span>Gen Z respondents</span><i>PLS-SEM</i></div></figure>
</div>
<div className="research-question"><small>THE RESEARCH QUESTION</small><p>What makes a virtual human feel trustworthy?</p></div>
<div className="research-signal"><span>SOCIAL PRESENCE</span><i>→</i><span>TRUST</span><i>→</i><span>ATTITUDE</span><i>→</i><span>PURCHASE INTENTION</span></div>
</div>
</article>
<div className="placeholders"><p>05 / DIGITAL MARKETING</p><p>06 / INDEPENDENT INVESTIGATION</p></div></section>
<section className="about" id="about"><p className="section-label">07 / ABOUT</p><h2>I'm Reggie.</h2><div><p>I'm a digital strategist and marketing analyst with more than eight years of experience across digital marketing, project management, analytics and research.</p><p>My work has taken me across regional campaigns, digital strategy, performance analysis and academic research. I have an MSc in Digital Marketing from the University of Brighton, where my research into virtual humans and Gen Z consumer behaviour later developed into published research.</p><p>I'm particularly interested in how strategy, data and research can help us understand people, challenge assumptions and address issues that matter to society.</p></div></section>
<footer id="contact"><h2>Have something worth exploring?</h2><span className="talk">LET'S TALK →</span><p>REGGIE. / 2026</p></footer></main>}