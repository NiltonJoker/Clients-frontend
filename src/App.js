import { Redirect } from "wouter";
import { Route } from "wouter";
import { Layout } from "./components/layouts/Layouts";
import { AverageAge } from "./components/pages/AverageAge";
import { Clients } from "./components/pages/Clients";
import { CreateClient } from "./components/pages/CreateClient";

function App() {
  return (
    <div>
      <Layout>
        <div>
          <Route path="/" component={CreateClient} />
          <Route path="/allClients" component={Clients}/>
          <Route path="/avgAge" component={AverageAge} />
          <Redirect to="/" /> 
        </div>
      </Layout>
    </div>
  );
}

export default App;
