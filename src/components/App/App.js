import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Detail from '../Detail/Detail';

function App() {
  return (
    <div className="App">
      <h1> FamooieNii Mooies </h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/description">
          <Detail />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
