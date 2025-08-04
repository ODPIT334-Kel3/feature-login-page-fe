// src/components/product/DataTable.jsx

import { Table, Badge, ActionIcon, Group } from '@mantine/core';
import {
  IconEdit,
  IconTrash
} from '@tabler/icons-react';

const DataTable = ({ data }) => {
  const handleEdit = (id) => {
    console.log('Edit item with ID:', id);
    // Logika untuk menampilkan modal edit, misalnya
  };

  const handleDelete = (id) => {
    console.log('Delete item with ID:', id);
    // Logika untuk konfirmasi dan menghapus data
  };

  const rows = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>${item.price}</td>
      <td>
        <Badge color={item.status === 'In Stock' ? 'green' : 'red'} variant="light">
          {item.status}
        </Badge>
      </td>
      <td>
        <Group spacing="xs">
          <ActionIcon color="blue" onClick={() => handleEdit(item.id)}>
            <IconEdit size="1rem" />
          </ActionIcon>
          <ActionIcon color="red" onClick={() => handleDelete(item.id)}>
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table  highlightOnHover withBorder withColumnBorders>
      <thead style={{ textAlign: 'left' }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;