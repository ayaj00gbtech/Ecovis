/** Original reference markup, preserved as native React elements. */
export default function CaseStudiesPage() {
  return (
    <div className="page" data-page="case-studies" hidden>{"\n  "}
      <section className="sec mist" style={{"paddingBlock": "64px 100px"}}>
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <div className="crumb">{"Credentials / "}
              <b>{"Case Studies"}</b>
            </div>
            <h1>{"Case Studies"}</h1>
            <div className="rule"></div>
            <p>{"Client stories from across the ECOVIS network: the problem, the solution and the result. India case studies from our own engagements are being prepared."}</p>
          </div>{"\n    "}
          <div className="filters" id="caseFilters" role="group" aria-label="Filter case studies"></div>{"\n    "}
          <div className="cgrid" id="caseList"></div>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
