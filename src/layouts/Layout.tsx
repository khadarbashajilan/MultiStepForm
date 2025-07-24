import { Outlet } from "react-router-dom"
import ProgressIndicator from "../components/ProgressIndicator"

// This component serves as a layout for the multi-step form.
// It includes a progress indicator and an outlet for rendering the current step of the form.
// The `ProgressIndicator` component displays the current step and previous steps in the form.
// The `Outlet` component is used to render the current step of the form based on the route.

const Layout = () => {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto">
      <ProgressIndicator/>
      <Outlet/>
    </main>
  )
}

export default Layout
