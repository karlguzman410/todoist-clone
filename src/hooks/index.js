import React, { useState, useEffect } from 'react'
import { firebase } from '../firebase'


const collatedTasksExist = () => { }

//custom hook useTasks
export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'kguzman')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject)
            ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
            : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where('date', '==', moment().format('DD/MM/YYY')))
                : selectedProject === 'INBOX' || selectedProject === 0
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;
    }, [])
}


