import './App.css';

import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyJumbotron from './components/MyJumbotron';
import MyLatestRelease from './components/MyLatestRelease';


function App() {
  return (
    <>
      <MyNavbar />
      <MyJumbotron />
      <MyLatestRelease />
      <MyFooter /> 
    </>
  )
}

export default App;
