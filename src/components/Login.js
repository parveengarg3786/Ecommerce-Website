import React, { Component } from 'react';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }

    }
    render(){
        return(
            <div className='container text-danger h-100'>
                <div className="row">
                    
                    <div className="col-sm-12 p-5">
                    <div className="box">
                    <form >
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" class="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" /> Remember me
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>


                    </div>
                  
                </div>
                
            </div>
        )
    }


}

export default LoginPage;