import React, { useEffect } from "react";
import axios from "axios";
import styles from "../Styles/Styles.module.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async () => {
        const config = {
          headers: {
            token: token,
          },
        };
        try {
          const res = await axios.get("https://quantasip-backend-1e5e.onrender.com/home", config);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Test Dashboard</p>
    </div>
  );
};

export default Dashboard;
