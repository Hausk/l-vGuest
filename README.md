# Libre & Vivant - Nuxt.js Application

**Libre & Vivant** is a dynamic showcase website that displays a collection of images. The content is managed by a separate admin application. This project is built using **Nuxt.js 4**, along with modern tools and libraries such as **Framer Motion** for animations, **TailwindCSS** for styling, and **ESLint** for code quality.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Libre & Vivant serves as a **showcase site** that displays categorized images with a clean and modern UI. It features:
- A **homepage** that introduces the site.
- A **photobox page** that lists all the image categories.
- A **photobox/slug page** that lists images within a specific category.
- A **contact page** where users can reach out.

All data is fetched via **GET APIs**, and the site does **not track users** or use cookies, thus bypassing the need for GDPR compliance.

## Features
- **Homepage**: Introduction to Libre & Vivant.
- **Photobox page**: Displays all categories of images.
- **Photobox/slug page**: Displays all images related to a specific category.
- **Contact page**: Allows users to send inquiries.
- **No authentication system**: Data is publicly available via API.
- **No GDPR requirements**: No cookies or tracking.

## Technologies Used
- **Nuxt.js 4**: Modern framework for building Vue.js applications.
- **TailwindCSS**: Utility-first CSS framework for fast styling.
- **ESLint**: JavaScript linter for maintaining code quality.
- **Node.js & npm**: For package management and building the application.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hausk/libre-et-vivant.git
   cd libre-et-vivant
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start the application**:
   ```bash
   npm run start
   ```

## Usage
Once installed, you can access the site at `http://localhost:3000`. The homepage serves as an introduction, while the **photobox** page lists all categories. Clicking on a category navigates to `/photobox/slug`, where the associated images are displayed.

## Project Structure

```
├── app/
│   ├── components/         # Vue components
│   ├── layouts/            # Layouts for different pages
│   ├── middleware/         # Middleware logic
│   ├── pages/              # Pages (home, photobox, contact)
│   │   ├── index.vue       # Homepage
│   │   ├── photobox.vue    # Lists categories
│   │   └── photobox/[slug].vue # Images within a category
│   ├── app.config.ts       # Nuxt app configuration
│   ├── app.vue             # Root app file
│   └── error.vue           # Custom error page
├── public/
│   ├── favicon.ico         # Favicon
│   ├── social-image.png    # Social media preview image
│   └── robots.txt          # Robots exclusion file
├── server/
│   ├── api/                # API routes for fetching data
│   ├── database/           # Database management
├── middleware/             # Middleware logic (if needed)
├── static/                 # Static assets
└── nuxt.config.ts          # Nuxt.js configuration file
```

## Contributing
Feel free to submit issues or pull requests. All contributions are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.