import React from "react";
import { Box, Button, Container, Heading, Text, Stack, Image, SimpleGrid, Icon, useColorModeValue, Link, VStack, HStack, Flex } from "@chakra-ui/react";
import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.100", "gray.700")} mb={1}>
        <Icon as={icon} w={10} h={10} />
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 6, md: 10 }} py={{ base: 10, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Make an <br />
          <Text as={"span"} color={"green.400"}>
            Impact
          </Text>
          in your career
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Join Impacteers, the innovative job seeking portal that not only connects you with your dream job but also provides mentorship, learning resources, and mock tests to ensure your career growth.
        </Text>
        <Stack spacing={6} direction={"row"} justify={"center"}>
          <Button rounded={"full"} px={6} colorScheme={"green"} bg={"green.400"} _hover={{ bg: "green.500" }}>
            Get Started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn More
          </Button>
        </Stack>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <Feature icon={FaBriefcase} title={"Job Portal"} text={"Discover your perfect job match with our intelligent job portal and apply to opportunities across the globe."} />
          <Feature icon={FaUserGraduate} title={"Mentorship"} text={"Get guidance and insights from industry experts who can help you navigate your career path effectively."} />
          <Feature icon={FaChalkboardTeacher} title={"Learning Portal"} text={"Enhance your skills with our comprehensive learning portal offering courses, workshops, and webinars."} />
          <Feature icon={FaClipboardList} title={"Mock Tests"} text={"Prepare for your interviews with our mock tests designed to simulate the real interview experience."} />
        </SimpleGrid>
      </Box>

      <VStack paddingTop="40px" spacing={2} align="stretch">
        <Box>
          <Heading as="h2" size="xl">
            Join Our Community
          </Heading>
          <Text as="p" fontSize="lg" color={"gray.600"}>
            Become a part of the Impacteers network and accelerate your career with our exclusive job listings, personalized mentorship, and skill development programs.
          </Text>
        </Box>
        <HStack justify={"center"}>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBuZXR3b3JrfGVufDB8fHx8MTcwODkyNDMyN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Impacteers community" objectFit="cover" boxSize="100%" />
        </HStack>
      </VStack>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={10}>
        <Button
          display={"inline-flex"}
          fontSize={"md"}
          fontWeight={600}
          color={"white"}
          bg={"green.400"}
          href={"#"}
          _hover={{
            bg: "green.500",
          }}
        >
          Sign Up Now
        </Button>
      </Stack>
    </Container>
  );
};

export default Index;
