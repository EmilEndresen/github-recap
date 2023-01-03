import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="App">
         <h1>Github recap</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem
            quia laboriosam fugit quaerat, nostrum odit corrupti velit incidunt odio.
         </p>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            deserunt, deleniti possimus, incidunt quo nisi eligendi error explicabo
            veritatis voluptatem vero cupiditate ipsum nihil modi!
         </p>
         <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quia
            tenetur explicabo sed obcaecati animi? Nisi deleniti est voluptatem quam!
            Dolorem, distinctio?
         </p>
      </div>
   )
}

export default App
