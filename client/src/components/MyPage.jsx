export const MyPage = (props)=>{
    return(
<>
    <div className="App">
    <h1>
    <code>{props.user.username}</code>
    </h1> 
    {props.user ? 
    <>     
    <p>Username: {props.user.username}</p>
    <p>Email: {props.user.email}</p>
    <p>Password: *****</p>
    </>
    :
    <>     
    <p>Not logged in</p>
    </>
    }
    </div>
</>
)
}