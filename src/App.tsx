import Scrollbar from "./components/animations/Scrollbar"
import Hero from "./components/content/Hero"
import Main from "./components/layout/Main"
import AnimatedCursor from "react-animated-cursor"
function App() {

  return (
    <>
      <AnimatedCursor showSystemCursor={false}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        innerStyle={{
          backgroundColor: '#fff',
        }}
      />
      <Scrollbar />
      <Hero />
      <Main />
    </>
  )
}

export default App
