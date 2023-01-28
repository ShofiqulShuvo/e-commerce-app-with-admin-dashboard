import React from 'react'
import { Route, Routes } from 'react-router-dom'

import FrontendRoutes from './Frontend/FrontendRoutes'
import AdminRoutes from './Admin/AdminRoutes'


const Index = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<FrontendRoutes />} />
            <Route path='/admin/*' element={<AdminRoutes />} />
        </Routes>
    </>
  )
}

export default Index