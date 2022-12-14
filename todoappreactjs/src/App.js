import Input from './components/Input';
import List from './components/List';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  return (
    <div className="App">
      <div className='flex flex-col items-center justify-center h-[100%]'>
        <Input />
        <List />
      </div>
    </div>
  );
}

export default App;