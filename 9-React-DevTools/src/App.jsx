import Card from './components/Card'
import contacts from './data/contact'
import './App.css'

function App() {

  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Card 
        name = {contacts[0].name}        // "'Senior Developer'"
        image = {contacts[0].image}      //image1
        phone = {contacts[0].phone}      //'00000000000'
        email = {contacts[0].email}      // 'seniordev123@example.com'
        address = {contacts[0].address}  //'universe, solar System'
      />

      <Card 
        name = {contacts[1].name}
        image = {contacts[1].image}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
        address = {contacts[1].address}
      />

      <Card 
        name = {contacts[2].name}
        image = {contacts[2].image}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
        address = {contacts[2].address}
      />
    </div>
  )
}

export default App;
