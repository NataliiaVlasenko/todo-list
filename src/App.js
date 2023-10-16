
import './App.css';
import ToDo from './components/ToDo';


function App() {
  return (
    <div className="container border border-primary rounded mt-5" style={{background: 'URL(https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
    backgroundSize: 'cover'}}>
      <ToDo/>
    </div>
  );
}

export default App;
