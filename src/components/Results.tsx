import useUsers from '../hooks/useUsers'

export const Results = () => {
  const { users } = useUsers()

  return <h3>Result {users.length}</h3>
}
