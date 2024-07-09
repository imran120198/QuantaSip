import React, { useEffect } from "react";
import axios from "axios";
import styles from "../Styles/Styles.module.css";

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          token: token,
        },
      };
      try {
        const res = await axios.get("http://localhost:7000/home", config);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
