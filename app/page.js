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
<article className="project research-card research-editorial">
<div className="research-copy">
<p className="section-label">04 / RESEARCH</p>
<h2>Anthropomorphism and diversity in virtual humans</h2>
<p className="research-lead">Published research into how virtual humans shape the trust, attitudes and purchase intentions of Gen Z consumers.</p>
<p>The study used survey data from 258 participants and PLS-SEM to examine anthropomorphism, social presence, information quality, trust and attitudes.</p>
<div className="tags"><span>CONSUMER BEHAVIOUR</span><span>VIRTUAL HUMANS</span><span>QUANTITATIVE RESEARCH</span><span>PLS-SEM</span></div>
<a className="case-link" href="/work/virtual-humans">VIEW PUBLISHED RESEARCH <b>↗</b></a>
</div>
<div className="research-editorial-visual">
<figure className="research-editorial-photo">
<img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=90" alt="Person immersed in digital technology, used as editorial context for research into virtual humans"/>

</figure>
<div className="research-editorial-stat"><small>PUBLISHED / 2025</small><strong>258</strong><span>Gen Z respondents</span><i>PLS-SEM</i></div>
<div className="research-editorial-question"><small>THE QUESTION</small><p>What makes a virtual human feel trustworthy?</p></div>
</div>
</article>
<article className="project marketing-card">
<div className="marketing-copy">
<p className="section-label">05 / DIGITAL MARKETING</p>
<h2>Marketing across markets, channels and audiences.</h2>
<p>My digital marketing work has included regional campaigns, content, social media, websites, email and digital assets across multiple markets in Asia Pacific.</p>
<p>For Samsung APAC, I supported regional digital marketing and campaign delivery, coordinating content, localisation, approvals and digital assets across markets.</p>
<p>For Singapore Tourism Board, I worked on digital marketing initiatives supporting destination marketing, coordinating campaign content and digital execution across audiences and channels.</p>
<div className="tags"><span>DIGITAL MARKETING</span><span>CAMPAIGN DELIVERY</span><span>CONTENT</span><span>REGIONAL COORDINATION</span></div>
<a className="case-link" href="/work/digital-marketing">VIEW MARKETING WORK <b>↗</b></a>
</div>
<div className="marketing-visual">
<motion.div className="marketing-brand samsung-panel" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
<img className="marketing-image samsung-image" src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1800&q=92" alt="Samsung foldable smartphone campaign visual"/>
<div className="marketing-brand-label"><small>REGIONAL CAMPAIGN DELIVERY</small><strong>SAMSUNG APAC</strong><span>DIGITAL · SOCIAL · LOCALISATION</span></div>
</motion.div>
<motion.div className="marketing-brand stb-panel" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.12}}>
<img className="marketing-image stb-image" src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=90" alt="Jewel Changi Airport campaign visual for Singapore tourism"/>
<div className="marketing-brand-label"><small>GLOBAL CAMPAIGN DELIVERY</small><strong>SINGAPORE TOURISM BOARD</strong><span>WEB · EDM · MULTI-MARKET</span></div>
</motion.div>
<div className="marketing-bridge"><small>THE COMMON THREAD</small><p>Turning campaign strategy into coordinated digital delivery across markets.</p></div>
</div>
</article>
<article className="project mack-card">
<div className="mack-copy">
<p className="section-label">06 / INDEPENDENT INVESTIGATION</p>
<h2>Macklemore, Palestine and the Limits of Online Backlash</h2>
<p className="mack-subtitle">Beyond the noise, outrage and assumptions of a divided internet</p>
<p>When Macklemore was removed from Ed Sheeran’s U.S. tour following his onstage support for Palestine, the reaction online was immediate and divided. I wanted to understand what that reaction actually represented and whether the loudest voices reflected broader audience opinion.</p>
<p>I collected and manually coded 1,020 comments from 42 source units across YouTube, Reddit, Facebook, Instagram and X, examining attitudes towards Macklemore, his advocacy for Palestine and his removal from the tour.</p>
<p>The analysis found that online backlash was not the same as support for consequences: 73.6% of comments opposed his removal, while attitudes, arguments and emotional intensity varied substantially across platforms.</p>
<div className="tags"><span>SOCIAL LISTENING</span><span>CONTENT ANALYSIS</span><span>POWER BI</span><span>PREDICTIVE MODELLING</span></div>
<a className="case-link" href="/work/macklemore-online-backlash">EXPLORE THE INVESTIGATION <b>↗</b></a>
</div>
<div className="mack-visual" aria-label="Editorial image and key findings from the Macklemore online backlash investigation">
<figure className="mack-editorial">
<img src="https://www.edgeofsports.com/column/macklemore-is-a-seattle-sports-superfan-now-he-is-also-a-target/img/column/primary.jpg" alt="Macklemore performing onstage during a concert"/>
<div className="mack-photo-wash"></div>
<div className="mack-photo-label">MACKLEMORE / PALESTINE / ONLINE BACKLASH</div>
<div className="mack-photo-stat"><strong>73.6%</strong><span>OPPOSED REMOVAL</span></div>
<div className="mack-photo-signals"><span><b>1,020</b> COMMENTS</span><span><b>42</b> SOURCES</span><span><b>5</b> PLATFORMS</span></div>
<figcaption>EDITORIAL CONTEXT / MACKLEMORE</figcaption>
</figure>
</div>
</article></section>
<section className="about about-editorial" id="about"><div className="about-heading"><p className="section-label">07 / ABOUT</p><h2>I'm Reggie.</h2></div><div className="about-body"><div className="about-copy"><p>I'm a digital strategist and marketing analyst with more than eight years of experience across digital marketing, project management, analytics and research.</p><p>My work has taken me across regional campaigns, digital strategy, performance analysis and academic research. I have an MSc in Digital Marketing from the University of Brighton, where my research into virtual humans and Gen Z consumer behaviour later developed into published research.</p><p>I'm particularly interested in how strategy, data and research can help us understand people, challenge assumptions and address issues that matter to society.</p></div><div className="about-disciplines"><span>STRATEGY</span><span>DATA</span><span>RESEARCH</span><span>DIGITAL CULTURE</span></div></div><div className="about-geometry" aria-hidden="true"><span className="geo-circle"></span><span className="geo-square"></span><span className="geo-line"></span><span className="geo-dot"></span></div></section>
<footer id="contact" className="editorial-footer"><p className="section-label">08 / CONTACT</p><h2>Have something<br/>worth exploring?</h2><a className="talk" href="mailto:reginald.magtibay@gmail.com">LET'S TALK ↗</a><div className="footer-links"><a href="mailto:reginald.magtibay@gmail.com">EMAIL</a><a href="https://www.linkedin.com/in/reginald-magtibay/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="https://github.com/reggiemagtibay" target="_blank" rel="noreferrer">GITHUB</a><span>REGGIE. / 2026</span></div></footer></main>}