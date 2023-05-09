import React, { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  IconButton,
  Paper,
  styled,
  useTheme,
  Stack,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const ModalWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ModalContainer = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "90%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "700px",
  },
  height: "430px",
  borderRadius: theme.shape.borderRadius,
}));

const InputModal = ({ open, setOpen, todos, setTodos, setAlertState }) => {
  const initalTodoDataState = { title: "", description: "", completed: false };

  const [todoData, setTodoData] = useState(initalTodoDataState);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (todoData.title.length >= 10) {
      const id = Array.from(todos).length;

      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          {
            id,
            completed: false,
            title: todoData.title,
            description: todoData.description,
            completed: false,
          },
        ];
      });

      setTodoData(initalTodoDataState);
      setAlertState(true);
      setOpen(false);
      setDisableSubmit(true);
    }
  };

  const handleChange = (evt) => {
    const val = evt.target.value;
    const name = evt.target.name;

    setDisableSubmit(val.length < 10 && name === "title" ? true : false);

    setTodoData((prevData) => {
      return { ...prevData, [name]: val };
    });
  };

  return (
    <React.Fragment>
      <Modal open={open}>
        <React.Fragment>
          <Box
            sx={{
              position: "absolute",
              left: { xs: "50%", sm: "90%" },
              transform: { sm: "", xs: "translateX(-50%)" },
              top: "100px",
            }}
          >
            <IconButton
              color="disabled"
              aria-label="close button"
              component="span"
              sx={{
                backgroundColor: "closeBtn.main",
                "&:hover": { background: "rgba(204, 204, 204, 0.658)" },
                width: "80px",
                height: "80px",
              }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon size="large" sx={{ width: "100%", height: "100%" }} />
            </IconButton>
          </Box>
          <ModalWrapper>
            <ModalContainer>
              <Stack m={5} spacing={4}>
                <Typography
                  variant="h4"
                  sx={{ display: { xs: "none", sm: "block", margin: 0 } }}
                >
                  Add Todo
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ display: { xs: "block", sm: "none", margin: 0 } }}
                >
                  Add Todo
                </Typography>
                <Divider sx={{ margin: "20px 0px 20px 0" }} />
                <Box
                  onSubmit={handleSubmit}
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <TextField
                    color="secondary"
                    placeholder="Title of your Todo?"
                    helperText="Max length is 40 characters long"
                    name="title"
                    label="Title"
                    size="large"
                    variant="standard"
                    onChange={(evt) => handleChange(evt)}
                    value={todoData.title}
                    inputProps={{
                      style: { fontWeight: "bold" },
                      maxLength: 40,
                    }}
                    sx={{
                      marginBottom: 3,
                      fontWeight: "bold",
                      fontSize: "2em",
                    }}
                    margin="dense"
                  />

                  <TextField
                    variant="standard"
                    color="secondary"
                    name="description"
                    placeholder="Whats on your mind?"
                    size="large"
                    label="Description ( Optional )"
                    onChange={(evt) => handleChange(evt)}
                    value={todoData.description}
                    margin="dense"
                    sx={{ marginBottom: 5, fontSize: "20px" }}
                  />
                  <Button
                    type="submit"
                    startIcon={<AddIcon />}
                    variant="outlined"
                    color="secondary"
                    disabled={disableSubmit}
                  >
                    Add
                  </Button>
                </Box>
              </Stack>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
};

export default InputModal;
