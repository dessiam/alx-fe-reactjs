import profilePage from './profilePage';
import userContext from './userContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <userContext.Provider value={userData}>
      <profilePage />
    </userContext.Provider>
  );
}

export default App;