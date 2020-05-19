import React, { Suspense } from "react";
import { PageLoader } from './commonComponents'
import './styles/main.scss'

const Login = React.lazy(() => import('./Components'))

const App = (props) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <main>
        <Login />
      </main>
    </Suspense>
  )
}

export default App
