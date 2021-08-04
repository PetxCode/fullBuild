import app from "../base"

const getData = async() => {

  await app.firestore().collection("task").onSnapshot( snapshot => {
      const r = []
      snapshot.forEach(doc => {
        r.push({...doc.data(), id: doc.id })
      })

      setState(r)
  }) 
}

// post
const getPost = async() => {
  await app.firestore().collection("task").doc().set({
    email,
    password,
    userName,
  })
  setEmail("")
}

// update
const getUpdate = async(id) => {
  await app.firestore().collection("task").doc(id).update({
    
    userName,
  })
  setEmail("")
}

// delete
const getDelete = async(id) => {
  await app.firestore().collection("task").doc(id).delete()
}

