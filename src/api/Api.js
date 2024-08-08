import { useEffect, useState } from "react";

const useFetchUserData = (currentPage) => {
  const [users, setUsers] = useState([]);
  //Total Users
  const [total, setTotal] = useState(0);

  const fetchUserData = async (page) => {
    try {
      const skip = (page - 1) * 30;
      const response = await fetch(
        `https://dummyjson.com/users?skip=${skip}&limit=30`
      );
      const data = await response.json();
      setUsers(data.users);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData(currentPage);
  }, [currentPage]);

  return { users, total };
};

export default useFetchUserData;
