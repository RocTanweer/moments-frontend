import { createPortal } from "react-dom";

export function MobileSearch({ mobileSearch, setMobileSearch }) {
  if (!mobileSearch) return <></>;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-primary-900">
      <button onClick={() => setMobileSearch(false)}>close</button>
    </div>,
    document.getElementById("search-portal")
  );
}
