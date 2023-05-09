import {
  Typography,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TablePagination,
  TableFooter,
  IconButton,
  Box,
} from "@mui/material";
import React, { useState, useRef } from "react";
import ConfirmDialog from "./confirmDialog";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckIcon from "@mui/icons-material/Check";

const TodoList = ({ todos, setTodos }) => {
  const [dialogState, setDialogState] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handlePageChange = (evt, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (evt) => {
    setRowsPerPage(+evt.target.value);
    setPage(0);
  };

  const deleteId = useRef(null);

  const setDeleteId = (id) => {
    deleteId.current = id;

    setDialogState(true);
  };

  const handleComplete = (id) => {
    // Find the todo index inside of the array

    let index = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        index = i;
        break;
      }
    }

    // Make a copy

    let todoArry = [...todos];

    // Update the completed boolean to true

    todoArry[index].completed = !todoArry[index].completed;

    // Update the state

    setTodos(todoArry);

    console.log(todos);
  };

  return (
    <React.Fragment>
      <Stack justifyContent="center" alignItems="center">
        <Box sx={{ width: { xs: "90%", sm: "600px", md: "900px" } }}>
          <Typography variant="h4">Todo List</Typography>
          {todos.length >= 1 && (
            <React.Fragment>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Todo</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {todos
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((todos) => (
                      <TableRow
                        sx={{
                          "&:hover": {
                            backgroundColor: todos.completed
                              ? "tableRow.completed"
                              : "tableRow.main",
                          },
                          backgroundColor: todos.completed ? "primary" : "",
                        }}
                        key={todos.id}
                      >
                        <TableCell>{todos.id}</TableCell>
                        <TableCell>
                          <Stack>
                            <Typography
                              sx={{
                                fontSize: { xs: "1.5em", sm: "2.3em" },
                                color: todos.completed
                                  ? "rgba(55, 55, 55, 0.599)"
                                  : "",
                                fontWeight: 500,
                              }}
                            >
                              {todos.completed ? (
                                <s>{todos.title}</s>
                              ) : (
                                todos.title
                              )}
                            </Typography>
                            {todos.description && (
                              <Typography
                                color="GrayText"
                                variant="body2"
                                pl={3}
                                pt={1}
                              >
                                {todos.description}
                              </Typography>
                            )}
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <TableContainer>
                            <Stack direction="row">
                              <IconButton
                                sx={{
                                  "&:hover": {
                                    backgroundColor:
                                      "rgba(232, 152, 151, 0.29)",
                                  },
                                }}
                                onClick={() => setDeleteId(todos.id)}
                              >
                                <DeleteForeverIcon />
                              </IconButton>

                              <IconButton
                                color={`${todos.completed ? "success" : ""}`}
                                sx={{
                                  "&:hover": {
                                    backgroundColor:
                                      "rgba(151, 232, 205, 0.29)",
                                  },
                                }}
                                onClick={() => handleComplete(todos.id)}
                              >
                                <CheckIcon />
                              </IconButton>
                            </Stack>
                          </TableContainer>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                count={todos.length}
                component="div"
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
                page={page}
              />
            </React.Fragment>
          )}
          {todos.length === 0 && (
            <Typography color="GrayText" mt={5} variant="h4">
              Currently there isn't any Todos
            </Typography>
          )}
          <ConfirmDialog
            deleteId={deleteId.current}
            todos={todos}
            setTodos={setTodos}
            dialogState={dialogState}
            setDialogState={setDialogState}
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default TodoList;
