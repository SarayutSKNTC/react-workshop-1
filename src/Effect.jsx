import React from 'react'
import { useState, useEffect } from 'react';
function Effect() {
    const [users, setUsers] = useState([]) //ดึงข้อมูลจาก API
    const [q, setQ] = useState('')
    useEffect(() => {
        const ctrl = new AbortController();
        (async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', { //ดึงข้อมูลจาก API มาเก็บไว้ใน response
                    signal: ctrl.signal
                })
            const data = await response.json()
            setUsers(data)
            } catch (error) { 
                if(error.name === 'AbortError') { //การยกเลิกการดึงข้อมูล
                    console.log('Fetch aborted')
                }
    
            }

        })();
    
    return() => ctrl.abort();
},[]);

console.log(users)
const filtered = users.filter(u => u.name.toLowerCase().includes(q.toLowerCase())) //ฟิลเตอร์ข้อมูลที่ดึงมาให้แสดงผลตามที่เราต้องการ
  return (
    <>
    <input placeholder='Search' value={q} onChange={(e) => setQ(e.target.value)} />
    <ul>
        {filtered.map((u) => (
        <li key = {u.id}> {u.name}</li>
        ))}
    </ul>
    </>
  
    );
}          


export default Effect