import { useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import Profile from "./components/Profile";

// function App() {
//   // const [userName, setuserName] = useState();
//   const [themeMode, setThemeMode] = useState("dark");
//   const [userName, setUserName] = useState("Avinash");

//   const lightTheme = () => {
//     setThemeMode("light");
//   };
//   const darkTheme = () => {
//     setThemeMode("dark");
//   };

//   // Actual change in theme

//   useEffect(() => {
//     document.querySelector("htmL").classList.remove("light", "dark");
//     document.querySelector("html").classList.add(themeMode);
//   }, [themeMode]);

//   return (
//     <ThemeProvider value={{ themeMode, lightTheme, darkTheme, userName }}>
//       <div className="flex flex-wrap min-h-screen items-center">
//         <div className="w-full">
//           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
//             {/* themBtn */}
//             <Profile />
//             <ThemeBtn />
//           </div>

//           <div className="w-full max-w-sm mx-auto">
//             {/* Card */}
//             <Card />
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};
export default App;
