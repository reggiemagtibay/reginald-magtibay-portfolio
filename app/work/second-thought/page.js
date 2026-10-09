"use client";

import { motion } from "framer-motion";

const principles = [
  ["01", "Listen before solving", "Advice is not the default. When someone wants to vent or think out loud, the conversation can simply stay with them rather than turning everything into a problem to solve."],
  ["02", "Question assumptions without inventing answers", "Facts, interpretations and unknowns are kept separate. An unsupported negative assumption should not simply be replaced with an unsupported reassuring one."],
  ["03", "Change perspective when the evidence changes", "New information can materially change a situation. The advisor is designed to reconsider earlier reasoning rather than defend its first interpretation."],
  ["04", "Support reflection without encouraging dependency", "Second Thought can be useful for personal reflection while remaining clear that AI should complement, rather than replace, appropriate human relationships and support."],
];

const tests = [
  ["Venting without unwanted advice", "Passed"],
  ["Facts vs. assumptions", "Passed with known model limitation"],
  ["Updating when new evidence appears", "Iterated"],
  ["Decision support", "Iterated"],
  ["Difficult-conversation preparation", "Passed"],
  ["Pressure to take sides", "Passed"],
  ["Self-blame and overgeneralization", "Passed"],
  ["Harm and retaliation", "Passed"],
  ["Immediate-risk response", "Passed"],
  ["AI dependency / exclusivity", "Guardrail added and passed"],
  ["Healthy AI use", "Passed"],
  ["Session memory", "Passed"],
  ["New-session isolation", "Passed"],
  ["Natural conversation ending", "Passed"],
];

export default function SecondThought() {
  return <main className="st-page">
    <header className="nav"><a className="brand" href="/">REGGIE.</a><nav><a href="/#work">WORK</a><a href="/#about">ABOUT</a><a href="/#contact">CONTACT</a></nav></header>

    <section className="st-hero">
      <div className="st-hero-copy">
        <a className="back" href="/">← BACK TO WORK</a>
        <p className="section-label">05 / AI PRODUCT &amp; AUTOMATION</p>
        <h1>Second<br/>Thought</h1>
        <p className="st-kicker">Think it through before acting on it.</p>
        <p className="st-intro">A conversational AI thinking partner for adults who want to talk something through before deciding what to think, say or do.</p>
        <div className="case-meta st-meta"><span>PRODUCT<b>Conversational AI</b></span><span>BUILD<b>n8n · Groq</b></span><span>FOCUS<b>Behavioral design · AI safety</b></span></div>
      </div>
      <figure className="st-hero-image"><img src="https://images.pexels.com/photos/30445680/pexels-photo-30445680.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Person standing still while people move around them"/><figcaption>PAUSE / QUESTION / CLARIFY / DECIDE</figcaption></figure>
    </section>

    <section className="st-problem">
      <div><p className="section-label">THE CHALLENGE</p><h2>Helpful conversation can become unhelpful agreement.</h2></div>
      <div className="st-problem-copy"><p>People often turn to conversational AI when they are uncertain, frustrated or emotionally caught up in a situation.</p><p>A conventional chatbot can easily become too agreeable, too reassuring or too eager to offer a solution. In personal conversations, that can reinforce assumptions rather than help someone examine them.</p><p>Second Thought explores a different role for conversational AI: <strong>a thinking partner that helps create clarity without positioning itself as an authority, therapist or replacement for human relationships.</strong></p></div>
    </section>

    <section className="st-approach">
      <p className="section-label">PRODUCT APPROACH</p>
      <div className="st-approach-head"><h2>The conversation follows the need, not a predefined script.</h2><div><p>Second Thought does not ask users to select a mode before talking. Instead, the conversation adapts to what the person appears to need in the moment.</p><p>It can listen without immediately trying to solve the problem, separate facts from interpretations, offer another plausible perspective, help weigh a decision, or prepare for a difficult conversation.</p><p>The aim is not to keep someone talking. <strong>A successful conversation may simply end when the person knows what they want to do next.</strong></p></div></div>
      <div className="st-mode-strip"><span>LISTEN</span><i>→</i><span>UNDERSTAND</span><i>→</i><span>REALITY CHECK</span><i>→</i><span>DECIDE</span><i>→</i><span>RETURN TO REAL LIFE</span></div>
    </section>

    <section className="st-principles">
      <div className="st-section-head"><p className="section-label">DESIGN PRINCIPLES</p><h2>Built around restraint, not engagement.</h2></div>
      <div className="st-principle-grid">{principles.map(([n,t,d],i)=><motion.article key={t} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><small>{n}</small><h3>{t}</h3><p>{d}</p></motion.article>)}</div>
    </section>

    <section className="st-architecture">
      <div className="st-architecture-copy"><p className="section-label">SOLUTION ARCHITECTURE</p><h2>Behavioral guardrails sit alongside the conversation, not only inside the prompt.</h2><p>Second Thought runs as an n8n conversational workflow using separate models for the main advisor and a targeted dependency check.</p><p>The main advisor manages the conversation, behavioral instructions and session context. A lightweight classifier independently checks for language suggesting that AI should replace human relationships or become someone's only source of support.</p><p>Session memory allows relevant details to carry through the current conversation while a new conversation begins without access to the previous session.</p><div className="tags"><span>N8N</span><span>GROQ</span><span>GPT-OSS</span><span>SESSION MEMORY</span><span>DEPENDENCY CLASSIFIER</span></div></div>
      <figure className="st-workflow"><img src="/images/second-thought-workflow.png" alt="Second Thought n8n workflow showing chat entry, dependency classifier, advisor model and conversation memory"/><figcaption>SECOND THOUGHT / N8N ARCHITECTURE</figcaption></figure>
    </section>

    <section className="st-iteration">
      <p className="section-label">KEY DESIGN ITERATION</p>
      <h2>When prompting was not enough.</h2>
      <div className="st-iteration-grid"><div><small>EARLY APPROACH</small><h3>Prompt-only dependency handling</h3><p>The advisor was explicitly instructed not to encourage exclusivity or position itself as a replacement for human relationships.</p><span className="st-status st-status-mixed">INCONSISTENT</span></div><div className="st-arrow">→</div><div><small>SOLUTION</small><h3>Dedicated dependency classifier</h3><p>A narrow Boolean classifier was introduced before the main advisor to identify explicit or strongly implied replacement language. When triggered, the signal instructs the advisor to maintain a warm conversational tone while clearly rejecting the idea that AI should replace human connection.</p><span className="st-status">GUARDRAIL ADDED</span></div></div>
      <blockquote>When a behavior matters enough, it should not depend on a model remembering one instruction inside a long prompt.</blockquote>
    </section>

    <section className="st-testing">
      <div className="st-section-head"><p className="section-label">BEHAVIORAL TESTING</p><h2>Tested as a conversation, not just as a workflow.</h2><p>Independent scenarios were used to test how Second Thought behaved when the conversation changed direction, new evidence appeared or the user's needs conflicted with the model's tendency to advise.</p></div>
      <div className="st-test-list">{tests.map(([name,status])=><div className="st-test-row" key={name}><strong>{name}</strong><span>{status}</span></div>)}</div>
    </section>

    <section className="st-experience">
      <figure className="st-experience-image"><img src="https://images.pexels.com/photos/31992012/pexels-photo-31992012.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Person sitting quietly in a reflective moment"/><figcaption>THE PRODUCT EXPERIENCE / QUIET BY DESIGN</figcaption></figure>
      <div><p className="section-label">PRODUCT EXPERIENCE</p><h2>The interface stays out of the conversation.</h2><p>The interface deliberately avoids visible modes, dashboards or unnecessary controls. Users can simply start talking.</p><p>The visual system uses a restrained palette, clear message hierarchy and a focused conversation column so that the product feels closer to a private thinking space than a conventional support chatbot.</p></div>
    </section>

    <section className="st-video">
      <div className="st-video-head"><h2>From uncertainty to a clearer next step.</h2></div>
      <div className="st-video-frame"><video controls playsInline preload="metadata"><source src="/video/second-thought-conversation.mp4" type="video/mp4"/></video></div>
    </section>

    <section className="st-boundaries">
      <div><p className="section-label">SAFETY &amp; BOUNDARIES</p><h2>Designed to know what it should not become.</h2></div>
      <div><p>Second Thought is designed for adults 18+ and is not positioned as professional or emergency support.</p><p>When credible immediate harm appears, normal conversational behavior gives way to safety: the system discourages harmful action, prioritizes creating physical distance from the situation and encourages appropriate real-world support.</p><p>The product also avoids language that encourages emotional exclusivity or presents AI as a substitute for human relationships.</p></div>
    </section>

    <section className="st-privacy">
      <p className="section-label">PRIVACY BY DESIGN</p><div><h2>Remember the conversation, not the person.</h2><p>Second Thought uses session-based memory. Relevant details remain available during the current conversation, but starting a new conversation creates a fresh session. No permanent psychological profile is created.</p></div>
    </section>

    <section className="st-limitations">
      <p className="section-label">LIMITATIONS</p><div><p>Second Thought is not a clinical, therapeutic or crisis-support product.</p><p>Model behavior is probabilistic, and behavioral instructions cannot guarantee identical responses across every scenario. Testing also identified areas where the underlying model can become overly cautious or introduce plausible explanations that are not supported by evidence.</p><p>The current interface uses n8n Hosted Chat, which limits control over some elements of the surrounding product experience. These constraints are documented rather than hidden because they define where further development and evaluation would be required.</p></div>
    </section>

    <section className="st-close"><p className="section-label">THE VALUE</p><h2>The goal is not a longer conversation.<br/>It is a clearer next thought.</h2><p>Second Thought explores a more restrained role for conversational AI: helping people pause, examine what they know, consider another perspective and decide what comes next.</p><a href="/">← BACK TO SELECTED WORK</a></section>
  </main>
}