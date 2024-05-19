import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from './components/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/signup" element={<Signup />} /> 
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/send" component={Send} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
