"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { asset } from "@/lib/site";
import styles from "./LeHubShowcase.module.css";

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

function ProgressRing() {
  return (
    <div className={styles.progressRing} aria-label="French progress 68 percent">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="51" className={styles.ringTrack}/>
        <circle cx="60" cy="60" r="51" className={styles.ringValue}/>
      </svg>
      <div><strong>68%</strong><span>French progress</span></div>
    </div>
  );
}

function MiniDashboard() {
  return (
    <div className={styles.productWindow}>
      <div className={styles.windowTop}>
        <div className={styles.windowBrand}>le hub<span>.</span></div>
        <div className={styles.windowDate}>Tuesday · 14 October</div>
        <div className={styles.avatar}>YB</div>
      </div>
      <div className={styles.windowBody}>
        <aside className={styles.sideNav}>
          <span className={styles.sideActive}>Overview</span>
          <span>Course</span>
          <span>Workspace</span>
          <span>Bibliothèque</span>
          <span>Lexique</span>
        </aside>
        <div className={styles.dashMain}>
          <div className={styles.dashGreeting}>
            <small>BONJOUR, AMELIA</small>
            <h3>Your French,<br/><em>moving forward.</em></h3>
          </div>
          <div className={styles.focusStrip}>
            <span>THIS WEEK&apos;S FOCUS</span>
            <strong>Speak with more natural connectors</strong>
            <small>TEF · Expression orale</small>
          </div>
          <div className={styles.dashGrid}>
            <div className={styles.nextTask}>
              <span>NEXT TASK</span>
              <strong>Listening · Task 04</strong>
              <small>Due tomorrow · 18 min</small>
              <button type="button" tabIndex={-1}>Continue →</button>
            </div>
            <div className={styles.nextClass}>
              <span>NEXT CLASS</span>
              <strong>Thursday</strong>
              <small>9:30 AM · Google Meet</small>
              <div className={styles.teacherLine}><i/> With Yana</div>
            </div>
            <ProgressRing />
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseScreen() {
  return (
    <div className={`${styles.productWindow} ${styles.screenCourse}`}>
      <div className={styles.windowTop}>
        <div className={styles.windowBrand}>le hub<span>.</span></div>
        <div className={styles.windowDate}>Current course · TEF</div>
        <div className={styles.avatar}>AB</div>
      </div>
      <div className={styles.courseCanvas}>
        <div className={styles.courseHeading}>
          <small>CURRENT COURSE · TEF CANADA</small>
          <h3>Everything from class,<br/><em>in one clear place.</em></h3>
        </div>
        <div className={styles.courseTabs}>
          <span className={styles.courseTabActive}>Lessons</span><span>Recordings</span><span>Notes</span><span>Words of the week</span><span>Tests</span>
        </div>
        <div className={styles.lessonList}>
          <div className={styles.lessonActive}><b>12</b><div><strong>Building stronger oral answers</strong><small>Today · 64 min · 3 notes</small></div><span>Resume →</span></div>
          <div><b>11</b><div><strong>Opinion structures that sound natural</strong><small>7 Oct · 58 min · 5 notes</small></div><span>Completed</span></div>
          <div><b>10</b><div><strong>Listening under exam pressure</strong><small>4 Oct · 62 min · 2 notes</small></div><span>Completed</span></div>
        </div>
      </div>
    </div>
  );
}

function WorkspaceScreen() {
  return (
    <div className={`${styles.productWindow} ${styles.screenWorkspace}`}>
      <div className={styles.windowTop}>
        <div className={styles.windowBrand}>le hub<span>.</span></div>
        <div className={styles.windowDate}>Workspace · Speaking</div>
        <div className={styles.avatar}>AB</div>
      </div>
      <div className={styles.workspaceCanvas}>
        <div className={styles.workspaceTop}>
          <div><small>SPEAKING · HOMEWORK 08</small><h3>Record your answer.<br/><em>Then improve it.</em></h3></div>
          <span className={styles.reviewed}>Reviewed by Yana</span>
        </div>
        <div className={styles.audioCard}>
          <button type="button" tabIndex={-1}>▶</button>
          <div className={styles.waveform} aria-hidden="true">
            {[28,48,35,63,77,49,83,54,31,66,88,52,70,42,60,76,35,52,68,38,55,31,47,72,58,37,62,43,54,30].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}
          </div>
          <span>01:42</span>
        </div>
        <div className={styles.feedbackGrid}>
          <div className={styles.yanaFeedback}><span>YANA&apos;S FEEDBACK</span><p>“Your structure is much clearer. Now slow down before the example and let the connector do the work.”</p><div className={styles.voiceNote}>▶ <span>Voice note · 0:38</span></div></div>
          <div className={styles.redoCard}><span>NEXT PASS</span><strong>Try once more</strong><p>Keep the same idea. Replace <em>mais</em> with a stronger contrast connector.</p><button type="button" tabIndex={-1}>Record again</button></div>
        </div>
      </div>
    </div>
  );
}

function LexiqueCard() {
  return (
    <div className={styles.lexiqueCard}>
      <div className={styles.lexiqueTop}><span>LEXIQUE</span><span>FR → EN</span></div>
      <div className={styles.lexiqueWordRow}><h3>convaincre</h3><button type="button" tabIndex={-1}>↗</button></div>
      <p className={styles.phonetic}>/kɔ̃.vɛ̃kʁ/ · verbe</p>
      <div className={styles.meaning}><small>MEANING</small><strong>to convince · to persuade</strong></div>
      <div className={styles.example}><small>IN CONTEXT</small><p>Il faut <em>convaincre</em> l&apos;examinateur avec une idée claire, pas avec des phrases compliquées.</p></div>
      <div className={styles.conjugation}><span>je convaincs</span><span>tu convaincs</span><span>il convainc</span><span>nous convainquons</span></div>
      <div className={styles.lexiqueBottom}><button type="button" tabIndex={-1}>＋ Save to my words</button><span>Revision due in 3 days</span></div>
    </div>
  );
}

function IntelligenceSignals() {
  const items = [
    ["Listening", "Fast speech is still costing you details.", "3 sessions"],
    ["Vocabulary", "7 saved words are ready for revision.", "Today"],
    ["Grammar", "Agreement errors repeat in longer answers.", "Pattern found"],
    ["Next test", "Practice will lean slightly more oral.", "Adaptive"],
  ];
  return <div className={styles.signalList}>{items.map(([label,text,meta],i)=><motion.div {...reveal} transition={{...reveal.transition,delay:i*.07}} key={label}><span>0{i+1}</span><div><small>{label}</small><strong>{text}</strong></div><em>{meta}</em></motion.div>)}</div>;
}

export function LeHubShowcase() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <motion.div className={styles.heroCopy} initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
            <p className="eyebrow">Le Hub by Yana</p>
            <h1>Your French doesn&apos;t end<br/>when the <em>class does.</em></h1>
            <p>Meet your classroom, practice space, vocabulary bank and progress system — built around the way Yana teaches.</p>
            <div className={styles.heroActions}>
              <a href="#inside" className="button button--dark">See inside Le Hub <span>↓</span></a>
              <Link href="/find-your-batch" className="button button--ghost">Find your batch</Link>
            </div>
          </motion.div>
          <motion.div className={styles.heroStage} initial={{opacity:0,scale:.96,y:45}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1,delay:.12,ease:[.22,1,.36,1]}}>
            <MiniDashboard />
            <motion.div className={styles.floatingNote} animate={{y:[0,-9,0]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}><span>YANA&apos;S NOTE</span><strong>Better rhythm today.</strong><small>One thing to revisit →</small></motion.div>
            <motion.div className={styles.floatingWord} animate={{y:[0,8,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut",delay:.4}}><span>WORD OF THE WEEK</span><strong>pourtant</strong><small>however · yet</small></motion.div>
          </motion.div>
        </div>
        <div className={styles.heroMarquee}><span>CLASS → PRACTICE → FEEDBACK → REVISION → PROGRESS →</span><span>CLASS → PRACTICE → FEEDBACK → REVISION → PROGRESS →</span></div>
      </section>

      <section id="inside" className={styles.inside}>
        <div className="container">
          <motion.div className={styles.sectionHead} {...reveal}>
            <p className="eyebrow">One learning space</p>
            <h2>Less searching.<br/><em>More learning.</em></h2>
            <p>Class recordings, notes, practice, feedback and tests stay connected — so the next thing to do always feels obvious.</p>
          </motion.div>
          <div className={styles.screenStory}>
            <motion.div className={styles.screenCopy} {...reveal}><span>01</span><small>DASHBOARD</small><h3>Know what matters <em>today.</em></h3><p>Next task. Next class. Current level. This week&apos;s focus. Progress. Upcoming tests. Nothing noisy, nothing buried.</p></motion.div>
            <motion.div className={styles.screenFrame} {...reveal}><MiniDashboard /></motion.div>
          </div>
          <div className={`${styles.screenStory} ${styles.screenStoryReverse}`}>
            <motion.div className={styles.screenCopy} {...reveal}><span>02</span><small>CURRENT COURSE</small><h3>Class doesn&apos;t disappear <em>after Zoom.</em></h3><p>Lessons, recordings, notes, words of the week and tests become one continuous course instead of five different folders.</p></motion.div>
            <motion.div className={styles.screenFrame} {...reveal}><CourseScreen /></motion.div>
          </div>
        </div>
      </section>

      <section className={styles.workspaceSection}>
        <div className="container">
          <motion.div className={styles.workspaceIntro} {...reveal}>
            <div><p className="eyebrow eyebrow--light">The workspace</p><h2>Practice goes in.<br/><em>Yana comes back.</em></h2></div>
            <p>Write it. Upload it. Record it. Yana can mark it, comment on it, leave a voice note, or ask you to try again. The technology extends the teaching — it never replaces it.</p>
          </motion.div>
          <motion.div className={styles.workspaceFrame} {...reveal}><WorkspaceScreen /></motion.div>
          <div className={styles.practiceTypes}><span>Homework</span><span>Reading</span><span>Writing</span><span>Speaking</span><span>Listening</span><span>Practice</span></div>
        </div>
      </section>

      <section className={styles.lexiqueSection}>
        <div className={`container ${styles.lexiqueGrid}`}>
          <motion.div className={styles.lexiqueCopy} {...reveal}>
            <p className="eyebrow eyebrow--light">Meet Lexique</p>
            <h2>Not just translation.<br/><em>Understanding.</em></h2>
            <p>A word becomes pronunciation, conjugation, context, an example, and something worth revisiting later.</p>
            <div className={styles.lexiqueFeatures}><span>Pronunciation</span><span>Conjugation</span><span>Natural usage</span><span>Saved vocabulary</span><span>Revision</span></div>
          </motion.div>
          <motion.div {...reveal}><LexiqueCard /></motion.div>
        </div>
      </section>

      <section className={styles.intelligenceSection}>
        <div className="container">
          <motion.div className={styles.intelligenceHead} {...reveal}>
            <p className="eyebrow">Intelligence, quietly built in</p>
            <h2>Le Hub learns from<br/><em>your learning.</em></h2>
            <p>Not a chatbot shouting “AI”. A quieter layer that notices what deserves another look and helps practice become more relevant over time.</p>
          </motion.div>
          <IntelligenceSignals />
          <motion.div className={styles.intelligenceNote} {...reveal}><span>THE PRINCIPLE</span><strong>Technology notices patterns.<br/>Yana decides what matters.</strong></motion.div>
        </div>
      </section>

      <section className={styles.progressSection}>
        <div className="container">
          <motion.div className={styles.progressHead} {...reveal}><p className="eyebrow">Mon Parcours</p><h2>Know how far<br/><em>you&apos;ve actually come.</em></h2><p>Not streaks. Not meaningless points. A clear view of the language journey, test performance and what is changing.</p></motion.div>
          <motion.div className={styles.levelPath} {...reveal}>
            {[["A1","Foundations"],["A2","Everyday French"],["B1","Independent"],["B2","Confident"],["C1","Advanced"]].map(([level,label],i)=><div className={`${styles.level} ${i<3?styles.levelDone:""} ${i===2?styles.levelCurrent:""}`} key={level}><div className={styles.levelDot}>{i<2?"✓":level}</div><strong>{level}</strong><span>{label}</span>{i===2&&<small>YOU ARE HERE</small>}</div>)}
            <div className={styles.levelLine}><i/></div>
          </motion.div>
          <div className={styles.progressMetrics}>
            <motion.div {...reveal}><span>Listening</span><strong>+18%</strong><small>last 6 weeks</small></motion.div>
            <motion.div {...reveal}><span>Speaking</span><strong>7.8/10</strong><small>latest assessment</small></motion.div>
            <motion.div {...reveal}><span>Tests</span><strong>4 / 5</strong><small>target reached</small></motion.div>
          </div>
        </div>
      </section>

      <section className={styles.humanSection}>
        <div className={`container ${styles.humanGrid}`}>
          <motion.div className={styles.yanaImage} {...reveal}><img src={asset("/images/yana-editorial.webp")} alt="Yana Budhiraja"/><span>YANA BUDHIRAJA · THE FRANÇAIS HUB</span></motion.div>
          <motion.div className={styles.humanCopy} {...reveal}>
            <p className="eyebrow">Still personal</p>
            <h2>There is still a teacher<br/><em>behind the technology.</em></h2>
            <p>Le Hub is not designed to automate Yana out of your learning. It is designed to give her teaching somewhere to continue between classes.</p>
            <blockquote>“The goal is simple: when you open Le Hub, you should know what to do next — and why it matters.”</blockquote>
            <span>— Yana</span>
          </motion.div>
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className="container">
          <motion.div className={styles.finalInner} {...reveal}>
            <span>LE HUB IS INCLUDED WITH YOUR LEARNING EXPERIENCE</span>
            <h2>Ready to learn French<br/><em>with a system behind it?</em></h2>
            <p>Choose TEF, TCF or DELF, find a batch that fits your week, and talk to Yana personally before you begin.</p>
            <Link href="/find-your-batch" className="button button--accent">Find your batch <span>→</span></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
