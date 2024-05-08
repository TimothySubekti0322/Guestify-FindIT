import { Stack, useLocalSearchParams } from "expo-router";
import Navbar from "../../../components/navbar/navbar";
import React, { useState } from "react";
import Home from "../home";
import Event from "../event";
import Profile from "../profile";
import Scanner from "../scanner";
import Dashboard from "../dashboard";
import EventDashboard from "../dashboard/eventDashboard";
import DashboardContextProvider from "../../../store/context/dashboardContext";

const Index = () => {
  const { screen = "home" } = useLocalSearchParams();

  const [page, setPage] = useState(screen);
  const [idEvent, setIdEvent] = useState(idEvent);
  return (
    <DashboardContextProvider>
      <Stack.Screen options={{ headerShown: false }} />
      {page == "home" && <Home setPage={setPage} />}
      {page == "event" && <Event setPage={setPage} />}
      {page == "profile" && <Profile />}
      {page == "scanner" && <Scanner />}
      {page == "dashboard" && (
        <Dashboard setPage={setPage} setIdEvent={setIdEvent} />
      )}
      {page == "eventDashboard" && <EventDashboard idEvent={idEvent} />}
      <Navbar page={page} setPage={setPage} />
    </DashboardContextProvider>
  );
};

export default Index;
