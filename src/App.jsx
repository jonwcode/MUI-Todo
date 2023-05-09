import React, { useState, useEffect } from "react";
import { CssBaseline, Alert, AlertTitle, Grow, Box } from "@mui/material";
import Header from "./component/Header";
import Footer from "./component/footer";
import TopPanel from "./component/TopPanel";
import TodoList from "./component/TodoList";
import useIsMount from "./hooks/useIsMount";
import "./index.css";
import MainTheme from "./mainTheme";

function App() {
  const [todos, setTodos] = useState([]);

  const initalLoad = useIsMount();

  useEffect(() => {
    if (initalLoad) {
      console.log(todos);
    }
  }, [todos]);

  useEffect(() => {
    if (initalLoad) {
      setTimeout(() => {
        setAlertState(false);
      }, 4000);
    }
  }, [todos]);

  const [alertState, setAlertState] = useState(null);

  const [themeMode, setThemeMode] = useState("light");

  return (
    <React.Fragment>
      <MainTheme themeMode={themeMode}>
        <CssBaseline />
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />
        <TopPanel
          todos={todos}
          setTodos={setTodos}
          setAlertState={setAlertState}
        />
        <TodoList todos={todos} setTodos={setTodos} />
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            left: 20,
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <Grow in={alertState}>
            <Alert severity="success">
              <AlertTitle>Todo Added</AlertTitle>
              Your new Todo has been added to the list!
            </Alert>
          </Grow>
          <Footer />
        </Box>
      </MainTheme>
    </React.Fragment>
  );
}

export default App;
