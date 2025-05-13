import React from "react";
import TechCategory from "./components/techcategory";

function App() {
  return (
    <div className="bg-[#0a0f0d] text-white min-h-screen font-sans">
      
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-black font-bold p-2 rounded">A</div>
          <div>
            <h1 className="text-3xl font-semibold">
              Amir <span className="text-teal-400">Akbulut</span>
            </h1>
            <p className="text-xl">full-stack developer</p>
          </div>
        </div>

        {/* Avatar Emoji (remplace l'URL par ton image ou un emoji) */}
        <img
          src="https://via.placeholder.com/100"
          alt="Avatar"
          className="w-20 h-20 rounded-full"
        />
      </header>

      {/* Description */}
      <section className="px-6 max-w-3xl">
        <p className="text-gray-400 mb-4">
          Als full-stack Javascript developer bouw ik moderne web-apps met tools als{" "}
          <a href="#" className="text-teal-400 underline">React.js</a>,{" "}
          <a href="#" className="text-teal-400 underline">Next.js</a> &{" "}
          <a href="#" className="text-teal-400 underline">Tailwind CSS</a>.
        </p>
      </section>

      {/* Pages Section */}
      <section className="px-6 mt-10">
        <h2 className="text-gray-400 uppercase text-sm mb-4">Pagina's</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="Blog" description="Lees wat ik met de wereld deel" />
          <Card title="Portfolio" description="Projecten, ervaringen & kennis" />
          <Card title="Spotify playlist" description="Mijn brandstof om te werken" />
          <Card title="Let's talk" description="Open voor uitdagingen!" />
        </div>
      </section>
      {/* Technologies Section */}
<section className="px-6 mt-16">
  <h2 className="text-gray-400 uppercase text-sm mb-6">Technologieën</h2>

  <TechCategory
    title="Backend"
    items={[
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
      { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
      { name: "Prisma", icon: "https://raw.githubusercontent.com/prisma/prisma/main/docs/static/img/logo.svg" }
    ]}
  />

  <TechCategory
    title="Frontend"
    items={[
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", icon: "https://tailwindcss.com/_next/static/media/tailwindcss-logotype.128b6e02.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]}
  />

  <TechCategory
    title="Tools"
    items={[
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "Directus", icon: "https://directus.io/assets/logo.svg" },
      { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
      { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" }
    ]}
  />
</section>

    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-gray-900 p-4 rounded hover:bg-gray-800 transition cursor-pointer">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default App;
