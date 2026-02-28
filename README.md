# Unicon Hub

## 🚀 Mision
Crear un ambiente inclusivo, divertido y motivador donde jóvenes apasionados por la tecnología puedan compartir, aprender de diversas experiencias, y formar redes de colaboración para impulsar proyectos innovadores, con el apoyo de guías con experiencia que los ayuden a encontrar su camino hacia el éxito.

## 🔭 Vision
Un faro de inspiración y comunidad para los visionarios del mañana.

## 🌱 Tecnologías
- **Runtime**: [Bun](https://bun.sh/) — usado como runtime de JavaScript y gestor de paquetes
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **i18n**: [next-intl](https://next-intl.dev/)
- **Iconos**: [Lucide React](https://lucide.dev/)

## ⚙️ Requisitos Previos
- [Bun](https://bun.sh/) (v1.0+) — runtime y gestor de paquetes
- [Node.js](https://nodejs.org/) (v20+) — requerido por Next.js
- [Docker](https://www.docker.com/) (opcional) — para despliegue con contenedores

## 🏁 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/reitmas32/unicon.git
cd unicon/front/unicon
```

### 2. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:
```bash
cp .env.example .env.local
```

Variables de entorno necesarias:
| Variable | Descripción | Requerida | Ejemplo |
|---|---|---|---|
| `API_BASE_URL` | URL base del backend API (solo servidor) | ✅ | `https://api.unicon.dev` |

> ⚠️ **NUNCA** uses el prefijo `NEXT_PUBLIC_` para secrets o API keys. Las variables sin ese prefijo solo son accesibles desde el servidor.

### 3. Instalar dependencias
```bash
bun install
```

### 4. Ejecutar en desarrollo
```bash
bun dev
```
La app estará disponible en [http://localhost:3000](http://localhost:3000).

### 5. Build de producción
```bash
bun run build
bun start
```

### 6. Ejecutar con Docker
```bash
docker compose up --build
```
La app estará disponible en [http://localhost:3001](http://localhost:3001).

### Scripts disponibles
| Comando | Descripción |
|---|---|
| `bun dev` | Inicia el servidor de desarrollo con Turbopack |
| `bun run build` | Genera el build de producción |
| `bun start` | Inicia el servidor de producción |
| `bun lint` | Ejecuta el linter (ESLint) |

## 📝 License
[GNU General Public License v3.0](https://github.com/reitmas32/unicon/blob/main/LICENSE) 

## Contribuir
Para contribuir a Unicon, sigue los siguientes pasos:
1. Fork el repositorio
2. Crear una branch con el nombre del issue que quieres solucionar
3. Hacer los cambios necesarios
4. Crear un pull request
5. Espera a que se revise tu pull request
6. Si tu pull request es aceptado, te pedimos que te mergeas a la rama `main`

## Autores
<a href="https://github.com/reitmas32"><img src="https://github.com/reitmas32.png" width="30" height="30" style="border-radius: 50%;" alt="Reitmas"></a> 
<a href="https://github.com/ronihdzz"><img src="https://github.com/ronihdzz.png" width="30" height="30" style="border-radius: 50%;" alt="Reitmas"></a> 

