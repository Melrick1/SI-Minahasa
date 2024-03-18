import BarChart from './BarChart';

const AdminQuestion = ({question, data}) =>{
    return(
        <div className="questionCard">
            <h3>{question}</h3>
            <BarChart key={1} questionNumber={1} answersLists={data} />
        </div>
    )
}

export default AdminQuestion;