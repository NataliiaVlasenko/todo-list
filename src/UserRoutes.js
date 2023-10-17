import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";

//const Loader = lazy(() => import("../src/components/Loader"));
const CalendarPage = lazy(() => import("../src/pages/CalendarPage/CalendarPage"));
const ToDoPage = lazy(() => import("../src/pages/ToDoPage/ToDoPage"));

const UserRoutes = () => {
    {/* fallback={<Loader />} */}
  return (
    <Suspense > 
        
      <Routes>
        <Route path="/" index element={<CalendarPage />} />
        <Route path="/purchases" element={<ToDoPage />} />

        <Route path="*" element={<CalendarPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;