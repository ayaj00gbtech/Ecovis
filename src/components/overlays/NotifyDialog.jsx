/** Original reference markup, preserved as native React elements. */
export default function NotifyDialog() {
  return (
    <div className="ct-ov" id="nt" hidden role="dialog" aria-modal="true" aria-labelledby="ntTitle">{"\n  "}
      <div className="ct-panel nt-panel">{"\n    "}
        <button type="button" className="ct-x" id="ntClose" aria-label="Close">{"×"}</button>{"\n    "}
        <div id="ntBody"></div>{"\n  "}
      </div>{"\n"}
    </div>
  );
}
