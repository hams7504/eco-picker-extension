import footprints from './footprints.svg';
import {
  Icon,
  ChakraProvider,
  Center,
  Stat,
  Button,
  Text,
  HStack,
  VStack,
  Box,
  List,
  ListItem,
  Card,
  Image,
  CardBody,
  Heading,
  SimpleGrid,
  CardHeader,
  CardFooter,
  ButtonStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';
// import { PieChart } from '@mui/material';
import { PieChart, Pie, AreaChart, ReferenceLine, Area } from 'recharts';
import { FaArrowRight } from 'react-icons/fa';

const cardData = [
  { productName: 'Pantene Shampoo', category: 'Haircare', ecoScore: '3/10' },
  { productName: 'Reeses Puffs', category: 'Cereal', ecoScore: '4/10' },
  { productName: 'Natures Valley Granola Bar', category: 'Snack', ecoScore: '7/10' },
];

const data01 = [
  {
    name: 'Group A',
    value: 400,
  },
  {
    name: 'Group B',
    value: 300,
  },
  {
    name: 'Group C',
    value: 300,
  },
  {
    name: 'Group D',
    value: 200,
  },
  {
    name: 'Group E',
    value: 278,
  },
  {
    name: 'Group F',
    value: 189,
  },
];
const data02 = [
  {
    name: 'Group A',
    value: 2,
  },
  {
    name: 'Group B',
    value: 4,
  },
  {
    name: 'Group C',
    value: 8,
  },
  {
    name: 'Group D',
    value: 2,
  },
  {
    name: 'Group E',
    value: 3,
  },
  {
    name: 'Group F',
    value: 2,
  },
];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App() {
  return (
    <ChakraProvider>
      <div style={{ padding: '2%' }}>
        <Center>
          <VStack style={{ marginBottom: '-40px' }}>
            <Text style={{ alignContents: 'center', marginBottom: '30px' }} fontSize="5xl" color="red">
              Carbon Footprint Tracker
            </Text>
            <Text fontSize="lg">
              A person's carbon footprint is the sum of all the greenhouse gas emissions that had to take place for a
              product to be produced or for an activity to take place. educing carbon emissions lessens the likelihood
              and severity of extreme weather events, improves air and water quality, maintains biodiversity, and
              supports a healthy food supply. This page shows a breakdown of your carbon footprint based on items you've
              purchased.
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack>
            <Box
              w="300px"
              p={4}
              color="tomato"
              position="relative"
              style={{ marginBottom: '-40px', marginLeft: '60px' }}>
              <Box
                style={{ marginLeft: '60px' }}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="tomato"
                fontSize="2xl">
                <Text width="400px" fontSize="4xl">
                  <b>Total Carbon Footprint</b>
                </Text>
                <Text style={{ marginLeft: '150px' }} width="400px" fontSize="6xl">
                  <b>21</b>
                </Text>
                <Text style={{ marginLeft: '140px' }} width="400px" fontSize="xl">
                  Tons CO2e
                </Text>
              </Box>

              <img style={{ alignSelf: 'center', opacity: 0.2, transform: 'rotate(57.5deg)' }} src={footprints} />
            </Box>
            <HStack>
              <VStack style={{ marginBottom: '20px' }}>
                <Box>
                  <PieChart width={400} height={250}>
                    <Pie
                      data={data02}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={80}
                      fill="tomato"
                      label
                    />
                  </PieChart>
                </Box>
                <Box bg="white" w="100%" p={4} color="white">
                  <AreaChart width={400} height={250} data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" stroke="tomato" fill="tomato" />
                  </AreaChart>
                </Box>
              </VStack>
              <Box bg="tomato" w="90%" p={4} color="white" style={{ marginLeft: '25px' }}>
                <HStack>
                  <Text style={{ marginBottom: '10px' }}>Items bought:</Text>
                  <HStack style={{ marginLeft: 'auto', marginBottom: '10px' }}>
                    <Text style={{ marginTop: '1px', marginRight: '5px' }}>Missing an item?</Text>
                    <a href='http://localhost:3000/product_demo'>
                      <Button colorScheme="white" variant="outline">
                        Add item
                      </Button>
                    </a>
                  </HStack>
                </HStack>
                <SimpleGrid width="600px" spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                  {cardData.map((data, index) => (
                    <Card key={index}>
                      <CardBody>
                        <Heading size="md" style={{ marginBottom: '10px' }}>
                          {data.productName}
                        </Heading>
                        <Text>Product: {data.productName}</Text>
                        <Text>Category: {data.category}</Text>
                        <Text>Eco Score: {data.ecoScore}</Text>
                      </CardBody>
                    </Card>
                  ))}
                  <Center>
                    <Button>
                      View all <Icon as={FaArrowRight} ml={1} />
                    </Button>
                  </Center>
                </SimpleGrid>
              </Box>
            </HStack>
          </VStack>
        </Center>
      </div>
    </ChakraProvider>
  );
}

export default App;
