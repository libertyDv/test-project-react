
import Header from './Header'
import Footer from './Footet';
import Food from './Food';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
import Button from './Button';
import Button2 from './Button2';
import MyComponent from './MyComponent';
import Counter from './Counter';
import OnChangeComponent from './OnChangeComponent';
import ColorPicker from './ColorPicker';
 


function App() {

  return(
    <>
    <Header/>
    <Food/>
    <Card/>
    <Card/>
    <Card/>
    <Student name="Madoka" age={14} isStudent={true}/>
    <Student name="Homura" age={15} isStudent={true}/>
    <Student/>
    <UserGreeting isLoggedIn={true} username="Libby"/>
    <List/>
    <Button/>
    <Button2/>
    <MyComponent/>
    <Counter/>
    <OnChangeComponent/>
    <ColorPicker/>

    <Footer/>
    </>
  );
  
}

export default App
