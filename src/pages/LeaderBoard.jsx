import {useState, useEffect, use} from 'react'
import { Link, useNavigate } from 'react-router-dom';


function LeaderBoard() {

    const navigate = useNavigate()

    const [ data, setData ] = useState([]);
  
    useEffect(() => {

        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []; 
        setData(leaderboard);
       

    }, [])

     console.log('leaderboard', data)

    const clearLeaderboard = (e) => {

        localStorage.removeItem('leaderboard');
        setData([])
        navigate('/')

    }

    

return (
    data.length > 0 ? (
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
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.username}</td>
                            <td>{entry.score}</td>
                            <td>{entry.percentage}%</td>
                            <td>{entry.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-danger mt-3" onClick={clearLeaderboard}>
                Clear Leaderboard
            </button>
        </div>
    ) : (
        <div className="container text-center py-5">
            <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
            <p className="text-muted">No leaderboard data available.</p>

            <Link  to="/"  className="btn btn-warning" onClick={() => dispatch({ type:"RESET"})}>
                Home
            </Link>
        </div>
    )
);


   
  
}

export default LeaderBoard
