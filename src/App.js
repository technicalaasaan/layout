import logo from './logo.svg';
import './App.css';
import SplitScreen from './SplitScreen';


const LeftComp = (props) => {
  return <b style={{ backgroundColor: 'green'}} > {props.name} </b>
}

const RightComp = ({ name }) => {
  return <b style={{ backgroundColor: 'yellow'}}> {name} </b>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={4}>
      <LeftComp name="prakash" />
      <RightComp name="credo" />
    </SplitScreen>
  );
}

export default App;
