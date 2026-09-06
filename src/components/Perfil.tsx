import React from "react";

interface Props {
  img: string;
  name: string;
  ciudad: string;
  descripcion: string;
}

const Perfil: React.FC<Props> = (props) => {
  return (
    <>
      <img
        className="w-24 md:w-32 h-auto rounded-full border-2 border-ocean-border"
        src={props.img}
        alt="Perfil"
      />
      <p className="mt-3 text-xl md:text-2xl font-bold text-white">
        {props.name}
      </p>
      <p className="mt-1 text-sm md:text-base text-ocean-cyan">
        {props.ciudad}
      </p>
      <p className="my-3 text-xs md:text-sm text-ocean-muted">
        {props.descripcion}
      </p>
    </>
  );
};

export default Perfil;
