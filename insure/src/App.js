import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>테스트 콘텐츠</h1>
        <Welcome username={"둘리"} age={15}></Welcome>
        <Welcome username={"홍길동"} age={11}></Welcome>
        <Welcome username={"도우너"} age={12}></Welcome>
        <Welcome username={"희동이"} age={13}></Welcome>
      </header>
    </div>
  );
}

export default App;
