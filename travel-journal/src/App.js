import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data'

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item}></Card>
  })
  return (
    <div className="App">
      <NavBar />
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
