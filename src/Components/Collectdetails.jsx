import React, { useState } from "react";
import { TextField, Button, Container, Box, Link } from "@mui/material";
import "../ComponentCSS/Collectdetail.css";
import { useNavigate } from "react-router-dom";

const CollectDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const navigate = useNavigate(); // Get the navigate function
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve existing stored data or initialize as an empty array
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];

    // Make sure that storedData is always an array
    const updatedData = Array.isArray(storedData) ? storedData : [];

    // Add the current form data to the array
    updatedData.push(formData);

    // Save the updated array to local storage
    localStorage.setItem("formData", JSON.stringify(updatedData));

    console.log("Form data saved:", formData);
    navigate("/second"); // Navigate to SecondPage
    // Reset form data
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <>
      <h1 style={{textAlign:'center'}}>SIGN UP</h1>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              margin="normal"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              margin="normal"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Link to="/second" className="link-button">
              <Button type="submit" style={{alignItems:'center'}} variant="contained" color="primary">
                Sign Up
              </Button>
            </Link>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default CollectDetail;
