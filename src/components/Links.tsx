import React from "react";

interface Props {
  name: string;
  url: string;
}

const Links: React.FC<Props> = (props) => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-4 py-3 text-sm md:text-base font-medium rounded-xl
        bg-ocean-dark-elevated text-ocean-muted border border-ocean-border
        transition-all duration-200
        hover:bg-ocean-blue hover:text-white hover:border-ocean-blue hover:shadow-lg hover:shadow-ocean-blue/20
        focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:ring-offset-2 focus:ring-offset-ocean-dark"
    >
      {props.name}
    </a>
  );
};

export default Links;
