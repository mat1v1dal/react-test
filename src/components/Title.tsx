interface Props {
  title: string;
}

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  color: "blue",
};

function Title(props: Props) {
  const { title } = props;
  return (
    <div>
      <h1 className="card-title">{title}</h1>
    </div>
  );
}
export default Title;
