import { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Button } from "@mui/material";

const Posts = () => {
    const { finalData, setStep } = useContext(multiStepContext);
    console.log(finalData)
    return (
        <div>
            {/* <div>{JSON.stringify(finalData)} </div> */}
            <table>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>contact </th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        finalData?.map((finalData, index) => (
                            <tr key={index}>
                                <td>{finalData.firstName} {finalData.lastName}</td>
                                <td>{finalData.email} </td>
                                <td>{finalData.countryCode} {finalData.phoneNumber}</td>
                                <td>{finalData.address} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Button variant="contained" color="secondary" onClick={() => setStep(1)}>Go To step 1</Button>

        </div>
    );
}

export default Posts;
