import './App.scss'
import Nav from './components/Nav'
import MainSection from './components/MainSection'
import SolutionsSection from './components/SolutionsSection'

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Nav />
      </header>
      <main>
        <MainSection />
        <SolutionsSection />
      </main>
    </div>
  );
}

export default App;
