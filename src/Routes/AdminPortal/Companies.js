import ImApi from '../api.js'
import React, { useState, useEffect } from 'react';
import CompanyComponent from './CompanyComponent.js';
import { NavLink, useNavigate } from 'react-router-dom';
 function  Companies () {
    const[companies,setCompanies] = useState( null);
    const navigate = useNavigate();
   
useEffect(function companiesLoad() {
     function logout(){
        navigate('/loggedOut')
        }
    ImApi.getCompanies().then((result)=>{
        result===null?logout():setCompanies(result.companies)
    }) 

},[navigate])
    return(
        
        <div className="container">
            <p className='display-4'>Companies</p>
            <div className=".center-block">
            <NavLink to='/AddNewCompany'>
            <button className="btn btn-primary btn-block my-3">Add New Company</button>
            </NavLink>
            <table className="table">
            <thead>
      <tr>
        <th>name</th>
        <th>address</th>
        <th>contact name</th>
        <th>phone number</th>
      </tr>
    </thead>
    <tbody>
        
            {companies? companies.map((company) => (
            <CompanyComponent 
            key={company.id}
            id={company.id} 
            name={company.name}
            address={company.address}
            contact_name={company.contact_name}
            phone_number={company.phone_number} />)) : <tr><td><div className='display-4'>Loading..........</div></td></tr>}
    </tbody>
            </table>
            </div>
        </div>
    )
}
export default Companies;