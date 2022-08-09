import { useRef, useState } from 'react'
import { Box, Button, Form, FormField, Heading, TextInput } from 'grommet'
import { Close, StatusGood } from 'grommet-icons'
import emailjs from '@emailjs/browser';

function FormSet({close}) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const form = useRef();
    
    const closer = () => {
        close()
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xsn8o3m', 'template_c27qb0g', form.current, '5-aE0hdZ4fPmHoTJk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setName('')
          setPhone('')
          setEmail('')

          setMessageSent(true)
      };

  return (
    <Box
        direction='column'
        pad='medium'
    >
        {messageSent === true
            ? (<Box>
                    <MessageSent close={close}/>
                </Box>)
            : (
                <Box>
                    <Button icon={<Close />} onClick={closer}/>
                    <Form   
                        ref={form}
                        validate='submit'
                        onChange={(value) => console.log('Change', value)}
                        onSubmit={sendEmail}
                        onReset={() => {
                            setName('')
                            setPhone('')
                            setEmail('')
                        }}
                    >
                        <FormField 
                            label="Name"
                            name="name"
                            required
                            validate={[
                                { regexp: /^[a-z]/i },
                                (name) => {
                                if (name && name.length === 1) return 'must be >1 character';
                                return undefined;
                                },
                                (name) => {
                                    if (name === 'good')
                                    return {
                                        message: (
                                        <Box align="end">
                                            <StatusGood />
                                        </Box>
                                        ),
                                        status: 'info',
                                    };
                                    return undefined;
                                },
                            ]}
                        >
                            <TextInput
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            />
                        </FormField>

                        <FormField
                            label="Phone Number"
                            name="phone"
                            required
                            validate={[
                                { regexp: /[0-9]/g },
                                (phone) => {
                                if (phone && phone.length === 1) return 'must be >1 character';
                                return undefined;
                                },
                                (phone) => {
                                    if (phone === 'good')
                                    return {
                                        message: (
                                        <Box align="end">
                                            <StatusGood />
                                        </Box>
                                        ),
                                        status: 'info',
                                    };
                                    return undefined;
                                },
                            ]}
                        >
                            <TextInput
                            name="phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            />
                        </FormField>

                        <FormField
                            label="Email"
                            name="email"
                            required
                            validate={[
                                { regexp: /^[a-z]/i },
                                (email) => {
                                if (email && email.length === 1) return 'must be >1 character';
                                return undefined;
                                },
                                (email) => {
                                    if (email === 'good')
                                    return {
                                        message: (
                                        <Box align="end">
                                            <StatusGood />
                                        </Box>
                                        ),
                                        status: 'info',
                                    };
                                    return undefined;
                                },
                            ]}
                        >
                            <TextInput
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            />
                        </FormField>

                        <Box direction="row" justify="between" margin={{ top: 'medium' }} gap='small'>
                            <Button label="Cancel" />
                            <Button type="reset" label="Reset" />
                            <Button type="submit" label="Update" primary />
                        </Box>
                    </Form>
                </Box>
            )}
    </Box>
  )
}

const MessageSent = ({close}) => {
    const closer = () => {
        close()
    }
    return (
        <Box
            align='center'
            justify='center'
        >
            <Heading>Message Sent</Heading>
            <Button label='Close' onClick={closer}/>
        </Box>
    )
}
export default FormSet