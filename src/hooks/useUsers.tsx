import { fetchUsers } from '../services/users.js'
import { useInfiniteQuery } from '@tanstack/react-query'
import { type User } from '../types.d'

const useUsers = () => {
  const { data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>(
    ['users'],
    fetchUsers,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false
    }
  )

  return {
    users: data?.pages?.flatMap(page => page.users) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage
  }
}

export default useUsers
