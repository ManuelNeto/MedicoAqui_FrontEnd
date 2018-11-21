import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';

class LoginForm extends React.Component {
    render() {

        const styleForm = {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px"
        }

        const styleForm2 = {
          width: "500px"
        }

        return (
            <Container style={styleForm}>
                        <Card style={styleForm2}>
                            <CardBody>
                                <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                    <Input label="Type your password" icon="lock" group type="password" validate/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="second">
                                        Resgister
                                    </Button>
                                    <Button color="cyan" type="submit">Login</Button>
                                </div>
                                </form>
                            </CardBody>
                        </Card>
            </Container>
        );
    }
}

export default LoginForm;