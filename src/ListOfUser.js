import UserList from ",/UserList"
import UsreCard from "./UserCard"

const ListOfUser = ({userList}) =>{
    return(
        <div>
            {
                userList.map((user)=>(
                    UserCard key = {user.id}{...user}/>
                ))
            }
        </div>
    );
};
export default ListOfUser;