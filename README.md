# Who Scored?

## Descrição do Projeto

**Who Scored?** é um jogo interativo onde o desafio é adivinhar qual jogador fez o gol com base em um vídeo reproduzido na página. O projeto utiliza vídeos reais de jogadores e fornece uma experiência imersiva ao testar seus conhecimentos sobre futebol.

Os jogadores têm **3 tentativas** para adivinhar corretamente quem marcou o gol. O jogo é baseado em diferentes ligas, incluindo **Brasil**, **Inglaterra**, e **Itália**. A cada dia, um novo vídeo de gol é exibido.

## Funcionalidades Principais

- **Adivinhação de Jogadores**: Baseado em vídeos de gols, o jogador deve identificar quem fez o gol em até três tentativas.
- **Integração com Liga**: Suporta ligas como Brasileirão, Premier League, e Serie A.
- **Listagem Dinâmica de Jogadores**: A lista de jogadores é carregada a partir de uma API que fornece os jogadores, os gols são carregados a partir do backend, o qual forncede a data de cada video/jogador e link para o vídeo do gol.
- **Progresso Salvo Localmente**: O progresso do usuário é salvo no navegador através do **local storage**, permitindo que ele continue de onde parou.
- **Suporte Multilíngue (i18n)**: O usuário pode alternar entre os idiomas **português** e **inglês**, oferecendo uma experiência localizada.
- **Atualizações Diárias**: A cada dia, um novo vídeo é carregado, proporcionando uma nova rodada de desafios.

## Tecnologias/Funções Utilizadas

- **Next.js**: Framework React para criação de aplicações web.
- **TypeScript**: Linguagem com tipagem estática, garantindo maior segurança no código.
- **CSS**: Estilização da aplicação, oferecendo uma interface visual atraente e responsiva.
- **API Backend**: Conecta-se a um backend personalizado que fornece um JSON com jogadores, links dos vídeos e outros detalhes.
- **Local Storage**: Para salvar e restaurar o progresso do jogo.
- **i18n**: Implementação de suporte multilíngue para inglês e português, permitindo uma experiência globalizada.

## Como Funciona

1. O jogador escolhe uma liga: **Brasil**, **Inglaterra**, ou **Itália**.
2. Um vídeo de um gol será reproduzido.
3. O jogador tem **3 tentativas** para adivinhar quem fez o gol, com base na lista de jogadores fornecida pela API.
4. O backend retorna informações do jogador correto e do vídeo com base na data.
5. O progresso é salvo no navegador, permitindo que o jogador continue mais tarde.
6. O jogo pode ser jogado em **inglês** ou **português**.

## Acesse o Deploy

Você pode jogar o Who Scored diretamente aqui: [Who Scored? - Deploy](https://who-scored.vercel.app/).
