// for real project paste the google map api key like below
// const API_KEY="Aillsdfsff485sfsafsa7ef4e"
const HttpError = require("../models/http-error");
const axios = require("axios");
async function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };
  // for sending http request from front end to backend install axios package first
  // copy the link below from google api (geocoding request and response)
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = response.data;
  if (!data || data.response === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find the address for the specified address",
      422
    );
    throw error;
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
}

module.exports = getCoordsForAddress;
