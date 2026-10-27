/** Original reference markup, preserved as native React elements. */
export default function JourneyPage() {
  return (
    <div className="page" data-page="journey" hidden>{"\n  "}
      <section className="sec" style={{"paddingBlock": "72px 48px"}}>
        <div className="wrap">{"\n    "}
          <div className="center-head" style={{"marginBottom": "0"}}>
            <div className="crumb">{"About Us / "}
              <b>{"Our Journey"}</b>
            </div>
            <h1>{"Our Journey since 1974"}</h1>
            <div className="rule"></div>{"\n      "}
            <p>{"From a founder-led tax practice in Mumbai to an advisory group in the ECOVIS network. Five decades, four eras."}</p>{"\n    "}
          </div>{"\n  "}
        </div>
      </section>{"\n  "}
      <div className="era-nav" id="eraNav">
        <div className="wrap">{"\n    "}
          <a href="#era-1">
            <b>{"1974"}</b>{"Founder-led taxation"}
          </a>
          <span className="ea" aria-hidden="true">{"→"}</span>
          <a href="#era-2">
            <b>{"1991"}</b>{"Expanded services"}
          </a>
          <span className="ea" aria-hidden="true">{"→"}</span>
          <a href="#era-3">
            <b>{"2016"}</b>{"Technology"}
          </a>
          <span className="ea" aria-hidden="true">{"→"}</span>
          <a href="#era-4">
            <b>{"Today"}</b>{"Institution-building"}
          </a>{"\n  "}
        </div>
      </div>{"\n  "}
      <section className="eras">
        <div className="wrap">{"\n    "}
          <article className="era" id="era-1">{"\n      "}
            <div className="era-y">
              <span>{"01"}</span>
              <b>{"1974"}</b>
              <i>{"to 1990"}</i>
            </div>{"\n      "}
            <div className="era-b">{"\n        "}
              <h2>{"Founder-led taxation"}</h2>{"\n        "}
              <p className="lead">{"R. Kabra & Co. begins in Mumbai in 1974 as a chartered accountancy practice built around its founder: taxation, accounts and the personal trust of the families and businesses it served."}</p>{"\n        "}
              <ul className="ms">
                <li>
                  <b>{"1974"}</b>{"The practice is founded in Mumbai."}
                </li>
              </ul>{"\n      "}
            </div>{"\n    "}
          </article>{"\n    "}
          <article className="era" id="era-2">{"\n      "}
            <div className="era-y">
              <span>{"02"}</span>
              <b>{"1991"}</b>
              <i>{"to 2015"}</i>
            </div>{"\n      "}
            <div className="era-b">{"\n        "}
              <h2>{"Expanded services, then a global network"}</h2>{"\n        "}
              <p className="lead">{"India opens up in 1991, and the firm grows with its clients: merchant banking, corporate advisory, international tax and certification, then a place in an international network."}</p>{"\n        "}
              <ul className="ms">{"\n          "}
                <li>
                  <b>{"1994"}</b>{"Clients in 12 countries. R. Kabra Merchant Financing Ltd is incorporated and registered with SEBI as a Category IV merchant banker."}
                </li>{"\n          "}
                <li>
                  <b>{"1997"}</b>{"Renamed R. Kabra Corporate Advisors Ltd."}
                </li>{"\n          "}
                <li>
                  <b>{"1999"}</b>{"International tax and advisory, focused on financial services and international trade."}
                </li>{"\n          "}
                <li>
                  <b>{"2005"}</b>{"Joint venture with BM TRADA, a UK certification body, for ISO certification."}
                </li>{"\n          "}
                <li>
                  <b>{"2007"}</b>{"Joins ECOVIS International."}
                </li>{"\n          "}
                <li>
                  <b>{"2010"}</b>{"Offices in Sri Lanka, Bangladesh, Nepal, Ghana, Delhi and Jaipur, with associates in Bangalore, Hyderabad and Ahmedabad."}
                </li>{"\n          "}
                <li>
                  <b>{"2015"}</b>{"ECOVIS Fuller RKCA FZC is set up in the UAE to help Indian businesses find partners there."}
                </li>{"\n        "}
              </ul>{"\n      "}
            </div>{"\n    "}
          </article>{"\n    "}
          <article className="era" id="era-3">{"\n      "}
            <div className="era-y">
              <span>{"03"}</span>
              <b>{"2016"}</b>
              <i>{"to 2022"}</i>
            </div>{"\n      "}
            <div className="era-b">{"\n        "}
              <h2>{"Technology"}</h2>{"\n        "}
              <p className="lead">{"Advice moves onto platforms. A technology platform connects a network of chartered accountants and lawyers, and diagnostic tools, analytics and AI enter the advisory work."}</p>{"\n        "}
              <ul className="ms">{"\n          "}
                <li>
                  <b>{"2020"}</b>{"Global Consultants Review features ECOVIS RKCA on technology and international networks in advisory."}
                </li>{"\n          "}
                <li>
                  <b>{"2021"}</b>{"R Kabra & Co LLP is formed."}
                </li>{"\n        "}
              </ul>{"\n      "}
            </div>{"\n    "}
          </article>{"\n    "}
          <article className="era now" id="era-4">{"\n      "}
            <div className="era-y">
              <span>{"04"}</span>
              <b>{"Today"}</b>
              <i>{"and next"}</i>
            </div>{"\n      "}
            <div className="era-b">{"\n        "}
              <h2>{"Institution-building"}</h2>{"\n        "}
              <p className="lead">{"The firm now does for its clients what it has done for itself: build institutions. Governance, Risk and Compliance, Investability and Scale, supported by Studio AI and ACE, across offices in Mumbai, New Delhi, Hyderabad, Indore and Kolkata."}</p>{"\n        "}
              <ul className="ms">{"\n          "}
                <li>
                  <b>{"Now"}</b>{"The "}
                  <span className="i2i">{"i to I"}</span>{" philosophy and three offerings: Governance, Risk and Compliance, Investability and Scale."}
                </li>{"\n          "}
                <li>
                  <b>{"Now"}</b>{"Studio AI and ACE put intelligence into how clients run."}
                </li>{"\n        "}
              </ul>{"\n      "}
            </div>{"\n    "}
          </article>{"\n  "}
        </div>
      </section>{"\n"}
    </div>
  );
}
