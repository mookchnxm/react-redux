import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Form, FormGroup, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {fetchCurriculums, changeCurriculums, deleteCurriculums, postCurriculums} from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: ''
        }
    }

    componentDidMount() {
        this.props.fetchCurriculums();
    };


    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        })
    };

    handleDelete = (event) => {
        const id = event.target.id;
        this.props.deleteCurriculums(id);
    };

    handleSubmit = () => {
        this.props.postCurriculums(this.state);
    };

    render() {
        const {handleChange, handleDelete, handleSubmit} = this;
        const {curriculumsList} = this.props.curriculums;
        if (!curriculumsList)
            return (
                <Container>
                    <Row>
                        <Col>
                            server down
                        </Col>
                    </Row>
                </Container>
            );
        else
            return (
                <Container style={{ background: 'rgba(75,192,123,0.5)', height: '1000px' }} fluid>
                    <Row>
                        <Col>
                            <h1 style={{ hight:'500px' , margin: '50px 50px 50px 150px' }}>College of Computing<hr/></h1>
                        </Col>
                    </Row>
                    <Row style={{ margin: '0 50px 0 150px' }}>
                        <Col>
                            <Table borderless>
                                <tbody >
                                {
                                    curriculumsList.map((data, index) => {
                                        return <tr key={index}>
                                            <th scope="row">{data.id + '. '}</th>
                                            <td>{data.course}</td>
                                            <td><Button id={data.id}
                                                        onClick={handleDelete}>delete</Button></td>
                                        </tr>

                                    })
                                }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: '0 50px 0 150px' }}>
                            <p className><hr/>Add Curriculum</p>
                            <Form inline>
                                <FormGroup >
                                    <Input type="text" name="course" placeholder="Enter Course..."
                                           onChange={handleChange}/>
                                </FormGroup>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )
    }
}

const mapStateToProps = ({curriculums}) => {
    return {
        curriculums,
    }
};

export default connect(mapStateToProps, {changeCurriculums, fetchCurriculums, deleteCurriculums, postCurriculums})(App);
