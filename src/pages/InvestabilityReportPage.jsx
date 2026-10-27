/** Original reference markup, preserved as native React elements. */
export default function InvestabilityReportPage() {
  return (
    <div className="page" data-page="investability-report" hidden>{"\n  "}
      <section className="sec diag-sec" id="inv-quiz">
        <div className="wrap">{"\n    "}
          <div className="diag-head">{"\n      "}
            <div>
              <div className="eb">{"Your detailed investability report"}</div>
              <h2>{"Ten questions a lender or investor would ask you."}</h2>
            </div>{"\n      "}
            <p>{"Tap an answer and move on: it takes about four minutes. Your report is ready instantly, with the questions an investor would raise and where to start."}</p>{"\n    "}
          </div>{"\n    "}
          <div className="tf" id="itf"></div>{"\n  "}
        </div>
      </section>{"\n  "}
      <section className="sec rep-wrap" id="inv-report" hidden>
        <div className="wrap">
          <div id="invOut"></div>
        </div>
      </section>{"\n"}
    </div>
  );
}
