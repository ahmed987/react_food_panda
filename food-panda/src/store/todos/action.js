import firebase from '../../config/firebase';
const db = firebase.firestore();

const update_todos = () => {
    return (dispatch) => {
        db.collection('todo').onSnapshot(snapshot => {
            const temp = [];
    
            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            dispatch({
                type: 'UPDATE_TODOS',
                payload: temp
            })
        })
    }
}

export {
    update_todos
}