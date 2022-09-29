import { FC } from 'react'
import { Container, Heading, VStack, HStack, Button, Text, Image } from '@chakra-ui/react'

const Connected: FC = () => {
 
    return (
        <VStack spacing={20} >
            <Container>
                <VStack spacing={8} >
                    <Heading color='white' as="h1" size='2xl' noOfLines={1} textAlign="center" >
                        Welcome Buildoor.
                    </Heading>


                    <Text color="bodyText" fontSize="xl" textAlign="center" >
                        Each Buildoor is randomly generated and can be staked to recieve 
                        <Text as="b" > $BLD</Text>. Use your <Text as="b" > $BLD</Text> to upgrade your buildoor and recieve perks within the community!
                    </Text>

                </VStack>
            </Container>

            <HStack spacing={10} >
                <Image src="avatar1.png" alt="" />
                <Image src="avatar2.png" alt="" />
                <Image src="avatar3.png" alt="" />
                <Image src="avatar4.png" alt="" />
                <Image src="avatar5.png" alt="" />
            </HStack>

            <Button bgColor="accent" color="white" maxW="380px" >
                <Text>mint buildoor</Text>
            </Button>

        </VStack>
    )
}
export default Connected