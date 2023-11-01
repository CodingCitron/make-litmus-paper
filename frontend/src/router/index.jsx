import { createBrowserRouter } from "react-router-dom"

import BaseLayout from "@/layouts/BaseLayout"

import Home from "@/pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
])

export default router