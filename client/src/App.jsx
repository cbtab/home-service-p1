import { Flex, Text, Button } from "@radix-ui/themes";
export default function App() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes </Text>
      <Flex gap="3" align="center">
        <Button variant="surface" highContrast>
          เข้าสู่ระบบ
        </Button>
      </Flex>
    </Flex>
  );
}
