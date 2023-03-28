

import {
    Card,
    CardBody,
    Container,
    Image,
    Stack,
    Heading
} from '@chakra-ui/react';
import React from 'react';
import { centerStyles } from '../../../styles/styles';
import { signInWithPopup } from "firebase/auth";
import { FireConfig } from '../../../config/firebase';
import { Hooks } from '../../../hooks';

export default function Login() {
    const { auth, GoogleProvider } = FireConfig;
    const { actions } = Hooks.useLocations();

    const handleLogin = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(res => {
                localStorage.setItem("token", res?.user.accessToken);
                localStorage.setItem("refreshToken", res?._tokenResponse.refreshToken);
                actions.goToMain();
            })
    };

    return (
        <Container
            {...centerStyles}
        >
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        cursor={"pointer"}
                        src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        onClick={handleLogin}
                    />
                    <Stack mt='6' spacing='3' textAlign={"center"}>
                        <Heading size='md'>Sign in with Google</Heading>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
};
