import './App.css';
import {useEffect, useState} from "react";
import {ADD} from "./components/ADD";
import {getAll, updateServis} from "./services/task.service";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';

function App() {
    const [flag, setFlag] = useState(false)
    const [flagUpdate, setFlagUpdate] = useState(false)
    localStorage.setItem("flag", flag)
    const [boards, setBoards] = useState([])
    const [addTitle, setAddTitle] = useState(null)


    const update = async (data, position) => {
        setFlagUpdate(!flagUpdate)
        await updateServis(data, position)
    }
    const getAllTask = async ()=>{
        const data = await getAll()
        setBoards(data)
    }
    useEffect(async () => {
        getAllTask()
    }, [addTitle, flagUpdate])

    return (
        <div className={"app"}>
            <div className={"content"}>
                <div className={"board"}>
                    <div className={"addButton"} onClick={() =>
                        setFlag(!flag)}>
                        <div className={"board_title"}>Зробити</div>
                        <ADD flag={flag} setFlag={setFlag}
                             addTitle={addTitle} setAddTitle={setAddTitle}
                             setFlagUpdate={setFlagUpdate}
                             flagUpdate={flagUpdate}
                        >
                        </ADD>
                        <AddIcon> </AddIcon>
                    </div>
                    {
                       boards && boards.map((board, index) =>
                            board.position === 1 ? <div
                                key={index}
                                className={"item"}
                            >
                                <div className={"item_content"}>
                                    <div className={"d"}> {board.title}</div>
                                    <CheckIcon onClick={() => {
                                        update(board, 2)
                                        setFlagUpdate(!flagUpdate)
                                    }}></CheckIcon>
                                </div>
                            </div> : ''
                        )
                    }
                </div>
                <div className={"board"}>
                    <div className={"board_title"}>Перевірити</div>
                    {
                        boards && boards.map((board, index) =>
                            board.position === 2 ? <div
                                key={index}
                                className={"item"}
                            >
                                <div className={"item_content"}>
                                    <div className={"d"}> {board.title}</div>
                                    <CheckIcon onClick={() => {
                                        update(board, 3)
                                        setFlagUpdate(!flagUpdate)
                                    }}></CheckIcon>
                                </div>
                            </div> : ''
                        )
                    }
                </div>
                <div className={"board"}>
                    <div className={"board_title"}>Зроблено</div>
                    {
                        boards && boards.map((board, index) =>
                            board.position === 3 ? <div
                                key={index}
                                className={"item"}
                            >
                                <div className={"item_content"}>
                                    <div className={"d"}> {board.title}</div>
                                    <ClearIcon onClick={() => {
                                        update(board, 4)
                                        setFlagUpdate(!flagUpdate)
                                    }}></ClearIcon>
                                </div>
                            </div> : ''
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
