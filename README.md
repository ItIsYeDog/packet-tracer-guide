# Packet Tracer Guide

En omfattende guide for å lære nettverkskonfigurasjon med Cisco Packet Tracer. Dette prosjektet tilbyr steg-for-steg veiledninger for å sette opp ulike nettverksscenarier.

## 📋 Innhold

- LAN-oppsett
- DNS-server konfigurasjon
- DHCP-server konfigurasjon
- IoT-nettverk oppsett
- Program gjennomgang
- Ordliste med nettverksterminologi

## 🚀 Kom i gang

### Forutsetninger

- Node.js (v14 eller nyere)
- npm (Node Package Manager)
- MongoDB (v4.4 eller nyere)
- Git

### Installasjon

1. Klon repositoriet
```bash
git clone https://github.com/dittbrukernavn/packet-tracer-guide.git
cd packet-tracer-guide
```

2. Installer avhengigheter
```bash
npm install
```

3. Bygg CSS
```bash
npm run build:css
```

4. Start serveren
```bash
npm run dev
```

Besøk `http://localhost:3000` i nettleseren din for å se nettsiden.

## 🛠 Teknologier

- **Frontend**
  - EJS (Embedded JavaScript templates)
  - Tailwind CSS
  - JavaScript

- **Backend**
  - Node.js
  - Express.js

## 📁 Prosjektstruktur

```
packet-tracer-guide/
├── public/
│   ├── images/
│   ├── js/
│   ├── videos/
│   ├── styles.css
│   └── output.css
├── src/
│   ├── config/
│   ├── controllers/
│   └── routes/
├── views/
│   ├── pages/
│   └── partials/
├── app.js
├── tailwind.config.js
└── package.json
```

## 🎯 Funksjoner

- **Responsivt Design**: Fungerer på alle enheter
- **Steg-for-steg Guider**: Detaljerte instruksjoner med bilder
- **Videodemonstrasjon**: Praktiske eksempler på nettverkskonfigurasjon
- **Interaktiv Navigasjon**: Enkel tilgang til alle seksjoner
- **Mobilvennlig Meny**: Hamburger-meny for mobile enheter

## 💻 Utvikling

For å jobbe med prosjektet:

```bash
# Start utviklingsserver med hot-reload
npm run dev

# Bygg CSS med Tailwind
npm run build:css

# Watch for CSS changes
npm run watch:css
```

## 📝 Lisens

Dette prosjektet er lisensiert under ISC License.

## ✍️ Forfatter

- August

## 🤝 Bidra

1. Fork prosjektet
2. Opprett en feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit endringene dine (`git commit -m 'Add some AmazingFeature'`)
4. Push til branchen (`git push origin feature/AmazingFeature`)
5. Åpne en Pull Request

## 🙏 Anerkjennelser

- Tailwind CSS for styling
- Cisco Packet Tracer for nettverkssimulering
- Node.js og Express.js community
