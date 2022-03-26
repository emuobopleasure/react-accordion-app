import { useState } from "react";
import Question from "./components/Question";
import Questions from "./components/Question";
import { data } from "./data";

function App() {

  const [infoData, setInfoData] = useState(data)

  return (
    <main className="app bg-slate-50 py-6 my-16 mx-4 rounded-sm h-auto lg:w-[80vw] lg:mx-auto">
      <div className='main-container flex flex-col mx-6 lg:flex-row lg:justify-between'>
        <div className="Accordion-info">
          <h1 className="info mb-3 font-medium text-[1.25rem] text-center lg:text-left lg:text-[1.75rem]">
            Questions And Answers About Login
          </h1>
        </div>
       <div className="questions-div flex flex-col gap-4 lg:basis-[70%]">
          {
            infoData.map((item) => {
              return <Question
                        key={item.id}
                        item={item}
                      />
            })
          }
       </div>
      </div>
    </main>
  );
}

export default App;
