/** Original reference markup, preserved as native React elements. */
export default function ProductsPage() {
  return (
    <div className="page" data-page="products" hidden>{"\n  "}
      <section className="prod2" id="prodStage">
        <div className="wrap">{"\n    "}
          <div className="p2-head">{"\n      "}
            <div className="crumb">{"Studio AI / "}
              <b>{"Products and services"}</b>
            </div>{"\n      "}
            <h1 className="p2-h">
              <span id="prType"></span>
              <i className="pr-caret" aria-hidden="true"></i>
            </h1>{"\n      "}
            <p className="p2-sub">{"Built in Studio AI on the ACE method, and used inside our own engagements first."}</p>{"\n    "}
          </div>{"\n    "}
          <div className="p2-grid">{"\n      "}
            <div className="p2-dial" aria-hidden="true">{"\n        "}
              <span className="p2-pin"></span>{"\n        "}
              <div className="p2-plate">
                <div className="p2-ring" id="prPlate"></div>
                <div className="p2-hub">
                  <span>{"Studio"}</span>
                  <b>{"AI"}</b>
                </div>
              </div>{"\n      "}
            </div>{"\n      "}
            <div className="pr-card" aria-live="polite">{"\n        "}
              <div className="pr-idx" id="prIdx"></div>{"\n        "}
              <h2 id="prName"></h2>{"\n        "}
              <p id="prDesc"></p>{"\n        "}
              <div className="pr-nav">
                <button type="button" id="prPrev" aria-label="Previous">{"←"}</button>
                <div className="pr-dots" id="prDots"></div>
                <button type="button" id="prNext" aria-label="Next">{"→"}</button>
              </div>{"\n      "}
            </div>{"\n    "}
          </div>{"\n    "}
          <div className="p2-foot">
            <button type="button" className="btn as-btn" data-contact="" data-topic="ACE">
              <span>{"Talk to us"}</span>
              <span className="arr">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 12L12 4M6 4h6v6"></path>
                </svg>
              </span>
            </button>
            <a className="link" href="https://ace-eco.vercel.app" target="_blank" rel="noopener">{"Open the ACE site ↗"}</a>
          </div>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
