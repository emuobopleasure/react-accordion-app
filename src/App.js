import { useState } from "react";
import Question from "./components/Question";
import { data } from "./data";

function App() {

  const [infoData, setInfoData] = useState(data)

  return (
    <main className="app bg-slate-50 py-6 my-16 mx-4 rounded-sm h-auto lg:w-[80vw] lg:mx-auto font-['Ubuntu-Mono']">
      <div className='main-container flex flex-col mx-6 lg:flex-row lg:justify-between'>
        <div className="Accordion-info">
          <h1 className="info mb-3 font-medium text-[1.5rem] text-center lg:text-left lg:text-[1.9rem]">
            Questions And Answers About Login
          </h1>
        </div>
       <div className="questions-div flex flex-col gap-4 lg:basis-[70%]">
          {
            infoData.map((item) => {
              return <Question
                        key={item.id}
                        item={item}
                        setInfoData={setInfoData}
                      />
            })
          }
       </div>
      </div>
    </main>
  );
}

export default App;
