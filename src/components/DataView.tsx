import { useState, useEffect } from "react";
import JsonPlaceHolderServices from "../services/JsonPlaceholderServices";
import { postsModel } from "../models/postsModel";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const DataView = () => {
  const [posts, setPosts] = useState<postsModel[]>([]);
  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "ID Usuario",
      width: 100,
    },
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "title",
      headerName: "Titulo",
      width: 200,
      sortable: false,
    },
    {
      field: "body",
      headerName: "Cuerpo",
      width: 1300,
    },
  ];

  const cargarData = () => {
    JsonPlaceHolderServices.ObtenerPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    cargarData();
  }, []);

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={posts}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DataView;
