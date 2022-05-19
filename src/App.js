import Profile from "./components/Profile"
import Links from "./components/Links"
import "./style/linkPage.css"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet";




function App() {
  return (
    <div>
        <Helmet>
            <title>LinkBar | @akbarrahmatm</title>
            <meta name="description" content="Link Application for akbarrahmatm" />
        </Helmet>
      <div className="bg">
        <div className="content">
          <Container>
            <Profile />
            <Links />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
