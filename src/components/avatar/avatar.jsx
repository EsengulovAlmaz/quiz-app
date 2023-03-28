

import { Avatar, AvatarBadge } from '@chakra-ui/react';
import React from 'react';
import { Providers } from '../../provider';


export default function AvatarIcon() {
    const { currentUser, logOut } = Providers.useAuth();
    return (
        <Avatar
            src={currentUser?.photoURL}
            onClick={() => logOut()}
            cursor={"pointer"}
        >
            <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
    )
}
