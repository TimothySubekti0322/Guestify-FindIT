import { createContext, useState } from "react";
import { useMemo } from "react";

export const DashboardContext = createContext({
  data: {},
  setData: (data) => {},
});

function DashboardContextProvider({ children }) {
  const [data, setData] = useState({});

  const handleData = (data) => {
    console.log("dashboardContext is Hit");
    console.log("data in dashboard context: ", data);
    setData(data);
  };

  const value = useMemo(
    () => ({
      data: data,
      setData: handleData,
    }),
    [data, handleData]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardContextProvider;
