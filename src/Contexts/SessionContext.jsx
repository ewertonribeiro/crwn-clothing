import {useState , useEffect , createContext} from 'react';
import {auth , provider , signInWithPopup} from '../Services/firebase'


export const SessionContext = createContext();



export function Auth({children}){

const [user , setUser] = useState(null);


useEffect(()=>{
const unSubscribe = auth.onAuthStateChanged(user=>{

if(user){

const {displayName , uid , email} = user


setUser({
uid,
name:displayName,
email
})
}else{
//throw new Error('Esta faltando informações da sua conta Goolgle')
}
})

return ()=>{
unSubscribe()
}
},[])






async function SignInWithGoogle(){


const response = await signInWithPopup(auth,provider);

if(response.user){

const {uid , email , displayName } = response.user;

setUser({
uid,
name:displayName,
email,

})

}else{
throw new Error("Your google account is wrong!!")
}

}



return(
<>
<SessionContext.Provider value={{user,setUser,SignInWithGoogle}}>

    {children}

</SessionContext.Provider>


</>
)
}
