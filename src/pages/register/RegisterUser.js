import { useState } from "react";
import "./RegisterUser.css"
import { Button, Form } from "react-bootstrap";

const RegisterUser = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""

    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData =({
            ...formData,
            [name]:value,
        })
    }

    return(
        <>
            <div className="center-form">
                <h1>Register New User</h1>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            value= {formData.firstName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            value= {formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value= {formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value= {formData.username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="password"
                            placeholder="Enter password"
                            value= {formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Register User
                    </Button>


                </Form>
            </div>
        </>

    )

}

export default RegisterUser;