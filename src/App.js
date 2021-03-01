import './App.css';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import LoginForm from "./components/Forms/LoginForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <body className="Login">
      <div className="Fondo-Login">
        <header>
          <Header></Header>
        </header>
        <main>
            <div>
                <Login>
                    <LoginForm></LoginForm>
                </Login>
              </div>
        </main>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default App;
