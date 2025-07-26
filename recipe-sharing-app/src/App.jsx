
import './App.css';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import Home from './components/Home'; // Assuming you have a Home component
import FavoritesList from './components/FavoritesList'; // Assuming you have a FavoritesList component
function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '2rem 0' }}>
      <Router>
        <Routes>
          <Route path="/" element={
            <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #0001', padding: '2rem' }}>
              <h1 style={{ textAlign: 'center', marginBottom: 24, color: '#0f766e' }}>Recipe Search & Filter</h1>
              <SearchBar />
              {/* Future: Add more filters here (ingredients, cooking time, etc.) */}
              <div style={{ margin: '2rem 0' }}>
                <AddRecipeForm />
              </div>
              <h2 style={{ color: '#0f766e', marginBottom: 16 }}>Results</h2>
              <RecipeList />
              <FavoritesList />
              <EditRecipeForm />
              <RecipeDetails />
            </div>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


