import React, { Component } from 'react'
import UserList from '../components/Users/UserList'
import { LocalStorageService } from '../cache/localStorage';

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:null, 
            isLoading:false
        };
      }
    componentDidMount(){
        this.setState({isLoading:true})
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(result =>
            this.setState({data:result,isLoading:false}),
        )
    }
  
    render() {
        const {data,isLoading} = this.state
        LocalStorageService.setItem("data", data)
        let datalocal = LocalStorageService.getItem('data') || [];
        console.log(datalocal)
       
        return (
            <div>
                <h1>Users</h1>
                {isLoading && <div>Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...</div>}
                <UserList data={data}/>
            </div>
        )
    }
}

export default User
