import { Input } from "../input";
export function SearchForm() {
  return (
    <form className="md:w-full">
      <Input type="text" name="search" />
    </form>
  );
}
