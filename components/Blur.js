import { useDisclosure } from '@mantine/hooks';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Blur() {
    const [opened, handlers] = useDisclosure(false);

    return (
        <div className=''>
            <div className={`h-screen w-screen absolute top-0 bottom-0 right-0 left-0 bg-slate-500/50 z-10 ${opened ? "block" : "hidden"}`}></div>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => handlers.open()}>
                Open
            </Button>
            <div className={opened ? "block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" : "hidden"}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            height={160}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Norway Fjord Adventures</Text>
                        <Badge color="pink" variant="light">
                            On Sale
                        </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                    </Text>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                        Book classic tour now
                    </Button>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => handlers.close()}>
                        Close
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default Blur