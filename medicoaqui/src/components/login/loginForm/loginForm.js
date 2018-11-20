import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';

class LoginForm extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardBody>
                                <form>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <div className="grey-text">
                                    <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                    <Input label="Type your password" icon="lock" group type="password" validate/>
                                </div>
                                <div className="text-center py-4 mt-3">
                                    <Button color="cyan" type="submit">Login</Button>
                                </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginForm;