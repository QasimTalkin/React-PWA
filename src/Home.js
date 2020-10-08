import React from 'react'

export default function Home(){

    fetch('https://reqres.in/api/users/22') // 404 Error
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(res.status);
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(`Error with message: ${err}`));
    return (
        <div>
            Home Page
        </div>
    )
}