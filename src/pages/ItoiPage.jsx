import ItoiJourneySection from '../components/ItoiJourneySection.jsx';

/** Original reference markup, preserved as native React elements. */
export default function ItoiPage() {
  return (
    <div className="page" data-page="itoi" hidden>{"\n  "}
      <ItoiJourneySection id="philosophy" />{"\n\n  "}
      <section className="sec" id="itoi-pillars">
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <h2 className="offer-h">{"Every business that lasts makes the same journey: from "}
              <span className="i2i-link">{"i to I"}</span>{"."}
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
