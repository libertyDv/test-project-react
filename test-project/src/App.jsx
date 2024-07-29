
import Header from './Header'
import Footer from './Footet';
import Food from './Food';
import Card from './Card';
import Student from './Student';
import UserGreeting from './UserGreeting';
 


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

    <Footer/>
    </>
  );
  
}

export default App
