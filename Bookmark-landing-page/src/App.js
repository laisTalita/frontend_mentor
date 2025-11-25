import ExtentionsSec from "./Components/sections/ExtentionsSec";
import Features from "./Components/sections/Features";
import Header  from "./Components/Component/Header" 
import BookmarkManager from './Components/sections/BookmarkManager'
import Questions from "./Components/sections/Questions";
import Footer from "./Components/Component/Footer";
import Contact from "./Components/sections/Contact"

function App() {
  return (
    <div className="App">
      <Header/>
      <main className=" mx-auto d-flex flex-column">
        <BookmarkManager/>
        <Features id="features" />
        <ExtentionsSec id="pricing"/>
        <Questions/>
      </main>
        <Contact id="contact"/>

      <Footer/>

    </div>
  );
}

export default App;
