# Reactify

# Parcel
- Dev build
- HMR = Hot Module Replacement
- Local Server creation
- Caching - Faster builds
- Minification
- Tree Shaking = Remove unused code
- Compress
- Consistent Hashing
- Code Splitting
- Diagnostics
- Error Handling
- Differential Bundling = support older browsing
- HTTPs
- Image Optimization
- Bundling
- File Watching algorithm (in C++)
- Different production and development bundles

# FOOD-HuB

/*
FOOD-HuB
HTML
* Header = Navbar
     -Logo
     *Nav Items
          -Home
          -About
          -Cart
          -SignIn
* Main = Body
     -Search
     * Card Container
          -Restaurant Card
* Footer
     -Copywrites
     -FAQs
     -Links
     -ContactInfo
*/

# Types of Export/Import

- Default Export/Import
export default Component;
import Component from "path";

- Named Export/Import
export const Component;
import { Component } from "path";

# React Hooks
(Normal JS utility functions)
- useState() 
- useEffect()
- useParams()
- useContext()
- useRouteError()

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector 

# Types of Testing(developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e testing)

# Setting up Testing in our App
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default Babel transpilation. 
- Jest Configuration
- Install jsdom Library
- Install @babel/preset-react => to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom