import { useState } from "react";
import "./Dashboard.css"
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {

    const [steps, setSteps] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = `My Dashboard`
    })
    

    useEffect( () => {
        const fetchSteps = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/steps");
                const data = await response.json();

                setSteps(data);
            } catch(error){
                console.error("Error fetching steps:", error.message);
            }
        }

        fetchSteps();

    }, []);

    

    // call the delete user api
    const handleDelete = async (stepId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/steps/${stepId}`, 
                {
                method: "DELETE",
        });

        //update page data without needing to refresh the page: 
        if(response.ok){
            setSteps((prevUsers) =>
                prevUsers.filter((user) => user.id !== stepId)
            )
        }

            console.log(`Step input with ID ${stepId} deleted successfully`);

        } catch (error) {
            console.error("Error deleting steps:", error.message);
        }
    }

    const handleUpdate = (stepId) => {
        navigate(`/steps/${stepId}`);
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                    <h1 className="text-center">Steps</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th># of Steps</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {steps.map((step) => (
                                <tr key={step.id}>
                                    <td>{step.date}</td>
                                    <td>{step.steps}</td>
                                    <td>{step.location}</td>

                                    <td>
                                    <Button variant="outline-secondary" onClick={() => handleUpdate(step.id)}
                                         >Update </Button> {" "}
                                        <Button variant="outline-danger" onClick={()=> handleDelete(step.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Dashboard;