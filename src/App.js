
import Quiz from "./Components/QuizP1/Quiz";
import Page2 from "./Components/QuizP2/Page2";
import Page3 from "./Components/QuizP3/Page3";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles/quiz.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Quiz screen 1 figma */}
          <Route path="/" element={<Quiz />} />
          {/* Quiz screen 2 figma */}
          <Route path="/page2" element={<Page2 />} />
          {/* Quiz screen 3 figma */}
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
