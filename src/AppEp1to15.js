import React from 'react';
// import List from './components/unique  list/List';
// import CardBox from './components/Card';

// import Data from "./Data.json";


const users = [
    { name : "Anisul Islam", age : "32" , mobile : [{home : '01222'},{ofc : "0888"}]},
    { name : "Rahim", age : "35" , mobile : [{home : '018932'},{ofc : "07788"}]}

]


function AppEp1to15(){

    return (
        <div>
            {users.map((user,index) => {
                return <article>
                    <h2>{user.name}</h2>
                    <h3>{user.age}</h3>

                    {user.mobile.map((number ,index) =>{
                        return <div>
                            <h4>{number.home}</h4>
                            <h4>{number.ofc}</h4>
                        </div>
                    })}
                    
                </article>
            
            })}
        </div>
    ) 
}

export default AppEp1to15;