import { Box, TextField, Button, Alert, Snackbar } from "@mui/material";
import { useState, useEffect } from "react";
import JsonPlaceHolderServices from "../services/JsonPlaceholderServices";
const FormPost = () => {
  const [post, setPost] = useState<any>({
    userId: 0,
    title: "",
    body: "",
  });
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const HadlenChange = (data: any) => {
    switch (data.id) {
      case "userId":
        setPost({ ...post, userId: data.value });
        break;
      case "title":
        setPost({ ...post, title: data.value });
        break;
      case "body":
        setPost({ ...post, body: data.value });
        break;
    }
  };

  const validarData = () => {
    let state = true;

    Object.keys(post).map((elemento: string) => {
      if (post[elemento].length == "") {
        setOpen(true);
        state = false;
      }
    });
    return state;
  };

  const crearPost = () => {
    if (validarData()) {
      JsonPlaceHolderServices.CrearPosts(post)
        .then((res) => {
          setOpen2(true);
          console.log("respuesta de crear", res);
        })
        .catch((err) => {
          console.log(err);
        });

      setPost({
        userId: 0,
        title: "",
        body: "",
      });
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpen2(false);
  };

  return (
    <>
      <Button variant="contained" onClick={() => crearPost()}>
        Crear post
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Completa todos los campos
        </Alert>
      </Snackbar>

      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Creado con exito
        </Alert>
      </Snackbar>
      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          marginTop: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="userId"
          label="ID del usuario"
          placeholder="Ejemplo: 1"
          type="number"
          value={post.userId}
          onChange={(e) => {
            HadlenChange(e.target);
          }}
        />
        <TextField
          required
          id="title"
          label="Titulo"
          value={post.title}
          onChange={(e) => {
            HadlenChange(e.target);
          }}
        />
        <TextField
          id="body"
          required
          label="Cuerpo"
          multiline
          rows={4}
          value={post.body}
          onChange={(e) => {
            HadlenChange(e.target);
          }}
        />
      </Box>
    </>
  );
};

export default FormPost;
