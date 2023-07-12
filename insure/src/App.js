import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return `안녕하세요 홍길동님!`;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>테스트 콘텐츠</h1>
        <Welcome></Welcome>
      </header>
    </div>
  );
}

export default App;
