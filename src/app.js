import React, { useState } from 'react';
import logo from "./file_type_js.svg"

const navBarOptions = [
  {
    id: "option1",
    label: "Option 1",
    subOptions: [],
  },
  {
    id: "option2",
    label: "Option 2",
    subOptions: [
      {
        id: "option2.1",
        label: "Option 2.1",
        subOptions: [],
      },
      {
        id: "option2.2",
        label: "Option 2.2",
        subOptions: [],
      },
      {
        id: "option2.3",
        label: "Option 2.3",
        subOptions: [],
      },
    ],
  },
  {
    id: "option3",
    label: "Option 3",
    subOptions: [],
  },
  {
    id: "option4",
    label: "Option 4",
    subOptions: [],
  },
];

const NavBar = () => {
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  const listOptions = options => {
    return (
      <ul>
        {
          options.map(option => (
              <>
                <li className={ !!isDropDownShown[option.id] && "clicked"} onClick={() => setIsDropDownShown({...isDropDownShown, [option.id]: !isDropDownShown[option.id] })}>{option.label}</li>
                {
                  !!option.subOptions.length && !!isDropDownShown[option.id] && listOptions(option.subOptions)
                }
              </>
            )
          )
        }
      </ul>
    )
  };

  return (
    <nav className="nav-bar" id="left">
      {/* <div className="top-left-logo">Title</div> */}
      <div className="nav-bar-list">
        {listOptions(navBarOptions)}
        {/* <ul>
          <li>Link 1</li>
          <li onClick={() => setIsDropDownShown(!isDropDownShown)}>Link 2</li>
          {
            isDropDownShown && (
              <ul>
                <li>Link2.1</li>
                <li>Link2.2</li>
                <li>Link2.3</li>
              </ul>
            )
          }
          <li>Link 3</li>
          <li>Link 4</li>
        </ul> */}
      </div>
    </nav>
  );
}

const Header = (props) => {
  const { setToggleNavBar } = props;
  return (
    <header className="header">
      <div className="menuIcon" onClick={() => setToggleNavBar(prev => (
        prev.includes("active") ? "navBar" : "navBar active")
      )}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} width="16px;" height="35px;" />
      <span>home.js</span>
    </header>
  );
};

function App() {
  const [toggleNavBar, setToggleNavBar] = useState("navBar");
  return (
    <>
      <div id="main">
        <div className={toggleNavBar}>
          <NavBar />
        </div>
        <div id="right" className="column">
          <Header setToggleNavBar={setToggleNavBar} />
          <main className="content" id="something1">
            <pre class="line-numbers" id="something2">
              <code class="language-javascript">
                {`function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
function something() {
  const x = 10;
  for (let i = i < 10; ++i ) {
    console.log(x);
  }
}
              `}
              </code>
            </pre>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
