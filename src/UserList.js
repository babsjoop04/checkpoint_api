import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const UserList = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setList(response.data))
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            {
                list.length === 0 ?
                    <div id="loadingPage">
                        <p className="h2">Please wait until the loading is complete</p>
                        <button className="btn btn-primary">
                            <span className="spinner-border spinner-border-sm"></span>
                            Loading..
                        </button>
                    </div>
                    :
                    <div className="" id="userList">
                        <div className="row">
                            <h1>List Users</h1>
                        </div>
                        <div className="row">
                            <table className="table table-striped">
                                <thead >
                                    {/* className="table-success" */}
                                    <tr>
                                        <td>
                                            #(id)
                                        </td>
                                        <td>
                                            Name
                                        </td>
                                        <td>
                                            UserName
                                        </td>
                                        <td>
                                            Address
                                        </td>
                                        <td>
                                            Company's name
                                        </td>
                                        <td>
                                            Company's catch phrase
                                        </td>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            Phone
                                        </td>
                                        <td>
                                            Website
                                        </td>
                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        list.map(({ id, name, username, company, address, email, phone, website }) => {
                                            return <User
                                                key={id}
                                                id={id}
                                                name={name}
                                                username={username}
                                                company={company}
                                                address={address}

                                                email={email}
                                                phone={phone}
                                                website={website}
                                            />
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>


            }

        </div>
    );
};

export default UserList;