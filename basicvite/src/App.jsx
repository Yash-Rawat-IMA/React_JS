import Search from "./Search";
import Youtube from "./youtube";
import Header from "./header";

function App() {
  // Rule 1: We can return only one element, so to return multiple elements we should wrap them inside a <div> </div> or </> </> because JSX requires single root element
  // Rule 2: First letter should be upper case for jsx import and using it in another jsx file, because REACT assumes lowercase tags as HTML elements
  return (
    <>
      <Header />
      <Search />
    </>
  );
}

export default App;
