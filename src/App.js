import logo from './logo.svg';
import './App.css';
import StudentLog from './StudentLog.js';
import TeacherLog from './TeacherLog.js';
import LoginPage from './Login';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <StudentLog />
      <TeacherLog />

    </div>
  );
}

export default App;
