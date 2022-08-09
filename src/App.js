import { Grommet } from 'grommet'
import { Home } from './pages'
import { Bottom, Nav } from './components';

function App() {


  return (
    <Grommet>
      <Nav />
      <Home />
      <Bottom />
    </Grommet>
  );
}

export default App;
