import ItoiJourneySection from '../components/ItoiJourneySection.jsx';

/** Original reference markup, preserved as native React elements. */
export default function HomePage() {
  return (
    <div className="page" data-page="home">{"\n  "}
      <section className="photo-hero">{"\n    "}
        <img className="bg" src="assets/images/image-9f338b29b028.jpg" alt="" />{"\n    "}
        <div className="veil"></div>{"\n    "}
        <div className="wrap inner">{"\n      "}
          <div className="kicker">{"From "}
            <span className="i2i">{"i to I"}</span>{" · individual to Institution"}
          </div>{"\n      "}
          <h1 className="hero-h">
            <span className="hl-soft">{"We help entrepreneurs build"}</span>{" "}
            <span className="hl-red">{"well-governed"}</span>{" "}
            <span className="hl-soft">{"and"}</span>{" "}
            <span className="hl-red">{"investable"}</span>{" "}
            <span className="hl-soft">{"businesses to"}</span>{" "}
            <span className="hl-white">{"scale."}</span>
          </h1>{"\n      "}
          <p className="hero-p">{"50+ years working with 1500+ enterprises across 90+ countries."}</p>{"\n      "}
          <div className="row">{"\n        "}
            <a className="btn light" href="#quick-diagnostic">
              <span>{"Take the 30-second diagnostic"}</span>
              <span className="arr">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 12L12 4M6 4h6v6"></path>
                </svg>
              </span>
            </a>{"\n        "}
            <a className="hero-alt" href="#contact" data-contact="">{"Or tell us who you are"}</a>{"\n      "}
          </div>{"\n    "}
        </div>{"\n  "}
      </section>{"\n  "}
      <section className="stats">
        <div className="wrap">
          <div className="box">{"\n    "}
            <div>
              <div className="stat-n">{"1500+"}</div>
              <div className="stat-l">{"Clients"}</div>
            </div>{"\n    "}
            <div>
              <div className="stat-n">{"50+"}</div>
              <div className="stat-l">{"Years, since 1974"}</div>
            </div>{"\n    "}
            <div>
              <div className="stat-n">{"90+"}</div>
              <div className="stat-l">{"Countries in the ECOVIS network"}</div>
            </div>{"\n  "}
          </div>
        </div>
      </section>{"\n\n  "}
      <ItoiJourneySection id="home-itoi" scrollDriven />{"\n\n  "}
      <section className="sec" id="home-pillars">
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <h2 className="offer-h">{"Every business that lasts makes the same journey: from "}
              <a className="i2i-link" href="#itoi">{"i to I"}</a>{"."}
            </h2>
            <p className="offer-s">{"We partner that journey in three ways, each answering a question every growing business must face."}</p>
            <div className="rule"></div>
            <p className="strat-s">
              <b>{"Strategic choices"}</b>{" run through all three."}
            </p>
          </div>{"\n    "}
          <div className="pillars">{"\n      "}
            <a className="pillar" href="#institutionalise">
              <h3>{"Governance, Risk and Compliance"}</h3>
              <p className="q">{"Are your risks all covered?"}</p>
              <p className="d">{"For owners who still sign off on everything, worry about missed filings or cannot step away for a week."}</p>
              <span className="go">{"Explore Governance, Risk and Compliance"}</span>
            </a>{"\n      "}
            <a className="pillar" href="#investable">
              <h3>{"Investability"}</h3>
              <p className="q">{"Will capital trust the business?"}</p>
              <p className="d">{"For owners whose cash is always tight, or who find banks and investors hard to convince."}</p>
              <span className="go">{"Explore Investability"}</span>
            </a>{"\n      "}
            <a className="pillar" href="#scale">
              <h3>{"Scale"}</h3>
              <p className="q">{"Can it grow beyond its founder?"}</p>
              <p className="d">{"For owners whose team is not pulling together, or who spend their days firefighting instead of growing."}</p>
              <span className="go">{"Explore Scale"}</span>
            </a>{"\n    "}
          </div>{"\n  "}
        </div>
      </section>{"\n\n  "}
      <section className="sec mist">
        <div className="wrap two">{"\n    "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>{"\n      "}
            <div style={{"fontSize": "14px", "color": "var(--red)", "fontWeight": "500"}}>{"Studio AI"}</div>{"\n      "}
            <h2 style={{"fontSize": "clamp(28px,3.2vw,40px)", "lineHeight": "1.2"}}>{"ACE: the engine behind every engagement."}</h2>{"\n      "}
            <p style={{"fontSize": "17px", "color": "var(--ink-2)", "maxWidth": "460px"}}>{"It works on top of the systems you already have, so leaders see what matters and act on it."}</p>{"\n      "}
            <a className="link" href="#studio-ai" style={{"alignSelf": "flex-start"}}>{"How ACE works"}</a>{"\n    "}
          </div>{"\n    "}
          <div>{"\n      "}
            <div className="ace-row">
              <span className="ace-l">{"A"}</span>
              <span>
                <b style={{"fontWeight": "600", "display": "block"}}>{"Assess"}</b>
                <span style={{"fontSize": "15px", "color": "var(--ink-2)"}}>{"Know how ready you are before you scale."}</span>
              </span>
            </div>{"\n      "}
            <div className="ace-row">
              <span className="ace-l">{"C"}</span>
              <span>
                <b style={{"fontWeight": "600", "display": "block"}}>{"Co-create"}</b>
                <span style={{"fontSize": "15px", "color": "var(--ink-2)"}}>{"Agree the few numbers that matter, and who owns them."}</span>
              </span>
            </div>{"\n      "}
            <div className="ace-row">
              <span className="ace-l">{"E"}</span>
              <span>
                <b style={{"fontWeight": "600", "display": "block"}}>{"Embedded execution"}</b>
                <span style={{"fontSize": "15px", "color": "var(--ink-2)"}}>{"Put intelligence where the work happens."}</span>
              </span>
            </div>{"\n    "}
          </div>{"\n  "}
        </div>
      </section>{"\n\n  "}
      <section className="sec" id="team">
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <h2>{"Our Team Driving Growth"}</h2>
            <div className="rule"></div>
          </div>{"\n    "}
          <div className="team">
            <a className="person" href="#partner-dheeraj">
              <img src="assets/images/image-299127cae6ba.jpg" alt="Dheeraj Rathi" />
              <div className="nm">{"Dheeraj Rathi"}</div>
              <div className="rl">{"Co-founder and Board Member, ECOVIS RKCA"}</div>
              <span className="more">{"View profile →"}</span>
            </a>
            <a className="person" href="#partner-pankaj">
              <img src="assets/images/image-eea8a43879ce.jpg" alt="Pankaj Bhargava" />
              <div className="nm">{"Pankaj Bhargava"}</div>
              <div className="rl">{"Managing Partner (India), COrE Creators"}</div>
              <span className="more">{"View profile →"}</span>
            </a>
            <a className="person" href="#partner-deepa">
              <img src="assets/images/image-f203eb5ee3c3.jpg" alt="Deepa Rathi" />
              <div className="nm">{"Deepa Rathi"}</div>
              <div className="rl">{"Designated Partner, R Kabra & Co LLP"}</div>
              <span className="more">{"View profile →"}</span>
            </a>
            <a className="person" href="#partner-sanjeev">
              <img src="assets/images/image-efc063faaba9.jpg" alt="Sanjeev Bindal" />
              <div className="nm">{"Sanjeev Bindal"}</div>
              <div className="rl">{"Lawyer, ECOVIS RKCA, New Delhi"}</div>
              <span className="more">{"View profile →"}</span>
            </a>
            <a className="person" href="#partner-bala">
              <img src="assets/images/image-a614f5e9c941.jpg" alt="D. Balasubramaniam" />
              <div className="nm">{"D. Balasubramaniam"}</div>
              <div className="rl">{"Director, ECOVIS RKCA Advisors Ltd"}</div>
              <span className="more">{"View profile →"}</span>
            </a>
          </div>{"\n  "}
        </div>
      </section>{"\n\n  "}
      <section className="close-cta">
        <div className="wrap">{"\n    "}
          <div className="cc-grid">{"\n      "}
            <div className="cc-opt main cc-form-box">{"\n        "}
              <span className="cc-k">{"Let’s talk"}</span>{"\n        "}
              <b>{"Tell us who you are. We’ll take it from there."}</b>{"\n        "}
              <span className="cc-d">{"Three details. A partner reads every message and replies personally."}</span>{"\n        "}
              <div className="cc-form"></div>{"\n      "}
            </div>{"\n      "}
            <a className="cc-opt" href="#quick-diagnostic">
              <span className="cc-k">{"Not sure where to start?"}</span>
              <b>{"Take the 30-second diagnostic"}</b>
              <span className="cc-d">{"Pick the three challenges that sound most like you. We point you to where we would begin."}</span>
              <span className="cc-go">{"Start the diagnostic →"}</span>
            </a>{"\n    "}
          </div>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
