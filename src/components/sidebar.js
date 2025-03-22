import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import "../styles/global.css";

const Sidebar = () => {
  const [Post, setPost] = useState(null);

  // Fetch latest post from WordPress REST API
  useEffect(() => {
    fetch("http://localhost/swazei-admin/wp-json/wp/v2/swazei-employee")
      .then((response) => response.json())
      .then((post) => {
        // if (data.length > 0) {
          setPost(post); // Store fetched posts
        // }
      })
      .catch((error) => console.error("Error fetching WordPress data:", error));
  }, []);

  console.log(Post); // Debugging output

  return (
    <>
        <div className="flex flex-col gap-[20px]">
            {Post?.map((employee, index) => (
                <div className="flex gap-[20px] items-center">
                  <span className="text-[#ff9083] text-[30px]">{(index + 1).toString().padStart(2, "0")}</span>
                  <h2 className="" key={employee.id}>{employee?.title?.rendered}</h2>
                </div>
            ))}
        </div>
    </>
  );
};

export default Sidebar;
