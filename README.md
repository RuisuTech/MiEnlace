# Social Links - Perfil de Enlaces Sociales

![Vista previa del proyecto](./public/Social-Captura.png)

## Descripción

Componente de perfil de enlaces sociales basado en el desafío de [Frontend Mentor](https://www.frontendmentor.io). Muestra una tarjeta con foto de perfil, nombre, ubicación y enlaces a redes sociales con estados interactivos de hover y focus.

## Tecnologías

- **React 18** + **TypeScript** - UI con tipado estático
- **Vite** - Bundler con plugin React-SWC
- **Tailwind CSS** - Estilos utility-first
- **Inter** (Google Fonts) - Tipografía

## Características

- Diseño responsive (móvil 375px / escritorio 1440px)
- Tema oscuro con acento verde lima
- Estados hover y focus en enlaces
- Componentes modulares (`Perfil`, `Links`)

## Instalación

**Requisitos**: Node.js y npm

```bash
git clone https://github.com/RuisuTech/Social-Links.git
cd Social-Links
npm install
npm run dev
```

## Estructura

```
src/
├── components/
│   ├── Perfil.tsx    # Foto, nombre, ubicación, descripción
│   └── Links.tsx     # Botón de enlace individual
├── design/           # Imágenes de referencia del diseño
├── App.tsx           # Componente principal
├── App.css           # Estilos globales
├── index.css         # Directivas Tailwind
└── main.tsx          # Entry point
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run lint` | Verificar código con ESLint |
| `npm run preview` | Vista previa del build |

## Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Verde primario | `#c5f82a` | Acento / hover |
| Fondo general | `#141414` | Body |
| Fondo tarjeta | `#1f1f1f` | Card |
| Fondo enlace | `#333333` | Botones |

## Autor

**Jose Luis Guzman** - [GitHub](https://github.com/RuisuTech)
