/** Original reference markup, preserved as native React elements. */
export default function GrcDiagnosticPage() {
  return (
    <div className="page" data-page="grc-diagnostic" hidden>{"\n  "}
      <section className="sec diag-sec" id="grc-quiz">
        <div className="wrap">{"\n    "}
          <div className="diag-head">{"\n      "}
            <div>
              <div className="eb">{"The governance diagnostic"}</div>
              <h2>{"How much control do you really have over your business?"}</h2>
            </div>{"\n      "}
            <p>{"Fourteen quick questions. Tap Yes, Partly or Not yet. In about three minutes you get one of five results, with the first three moves for your business."}</p>{"\n    "}
          </div>{"\n    "}
          <div className="tf" id="gtf2"></div>{"\n  "}
        </div>
      </section>{"\n  "}
      <section className="sec rep-wrap" id="grc-result" hidden>
        <div className="wrap">
          <div id="grcOut"></div>
        </div>
      </section>{"\n"}
    </div>
  );
}
