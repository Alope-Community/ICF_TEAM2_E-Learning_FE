import React, { ComponentType } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // Atau gunakan navigasi lain jika tidak pakai react-router-dom
import { useAuth } from "../auth/AuthContext";

function withAuthProtection<P extends React.JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<P>
) {
  return (props: P) => {
    const { token } = useAuth();
    const navigate = useNavigate();

    if (token) {
      // console.log(token);
      // Jika ada token, redirect ke halaman utama atau dashboard
      return navigate("/");
    } else {
      return <WrappedComponent {...props} />;
    }
  };
}

export default withAuthProtection;
