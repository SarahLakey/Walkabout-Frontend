import "./UpdateUser.css"
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";



const UpdateUser = () =>{

    const {id} = useParams();
    const navigate = useNavigate();

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
                <Form.Group controlId="formFirstName">
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value= {formData.firstName}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        value= {formData.lastName}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                
                <Form.Group controlId="formEmail" >
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value= {formData.email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formUsername">
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value= {formData.username}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value= {formData.password}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                {/* <Form.Group controlId="formVerifyPassword">
                    <Form.Control
                        type="text"
                        name="password"
                        placeholder="Verify password"
                        value= {formData.verifyPassword}
                        onChange={handleInputChange}
                    />
                </Form.Group> */}

                <Button variant="primary" type="submit" className="w-100">
                    Edit User
                </Button>


            </Form>
        </div>
    </>
    )
}

export default UpdateUser;