import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Score from './pages/Score'
import Helper from './pages/Helper'
import Index from './pages/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Score/>}/>
          <Route path="ranking" element={<Score />} />
          <Route path="help" element={<Helper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;