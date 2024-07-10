import { useState } from "react";
import "./StepCounter.css"
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const StepCounter = () => {

    //store data of the form
    const [formData, setFormData] = useState({
        date: "",
        steps: "",
        location: "",
    })

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]: value,
        })
    }

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

                // Convert date from YYYY-MM-DD to MM-DD-YYYY
                const [year, month, day] = formData.date.split("-");
                const formattedDate = `${month}-${day}-${year}`;
        
                const formattedFormData = {
                    ...formData,
                    date: formattedDate,
                };
        
                console.log(formattedFormData);
        
        console.log(formData);

        try{
            const response = await fetch("http://localhost:8080/api/stepCounter",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            })

            const data = await response.json();
            console.log("Steps added", data);

            //redirect user to dashboard
            navigate("/dashboard")

        } catch (error) {
            console.log("Error adding steps:", error.message);
        }


    }



    return (
        <>
        <div className="center-form">
            <h1>Add Steps</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formDate">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Date"
                    className="mb-3"
                    >
                    <Form.Control
                        type="date"
                        name="date"
                        placeholder="Enter Date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                 </FloatingLabel>

                </Form.Group>

                <Form.Group controlId="formSteps">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Number of Steps"
                    className="mb-3"
                    >
                    <Form.Control
                        type="number"
                        name="steps"
                        placeholder="Enter number of steps"
                        value={formData.steps}
                        onChange={handleInputChange}
                        min="1"
                    />
                  </FloatingLabel>

                </Form.Group>

                <Form.Group controlId="formLocation">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Enter Location"
                    className="mb-3"
                    >
                    <Form.Control
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                  </FloatingLabel>

                </Form.Group>


                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label column="sm">Add Photos From Your Walkabout</Form.Label>
                     <Form.Control type="file" multiple />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                        Add Steps
                    </Button>

            </Form>
        </div>
        </>
    
    )
}

export default StepCounter;



