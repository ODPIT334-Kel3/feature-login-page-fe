import { Center } from '@mantine/core';
import UserProfileCard from '../../components/user/UserProfileCard';
export default function ProfilePage() {
  return (
    <Center style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <UserProfileCard />
    </Center>
  )
}
