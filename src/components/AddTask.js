import {useState} from 'react'

function AddTask({onAdd}) {
 const [text, setText] = useState('');
 const [day, setDay] = useState('');
 const [reminder, setReminder] = useState('')


const onSubmit = (e) => {
    e.preventDefault();

    if(!text){
        alert("Please add task")
        return
    }

    onAdd({text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
}


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>

            <div>
                <label>Day and time</label>
                <input type='text' placeholder='Add day and time' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>

            <div>
                <label>Set reminder</label>
                <input type='checkbox' 
                    checked={reminder}
                    value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}
                />
                
            </div>

            <input type="submit" value='Save task'/>
        </form>
    )
}

export default AddTask
