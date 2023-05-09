import React, { useState } from "react";
import { Box, Paper, Divider, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NumbersIcon from "@mui/icons-material/Numbers";
import InputModal from "./inputModal";

const TopPanel = ({ todos, setTodos, setAlertState }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Box
        mt={5}
        mb={5}
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "97%", sm: "80%" } }}>
          <Paper sx={{ padding: "5px" }} elevation={5}>
            <Stack
              direction="row"
              divider={<Divider orientation="horizontal" />}
              justifyContent="center"
              alignItems="center"
            >
              <Box width="20%" m={2}>
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  startIcon={<AddIcon />}
                  fullWidth
                  sx={{ boxShadow: 3 }}
                  onClick={() => setOpen(true)}
                >
                  Add
                </Button>
              </Box>
              <Box width="80%">
                <Stack
                  sx={{ textAlign: "right", justifyContent: "center" }}
                  m={2}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    <NumbersIcon
                      color="disabled"
                      sx={{
                        marginTop: "2px",
                        fontSize: { xs: "40px", sm: "25px" },
                      }}
                    />
                    <Typography
                      variant="h5"
                      fontWeight="100"
                      sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      Number of Todos
                    </Typography>
                  </Box>
                  <Box p={2}>
                    <Typography variant="h4">{todos.length}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Box>
      <InputModal
        todos={todos}
        setTodos={setTodos}
        open={open}
        setOpen={setOpen}
        setAlertState={setAlertState}
      />
    </React.Fragment>
  );
};

export default TopPanel;
