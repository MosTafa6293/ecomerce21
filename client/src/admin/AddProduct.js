import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
} from "../redux/actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from "axios";
import { Container, Card } from "react-bootstrap";
import { Button, Box, TextField, Typography, Input } from "@mui/material";
const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const addProductReducer = useSelector((state) => state.addProductReducer);
  const { loading, product, error, success } = addProductReducer;
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]; //because upload single image
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      rating,
      price,
      countInStock,
      category,
      image,
    };
    if (success) {
      //update product
      dispatch(addProduct(product));
      alert("product added");
      setCategory("");
      setCountInStock(0);
      setDescription("");
      setImage("");
      setName("");
      setPrice(0);
      setRating(0);
    }
  };
  return (
    <div>
      <div className="row justify-content-center">
        {loading && <Loader />}
        <div className="col-md-5 card p-5" style={{ marginTop: "-1rem" }}>
          <form onSubmit={submitHandler}>
            <h3>Add Product</h3>
            {error && <Error error={error} />}
            <div>
              <label>image</label>
              <input
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="file"
                id="image"
                label="choose file"
                custom
                onChange={uploadFileHandler}
                style={{ marginBottom: "20px" }}
              />
            </div>
            <div>
              <TextField
                required
                label="Name"
                className="form-control"
                placeholder="Enter Name"
                style={{
                  marginBottom: "20px",
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Description</label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description"
                class="form-control"
                id="floatingTextarea"
                required
                style={{ marginBottom: "10px" }}
              ></textarea>
            </div>
            <div>
              <TextField
                required
                label="Category"
                className="form-control"
                placeholder="Enter Category"
                style={{
                  marginBottom: "20px",
                }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div>
              <TextField
                required
                type="number"
                label="Enter Price"
                className="form-control"
                placeholder="Enter Price"
                style={{
                  marginBottom: "20px",
                }}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                type="number"
                label="Rating"
                className="form-control"
                style={{
                  marginBottom: "20px",
                }}
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <TextField
                required
                type="number"
                label="Count in stock"
                className="form-control"
                style={{
                  marginBottom: "20px",
                }}
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn-btn"
              style={{ marginTop: "1rem", width: "150px" }}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
