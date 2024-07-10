import { useState } from "react";
import "./RegisterUser.css"
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const RegisterUser = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
        // verifyPassword: ""

    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]:value,
        });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(formData);

        //call API (backend)
        try{
            const response = await fetch("http://localhost:8080/api/user",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            })

            const data = await response.json();
            console.log("User created", data);

            //redirect user to dashboard
            navigate("/")

        } catch (error) {
            console.log("Error creating user:", error.message);
        }


    }

    return(
        <>
            <div className="center-form">
                <h1>Welcome!</h1>
                <h2>Create a New Account:</h2>
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
                            type="text"
                            name="password"
                            placeholder="Verify Password"
                            value= {formData.verifyPassword}
                            onChange={handleInputChange}
                        />
                        </FloatingLabel>
                    </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className="w-100">
                        Register User
                    </Button>


                </Form>
            </div>
        </>

    )

}

export default RegisterUser;