// // import { useState } from 'react'
// // import './App.css'
// // import {
// //   // createBrowserRouter,
// //   createRoutesFromElements,
// //   Route,

// import HomePage from './components/HomePage'
// import Products from './components/Products'

// // export default App

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<HomePage />}>
//       {/* ... etc. */}
//     </Route>,
//     <Route path="/another-page" element={<Products />} />,
//   ),
// )
// const App = () => {
//   return (
//     // <React.StrictMode>
//     <RouterProvider router={router} />
//     // </React.StrictMode>
//   )
// }

// export default App

import HomePage from './components/HomePage'
import Products from './components/Products'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const routes = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/another-page" element={<Products />} />,
]

const router = createBrowserRouter(createRoutesFromElements(routes))

const App = () => {
  return <RouterProvider router={router} />
}

export default App
