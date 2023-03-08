import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RocketService from "./RocketService";

const Display = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RocketService.getRockets();
        setDetails(response.data);
        console.log(response.data);
        console.log(details);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const eventDelete = (id) => {
    RocketService.deleteRocket(id).then(() => {
      if (details) {
        setDetails((prev) => {
          return prev.filter((ele) => ele.bat_size !== id);
        });
      }
    });
  };

  console.log(details);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
    >
      <table border="2px" width="500px" height="450px">
        <th>Size</th>
        <th>Bat type</th>
        <th>Brand</th>
        <th>Weight</th>
        <th>Grip</th>
        <th>Shapes</th>
        <th>Price</th>
        <th>Operation</th>

        {details.map((ele) => {
          return (
            <tr>
              <td>{ele.bat_size}</td>
              <td>{ele.bat_type}</td>
              <td>{ele.cricket_bat_brands}</td>
              <td>{ele.weight}</td>
              <td>{ele.grip}</td>
              <td>{ele.different_shapes}</td>
              <td>{ele.price}</td>

              <td>
                <button onClick={(id) => eventDelete(ele.bat_size)}>
                  Delete
                </button>
                <button onClick={() => navigate(`/edit/${ele.bat_size}`)}>
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Display;
