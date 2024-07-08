import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Dashboard = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        const fetchUsers = async () => {
            try{
                const response = await fetch("http://localhost:8080/api/users");
                const data = await response.json();

                setUsers(data);
            } catch(error){
                console.error("Error fetching users:", error.message);
            }
        }

        fetchUsers();

    }, []);

    return (
        <>
        <Container className="mt-5">
            <Row>
                <Col>
                <h1 className="text-center">Users</h1>
                    {/* <Table striped border hover responsive> */}
                    <Table striped bordered hover responsive>

                        <thead>
                            <tr className="text-center">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <Button variant="outline-secondary" >Update </Button> {" "}
                                        <Button variant="outline-danger">Delete</Button>
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