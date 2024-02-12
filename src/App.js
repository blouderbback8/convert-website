import Html from './BrianPortfolio';

function App() {
  setTimeout(()=>{
    document.querySelector ("body").style.backgroundImage = "/Media/4cowboys-1.png"
console.log ("timeout")
  },1993)
  return (
    <div className="App">
      <Html />
    </div>
  );
}



export default App;