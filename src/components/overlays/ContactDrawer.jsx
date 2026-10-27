/** Original reference markup, preserved as native React elements. */
export default function ContactDrawer() {
  return (
    <div className="ct-ov" id="ct" hidden role="dialog" aria-modal="true" aria-labelledby="ctTitle">{"\n  "}
      <div className="ct-panel">{"\n    "}
        <button type="button" className="ct-x" id="ctClose" aria-label="Close">{"×"}</button>{"\n    "}
        <div id="ctBody"></div>{"\n  "}
      </div>{"\n"}
    </div>
  );
}
