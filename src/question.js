import React, { useState } from "react";
import kooldoggo from './assets/kooldoggo.jpg'

export const Question = () => {
    const [questionNb, setQuestionNb] = useState(0)
    const [dogRpc, setDogRpc] = useState(0.0);
    const [catRpc, setCatRpc] = useState(0.0);
    const [dogBe, setDogBe] = useState(0);
    const [catBe, setCatBe] = useState(0);
    // Doggo
    // let isDog = 0;
    let [dogWeight, setDogWeight] = useState(0);
    let [catWeight, setCatWeight] = useState(0);
    let [idealcatWeight, setIdealCatWeight] = useState(0);
    let [sterilizedDog, setSterilizedDog] = useState(0);
    let [sterilizedCat, setSterilizedCat] = useState(0);
    let [interiorCat, setInteriorCat] = useState(0);
    let [dogHourWalk, setDogHourWalk] = useState(0);
    let [isLab, setIsLab] = useState(0);
    let tempBe = 0;
    const selectDogWeight = (event) => {
        setDogWeight(event.target.value);
    }

    const selectCatWeight = (event) => {
        setCatWeight(event.target.value);
    }

    const selectIdealCatWeight = (event) => {
        setIdealCatWeight(event.target.value);
    }

    const handleDogRpc = () => {
        if (isLab) {
            if (dogHourWalk && !sterilizedDog) {
                setDogRpc(81)
            } else if (sterilizedDog && !dogHourWalk) {
                setDogRpc(127)
            } else {
                setDogRpc(102)
            }
        } else {
            if (dogWeight < 10) {
                if (dogHourWalk && !sterilizedDog) {
                    setDogRpc(55)
                } else if (sterilizedDog && !dogHourWalk) {
                    setDogRpc(86)
                } else {
                    setDogRpc(69)
                }
            } else if (dogWeight < 25) {
                if (dogHourWalk && !sterilizedDog) {
                    setDogRpc(60)
                } else if (sterilizedDog && !dogHourWalk) {
                    setDogRpc(94)
                } else {
                    setDogRpc(75)
                }
            } else {
                if (dogHourWalk && !sterilizedDog) {
                    setDogRpc(65)
                } else if (sterilizedDog && !dogHourWalk) {
                    setDogRpc(102)
                } else {
                    setDogRpc(81)
                }
            }
        }
        if (dogWeight < 10) {
            tempBe = (Math.round(130 * Math.pow(dogWeight, 0.75)))
        } else {
            tempBe = (Math.round(130 * Math.pow(dogWeight, 0.67)))
        }
        if (sterilizedDog) {
            console.log(tempBe)
            tempBe = (Math.round(tempBe * 0.8))
        }
        if (isLab) {
            tempBe = (Math.round(tempBe * 0.8))
        }
        if (dogHourWalk) {
            tempBe = (Math.round(tempBe * 0.8))
        }
        setDogBe(tempBe)
    }

    const handleCatRpc = () => {
        if (!sterilizedCat) {
            setCatBe(70 * idealcatWeight)
        } else if (!interiorCat) {
            setCatBe(60 * idealcatWeight)
        } else {
            setCatBe(50 * idealcatWeight)
        }
        if (!interiorCat) {
            setCatRpc(85)
        } else {
            setCatRpc(100)
        }
    }

    if (questionNb === 0) {
        return (
            <div>
                {/* <svg viewBox="30 15.9 139.812 170.075">
                    <g fill="#61DAFB">
                        <path d="M142.4 106.8c0-24.3-19.4-43.9-43.2-43.9S56 82.6 56 106.8c0 9.7 3.1 18.6 8.3 25.8l26.4 46.6c3.2 7.7 14 7.7 17.2 0l27.4-48c1-1.6 2-3.2 2.8-4.9l.4-.7h-.1c2.5-5.7 4-12.1 4-18.8zm-20.9 9.3c-.8 1.5-2 2.7-3.4 3.7-1 .7-2.2 1.2-3.4 1.5-.4.1-.9.2-1.3.2h-2c-1-.1-1.9-.3-2.8-.6-1.6-.4-3.1-1-4.7-1.4-1.3-.4-2.5-.7-3.8-.9-.9-.1-1.8-.2-2.7-.2-.7 0-1.4.1-2.2.2-1.4.2-2.8.6-4.2.9-1.5.4-2.9.7-4.4.9-.6.1-1.2.1-1.8.1h-.9c-.3 0-.6-.1-.8-.1-1.5-.2-2.9-.8-4.2-1.7-2.1-1.7-3.4-3.8-3.9-6.5-.2-1-.2-2-.1-3 .1-1.2.4-2.4.8-3.5.7-1.8 1.6-3.4 2.8-4.9.9-1.1 1.9-2.1 3-3 1-.8 2-1.8 2.9-2.8 1.1-1.3 2.1-2.6 3.1-4l2.7-3.6c.7-.9 1.5-1.7 2.3-2.5 1-.9 2.2-1.7 3.5-2.2 1-.4 2-.6 3.1-.5 1.2 0 2.4.2 3.5.5 1.8.5 3.3 1.4 4.5 2.7.9.9 1.6 1.9 2.3 3 .7 1.1 1.4 2.3 2.1 3.4.8 1.3 1.6 2.6 2.4 3.8.9 1.2 1.9 2.3 3 3.4 1.3 1.2 2.5 2.6 3.4 4.2.8 1.3 1.5 2.7 1.9 4.2.3 1.2.6 2.4.6 3.6 0 1.7-.4 3.4-1.3 5.1zm5.1-101c4.1.5 7.2 2.6 9.6 5.9 1.6 2.3 2.7 4.8 3.3 7.6.5 2.4.7 4.7.7 7.2-.1 4.4-1.2 8.7-3.1 12.7-1.3 2.8-3 5.3-5.2 7.4-1.9 1.9-4.1 3.4-6.6 4.4-1.8.7-3.6 1-5.5.9-3.3-.2-6.1-1.5-8.4-3.8-2-2-3.4-4.4-4.3-7-.7-1.9-1.1-3.8-1.3-5.7-.1-1.3-.2-2.7-.2-4 .1-3.2.7-6.3 1.7-9.3 1.1-3.2 2.6-6.1 4.7-8.8 1.8-2.2 3.8-4.1 6.3-5.5 1.8-1 3.7-1.7 5.8-1.9h2c.1.1.2 0 .3 0h.2c-.2-.2-.1-.2 0-.1zM169 67.9c0 .1-.1.2-.1.4-1 2.9-2.6 5.5-4.7 7.7-1.6 1.8-3.4 3.3-5.5 4.5-2.6 1.5-5.5 2.5-8.5 2.7-1.8.1-3.6-.1-5.4-.8-2.6-.9-4.5-2.6-5.9-5-1.1-2-1.6-4.1-1.7-6.4 0-2 .3-4 .9-5.9 1.4-4.2 3.9-7.7 7.2-10.5 1.1-1 2.4-1.8 3.7-2.5 2.7-1.4 5.5-2.3 8.5-2.4 1.7 0 3.4.2 5 .9 2.5 1 4.4 2.6 5.7 5 1.2 2.1 1.7 4.4 1.6 6.8 0 1.3-.2 2.6-.5 3.9 0 .1-.1.2-.1.4 0 .3-.1.7-.2 1.2zM30.6 66.6c0-.1-.1-.2-.1-.4-.3-1.3-.5-2.6-.5-3.9 0-2.4.4-4.7 1.6-6.8 1.3-2.3 3.2-4 5.7-5 1.6-.6 3.3-.9 5-.9 3.1.1 5.9.9 8.5 2.4 1.3.7 2.5 1.5 3.7 2.5 3.4 2.8 5.8 6.3 7.2 10.5.6 1.9 1 3.9.9 5.9 0 2.3-.5 4.4-1.7 6.4-1.4 2.4-3.4 4-5.9 5-1.7.6-3.5.9-5.4.8-3.1-.2-5.9-1.1-8.5-2.7-2.1-1.2-3.9-2.7-5.5-4.5-2-2.3-3.6-4.8-4.7-7.7 0-.1-.1-.2-.1-.4.1-.4 0-.8-.2-1.2zM74.8 15h1.8c.1.1.2 0 .3 0h.4c2.1.2 4 .9 5.8 1.9 2.5 1.4 4.5 3.3 6.3 5.5 2.1 2.6 3.6 5.6 4.7 8.8 1 3 1.6 6.1 1.7 9.3 0 1.3 0 2.7-.2 4-.2 2-.6 3.9-1.3 5.7-.9 2.7-2.3 5.1-4.3 7-2.4 2.3-5.1 3.7-8.4 3.8-1.9.1-3.7-.2-5.5-.9-2.5-1-4.7-2.5-6.6-4.4-2.2-2.2-3.9-4.7-5.2-7.4-1.9-4-2.9-8.2-3.1-12.7-.1-2.4.1-4.8.7-7.2.6-2.7 1.7-5.3 3.3-7.6 2.4-3.3 5.5-5.4 9.6-5.9-.2.1-.1.1 0 .1z" />
                    </g>
                </svg> */}
                <div class="topleft">
                    Dr. Guenegou Tiphaine
                </div>
                <div class="titlescreen">
                    <div class="title">
                        QUESTION ALIMENTATION
                    </div>
                    <img class="rounded-circle avatar-img" src={kooldoggo} alt={kooldoggo} />
                </div>
                <div>
                    <div>
                        <label>
                            Je me pose des questions sur l'alimentation de mon animal :
                        </label>
                    </div>
                    <button onClick={() => setQuestionNb(1)}> oui</button>
                    <button onClick={() => setQuestionNb(24)}> non</button>
                </div>
            </div>
        )
    }

    if (questionNb === 24) {
        return (
            <div>
                <div>
                    <label>
                        Comment avez-vous choisi son alimentation ?
                    </label>
                </div>
                <button onClick={() => setQuestionNb(26)}> Je me suis renseigné sur internet</button>
                <button onClick={() => setQuestionNb(26)}> J'ai choisi en regardant le paquet en magasin</button>
                <button onClick={() => setQuestionNb(25)}> Mon vétérinaire me l'a conseillé</button>
                <button onClick={() => setQuestionNb(26)}> Un ami donne la même chose à son animal</button>
                <button onClick={() => setQuestionNb(26)}> Autre raison</button>
            </div>
        )
    }
    if (questionNb === 25) {
        setTimeout(function () {
            setQuestionNb(0)
        }.bind(this), 1000)
        return (
            <div>
                <div>
                    <label>
                        Merci de votre participation
                    </label>
                </div>
            </div>
        )
    }

    if (questionNb === 26) {
        return (
            <div>
                <div>
                    <label>
                        Et si on vérifiait ensemble que cette alimentation correspond aux besoin nutritionnels de votre animal ?
                    </label>
                </div>
                <button onClick={() => setQuestionNb(1)}> oui</button>
                <button onClick={() => setQuestionNb(25)}> non</button>
            </div>
        )
    }

    if (questionNb === 1) {
        return (
            <div>
                <div>
                    <label>
                        Mon animal est un :
                    </label>
                </div>
                <button onClick={() => {
                    // isDog = 1
                    setQuestionNb(3)
                }}> chien</button>
                <button onClick={() => {
                    // isDog = 0
                    setQuestionNb(10)
                }}> chat</button>
            </div>
        )
    }
    if (questionNb === 3) {
        return (
            <div>
                <div>
                    <label>
                        Mon chien pèse :
                    </label>
                </div>
                <select onChange={selectDogWeight}>
                    {[...Array(46)].map((e, i) => {
                        return <option value={i}>{i}</option>

                    })}
                </select>
                <button onClick={() => {
                    setQuestionNb(4)
                }}> Valider</button>
            </div>
        )
    }

    if (questionNb === 3) {
        return (
            <div>
                <div>
                    <label>
                        Mon chien pèse :
                    </label>
                </div>
                <select onChange={selectDogWeight}>
                    {[...Array(46)].map((e, i) => {
                        return <option value={i}>{i}</option>

                    })}
                </select>
                <button onClick={() => {
                    setQuestionNb(4)
                }}> Valider</button>
            </div>
        )
    }
    if (questionNb === 4) {
        return (
            <div>
                <div>
                    <label>
                        Mon chien est stérilisé :
                    </label>
                </div>
                <button onClick={() => {
                    setSterilizedDog(1)
                    setQuestionNb(5)
                }}> oui</button>
                <button onClick={() => {
                    setSterilizedDog(0)
                    setQuestionNb(5)
                }}> non</button>
            </div>
        )
    }
    if (questionNb === 5) {
        return (
            <div>
                <div>
                    <label>
                        Mon chien marche plus de 4 heures par jour :
                    </label>
                </div>
                <button onClick={() => {
                    setDogHourWalk(1)
                    setQuestionNb(6)
                }}> oui</button>
                <button onClick={() => {
                    setDogHourWalk(0)
                    setQuestionNb(6)
                }}> non</button>
            </div>
        )
    }
    if (questionNb === 6) {
        return (
            <div>
                <div>
                    <label>
                        Mon chien est un Labrador, un Golden Retriever ou un Cocker :
                    </label>
                </div>
                <button onClick={() => {
                    setIsLab(1)
                    handleDogRpc()
                    setQuestionNb(7)
                }}> oui</button>
                <button onClick={() => {
                    setIsLab(0)
                    handleDogRpc()
                    setQuestionNb(7)
                }}> non</button>
            </div>
        )
    }
    if (questionNb === 7) {
        return (
            <div>
                <div>
                    <div>
                        <label>
                            Le rapport protido-calorique (RPC) nécessaire à mon animal est de :
                        </label>
                    </div>
                    <div class="answer">{dogRpc}</div>
                    <div>Je choisi un aliment dont l'étiquette jaune correspond à ce RPC {"\n"}</div>
                </div>
                <div>
                    <hr
                        style={{
                            height: 0.5
                        }}
                    />
                    <div>
                        <label>
                            L'aliment que je choisi devra donc apporter :
                        </label>
                    </div>
                    <div> <div class="answer">{dogBe} </div> grammes de proteines pour 1000 kcal de ration</div>
                </div>
                <button class="leaveButton" onClick={() => {
                    setQuestionNb(0)
                }}> home</button>
            </div>

        )
    }

    if (questionNb === 10) {
        return (
            <div>
                <div>
                    <label>
                        Mon chat pèse :
                    </label>
                </div>
                <select onChange={selectCatWeight}>
                    {[...Array(13)].map((e, i) => {
                        return <option value={i}>{i}</option>

                    })}
                </select>
                <button onClick={() => {
                    setQuestionNb(19)
                }}> Valider</button>
            </div>
        )
    }
    if (questionNb === 19) {
        return (
            <div>
                <div>
                    <label>
                        je demande le poids idéal de mon animal à mon vétérinaire :
                    </label>
                </div>
                <select onChange={selectIdealCatWeight}>
                    {[...Array(10)].map((e, i) => {
                        return <option value={i}>{i}</option>

                    })}
                </select>
                <button onClick={() => {
                    setQuestionNb(11)
                }}> Valider</button>
            </div>
        )
    }
    if (questionNb === 11) {
        return (
            <div>
                <div>
                    <label>
                        Mon chat est stérilisé :
                    </label>
                </div>
                <button onClick={() => {
                    setSterilizedCat(1)
                    setQuestionNb(12)
                }}> oui</button>
                <button onClick={() => {
                    setSterilizedCat(0)
                    setQuestionNb(12)
                }}> non</button>
            </div>
        )
    }
    if (questionNb === 12) {
        return (
            <div>
                <div>
                    <label>
                        Mon chat  vit en intérieur :
                    </label>
                </div>
                <button onClick={() => {
                    setInteriorCat(1)
                    handleCatRpc()
                    setQuestionNb(13)
                }}> oui</button>
                <button onClick={() => {
                    setInteriorCat(0)
                    handleCatRpc()
                    setQuestionNb(13)
                }}> non</button>
            </div>
        )
    }
    if (questionNb === 13) {
        return (
            <div>
                <div>
                    <div>
                        <label>
                            Le rapport protido-calorique (RPC) nécessaire à mon animal est de :
                        </label>
                    </div>
                    <div class="answer"> &gt; {catRpc}</div>
                    <div>Je choisi un aliment dont l'étiquette jaune correspond à ce RPC </div>
                </div>
                <div>
                    <hr
                        style={{
                            height: 0.5
                        }}
                    />
                    <div>
                        <label>
                            L'aliment que je choisi devra donc apporter :
                        </label>
                    </div>
                    <div>
                        <div class="answer"> {catBe}
                        </div> grammes de proteines pour 1000 kcal de ration</div>
                </div>
                <button class="leaveButton" onClick={() => {
                    setQuestionNb(0)
                }}> home</button>
            </div>

        )
    }

}
