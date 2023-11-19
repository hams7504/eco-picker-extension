import product from './product.svg';
import '@pages/popup/Popup.css';
import { ChakraProvider, CircularProgress, CircularProgressLabel, Text, Button, HStack, Box } from '@chakra-ui/react';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

const Popup = () => {
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

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
