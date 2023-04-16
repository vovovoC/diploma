import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { fakeAuthProvider } from "./shared/fakeAuthProvider";
import {
  FilterPage,
  NotFoundPage,
  AuthPage,
  PostDetailPage,
  UserPostsPage,
  ProfilePage,
  UserProfilePage,
  RoomAddPostPage,
  RoommateAddPostPage,
  RoommateDetailPage,
} from "./pages";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route>
            <Route path="/" element={<FilterPage type="landlord" />} />
            <Route path="/register" element={<AuthPage type="register" />} />
            <Route path="/login" element={<AuthPage type="login" />} />
            <Route path="/resetPsw" element={<AuthPage type="resetPsw" />} />
            <Route path="/posts" element={<FilterPage type="landlord" />} />
            <Route
              path="/posts/landlord"
              element={<FilterPage type="landlord" />}
            />
            <Route
              path="/posts/renter"
              element={<FilterPage type="renter" />}
            />
            <Route path="/posts/my" element={<UserPostsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/userProfile" element={<UserProfilePage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
            <Route path="/roommate/:id" element={<RoommateDetailPage />} />
            <Route
              path="/post/edit/:id"
              element={<RoomAddPostPage isEdit={true} />}
            />
            <Route
              path="/post/create/new"
              element={<RoomAddPostPage isEdit={false} />}
            />
            <Route
              path="/room/create/new"
              element={<RoommateAddPostPage isEdit={false} />}
            />
            <Route
              path="/room/edit/:id"
              element={<RoommateAddPostPage isEdit={true} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
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
