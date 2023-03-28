

import React from 'react';
import cls from "./Main.module.scss";
import * as ScreenPage from "../../../screen";
import { Providers } from '../../../provider';

export default function Main() {
    const { gameState } = Providers.useAuth();

    return (
        <section className={cls.main_point}>
            {gameState === "start" && <ScreenPage.Start />}
            {gameState === "quiz" && <ScreenPage.Quiz />}
            {gameState === "end" && <ScreenPage.End />}
        </section>
    )
}
