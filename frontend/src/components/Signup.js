import React, { Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



// class User(models.Model):
// username = models.CharField(max_length=200, default='')
// password = models.CharField(max_length=200, default='')
// password2 = models.CharField(max_length=200, default='')
// email = models.CharField(max_length=200, default='')
// phone = models.CharField(max_length=300, default='')
// first_name = models.CharField(max_length=200, default='')
// last_name = models.CharField(max_length=200, default='')

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email:"",
            phone:"",
            password: "",
            password2:"",
        }
        this.paperStyle={padding :20,width:280, margin:"20px auto"}
        this.avatarStyle={backgroundColor:'#1bbd7e'}
        this.btnstyle = { margin: '8px 0' }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if ( this.state.username === "" || this.state.email === "" || this.state.phone === "" || this.state.password === "" || this.state.password2 === "") {
            alert("All fields are mandatory");
        }
        else {
            this.props.setKeys(this.state);
            this.props.history.push("/");
        }
    }
   

    render() {
        return (
            <Grid>
            <Paper elevation={10} style={this.paperStyle}>
                <Grid align='center'>
                    <Avatar style={this.avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                    {/* <TextField label='first_name' placeholder='Enter First Name' type="text" onChange={(e)=>this.setState({first_name:e.target.value})}  fullWidth required  />
                    <TextField label='last_name' placeholder='Enter Last Name' type='text' onChange={(e) => this.setState({ last_name: e.target.value })} fullWidth required /> */}
                    <TextField label='username' placeholder='Enter Username' type='text' onChange={(e) => this.setState({ username: e.target.value })} fullWidth required />
                    <TextField label='email' placeholder='Enter Email' type='email' onChange={(e) => this.setState({ email: e.target.value })} fullWidth required />
                    <TextField label='phone' placeholder='Enter phone' type='text' onChange={(e) => this.setState({ phone: e.target.value })} fullWidth required />
                    <TextField label='password' placeholder='Enter Password' type='password' onChange={(e) => this.setState({ password: e.target.value })} fullWidth required />
                    <TextField label='password2' placeholder='Enter Password' type='password' onChange={(e)=>this.setState({password2:e.target.value})}  fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />

            <Button type='submit' color='primary' variant="contained" style={this.btnstyle} fullWidth onClick={this.onSubmit}>Register</Button>
            
            </Paper>
        </Grid>
        )
    }
}
