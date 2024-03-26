function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
      return <MadeGoal/>;
    }
    return <MissedGoal/>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Goal isGoal={false} />);

  // Ternary operator way

  function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
  }