import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./ProductList.css";

import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { productRows } from "../../data";


const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products/list")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image_url} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "weight", headerName: "Stock", width: 200 },
    {
      field: "active",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return params.row.active === 1 ? "Active" : "Deativated";
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/productedit/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnclick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
