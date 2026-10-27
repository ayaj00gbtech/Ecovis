/** Shared interactive i to I journey used on the home and i to I pages. */
export default function ItoiJourneySection({ id, scrollDriven = false }) {
  return (
    <section
      className={`ph7${scrollDriven ? ' ph7-scroll' : ''}`}
      id={id}
      data-itoi-journey
      data-scroll-driven={scrollDriven ? '' : undefined}
    >
      <div className="ph7-sticky">
        <div className="wrap">
        <div className="ph7-hd">
          <h2 className="ph7-title">
            The <span className="i2i">i to I</span> Journey
          </h2>
          <p className="ph7-sub">Every business starts with an individual. The ones that last become institutions.</p>
          <p className="ph7-small">The small i is the founder, the capital I is the institution. We keep the first and build the second.</p>
        </div>

        <div className="ph7-stage">
          <div className="ph7-glyph" aria-hidden="true">
            <span className="g-sm" style={{ opacity: "1", transform: "scale(1)" }}>i</span>
            <span className="g-lg" style={{ opacity: "0", transform: "scale(0.5)" }}>I</span>
          </div>
          <div className="ph7-rows" aria-live="polite">
            <div className="ph7-now">
              <span data-ph-stage-number>Stage 1 of 4</span>
              <b data-ph-stage>Startup</b>
            </div>
            <div className="ph7-row">
              <span className="lb">Focus</span>
              <span className="tx" data-k="focus">Survival</span>
            </div>
            <div className="ph7-row">
              <span className="lb">Challenges</span>
              <span className="tx" data-k="ch">The right offer, the first customers</span>
            </div>
            <div className="ph7-row">
              <span className="lb">Building blocks</span>
              <span className="tx" data-k="bb">The founder’s time, effort and ideas</span>
            </div>
            <div className="ph7-row">
              <span className="lb">Pitfalls</span>
              <span className="tx" data-k="pf">Playing “the CEO” too early</span>
            </div>
          </div>
        </div>

        <div className="ph7-slider">
          <button type="button" className="end" data-v="0" aria-label="Go to the start: individual">
            i<small>individual</small>
          </button>
          <div className="ph7-track">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="0"
              aria-label="Move from individual to Institution through four stages"
              data-ph-range
              style={{ "--p": "0%" }}
            />
          </div>
          <button type="button" className="end big" data-v="100" aria-label="Go to the end: Institution">
            I<small>Institution</small>
          </button>
        </div>

          <div className="ph7-foot">
            <p className="q">Don’t professionalise the entrepreneur out of the business. Institutionalise the entrepreneur within it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
