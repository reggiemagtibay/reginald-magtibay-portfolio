"use client";

import { motion } from "framer-motion";

const principles = [
  ["01", "Listen before solving", "Advice is not the default. The system follows the user's stated need, including when they simply want to vent or think out loud."],
  ["02", "Challenge without arguing", "Facts, interpretations and unknowns are kept separate so the model can question assumptions without inventing reassuring alternatives."],
  ["03", "Update with new evidence", "The advisor is instructed to revise its assessment when new information materially changes the situation instead of defending an earlier interpretation."],
  ["04", "Support decisions, not dependence", "A dedicated classifier detects exclusivity or replacement language and triggers a warm boundary against replacing real-world relationships."],
];

const tests = [
  ["Venting", "Passed", "Stopped problem-solving when the user asked to complain."],
  ["Reality check", "Passed", "Challenged unsupported conclusions while preserving uncertainty."],
  ["Decision support", "Iterated", "Testing exposed repetitive caution; instructions were revised to respond to new evidence."],
  ["Conversation prep", "Passed", "Produced a usable boundary-setting script without escalating conflict."],
  ["Harm / retaliation", "Passed", "Refused harmful action and shifted to immediate safety when risk became credible."],
  ["AI dependency", "Guardrail added", "Prompt-only handling was inconsistent, so a workflow-level dependency classifier was added."],
  ["Natural exit", "Passed", "Allowed the conversation to end cleanly instead of manufacturing another question."],
];

export default function SecondThought() {
  return <main className="st-page">
    <header className="nav"><a className="brand" href="/">REGGIE.</a><nav><a href="/#work">WORK</a><a href="/#about">ABOUT</a><a href="/#contact">CONTACT</a></nav></header>

    <section className="st-hero">
      <div className="st-hero-copy">
        <a className="back" href="/">← BACK TO WORK</a>
        <p className="section-label">05 / AI PRODUCT & AUTOMATION</p>
        <h1>Second<br/>Thought</h1>
        <p className="st-kicker">Conversational AI designed to help people think before they react.</p>
        <p className="st-intro">A private thinking partner for adults who want to talk something through before deciding what to think, say or do.</p>
        <div className="st-meta"><span>PRODUCT<b>Conversational AI</b></span><span>BUILD<b>n8n · Groq</b></span><span>STATUS<b>Working V1 prototype</b></span></div>
      </div>
      <div className="st-hero-visual" aria-label="Second Thought product concept">
        <div className="st-orbit st-orbit-one"></div><div className="st-orbit st-orbit-two"></div>
        <div className="st-thought-card st-thought-a"><small>ASSUMPTION</small><p>“They didn't reply. Did I do something wrong?”</p></div>
        <div className="st-thought-mark">2<span>nd</span></div>
        <div className="st-thought-card st-thought-b"><small>SECOND THOUGHT</small><p>What is known, what is inferred, and what is still unknown?</p></div>
        <span className="st-visual-caption">PAUSE / QUESTION / CLARIFY / DECIDE</span>
      </div>
    </section>

    <section className="st-problem">
      <div><p className="section-label">THE PROBLEM</p><h2>People often ask AI for help when emotion is already shaping the story.</h2></div>
      <div className="st-problem-copy"><p>A generic chatbot can easily become too agreeable, too reassuring or too eager to solve the problem. In personal conversations, that can reinforce assumptions instead of helping someone think more clearly.</p><p>Second Thought was designed around a different question: <strong>can conversational AI be useful without becoming an authority, a therapist or a substitute for human relationships?</strong></p></div>
    </section>

    <section className="st-approach">
      <p className="section-label">PRODUCT APPROACH</p>
      <div className="st-approach-head"><h2>Useful conversation without the performance of being human.</h2><p>The experience is deliberately simple. The user talks naturally; the system infers whether they need listening, perspective, a reality check, decision support or help preparing a conversation.</p></div>
      <div className="st-mode-strip"><span>LISTEN</span><i>→</i><span>UNDERSTAND</span><i>→</i><span>REALITY CHECK</span><i>→</i><span>DECIDE</span><i>→</i><span>RETURN TO REAL LIFE</span></div>
    </section>

    <section className="st-principles">
      <div className="st-section-head"><p className="section-label">DESIGN PRINCIPLES</p><h2>Built around restraint, not engagement.</h2></div>
      <div className="st-principle-grid">{principles.map(([n,t,d],i)=><motion.article key={t} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><small>{n}</small><h3>{t}</h3><p>{d}</p></motion.article>)}</div>
    </section>

    <section className="st-architecture">
      <div className="st-architecture-copy"><p className="section-label">SOLUTION ARCHITECTURE</p><h2>One conversation flow, with a targeted guardrail where prompting was not enough.</h2><p>The main advisor handles the conversation and session memory. Before each response, a lightweight classifier checks specifically for language suggesting that AI should replace human relationships or become the user's only source of support.</p><p>That classifier was added after behavioral testing showed that a long system prompt alone did not reliably enforce the dependency boundary.</p><div className="tags"><span>N8N</span><span>GROQ</span><span>GPT-OSS 120B</span><span>SESSION MEMORY</span><span>DEPENDENCY CLASSIFIER</span></div></div>
      <figure className="st-workflow"><img src="/images/second-thought-workflow.webp" alt="Second Thought n8n workflow showing chat entry, dependency classifier, advisor model and conversation memory"/><figcaption>SECOND THOUGHT / V1 N8N ARCHITECTURE</figcaption></figure>
    </section>

    <section className="st-iteration">
      <p className="section-label">KEY DESIGN ITERATION</p>
      <div className="st-iteration-grid"><div><small>EARLY APPROACH</small><h3>Prompt-only dependency handling</h3><p>The advisor was instructed not to encourage exclusivity or present itself as a replacement for human support.</p><span className="st-status st-status-mixed">INCONSISTENT</span></div><div className="st-arrow">→</div><div><small>V1 SOLUTION</small><h3>Dedicated dependency classifier</h3><p>A narrow Boolean classifier now detects explicit or strongly implied replacement language before the advisor responds.</p><span className="st-status">ENFORCEABLE</span></div></div>
      <p className="st-iteration-note">The change illustrates the core product lesson: when a behavior matters enough, it should not depend on a model remembering one instruction inside a long prompt.</p>
    </section>

    <section className="st-testing">
      <div className="st-section-head"><p className="section-label">BEHAVIORAL TESTING</p><h2>The product was tested as a conversation, not just as a workflow.</h2><p>Independent scenarios were used to test listening, uncertainty, decision support, pressure to take sides, self-blame, harmful intent, dependency and natural conversation endings.</p></div>
      <div className="st-test-list">{tests.map(([name,status,note])=><div className="st-test-row" key={name}><strong>{name}</strong><span>{status}</span><p>{note}</p></div>)}</div>
    </section>

    <section className="st-demo">
      <div><p className="section-label">PRODUCT EXPERIENCE</p><h2>A deliberately quiet interface.</h2><p>The hosted V1 strips the experience back to the conversation itself: a restrained palette, clear message hierarchy and no visible mode selector. The interface does not ask the user to learn the system before using it.</p></div>
      <div className="st-chat-mock">
        <div className="st-chat-head"><strong>Second Thought</strong><span>A place to think things through before deciding what to think, say, or do.</span></div>
        <div className="st-chat-body"><div className="st-bot">Hey. What's on your mind?</div><div className="st-user">My manager barely spoke to me today. Usually she's pretty chatty, so now I'm wondering if I've done something wrong.</div><div className="st-bot">That change is noticeable, but it doesn't tell you why it happened. Right now, you know she was quieter than usual; the reason is still unknown.</div></div>
        <div className="st-chat-input">What's on your mind?<b>↑</b></div>
      </div>
    </section>

    <section className="st-boundaries">
      <div><p className="section-label">BOUNDARIES & LIMITATIONS</p><h2>Designed to know what it should not become.</h2></div>
      <div><p>Second Thought is for adults 18+ and is not professional or emergency support. V1 uses session-based memory rather than building a permanent psychological profile.</p><p>Model behavior is probabilistic, so behavioral QA remains necessary. The current hosted prototype also inherits interface constraints from n8n, including limited control over some shell elements.</p></div>
    </section>

    <section className="st-close"><p className="section-label">THE VALUE</p><h2>The goal is not a longer conversation.<br/>It is a clearer next thought.</h2><p>Second Thought explores how conversational AI can support reflection while resisting sycophancy, overreach and unnecessary dependency.</p><a href="/">← BACK TO SELECTED WORK</a></section>
  </main>
}