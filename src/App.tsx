import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Title from "./components/Title";
import Button from "./components/Button";
function App() {
  const list: string[] = ["uno", "dos", "tres"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <div className="container">
      <Title title="GYM" />
      <Card>
        <CardBody title="Titulo" text="hola mundo" />
        {contenido}
        <Button>Click</Button>
      </Card>
    </div>
  );
}

export default App;
