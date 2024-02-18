import Btn from "./Btn";
const Filter = () =>{
    return(
        <div className="filter">
            <div className="pair" id="find">
        <label>What are you looking for?</label>
        <input type="search" placeholder="Search for category, name, company etc." />
        </div>
        <div className="pair">
        <label>Category</label>
            <select name="Category" id="">
                    <option value="">ALL</option>
            </select>
        </div>
        <div className="pair">
        <label>Status</label>
            <select name="Status" id="">
                    <option value="">ALL </option>
            </select>
        </div>
        <div className="pair">
        <label>.</label>
        ⬇️</div>
        
        {/* <FontAwesomeIcon icon="fa-solid fa-angles-down" /> */}

        <Btn text="Search"/>
        </div>
    )
}

export default Filter;