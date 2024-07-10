import "./UpdateUser.css"
import { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



const UpdateUser = () =>{

    const {id} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        verifyPassword: ""

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
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/user/${id}`);
                const data = await response.json();
                setFormData(data);
            } catch (error) {
                console.error("Error fetching user:", error.message); 
            }  
        }
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/user/${id}`, {
                method: 'PATCH',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("User updated", data); 

            navigate(`/`);

        } catch (error) {
            console.error("Error updating user", error.message);
        }
    }

    return(
        <>
        <div className="center-form">
            <h1>Update User:</h1>
            <Form onSubmit={handleSubmit}>
            <Row >
                    <Form.Group as={Col} controlId="formFirstName">
                    <FloatingLabel
                    controlId="floatingFirsNameInput"
                    label="Enter First Name"
                    className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value= {formData.firstName}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                    <FloatingLabel
                    controlId="floatingLastNameInput"
                    label="Enter Last Name"
                    className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            value= {formData.lastName}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formEmail" >
                    <FloatingLabel
                    controlId="floatingEmailInput"
                    label="Enter Email"
                    className="mb-3"
                    >
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value= {formData.email}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group controlId="formUsername">
                    <FloatingLabel
                    controlId="floatingUsernameInput"
                    label="Enter Username"
                    className="mb-3"
                    >
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value= {formData.username}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>

                    <Row >
                    <Form.Group as={Col} controlId="formPassword">
                    <FloatingLabel
                    controlId="floatingPasswordInput"
                    label="Enter Password"
                    className="mb-3"
                    >
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value= {formData.password}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
 
                    </Form.Group>

                    <Form.Group as={Col}  controlId="formVerifyPassword">
                        <FloatingLabel
                            controlId="floatingVerifyPasswordInput"
                            label="Verify Password"
                            className="mb-3"
                        >
                        <Form.Control
                            type="password"
                            name= "verifyPassword"
                            placeholder="Verify Password"
                            value= {formData.verifyPassword}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>

                <Button variant="primary" type="submit" className="w-100">
                    Edit User
                </Button>


            </Form>
        </div>
    </>
    )
}

export default UpdateUser;