import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const ConfirmDialog = ({
  dialogState,
  setDialogState,
  todos,
  setTodos,
  deleteId,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setDialogState(false);
  };

  const handleDelete = () => {
    console.log(deleteId);

    const filteredTodos = todos.filter((t) => t.id !== deleteId);

    let updatedArray = [];

    let count = 0;

    filteredTodos.forEach((todo) => {
      updatedArray.push({
        id: count,
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
      });

      count++;
    });

    setTodos(updatedArray);
    setDialogState(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={dialogState}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Delete Todo"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this todo? You can't reverse these
            changes after deleting it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="gray" autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ConfirmDialog;
