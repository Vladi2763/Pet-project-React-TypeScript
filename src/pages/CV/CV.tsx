import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './CV.module.css'

const Cv = () => {

    const [isTextAuthShowen, setIsTextAuthShowen] = useState(false)
    const [isTextGridShowen, setIsTextGridShowen] = useState(false)
    const [isTextTeamShowen, setIsTextTeamShowen] = useState(false)
    const [isTextTicTacShowen, setIsTextTicTacShowen] = useState(false)

    const showTextAuth = () => {
        setIsTextAuthShowen(true)
    }

    const hideTextAuth = () => {
        setIsTextAuthShowen(false)
    }

    const showTextGrid = () => {
        setIsTextGridShowen(true)
    }

    const hideTextGrid = () => {
        setIsTextGridShowen(false)
    }

    const showTextTeam = () => {
        setIsTextTeamShowen(true)
    }

    const hideTextTeam = () => {
        setIsTextTeamShowen(false)
    }

    const showTextTicTac = () => {
        setIsTextTicTacShowen(true)
    }

    const hideTextTicTac = () => {
        setIsTextTicTacShowen(false)
    }

    return (
        <div className={classes.layout}>
            <div className={classes.container}>
                <div>
                    <header className={classes.header}>
                        <img className={classes.logo} src={'/assets/photo.png'} alt='logo'></img>
                        <div className={classes.introductionContainer}>
                            <span className={classes.hello}>👋 Привет!</span>
                            <span className={classes.name}>Меня зовут Влад.</span>
                            <p className={classes.introduction}>
                                Я front-end разработчик.
                                В конце лета 2021 увлекся разработкой и решил изучить программирование.
                                Ключевые навыки: React, TypeScript, Redux-Thunk, Redux Toolkit, Git
                                Прокачивал скилл разработки на пет-проектах.
                            </p>
                        </div>
                    </header>
                    <main className={classes.main}>
                        <span className={classes.annotation}>
                            Мои проекты на React & TypeScript 👇
                        </span>
                        <section className={classes.section}>
                            <Link className={classes.link} to='/auth'>
                                <div className={classes.card} onMouseEnter={showTextAuth} onMouseLeave={hideTextAuth}>
                                    <span>Auth</span>
                                    {!isTextAuthShowen && <img className={classes.img} src={`/assets/auth.svg`} alt='auth'></img>}
                                    {isTextAuthShowen && <p className={classes.parag} >
                                        Модуль авторизации с регистрацией.
                                        Сделано на Firebase.
                                        Регистрируйся на любую почту и пароль
                                    </p>}
                                </div>
                            </Link>
                            <Link className={classes.link} to='/grid'>
                                <div className={classes.card} onMouseEnter={showTextGrid} onMouseLeave={hideTextGrid}>
                                    <span>Grid</span>
                                    {!isTextGridShowen && <img className={classes.img} src={`/assets/grid.svg`} alt='grid'></img>}
                                    {isTextGridShowen && <p className={classes.parag}>
                                        Редактор сетки товаров с drag-n-drop’ом. Выбирай пресет и закидывай картинку в ячейку 👞
                                    </p>}
                                </div>
                            </Link>
                            <Link className={classes.link} to='/teams'>
                                <div className={classes.card} onMouseEnter={showTextTeam} onMouseLeave={hideTextTeam}>
                                    <span>Teams</span>
                                    {!isTextTeamShowen && <img className={classes.img} src={`/assets/teams.svg`} alt='teams'></img>}
                                    {isTextTeamShowen && <p className={classes.parag}>
                                        CRUD для команд. Сделано на Firebase. Создавай команды и добавляй участников
                                    </p>}
                                </div>
                            </Link>
                            <Link className={classes.link} to='/tictactoe'>
                                <div className={classes.card} onMouseEnter={showTextTicTac} onMouseLeave={hideTextTicTac}>
                                    <span>TicTacToe</span>
                                    {!isTextTicTacShowen && <img className={classes.img} src={`/assets/ticTac.svg`} alt='ticTacToe'></img>}
                                    {isTextTicTacShowen && <p className={classes.parag}>
                                        Сыграем в <span className={classes.gwint}>гвинт</span> крестики-нолики?🙃
                                    </p>}
                                </div>
                            </Link>
                        </section>
                    </main>
                </div>
                <footer className={classes.footer}>
                    <div className={classes.links}>
                        <a href='https://telegram.me/teleshovV'>
                            <div className={classes.imageContainer}>
                                <img src={`/assets/tlg.svg`} alt='tlg logo'></img>
                                <span>Telegram</span>
                            </div>
                        </a>
                        <a href='https://github.com/Vladi2763'>
                            <div className={classes.imageContainer}>
                                <img src={`/assets/gitHub.svg`} alt='gitHub logo'></img>
                                <span>GitHub</span>
                            </div>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Cv;