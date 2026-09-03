import {useState, useEffect, use} from 'react'


function LeaderBoard() {

    const [ data, setData ] = useState([]);
  
    useEffect(() => {

        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []; 
        setData(leaderboard);
       

    }, [])

     console.log('leaderboard', data)

  return (
    <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
        <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                { data.map((entry, index) => (
                    <tr key={index}>
                        <td>{ index + 1 }</td>
                        <td>{ entry.username }</td>
                        <td>{ entry.score }</td>
                        <td>{ entry.percentage }%</td>
                        <td>{ entry.date }</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        <button className="btn btn-danger mt-3">Clear Leaderboard</button>
    </div>
  )
}

export default LeaderBoard
