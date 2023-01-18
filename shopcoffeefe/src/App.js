import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((r, index) => {
          const Page = r.component;
          const Layout = r.layout;
          return <Route key={index} path={r.path} element={
            <Layout>
              <Page />
            </Layout>
          }></Route>
        })}
        {/* Except Path */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
        {/* {privateRoutes.map((r, index) => {
          const checkAccess = r.accesss;
          const Page = r.component;
          const Layout = r.layout;
          return <Route key={index} path={r.path} element={
            checkAccess === true
              ? <Layout><Page /></Layout>
              : <Navigate to="/Login"></Navigate>
          }></Route>
        })} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
