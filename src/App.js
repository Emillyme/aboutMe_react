import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gameListData = [
  {
    url: "https://www.celestegame.com/",
    imageUrl:
      "https://cdn.cdkeys.com/700x700/media/catalog/product/q/l/qlspdjliqded9l9kjrzdekfn_5_.jpg",
    alt: "Imagem do Celeste",
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
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Alanzoka_2021.png",
    alt: "Imagem de Alanzoka",
  },
  {
    url: "https://www.twitch.tv/bagi",
    imageUrl:
      "https://i.scdn.co/image/ab6775700000ee857f1e462431ab4d66b128235f",
    alt: "Imagemd de Cellbit",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list" // Corrigido para className
        >
          {gameListData.map((item, index) => (
            <ListItem
              key={index}
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
            />
          ))}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitle="Canais e streamers que assisto."
          className="channel-list" // Corrigido para className
        >
          {channelListData.map((item, index) => (
            <ListItem
              key={index}
              url={item.url}
              imageUrl={item.imageUrl}
              alt={item.alt}
            />
          ))}
        </Section>
      </main>
    </div>
  );
}
