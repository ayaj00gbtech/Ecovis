/** Original reference markup, preserved as native React elements. */
export default function Header() {
  return (
    <header className="site-head over" id="head">{"\n  "}
      <div className="wrap head-row">{"\n    "}
        <a href="#home" className="logo" aria-label="ECOVIS RKCA home">
          <img className="r" src="assets/images/image-61321286b310.png" alt="ECOVIS RKCA" />
          <img className="w" src="assets/images/image-8556fbb2a9c8.png" alt="ECOVIS RKCA" />
        </a>{"\n    "}
        <button className="burger" id="burger" aria-label="Open menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
        </button>{"\n    "}
        <nav className="nav" id="nav">{"\n      "}
          <a href="#itoi" data-nav="what">{"i to I"}</a>{"\n      "}
          <a href="#studio-ai" data-nav="studio">{"Studio AI"}</a>{"\n      "}
          <div className="dd">
            <button className="drop" data-nav="cred" aria-expanded="false">{"Credentials "}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M2 3.5l3 3 3-3"></path>
              </svg>
            </button>
            <div className="dd-panel" hidden>{"\n        "}
              <a href="#publications">{"Publications"}
                <small>{"Books, papers and articles"}</small>
              </a>{"\n        "}
              <a href="#case-studies">{"Case Studies"}
                <small>{"Problems we solved"}</small>
              </a>{"\n        "}
              <a href="#media">{"Ecovis in News"}
                <small>{"News from our regions"}</small>
              </a>{"\n      "}
            </div>
          </div>{"\n      "}
          <div className="dd">
            <button className="drop" data-nav="about" aria-expanded="false">{"About Us "}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M2 3.5l3 3 3-3"></path>
              </svg>
            </button>
            <div className="dd-panel" hidden>{"\n        "}
              <a href="#journey">{"Our Journey"}
                <small>{"Since 1974, in four eras"}</small>
              </a>{"\n        "}
              <a href="#leadership">{"Leadership"}
                <small>{"The partners behind ECOVIS RKCA"}</small>
              </a>{"\n      "}
            </div>
          </div>{"\n      "}
          <a href="#contact" className="quiz-btn" data-contact="">{"Let’s talk"}</a>{"\n    "}
        </nav>{"\n  "}
      </div>{"\n"}
    </header>
  );
}
