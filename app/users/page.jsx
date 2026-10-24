import UserCard from '../../components/UserCard';

const UsersPage = async() => {

    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Users: {users.length}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    users.map(user => <UserCard key={user._id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default UsersPage;