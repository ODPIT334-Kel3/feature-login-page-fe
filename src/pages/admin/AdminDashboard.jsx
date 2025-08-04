// src/pages/admin/AdminDashboard.jsx

import { AppShell, Container, Title, Text, Button, Group } from '@mantine/core';
import DataTable from '../../components/admin/DataTable';
import SimpleNavbar from '../../components/layout/SimpleNavbar';

// Data dummy untuk tabel
const mockData = [
  { id: 1, name: 'Product A', category: 'Electronics', price: 1200, status: 'In Stock' },
  { id: 2, name: 'Product B', category: 'Books', price: 250, status: 'Out of Stock' },
  { id: 3, name: 'Product C', category: 'Apparel', price: 500, status: 'In Stock' },
  { id: 4, name: 'Product D', category: 'Electronics', price: 750, status: 'In Stock' },
  { id: 5, name: 'Product E', category: 'Home', price: 300, status: 'Out of Stock' },
];

const AdminDashboard = () => {
  return (
    <AppShell
      padding="md"
      // header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
    >
     <SimpleNavbar />

      {/* Konten utama di tengah halaman */}
      <AppShell.Main>
        <Container size="lg" py="xl" >
          <Group position="apart" mb="md">
            <Title order={2}>Manage User</Title>
            <Button>Add New User</Button>
          </Group>
          <Text color="dimmed" mb="lg">
            Berikut adalah daftar pengguna yang dapat Anda kelola.
          </Text>
          <DataTable data={mockData} />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default AdminDashboard;