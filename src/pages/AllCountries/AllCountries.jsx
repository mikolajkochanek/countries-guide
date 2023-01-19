import Dropdown from "../../components/DropDown/DropDown";


const options = [
    {label: "pierwsza opcja", value: "1111"},
    {label: "Druga opcja", value: "22222"}, ]

function AllCountriesPage() {
    return <Dropdown options={options}></Dropdown>


}

export default AllCountriesPage