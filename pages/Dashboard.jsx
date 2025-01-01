import axios from "axios";
import axiosInstance from "../src/axiosConfig";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import CarInfo from "../components/CarInfo";
import DriversInfo from "../components/DriversInfo";
import Path from "../components/Path";

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await axiosInstance.get('/api/v1/auth/check');
  //       if (res.status === 200) {
  //         console.log('User is authenticated');
  //       } else {
  //         navigate('/');
  //       }
  //     } catch (error) {
  //       navigate('/');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, [navigate]);

  // const logout = async () => {
  //   try {
  //     await axiosInstance.get('/api/v1/auth/logout');
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div>
      
      <Path/>
    </div>
  );
};

export default Dashboard;
