

import { Button } from '@chakra-ui/react';
import React from 'react';
import { Providers } from '../../provider';
import cls from "./index.module.scss";

export default function Start() {
    const { currentUser, setGameState } = Providers.useAuth();
    return (
        <div className={cls.start_point}>
            <h2>{currentUser?.displayName}</h2>
            <div className={cls.start_point_button}>
                <Button
                    onClick={() => setGameState("quiz")}
                    colorScheme='blue'
                >
                    Start Quiz
                </Button>
            </div>
        </div>
    )
}
