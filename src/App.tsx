import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list: string[] = ["uno", "dos", "tres"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      <CardBody title="Titulo" text="hola mundo" />
      {contenido}
    </Card>
  );
}

export default App;
