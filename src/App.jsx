import "./index.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];
const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagemd de Cellbit",
  },
];
const socialListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/878px-Twitch_Glitch_Logo_Purple.svg.png",
    alt: "logo da Twitch",
  },
  {
    url: "https://www.twitter.com/maykbrito",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png",
    alt: "logo da Twitter",
  },
  {
    url: "https://www.instagram.com/maykbrito",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",
    alt: "logo da Instagram",
  },
  {
    url: "https://www.youtube.com/maykbrito",
    imageUrl: "https://www.svgrepo.com/show/13671/youtube.svg",
    alt: "logo da Youtube",
  },
];

export default function App() {
  return (
    <div className="App">
      {/*Header*/}
      <Header></Header>
      {/*Main*/}
      <main>
        {/*Section*/}

        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gameListData.map(function (item) {
            return (
              <ListItem
                key={gameListData.indexOf(item)}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de Games e Canais que eu Não Perco"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                key={channelListData.indexOf(item)}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas Redes"
          subtitle="Se conecte comigo agora mesmo"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                key={socialListData.indexOf(item)}
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
