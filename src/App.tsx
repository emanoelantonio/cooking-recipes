import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import { Header } from './components/Header';
import { RecipesCard } from './components/RecipesCard';

function App() {

  return (
    <>
      <Header />
      <RecipesCard/>
      {/* <CardCategory /> */}
    </>
  )
}

export default App
