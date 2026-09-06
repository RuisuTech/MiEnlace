import "./App.css";
import Links from "./components/Links.tsx";
import Perfil from "./components/Perfil.tsx";

function App() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen bg-ocean-dark">
      <div className="bg-ocean-dark-card w-[280px] md:w-[350px] rounded-2xl p-6 border border-ocean-border shadow-lg shadow-black/20">
        <div className="flex justify-center items-center flex-col">
          <Perfil
            img="./Gato.jpg"
            name="Jose Luis Guzman"
            ciudad="Lima, Peru"
            descripcion="Programador Autodidacta :D"
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-3 mt-4">
          <Links name="GitHub" url="https://github.com/RuisuTech" />
          <Links name="YouTube" url="https://www.youtube.com/@RuisuTech" />
          <Links name="LinkedIn" url="https://www.linkedin.com/in/jose-luis-guzman-178702267/" />
          <Links name="Twitter" url="#" />
          <Links name="Instagram" url="#" />
        </div>
      </div>
    </div>
  );
}

export default App;
