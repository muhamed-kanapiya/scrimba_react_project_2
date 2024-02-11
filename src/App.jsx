import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

console.log(data);

function App() {
  const cardList = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Nav />
      <Hero />
      <section className="card-list">{cardList}</section>
    </>
  );
}

export default App;
