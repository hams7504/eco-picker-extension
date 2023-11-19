import product from './product.svg';
import { useEffect } from 'react';
import '@pages/popup/Popup.css';
import { ChakraProvider, CircularProgress, CircularProgressLabel, Text, Button, HStack, Box } from '@chakra-ui/react';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import axios from 'axios';
import * as cheerio from 'cheerio';
// import Brand from './brandInterface';
import brandsData from '.brand_sustainability_rankings.json';

console.log(brandsData);
console.log(window.location.toString());

// const url_address = 'https://www.target.com/p/general-mills-family-size-cocoa-puffs-cereal/-/A-89089910?preselect=81875680#lnk=sametab';

const Popup = () => {
  // const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an HTTP GET request to the specified URL
        const response = await axios.get(window.location.toString());
        console.log(response.data);

        const $ = cheerio.load(response.data);
        const brand = $('meta[name="keywords"]').attr('content');

        //checking/matching if brand is in json

        for (const entry of brandsData) {
          console.log(entry);
          const name = entry.name;
          if (typeof name === 'string' && name.includes(brand)) {
            console.log(`Brand "${brand}" found in sector ${entry.sector}, ranking: ${entry.ranking}`);
          }
        }

        // const isPresent = jsonData.includes("General Mills");
        // console.log(isPresent)
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <ChakraProvider>
      <div
        className="App"
        style={{
          backgroundColor: '#fff',
        }}>
        <header className="App-header" style={{ color: '#000' }}>
          <Text style={{ marginBottom: '10px' }} fontSize="4xl" color="red">
            Eco Score:
          </Text>
          <CircularProgress
            style={{ marginBottom: '30px' }}
            value={30}
            capIsRound
            size="135"
            color="red"
            thickness="13px">
            <CircularProgressLabel>
              <Text fontSize="2xl" color="red">
                {' '}
                3/10
              </Text>
            </CircularProgressLabel>
          </CircularProgress>
          <Text color="red" style={{ marginBottom: '10px' }}>
            <b>Detected product details:</b>
          </Text>
          <HStack spacing="24px" style={{ marginBottom: '10px' }}>
            <Box w="100px" h="100px">
              <img src={product} alt="product"></img>
            </Box>
            <Box w="140px" h="120px">
              <Text style={{ marginBottom: '10px' }} fontSize="md">
                <b>Product Name: </b>Pantene shampoo
              </Text>
              <Text style={{ marginBottom: '10px' }} fontSize="md">
                <b>Product Category: </b>Haircare
              </Text>
            </Box>
          </HStack>

          <Button colorScheme="red" variant="outline">
            <a href="http://localhost:3000/">Click for more information!</a>
          </Button>
        </header>
      </div>
    </ChakraProvider>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occurred </div>);
