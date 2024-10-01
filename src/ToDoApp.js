import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import ReactSwitch from 'react-switch';

const ToDoApp = () => {

    const [task, setTask] = useState('');
    const [list, setList] = useState([]);
    const addTask = () => {
        if (task) {
            const to_do = {
                id: list.length + 1,
                title: task,
                toggle: false
            }
            setList([to_do, ...list]);
            setTask('');
        }
    }
    const toggleTask = (id) => {
        const updatedTask = list.map((task) =>
            task.id === id ? { ...task, toggle: !task.toggle } : task
        )
        setList(updatedTask);
    }
    const deleteTask = (id) => {
        const filteredTask = list.filter((task) => task.id !== id)
        setList(filteredTask)
    }


    return (
        <div className='mx-auto mt-16'>


            <div className='flex justify-center items-center'>
                <input type="text" value={task} placeholder='enter task name...' className='text-white text-xl border-2  rounded-md mr-3 py-2 px-3 border-red-700 w-[350px] bg-gradient-to-r from-green-950 to-red-900' onChange={(e) => setTask(e.target.value)} />
                <button className='bg-green-700 hover:bg-green-900  rounded-md p-2' onClick={addTask}><MdAddCircleOutline className='size-8'></MdAddCircleOutline></button>
            </div>
            <div className='flex flex-col justify-center items-center' >
                <div className={`${list.length > 0 && 'bg-gradient-to-r from-red-600 to-green-500 w-[350px] p-4 rounded-md mt-4'}`}>



                    {
                        list.length === 0 ? <h1 className='text-2xl mt-28'>add task...</h1> : list.map((task) => (
                            <div className={`flex justify-between  border-4 border-red-700 rounded-md w-[300px]  p-2 mb-2 bg-gradient-to-r from-blue-300 to-cyan-500 text-black ${task.toggle ? 'bg-gradient-to-r from-green-900 to-green-700 text-white' : ''}`}
                                key={task.id}>
                                <h4 className={` ${task.toggle ? 'line-through' : ''} text-xl`}>{task.title}</h4>
                                <div>
                                    <button onClick={() => deleteTask(task.id)} className='text-red-700 font-bold text-2xl mr-4'> <MdDeleteOutline></MdDeleteOutline></button>
                                    <ReactSwitch
                                        width={40}
                                        height={20}
                                        handleDiameter={18}
                                        checked={task.toggle}
                                        onColor='#6fec19'
                                        offColor='#900000'
                                        onChange={() => toggleTask(task.id)}
                                    ></ReactSwitch>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


    )
}

export default ToDoApp