import Btn from "./Btn";
const data = [
    {
        ID:"1077620",
        SHPIIFY :"17713",
        DATE:"22 JAN 202",
        STATUS:"Pending",
        CUSTOMER:"Amed",
        EMAIL:"ahmed.123@mail.com",
        COUNTRY:"Australia",
        SHIPPING:"Austrrlian Post Api",
        SOURSE:"ShopifyAU",
        ORDER_TYPE:"Customer" 
    },
    
]
const Summary = () =>{
    return(
        <div>
            <div className="filter">
            <div className="pair" id="find">
            <label>What are you looking for?</label>
            <input type="search" placeholder="Search for category, name, company etc." />
            </div>
            <div className="pair">
            <label>Status</label>
            <input type="search" placeholder="All" />
            </div>
            <div className="pair">
            <label>-</label>
            <select name="columns" id="columns">
                <option value="">ALL COLUMN</option>
            </select>
            </div>
            <Btn text="Dispatch Selected"/>
        </div>
            <table>
                <tr>
                <th>id</th>
                <th>shpiify</th>
                <th>date</th>
                <th>status</th>
                <th>customer</th>
                <th>email</th>
                <th>country</th>
                <th>shipping</th>
                <th>sourse</th>
                <th>order type</th>
                </tr>
                {
                    data.map((res)=>{
                    return <List {...res}/>
                    })
                }
                {/* <List {...data[0]}/> */}
            </table>
        
        </div>
    )
}
const List = ({ID,SHPIIFY,DATE,STATUS,CUSTOMER,EMAIL,COUNTRY,SHIPPING,SOURSE,ORDER_TYPE}) =>{
    return(
        
        <tr>
        <td>{ID}</td>
        <td>{SHPIIFY}</td>
        <td>{DATE}</td>
        <td>{STATUS}</td>
        <td>{CUSTOMER}</td>
        <td>{EMAIL}</td>
        <td>{COUNTRY}</td>
        <td>{SHIPPING}</td>
        <td>{SOURSE}</td>
        <td>{ORDER_TYPE}</td>
        </tr>
        
    )
}

export default Summary;


// const data = [
//     {
//         Company:"HCL",
//         Contact:"uwygye@gmail.com",
//         Country:"egypt"
//     },
//     {
//         Company:"Amazon",
//         Contact:"maye@gmail.com",
//         Country:"America"
//     },
//     {
//         Company:"Amazon",
//         Contact:"maye@gmail.com",
//         Country:"America"
//     },
//     {
//         Company:"Amazon",
//         Contact:"maye@gmail.com",
//         Country:"America"
//     }
// ]
// const Summary = () =>{
//     return(
//         <div>
//         <table>
//         <tr>
//         <th>Company</th>
//         <th>Contact</th>
//         <th>Country</th>
//         </tr>
//         {
//             data.map((res)=>{
//             return <List {...res}/>
//             })
//         }
//         {/* <List {...data[0]}/> */}
//         </table>
        
//         </div>
//     )
// }
// const List = ({Company, Contact, Country}) =>{
//     return(
//         <div>
//         <tr>
//         <td>{Company}</td>
//         <td>{Contact}</td>
//         <td>{Country}</td>
//         </tr>
//         </div> 
//     )
// }

// export default Summary;