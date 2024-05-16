function Titulo() {
  const nombre = "Capo";

  if (nombre) {
    return (
      <div>
        <h1>Hola {nombre}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Hola Mundo</h1>
      </div>
    );
  }
}

export default Titulo;
