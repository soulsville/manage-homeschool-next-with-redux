import React from 'react';
import { Form, Input, Card, Button, Avatar, Space, Upload, Alert} from 'antd';

import stylesheet from 'antd/dist/antd.min.css';
const { Meta } = Card;
import { EditOutlined } from '@ant-design/icons';



export default class TeacherEditStudentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("in TeacherEditStudentComponent class....");
        console.log(this.props.individualEditStudentInformation);
        console.log(this.props.individualEditStudentInformation.data.data.displayName);
    }

    nameFormItemComponent = () => {
        if(this.props.teacherStudentComponent.individualStudentTeacherEditNameError) {
            return(
                <div>
                    Name
                    <Form.Item
                    validateStatus="error"
                    help="Student Name can't be empty">
                        <Input size="medium"
                         defaultValue={this.props.individualEditStudentInformation.data.data.displayName}
                         onChange={(event)=>this.props.handleIndividualStudentTeacherEditNameChange(event)}
                         onBlur={(event) => this.props.onBlurhandleIndividualStudentTeacherEditNameChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        } else {
            return(
                <div>
                    Name
                    <Form.Item>
                        <Input size="medium"
                        defaultValue={this.props.individualEditStudentInformation.data.data.displayName}
                        onChange={(event)=>this.props.handleIndividualStudentTeacherEditNameChange(event)}
                        onBlur={(event)=> this.props.onBlurhandleIndividualStudentTeacherEditNameChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        }
    }

    emailFormItemComponent = () => {
        if(this.props.teacherStudentComponent.individualStudentTeacherEditEmailError) {
            return(
                <div>
                    Email
                    <Form.Item
                    validateStatus="error"
                    help="Please insert a valid Email">
                        <Input size="medium"
                        defaultValue={this.props.individualEditStudentInformation.data.data.email}
                        onChange={(event)=>this.props.handleIndividualStudentTeacherEditEmailChange(event)}
                        onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditEmailChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        } else {
            return(
                <div>
                    Email
                    <Form.Item>
                        <Input size="medium"
                        defaultValue={this.props.individualEditStudentInformation.data.data.email}
                        onChange={(event)=>this.props.handleIndividualStudentTeacherEditEmailChange(event)}
                        onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditEmailChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        }
    }

    gradeFormItemComponent = () => {
        if(this.props.teacherStudentComponent.individualStudentTeacherEditGradeError) {
            return(
                <div>
                    Current Grade
                    <Form.Item
                    validateStatus="error"
                    help="Current grade can't be empty">
                        <Input size="medium"
                         defaultValue={this.props.individualEditStudentInformation.data.data.currentGradeLevel}
                         onChange={(event)=>this.props.handleIndividualStudentTeacherEditGradeChange(event)}
                         onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditGradeChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        } else {
            return(
                <div>
                    Current Grade
                    <Form.Item>
                        <Input size="medium"
                         defaultValue={this.props.individualEditStudentInformation.data.data.currentGradeLevel}
                         onChange={(event)=>this.props.handleIndividualStudentTeacherEditGradeChange(event)}
                         onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditGradeChange(event)}
                        />
                    </Form.Item>
                </div>
            )
        }
    }

    passwordFormItemComponent = () => {
        if(this.props.teacherStudentComponent.individualStudentTeacherEditPasswordError) {
            return(
                <div>
                    New Password
                    <Form.Item
                    validateStatus="error"
                    help="Password needs to be at least 6 characters">
                        <Input size="medium" type="password"
                        onChange={(event)=>this.props.handleIndividualStudentTeacherEditPasswordChange(event)}
                        onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditPasswordChange(event)}
                        value={this.props.teacherStudentComponent.individualStudentTeacherEditPassword}
                        />
                    </Form.Item>
                </div>
            )
        } else {
            return(
                <div>
                    New Password
                    <Form.Item>
                        <Input size="medium" type="password"
                        onChange={(event)=>this.props.handleIndividualStudentTeacherEditPasswordChange(event)}
                        onBlur={(event)=>this.props.onBlurhandleIndividualStudentTeacherEditPasswordChange(event)}
                        value={this.props.teacherStudentComponent.individualStudentTeacherEditPassword}
                        />
                    </Form.Item>
                </div>
            )
        }
    }

    backButtonComponent = () => {
        return(
            <Button style={{ float: 'left' }}>
                Back
            </Button>
        )
    }

    updateButtonComponent = () => {
        return(
            <Button type="primary" size="large"
            style={{ float: 'right' }}
            onClick={(e) => this.props.handleIndividualStudentTeacherUpload(e)}
            >
                Update
            </Button>
        )
    }

    updateButtonError = () => {
        if(this.props.teacherStudentComponent.individualStudentTeacherEditUpdateButtonError){
            return(
                <div>
                    <Space size="middle"/>
                    <Alert message="No changes detected" type="error" />
                </div>
            )
        }

    }

    render() {
        // TODO: finish up the avatar, wire up the update and back button, create the cloudfunction for updating students profile
        return (
            <React.Fragment>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Card style={{ width: "auto", display: "block" }}>
                <Meta 
                 title={this.props.individualEditStudentInformation.data.data.displayName ? 
                        this.props.individualEditStudentInformation.data.data.displayName :
                        this.props.individualEditStudentInformation.data.data.email
                        }
                 avatar={this.props.individualEditStudentInformation.data.data.photoURL ?
                        <Upload onChange={(e)=>this.props.handleIndividualStudentTeacherEditImageChange(e)}><Button size="small" style={{border: "none"}}><Avatar src={this.props.individualEditStudentInformation.data.data.photoURL}/><EditOutlined /></Button></Upload> :
                        <Upload onChange={(e)=>this.props.handleIndividualStudentTeacherEditImageChange(e)}><Button size="small" style={{border: "none"}}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/><EditOutlined /></Button></Upload>
                        }
                />
                    <Space/>
                    <Space/>
                    <br/>
                    <Form name="student_information">
                        <Space/>
                        {this.updateButtonError()}
                        {this.nameFormItemComponent()}
                        {this.emailFormItemComponent()}
                        {this.gradeFormItemComponent()}
                        {this.passwordFormItemComponent()}

                        {this.updateButtonComponent()}
                        {this.backButtonComponent()}
                    </Form>  
                </Card>
            </React.Fragment>
        );
    }
}