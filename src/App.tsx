import "./App.css";
import DataView from "./components/DataView";
import { Container } from "@mui/material";
import FormPost from "./components/FormPost";

function App() {
  return (
    <Container>
      <div style={{ marginTop: 40 }}>
        <DataView />
      </div>
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <FormPost />
      </div>
    </Container>
  );
}

export default App;
