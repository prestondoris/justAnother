import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

// You can think of these components as "pages"
// in your app.
import AppBody from './AppBody'
import Navbar from './Navbar'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Router>
      <Navbar style={{position: 'fixed'}} />
      <AppBody />
    </Router>
  );
}

export default App