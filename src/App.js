import { useState } from 'react'
import { Grommet } from 'grommet'
import { Home } from './pages'
import { Bottom, Nav } from './components';

function App() {
  const [form, setForm] = useState(false)
  const open = () => {
    setForm(true)
  }
  const close = () => {
    setForm(false)
  }

  return (
    <Grommet>
      <Nav open={open}/>
      <Home open={open} close={close} form={form} setForm={setForm}/>
      <Bottom />
    </Grommet>
  );
}

export default App;
