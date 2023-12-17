import logo from './logo.svg';
import './App.css';
import SplitScreen from './SplitScreen';
import { Modal } from './Modal';


const LeftComp = (props) => {
  return <b style={{ backgroundColor: 'green'}} > {props.name} </b>
}

const RightComp = ({ name }) => {
  return <b style={{ backgroundColor: 'yellow'}}> {name} </b>
}

function App() {
  return (
    <>
      <Modal>
        Hi Hello!
        <SplitScreen leftWeight={1} rightWeight={4}>
          <LeftComp name="prakash" />
          <RightComp name="credo" />
        </SplitScreen>
      </Modal>
    </>
  );
}

export default App;
