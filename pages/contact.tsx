import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
function ContactForm() {
  return (
    <div className={styles.ContactForm}>
      
    <Box maxW="500px" mx="auto">
    <div>
      <Heading >Contact Us</Heading>
      <br>
      </br>
      <br></br>
      </div>
      <FormControl id="name" mb="4">
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Enter your name" />
      </FormControl>
      <FormControl id="email" mb="4">
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>
      <FormControl id="message" mb="4">
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter your message" />
      </FormControl>
      <Button colorScheme="red">Submit</Button>
      <div>
      <br></br><br></br>
      <p>We would love to hear from you! If you have any questions, feedback, or suggestions, please don't hesitate to contact us.
      <br></br><br></br>
      Address:
      123 Main Street
      New York, NY 10001
      USA
      <br></br><br></br>
      Phone:
      +1 (555) 123-4567
      <br></br><br></br>
      Email:
      info@institute.com
      <br></br><br></br>
      Alternatively, you can use the contact form below to send us a message. We will get back to you as soon as possible.
      <br></br><br></br>
      </p>
      </div>
    </Box>

    </div>
  );
}

export default ContactForm;
