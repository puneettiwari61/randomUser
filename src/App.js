import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Profile from "./components/Profile";
import { getUser } from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNewUser();
  }, []);

  const getNewUser = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        const user = {
          gender: data.results[0].gender,
          email: data.results[0].email,
          username: data.results[0].login.username,
          password: data.results[0].login.password,
          dob: new Date(data.results[0].dob.date).toLocaleDateString(),
          age: data.results[0].dob.age,
          image: data.results[0].picture.large,
          name:
            data.results[0].name.title +
            " " +
            data.results[0].name.first +
            " " +
            data.results[0].name.last,
          phone: data.results[0].phone,
          cell: data.results[0].cell,
          country: data.results[0].location.country,
          longitude: +data.results[0].location.coordinates.longitude,
          latitude: +data.results[0].location.coordinates.latitude,
          address:
            data.results[0].location.street.number +
            ", " +
            data.results[0].location.street.name +
            ", " +
            data.results[0].location.city +
            ", " +
            data.results[0].location.state,
        };

        dispatch(getUser({ user: user }));
      })

      .catch((err) => console.error(err));
  };

  const handleClick = () => {
    dispatch(add({ count: count + 1 }));
  };

  return (
    <div className="App">
      <Profile getNewUser={getNewUser} />
    </div>
  );
};

export default App;
