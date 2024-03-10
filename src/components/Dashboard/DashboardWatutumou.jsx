import Navigation from "./SubComponents/Nav.jsx" 
import BarChart from "./SubComponents/BarChart.jsx";
import "./Dashboard.css"
import { useEffect, useState } from 'react';
import PieChart from "./SubComponents/PieChart.jsx";

const DashboardWatutumou = () => {
    const [Data, setData] = useState([]);
    const [activePart, setActivePart] = useState(1);
    const [hash, setHash] = useState(window.location.hash);

    // const fetchdata = async () => {
    //     const answersLists = await FetchAnswers();
    //     setData(answersLists);
    // };

    const onHashChange = () => {
        setHash(window.location.hash)

        //mapping
        const hashMappings = {
            '#SKCK': 1,
            '#SKKK': 2,
            '#SKP': 3,
        };
        setActivePart(hashMappings[hash] || 1);
    };

    const questionList = () => ({
        1: [1, 2, 3, 4, 5],
        2: [1, 2, 3, 4, 5],
        3: [1, 2, 3, 4, 5],
    }[activePart] || []);

    useEffect(() => {
        window.addEventListener('hashchange', onHashChange);
        onHashChange();
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('hashchange', onHashChange);
        };
    }, [hash]);

    useEffect(() => {
        // fetchdata()
    },[activePart])

    return(
        <section className="statistics">            
            <Navigation></Navigation>
            <div className="dashboard">
                <h1>Dashboard WatutumouDua</h1>
                {questionList().map((questionNumber) => (
                    <BarChart key={questionNumber} questionNumber={questionNumber} answersLists={Data} />
                ))}
            </div>
        </section>
    )
}

export default DashboardWatutumou