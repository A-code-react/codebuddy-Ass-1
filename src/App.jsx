// // import FirstStep from "./components/FirstStep"

// // import './App.css'

// // import SecondStep from "./components/SecondStep"
// // import ThirdStep from "./components/ThirdStep"
// // import { Button, Step, StepLabel, Stepper } from "@mui/material"
// // import { multiStepContext } from './StepContext';
// // import { useContext, useState } from "react"
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// // import Posts from "./components/Posts"


// // function App() {

// //   const { currentStep, finalData, setStep } = useContext(multiStepContext)
// //   const init = finalData
// //   const [isData] = useState(init)
// //   function showStep(step) {
// //     switch (step) {
// //       case 1:
// //         return <FirstStep />
// //       case 2:
// //         return <SecondStep />
// //       case 3:
// //         return <ThirdStep />
// //       default:
// //         null
// //     }
// //   }

// //   return (
// //     <>
// //       <Router>

// //         <div className="container">
// //           <header className="App-header">
// //             <h3 style={{ color: 'red', textDecoration: 'underline' }}>Form Stepper</h3>

// //             <Stepper style={{ width: "18%" }} activeStep={currentStep - 1} orientation="horizontal">
// //               <Step>
// //                 <StepLabel onClick={() => setStep(1)}></StepLabel>
// //               </Step>
// //               <Step>
// //                 <StepLabel onClick={() => setStep(2)}></StepLabel>

// //               </Step>
// //               <Step>
// //                 <StepLabel onClick={() => setStep(3)}></StepLabel>

// //               </Step>
// //             </Stepper>

// //             {showStep(currentStep)}

// //           </header>
// //           <Routes>
// //             <Route path="/posts" element={<Posts />} />
// //           </Routes>

// //         </div>
// //         {/* <div>
// //           {isData ?
// //             (<table>
// //               <thead>
// //                 <tr>
// //                   <th>Name </th>
// //                   <th>Email </th>
// //                   <th>contact </th>

// //                   <th>address</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {
// //                   finalData.length > 0 && finalData ? (finalData.map((finalData, index) => (
// //                     <tr key={index}>
// //                       <td>{finalData.firstName} {finalData.lastName}</td>
// //                     </tr>
// //                   ))) : ""
// //                 }
// //               </tbody>
// //               <Button variant="contained" color="secondary" onClick={() => setStep(1)}>Go To step 1</Button>
// //             </table>

// //             ) : ''
// //           }
// //         </div> */}

// //       </Router>
// //     </>
// //   )
// // }

// // export default App


// import React, { useContext, useState } from 'react';
// import { Button, Step, StepLabel, Stepper } from '@mui/material';
// import { multiStepContext } from './StepContext';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import FirstStep from './components/FirstStep';
// import SecondStep from './components/SecondStep';
// import ThirdStep from './components/ThirdStep';
// import Posts from './components/Posts';

// function App() {
//   const { currentStep, finalData, setStep } = useContext(multiStepContext);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function showStep(step) {
//     switch (step) {
//       case 1:
//         return <FirstStep />;
//       case 2:
//         return <SecondStep />;
//       case 3:
//         return <ThirdStep />;
//       default:
//         return <Posts />;
//     }
//   }

//   // const handleSubmit = () => {
//   //   // Add your logic for form submission
//   //   setIsSubmitted(true);
//   //   setStep(4);
//   // };

//   return (
//     <Router>
//       <div className="container">
//         <header className="App-header">
//           <h3 style={{ color: 'red', textDecoration: 'underline' }}>Form Stepper</h3>

//           <Stepper style={{ width: '18%' }} activeStep={currentStep - 1} orientation="horizontal">
//             <Step>
//               <StepLabel onClick={() => setStep(1)}></StepLabel>
//             </Step>
//             <Step>
//               <StepLabel onClick={() => setStep(2)}></StepLabel>
//             </Step>
//             <Step>
//               <StepLabel onClick={() => setStep(3)}></StepLabel>
//             </Step>
//           </Stepper>



//           <Routes>
//             <Route path="/posts" element={finalData ? <Posts /> : 'Data not available'} />
//           </Routes>

//           {showStep(currentStep)}
//         </header>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React, { useContext, useState } from 'react';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { multiStepContext } from './StepContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Posts from './components/Posts';

function App() {
  const { currentStep, finalData, setStep } = useContext(multiStepContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return <Posts />;
    }
  }

  const handleRedirect = () => {
    setIsSubmitted(false);
    setStep(1);
  };

  return (

    <div className="container">
      <header className="App-header">
        <h3 style={{ color: 'red', textDecoration: 'underline' }}>Form Stepper</h3>

        <Stepper style={{ width: '18%' }} activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel onClick={() => setStep(1)}></StepLabel>
          </Step>
          <Step>
            <StepLabel onClick={() => setStep(2)}></StepLabel>
          </Step>
          <Step>
            <StepLabel onClick={() => setStep(3)}></StepLabel>
          </Step>
        </Stepper>
        {showStep(currentStep)}
      </header>
      <Router>
        <Routes>
          <Route path="/posts" element={finalData ? <Posts /> : 'Data not available'} />
        </Routes>
        {/* {finalData && (
  <Button variant="contained" color="secondary" onClick={handleRedirect}>
    Go To Step 1
  </Button>
)} */}
      </Router>
    </div>

  );
}

export default App;
