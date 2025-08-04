import {
    Card,
    Avatar,
    Title,
    Text,
    Badge,
    Button,
    Stack,
    Group,
    Divider
} from '@mantine/core';

const userData = {
  username: 'Royalnavy',
  email: 'royalnavy@gmail.com',
  role: 'user',
  name: 'Brian',
  status: 'active',
};

function UserProfileCard() {
  const handleLogout = () => {
    console.log('User logged out!');
    alert('User logged out!');
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: 400, maxWidth: '100%' }}
    >
      {/* Bagian Header Profil */}
      <Stack align="center" spacing="xs">
        <Avatar size="xl" radius="xl" color="blue">
          {userData.name.charAt(0)}
        </Avatar>
        <Title order={3}>{userData.name}</Title>
        <Text size="sm" color="dimmed">
          @{userData.username}
        </Text>
        <Badge color="blue" variant="light">
          ROLE: {userData.role.toUpperCase()}
        </Badge>
      </Stack>

      {/* Bagian Pemisah & Detail */}
      <Divider my="lg" labelPosition="center" label="Details" />

      {/* Bagian Detail dalam Stack */}
      <Stack spacing="sm">
        <Group position="apart">
          <Text weight={500}>Email:</Text>
          <Text>{userData.email}</Text>
        </Group>
        <Group position="apart">
          <Text weight={500}>Status:</Text>
          <Badge color={userData.status === 'active' ? 'green' : 'gray'}>
            {userData.status}
          </Badge>
        </Group>
        <Group position="apart">
          <Text weight={500}>Role:</Text>
          <Text>{userData.role}</Text>
        </Group>
      </Stack>

      {/* Tombol Logout */}
      <Button color="red" fullWidth mt="xl" onClick={handleLogout}>
        Logout
      </Button>
    </Card>
  );
}

export default UserProfileCard;