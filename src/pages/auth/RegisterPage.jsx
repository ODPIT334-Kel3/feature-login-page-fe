import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from '../../styles/AuthenticationTitle.module.css';

export default function RegisterPage() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Create Account
      </Title>

      <Text className={classes.subtitle}>
        Let's get started with a new account.
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput label="Name" placeholder="Enter your name" required radius="md" />
        <TextInput label="Email" placeholder="Enter your email" required mt="md" radius="md" />
        <PasswordInput label="Password" placeholder="Create a password" required mt="md" radius="md" />
        
        <Checkbox label="I accept terms and conditions." mt="lg" />
          
        <Button fullWidth mt="xl" radius="md">
          Create an Account
        </Button>
        
        <Text size="sm" ta="center" mt="sm">
          Already have an account?{' '}
          <Anchor component="button" size="sm">
            Sign In
          </Anchor>
        </Text>

      </Paper>
    </Container>
  );
}