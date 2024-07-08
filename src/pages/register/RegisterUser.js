import { useState } from "react";
import "./RegisterUser.css"
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const RegisterUser = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
        // verifyPassword: ""

    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData ({
            ...formData,
            [name]:value,
        })
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
                body: JSON.stringify(formData)
            })

            const data = await response.json();
            console.log("employee created", data);

            //redirect user to dashboard
            navigate("/")

        } catch (error) {
            console.log("Error creating employee:", error.message);
        }


    }

    return(
        <>
            <div className="center-form">
                <h1>Welcome!</h1>
                <h2>Create a New Account:</h2>
                <Form onSubmit={handleSubmit}>
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
                    
                    <Form.Group controlId="formBasicName" >
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

                    {/* <Form.Group controlId="formBasicName">
                        <Form.Control
                            type="text"
                            name="password"
                            placeholder="Verify password"
                            value= {formData.verifyPassword}
                            onChange={handleInputChange}
                        />
                    </Form.Group> */}

                    <Button variant="primary" type="submit" className="w-100">
                        Register User
                    </Button>


                </Form>
            </div>
        </>

    )

}

export default RegisterUser;