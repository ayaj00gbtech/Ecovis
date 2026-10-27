/** Original reference markup, preserved as native React elements. */
export default function MediaPage() {
  return (
    <div className="page" data-page="media" hidden>{"\n  "}
      <section className="sec" style={{"paddingBlock": "64px 100px"}}>
        <div className="wrap">{"\n    "}
          <div className="center-head">
            <div className="crumb">{"Credentials / "}
              <b>{"Ecovis in News"}</b>
            </div>
            <h1>{"Ecovis in News"}</h1>
            <div className="rule"></div>
            <p>{"News, insights and events from ECOVIS firms around the world, organised by region. South Asia covers ECOVIS RKCA and our partners."}</p>
          </div>{"\n    "}
          <div className="filters" id="mediaFilters" role="group" aria-label="Filter news by region"></div>{"\n    "}
          <div className="media" id="mediaList"></div>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
