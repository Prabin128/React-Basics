import Card from './Components/Card.jsx'
import contacts from './data/contact'
import './App.css'

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact) => (
        <Card
          key={contact.id}    // Unique key for each component
          name={contact.name}
          image={contact.image}
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
        />
      ))}
    </div>
  );
}

export default App;   


