import {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';


function LeaderBoard() {

    const navigate = useNavigate()
    const { dispatch } = useContext(QuizContext);

    const [ data, setData ] = useState([]);
  
    useEffect(() => {

        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []; 
        setData(leaderboard);
       

    }, [])

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

            <div className="d-flex justify-content-center gap-3 mt-3">
                <Link to="/" className="btn btn-warning" onClick={() => dispatch({ type: "RESET" })}>
                    Home
                </Link>
                <button className="btn btn-danger" onClick={clearLeaderboard}>
                    Clear Leaderboard
                </button>
            </div>
        </div>
    ) : (
        <div className="container text-center py-5">
            <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>
            <p className="text-muted">No leaderboard data available.</p>

            <Link to="/" className="btn btn-warning" onClick={() => dispatch({ type: "RESET" })}>
                Home
            </Link>
        </div>
    )
);


   
  
}

export default LeaderBoard
