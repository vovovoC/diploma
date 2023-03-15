import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthPage } from "./pages/auth";
import { fakeAuthProvider } from "./shared/fakeAuthProvider";
import { Post } from "./pages/post";
import { FilterPage } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route>
          <Route path="/" element={<FilterPage />} />
          <Route path="/register" element={<AuthPage type="register" />} />
          <Route path="/login" element={<AuthPage type="login" />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/post" element={<Post />} />
          <Route
            path="/main"
            element={
              <RequireAuth>
                <FilterPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
