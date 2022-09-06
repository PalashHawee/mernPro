import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the Famous Skyscrapers in the world",
    imageUrl:
      "https://www.timeout.com/newyork/attractions/empire-state-building-manhattan-ny",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: { lat: 1.6640508, lng: -84.8942927 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the Famous Skyscrapers in the world",
    imageUrl:
      "https://www.timeout.com/newyork/attractions/empire-state-building-manhattan-ny",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: { lat: 1.6640508, lng: -84.8942927 },
    creator: "u2",
  },
];
const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
