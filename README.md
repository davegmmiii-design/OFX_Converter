# Bank2OFX Pro - Enterprise Edition

A premium desktop utility to convert bank statements (CSV, Excel, PDF) into OFX format.

## Features

- **Multi-format Support**: Import CSV, XLS, XLSX, and PDF bank statements.
- **Auto-Detection**: Intelligently maps columns for Date, Description, and Amounts.
- **Data Cleaning**: Handles duplicate detection and allows manual editing before conversion.
- **PWA Ready**: Works offline and can be installed as a desktop or mobile app.
- **Electron Powered**: Now available as a native desktop application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OFX_Converter.git
   cd OFX_Converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the application in development mode:
```bash
npm start
```

### Building for Production

To create a portable Windows executable:
```bash
npm run dist
```
The built application will be available in the `dist/` folder.

## Usage

1. **Import**: Drag and drop your bank statement file onto the dashboard.
2. **Review**: Check the detected columns. You can manually adjust the mapping using the header buttons (DATE, OUT, IN, DESC).
3. **Edit**: Double-click any cell to edit the data directly if needed.
4. **Generate**: Click **GENERATE OFX** to process the data.
5. **Download**: Save the resulting `.ofx` file to your computer.

## License

This project is licensed under the ISC License.
