import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/appLayout";
import JobListingPage from "./Pages/jobListing";
import JobsPage from "./Pages/jobs";
import LandingPage from "./Pages/landing";
import MyJobsPage from "./Pages/myJobs";
import OnBoardingPage from "./Pages/onBoarding";
import PostJobsPage from "./Pages/postJobs";
import SavedJobsPage from "./Pages/savedJobs";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnBoardingPage />,
      },
      {
        path: "/jobs",
        element: <JobListingPage />,
      },
      {
        path: "/jobs/:id",
        element: <JobsPage />,
      },
      {
        path: "/postjob",
        element: <PostJobsPage />,
      },
      {
        path: "/savedjobs",
        element: <SavedJobsPage />,
      },
      {
        path: "/myjobs",
        element: <MyJobsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
