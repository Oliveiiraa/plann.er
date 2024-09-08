import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import { TripDetailsPage } from "./pages/tripe-details"

const router = createBrowserRouter([
  {
    path: "/health",
    element: <p>Is it working?</p>,
  },
  {
    path: "/",
    element: <CreateTripPage/>,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage/>,
  },
])

export function App() {
  return <RouterProvider router={router} />
}