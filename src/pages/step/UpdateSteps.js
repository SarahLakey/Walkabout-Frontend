// import "./UpdateSteps.css"
import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSteps = () => {

        const {id} = useParams();
        const navigate = useNavigate();
    
        const [formData, setFormData] = useState({
            date: "",
            steps: "",
            location: ""
    
        });
    
        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setFormData ({
                ...formData,
                [name]:value,
            });
        };
    
        //call backend API
        useEffect(() => {
            const fetchSteps = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/steps/${id}`);
                    const data = await response.json();
                    setFormData(data);
                } catch (error) {
                    console.error("Error fetching steps:", error.message); 
                }  
            }
            fetchSteps();
        }, [id]);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const response = await fetch(`http://localhost:8080/api/stepCounter/${id}`, {
                    method: 'PATCH',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                const data = await response.json();
                console.log("Steps updated", data); 
    
                navigate(`/dashboard`);
    
            } catch (error) {
                console.error("Error updating steps", error.message);
            }
        }
    
        return(
            <>
            <div className="center-form">
                <h1>Update Steps:</h1>
                <Form onSubmit={handleSubmit}>
                
                        <Form.Group controlId="formDate" >
                        <FloatingLabel
                        controlId="floatingDateInput"
                        label="Enter Date"
                        className="mb-3"
                        >
                            <Form.Control
                                type="date"
                                name="date"
                                placeholder="Enter date"
                                value= {formData.date}
                                onChange={handleInputChange}
                            />
                            </FloatingLabel>
                        </Form.Group>
    
                        <Form.Group controlId="formSteps">
                        <FloatingLabel
                        controlId="floatingStepsInput"
                        label="Enter Steps"
                        className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="steps"
                                placeholder="Enter steps"
                                value= {formData.steps}
                                onChange={handleInputChange}
                            />
                            </FloatingLabel>
                        </Form.Group>
    
                        <Form.Group controlId="formLocation">
                        <FloatingLabel
                        controlId="floatingLocationInput"
                        label="Enter Location"
                        className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Enter Location"
                                value= {formData.location}
                                onChange={handleInputChange}
                            />
                            </FloatingLabel>
     
                        </Form.Group>
    
                    <Button variant="primary" type="submit" className="w-100">
                        Edit Steps
                    </Button>
    
    
                </Form>
            </div>
        </>
        )
}

export default UpdateSteps;