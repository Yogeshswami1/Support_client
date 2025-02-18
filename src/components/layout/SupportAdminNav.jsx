import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SupportAdminLogin from "./SupportAdminLogin";

export default function SupportAdminNav() {
  const token = localStorage.getItem("token");
  const styles = {
    height: "100px",
    width: "130px",
    padding: "10px",
    cursor: "pointer",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "#353979", position: "fixed" }}>
        {/* position="static" */}
        <Toolbar>
          <img
            style={styles}
            className="heroImage"
            src="https://support.saumiccraft.com/wp-content/uploads/2023/05/logo-saumic-new.png"
            alt=""
          />
          {!token && <SupportAdminLogin />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
