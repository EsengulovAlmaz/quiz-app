

import { Card, CardBody, Heading } from '@chakra-ui/react';
import React from 'react';
import { ComponentSelf } from '..';

export default function Header() {


    return (
        <Card padding={"0 3em"}>
            <CardBody
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Heading size={'mg'}>Quiz App</Heading>

                <ComponentSelf.AvatarIcon/>
            </CardBody>
        </Card>
    )
};
