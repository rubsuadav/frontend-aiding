import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./authContext";

import React from 'react'

export default function PublicRoute() {

  return (
    <div>
        <Outlet />
    </div>
  )
}
