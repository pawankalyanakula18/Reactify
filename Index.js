const heading = React.createElement('div',
     {id: "parent", xyz:"abc0"},
     [React.createElement('h1',{id:"head1"},"Hello World from React!!"),
      React.createElement('h2',{},"Hello World from React!!") ]) ;

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);    