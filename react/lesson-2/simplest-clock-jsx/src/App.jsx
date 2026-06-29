function App() {
  const text = 'Now is ';
  const seconds = new Date().getSeconds().toString();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 != 0 ? '#fff' : '#000';
  const style = {backgroundColor: backgroundColor, color: textColor};

  return (
    <div className="seconds" style={style}>{text + seconds}</div>
  );
}

export default App;