function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  // Destructuring props

  function Greet({name}) {
    return <h1>Hello, {name}</h1>;
  }
  

  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Nafis" />;
  root.render(element);