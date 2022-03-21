import "./App.css";
import { useState, useEffect } from "react";
import { ContactList } from "./components/ContactList";
import { SearchFilter } from "./components/SearchFilter";
import { Title } from "./components/Title.js";
import { fetchUsers } from "./ApiCall";
import {Spinner} from './components/Spinner'

const App = () => {
  const [contacts, setcontacts] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchUsers().then((data) => {
      setcontacts(data.results);
      setUser(data.results)
    });
  }, []);

  const handleOnGenderChange = (e) => {
    setLoading(true)
    const { value } = e.target;
    console.log(value);
    const params = `results=20&gender=${value}`;
    fetchUsers(params).then((data) =>{
      setcontacts(data.results);
      setUser(data.results)
      setLoading(false)
    });
  };

  const handleOnSearch = (e) => {
    setLoading(true)
    const { value } = e.target;
    // filter
    const filterArgs = user.filter((user) => {
      const userName = user.name.first + " " + user.name.last;
      if (userName.includes(value.toLowerCase())) {
        return true;
      }
    });
    setcontacts(filterArgs);
    
  };
  // Use Effect
  // useEffect(()=>{
  // fetch(apiUrl).then((resp)=>{
  // return resp.json();
  // }).then(data=>console.log(data))
  // },[])
  return (
    <div className="wrapper">
      <div className="container">
        {/* Title Section */}
        <Title />
        {/* Search and filter section */}
        <SearchFilter
          handleOnGenderChange={handleOnGenderChange}
          handleOnSearch={handleOnSearch}
        />
        <hr />

        {/* User Count */}
        <div className="row">
          <div className="col">{contacts.length} users found</div>
        </div>
       {loading && < Spinner />}
        {/* Contact List Card */}
        <ContactList user={contacts} />
      </div>
    </div>
  );
};

export default App;
