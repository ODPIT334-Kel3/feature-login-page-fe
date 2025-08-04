
import { useState } from 'react';
import {
  AppShell,
  Group,
  Code,
  NavLink,
  Divider,
} from '@mantine/core';

import {
  IconBellRinging,
  IconReceipt2,
  IconFingerprint,
  IconKey,
  IconDatabaseImport,
  Icon2fa,
  IconSettings,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings },
];

const SimpleNavbar = () => {
  const [active, setActive] = useState(data[0].label);

  const links = data.map((item) => (
    <NavLink
      key={item.label}
      active={item.label === active}
      label={item.label}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(item.label)}
    />
  ));

  return (
    <AppShell.Navbar p="md">
      {/* Navbar header section */}
      <Group justify="space-between" mb="xs">
        <p>Testing</p>
        <Code fw={700}>v3.1.2</Code>
      </Group>

      {/* Main navigation links */}
      {links}

      {/* Footer section with horizontal divider */}
      <Divider my="sm" />

      {/* Logout and Change Account links */}
      <NavLink
        label="Change account"
        leftSection={<IconSwitchHorizontal size="1rem" stroke={1.5} />}
        onClick={() => { /* your change account logic here */ }}
      />
      <NavLink
        label="Logout"
        leftSection={<IconLogout size="1rem" stroke={1.5} />}
        onClick={() => { /* your logout logic here */ }}
        color="red"
      />
    </AppShell.Navbar>
  );
};

export default SimpleNavbar;