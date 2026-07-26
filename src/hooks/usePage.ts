import { useState } from "react";

export function usePage() {

  const [page,setPage]=useState("dashboard");

  return {

    page,

    setPage

  };

}