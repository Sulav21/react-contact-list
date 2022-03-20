import "./App.css";
import { ContactList } from "./components/ContactList";
import { SearchFilter } from "./components/SearchFilter";
import { Title } from "./components/Title.js";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        {/* Title Section */}
        <Title />
        {/* Search and filter section */}
        <SearchFilter />
        <hr />

        {/* User Count */}
        <div className="row">
          <div className="col">55 user found</div>
        </div>

        {/* Contact List Card */}
        <ContactList />
      </div>
    </div>
  );
};

export default App;
