const data = {
    "situations": [
        {
            "id": 0,
            "description": "Você está andando por um beco ao anoitecer, quando de repente sente uma mão encostar no seu ombro...",
            "options": [
                {
                    "description": "Voce sai correndo",
                    "fail": {
                        "damage": 5,
                        "description": "Voce tropeca e cai (-5 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Voce chega com seguranca em um comercio local"
                    }
                },
                {
                    "description": "Você se vira",
                    "fail": {
                        "damage": 5,
                        "description": "Voce toma um soco na cara (-5 de Vida)"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Voce ve que era apenas um amigo de infancia que te chama para uma noite de bebedeira pelos velhos tempos (+10 de Vida)"
                    }
                }
            ]
        },
        {
            "id": 1,
            "description": "Voce está num mercado, quando ve uma senhora ser roubada por dois garotos...",
            "options": [
                {
                    "description": "Voce persegue os garotos",
                    "fail": {
                        "damage": 20,
                        "description": "Os garotos percebem que voce esta perseguindo eles e entao chamam seus irmãos mais velhos que te batem (-20 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Voce acerta uma pedra em um dos garotos fazendo ele soltar os pertences da senhora"
                    }
                },
                {
                    "description": "Voce chama os guardas",
                    "fail": {
                        "damage": 0,
                        "description": "Os guardas te ignoram e os garotos fogem"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Os guardas vao ate você e você conta o ocorrido e eles perseguem os garotos"
                    }
                }
            ]
        },
        {
            "id": 2,
            "description": "Voce esta em uma floresta, quando escuta um barulho estranho...",
            "options": [
                {
                    "description": "Voce vai na direcao do barulho",
                    "fail": {
                        "damage": 50,
                        "description": "O barulho era o demogorgon e ele te ataca (-50 de Vida)"
                    },
                    "success": {
                        "bonus": 50,
                        "description": "O barulho era um anão mágico e ele te da uma poção magica (+50 de Vida)"
                    }
                },
                {
                    "description": "Voce foge na direcao contraria ao barulho",
                    "fail": {
                        "damage": 10,
                        "description": "Durante a corrida você torceu o tornozelo (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Voce foge do barulho misterioso"
                    }
                }
            ]
        },
        {
            "id": 3,
            "description": "Voce está com muita sede e está a beira de um lago com uma placa de cuidado ao lado...",
            "options": [
                {
                    "description": "Voce ignora a placa e bebe a agua do lago",
                    "fail": {
                        "damage": 10,
                        "description": "A agua estava contaminada com poções de uma bruxa (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 15,
                        "description": "A agua tinha uma poção magica que te cura (+15 de Vida)"
                    }
                },
                {
                    "description": "Você ignora o lago e continua a procura por agua",
                    "fail": {
                        "damage": 10,
                        "description": "Voce esta se desidratando aos poucos... (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 5,
                        "description": "Mais a frente encontra um pescador e te da um pouco de agua de seu cantil (+5 de Vida)"
                    }
                }
            ]
        },
        {
            "id": 4,
            "description": "Voce se depara com uma senhorinha que te oferece uma maçã que ela diz ser encantada...",
            "options": [
                {
                    "description": "Voce aceita a maçã",
                    "fail": {
                        "damage": 10,
                        "description": "A maçã estava envenenada (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 15,
                        "description": "A maçã era uma poção de cura (+15 de Vida)"
                    }
                },
                {
                    "description": "Você recusa a maçã",
                    "fail": {
                        "damage": 5,
                        "description": "a senhorinha fica irritada e te acerta com a bengala na cabeça (-5 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Voce ignora e depois descobre que aquela maçã estava envenenada (Apenas Alivio)"
                    }
                }
            ]
        },
        {
            "id": 5,
            "description": "Voce avista uma caverna e escuta um grito muito alto vindo de la...",
            "options": [
                {
                    "description": "Voce entra na caverna para ver o que está havendo",
                    "fail": {
                        "damage": 20,
                        "description": "Voce se depara com um minerador correndo de um urso e ele te empurra e voce é atacado em seu lugar (-20 de Vida)",
                    },
                    "success": {
                        "bonus": 40,
                        "description": "Era apenas um minerador que tinha se acidentado, após ajuda-lo, ele te recompensa com um diamante mágico (+40 de Vida)"
                    }
                },
                {
                    "description": "Você ignora o grito e segue seu caminho",
                    "fail": {
                        "damage": 0,
                        "description": "O grito era de um minerador precisando de ajuda e voce o deixou morrer (SEU MONSTRO!!)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Voce segue seu caminho"
                    }
                }
            ]
        },
        {
            "id": 6,
            "description": "Voce chegou até uma bifurcação, para qual lado vai?",
            "options": [
                {
                    "description": "Esquerdo",
                    "fail": {
                        "damage": 30,
                        "description": "Seguindo o caminho da esquerda voce chega ate um campo de batalha e recebe uma flechada por engano (-30 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Acertou o caminho"
                    }
                },
                {
                    "description": "Direito",
                    "fail": {
                        "damage": 30,
                        "description": "Seguindo o caminho da direita voce passa por um rio lotado de jacarés e acaba recebendo uma mordida (-30 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Acertou o caminho"
                    }
                }
            ]
        },
        {
            "id": 7,
            "description": "Um homem diz estar sendo ameaçado por ter uma divida antiga e pede sua ajuda...",
            "options": [
                {
                    "description": "Você o ajuda",
                    "fail": {
                        "damage": 30,
                        "description": "Você encontra o cobrador da divida mas ele te enche de porrada (-30 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Você derrota o cobrador e o homem te agradece com um sorriso"
                    }
                },
                {
                    "description": "Você não o ajuda",
                    "fail": {
                        "damage": 5,
                        "description": "Em um ato de desespero o homem te empurra com raiva (-5 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Você apenas o ignora e segue sua jornada"
                    }
                }
            ]
        },
        {
            "id": 8,
            "description": "Você encontra uma estrutura com um baú dentro...",
            "options": [
                {
                    "description": "Vai até o baú para abri-lo",
                    "fail": {
                        "damage": 20,
                        "description": "Era uma armadilha... (-20 de Vida)"
                    },
                    "success": {
                        "bonus": 50,
                        "description": "Você encontrou um medalhão da vitalidade (+50 de Vida)"
                    }
                },
                {
                    "description": "Suspeita e segue adiante",
                    "fail": {
                        "damage": 0,
                        "description": "Seguiu adiante... (mas deixou passar um possivel medalhão da vitalidade)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Apenas seguiu seu caminho"
                    }
                }
            ]
        },
        {
            "id": 9,
            "description": "Você está em uma taverna quando uma briga começa...",
            "options": [
                {
                    "description": "Você chama os guardas local",
                    "fail": {
                        "damage": 10,
                        "description": "os guardas levam todos presos incluindo você e passa a noite na cadeia (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "os guardas chegam e resolve o tumulto"
                    }
                },
                {
                    "description": "Você decide apartar por conta própria",
                    "fail": {
                        "damage": 30,
                        "description": "Acabam te puxando para a briga (-30 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Você aparta a briga do bar e ganha mais uma rodada por conta da casa"
                    }
                }
            ]
        },
        {
            "id": 10,
            "description": "Um aldeão fazendeiro te oferece uma troca: 10 esmeraldas por 1 pão...",
            "options": [
                {
                    "description": "Você aceita a troca",
                    "fail": {
                        "damage": 0,
                        "description": "Ele foge com as esmeraldas e não te dá o pão"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Você dá suas esmeraldas que nao tinham utilidade e recebe um delicioso pão caseiro"
                    }
                },
                {
                    "description": "Você recusa a oferta",
                    "fail": {
                        "damage": 0,
                        "description": "O aldeão faz cara de chateado mas te responde apenas com um &#34;hmmm&#34;"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Tudo bem..."
                    }
                }
            ]
        },
        {
            "id": 11,
            "description": "Após uma noite de bebedeira você acorda em um local estranho e não se lembra de nada...",
            "options": [
                {
                    "description": "Você decide investigar o local",
                    "fail": {
                        "damage": 50,
                        "description": "Você é visto andando pela casa e descobre ser de uma gangue local, de um jeito não muito amigável.... (-50 de Vida)"
                    },
                    "success": {
                        "bonus": 5,
                        "description": "Você descobre ser de uma gentil senhora que te acolheu após ver seu estado e cuida de sua ressaca (+5 de vida)"
                    }
                },
                {
                    "description": "Você tenta fugir o mais rápido possivel",
                    "fail": {
                        "damage": 20,
                        "description": "Faz muito barulho e é pego por um dos guardas do local (-20 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Consegue fugir de forma silenciosa e discreta"
                    }
                }
            ]
        },
        {
            "id": 12,
            "description": "Você é chamado para participar de uma corrida de cavalos",
            "options": [
                {
                    "description": "Aceita participar",
                    "fail": {
                        "damage": 10,
                        "description": "Durante a corrida você cai de seu cavalo (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Você vence a corrida e ganha uma sacola cheia de moedas de ouro"
                    }
                },
                {
                    "description": "Recusa participar",
                    "fail": {
                        "damage": 0,
                        "description": "Ok então"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Ok então"
                    }
                }
            ]
        },
        {
            "id": 13,
            "description": "Você encontra um cara com bigode batendo a cabeça em uma parede de tijolos...",
            "options": [
                {
                    "description": "Você começa a imita-lo",
                    "fail": {
                        "damage": 10,
                        "description": "Pq fez isso??? esperava o que? (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Assim que você da a primeira cabeçada surge um cogumelo, você o come e se regenera (+10 de Vida)"
                    }
                },
                {
                    "description": "Você acha muito estranho mas o ignora",
                    "fail": {
                        "damage": 0,
                        "description": "Segue seu caminho pensando &#34; Que cara estranho &#34;"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Ri do sujeito e segue seu caminho"
                    }
                }
            ]
        },
        {
            "id": 14,
            "description": "Você avista um javali na floresta",
            "options": [
                {
                    "description": "Você tenta o caçar",
                    "fail": {
                        "damage": 10,
                        "description": "O javali te ataca (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Você o caça e se alimenta de sua carne (+10 de Vida)"
                    }
                },
                {
                    "description": "Você o ignora",
                    "fail": {
                        "damage": 15,
                        "description": "Você o ignorou mas ele não e te ataca pelas costas (-15 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Segue seu caminho"
                    }
                }
            ]
        },
        {
            "id": 15,
            "description": "Você avista um músico com seu instrumento em mãos...",
            "options": [
                {
                    "description": "Você pede para ele tocar sua música preferida",
                    "fail": {
                        "damage": 20,
                        "description": "Era um bardo malgino que te enfeitiça (-20 de Vida)"
                    },
                    "success": {
                        "bonus": 20,
                        "description": "Você fica bem após ouvir sua música preferida tocada por um bardo mágico (+20 de Vida)"
                    }
                },
                {
                    "description": "Você o ignora",
                    "fail": {
                        "damage": 10,
                        "description": "Era um bardo malgino que te enfeitiça (-10 de Vida)"
                    },
                    "success": {
                        "bonus": 0,
                        "description": "Segue seu caminho"
                    }
                }
            ]
        },
        
        
        
        
    ]
}
