import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import AlbumList from './components/Albums/AlbumList';
import AlbumDetail from './components/AlbumDetail';

import {
  Navbar,
  News,
  Signup,
  Login,
} from './components';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/album/:id" element={<AlbumDetail />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
