
const User = ({ id, name, username, company, address, email, phone, website }) => {
    return (
        <tr id={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>
                <p>Street : {address.street}</p>
                <p>City : {address.city}</p>
                <p>Suite : {address.suite}</p>

            </td>
            <td>{company.name}</td>
            <td>{company.catchPhrase}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>

        </tr>
    );
};

export default User;


//   <div className="row d-flex justify-content-end">
//                 <span class="badge bg-secondary">User N {id}</span>
//             </div>
//             <div className="row">
//                 <p className="h1">Name</p>
//                 <span>{name}</span>


//                 <span className="h3">@{username}</span>
//             </div>
//             <div className="row">
//                 <span className="h3">Company : {company.name}</span>
//                 <span className="h3">Address : {address.city},{address.street},{address.suit}</span>
//             </div>
//             <div className="row">
//                 <p className="h1">
//                     Contact
//                 </p>

//                 <table className="table table-striped">
//                     <tHead>
//                         <tr>
//                             <th>Email</th>
//                             <th>Phone</th>

//                         </tr>
//                     </tHead>
//                     <tBody>
//                         <tr>
//                             <td>{email}</td>
//                             <td>{phone}</td>
//                         </tr>
//                     </tBody>
//                 </table>
//                 <p>Website</p>
//                 <span>{website}</span>
//             </div>



// <div className="row d-flex justify-content-end">
//                 <span className="badge bg-secondary">User N {id}</span>
//             </div>
//             <div className="row">

//                 <table className="table table-striped">
//                     <tbody>
//                         <tr>
//                             <th>Name</th>
//                             <td>{name}</td>
//                         </tr>
//                         <tr>
//                             <th>UserName</th>
//                             <td>@{username}</td>
//                         </tr>
//                         <tr>
//                             <th>Company</th>
//                             <tr>
//                                 <tr>
//                                     <th>Name</th>
//                                     <td>{company.name}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Catch phrase</th>
//                                     <td>{company.catchPhrase}</td>
//                                 </tr>
//                             </tr>
//                         </tr>
//                         <tr>
//                             <th>Contact</th>
//                             <td>
//                                 <tr>
//                                     <th>Email</th>
//                                     <td>{email}</td>
//                                 </tr>
//                                 <tr>
//                                     <th>Phone</th>
//                                     <td>{phone}</td>
//                                 </tr>
//                             </td>
//                         </tr>
//                         <tr>
//                             <th>Website</th>
//                             <td>{website}</td>
//                         </tr>
//                     </tbody>
//                     <tbody>
//                         <tr><td>hello</td></tr>
//                     </tbody>
//                 </table>

//             </div>