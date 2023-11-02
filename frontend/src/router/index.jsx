import { createBrowserRouter } from "react-router-dom"

import BaseLayout from "@/layouts/BaseLayout"

import Home from "@/pages/Home"
import MakeLitmus from "@/pages/MakeLitmus"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: "/make-litmus",
    element: (
      <BaseLayout>
        <MakeLitmus />
      </BaseLayout>
    ),
  }
])

export default router