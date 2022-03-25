import { createPortal } from "react-dom";
import { IoIosArrowBack } from "react-icons/io";
import { SearchForm } from "../../components/";

export function MobileSearch({ mobileSearch, setMobileSearch }) {
  if (!mobileSearch) return <></>;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white py-7 px-10 md:hidden">
      <button className="mb-8" onClick={() => setMobileSearch(false)}>
        <IoIosArrowBack className="w-6 h-6" />
      </button>
      <SearchForm />
    </div>,
    document.getElementById("search-portal")
  );
}
