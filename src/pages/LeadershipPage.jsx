/** Original reference markup, preserved as native React elements. */
export default function LeadershipPage() {
  return (
    <div className="page" data-page="leadership" hidden>{"\n  "}
      <section className="sec" style={{"paddingBlock": "64px 100px"}}>
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <div className="crumb">{"About Us / "}
              <b>{"Leadership"}</b>
            </div>
            <h1>{"Leadership"}</h1>
            <div className="rule"></div>
            <p>{"The partners you would be trusting your business to: where they come from, what they know and how to reach them."}</p>
          </div>{"\n    "}
          <div className="ld-grid" id="leadGrid"></div>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
