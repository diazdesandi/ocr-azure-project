# OCR Azure Project

This project consists of two main parts: **ocr-backend** and **ocr-frontend**.

## ocr-backend

The backend is implemented in Go and provides the OCR (Optical Character Recognition) functionality using Azure services.

### Project Setup

1. Install dependencies:

    ```sh
    go mod tidy
    ```

2. Run the server:

    ```sh
    go run cmd/main.go
    ```

### Environment Variables

The backend uses environment variables for configuration. Ensure you have a `.env` file with the necessary variables. Example:

    ```env
    PORT=8080
    AZURE_OCR_ENDPOINT=<your-azure-ocr-endpoint>
    AZURE_OCR_KEY=<your-azure-ocr-key>
    ```

### Main Components

- **Main Entry Point**: `cmd/main.go`
- **Environment Initialization**: `utils.InitEnv`
- **Handlers**: `handlers.AzureHandler`, `handlers.CheckStatus`

## ocr-frontend

The frontend is implemented using Vue 3 and Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Compile and Hot-Reload for Development:

    ```sh
    npm run dev
    ```

3. Type-Check, Compile and Minify for Production:

    ```sh
    npm run build
    ```

4. Run Unit Tests with [Vitest](https://vitest.dev/):

    ```sh
    npm run test:unit
    ```

5. Lint with [ESLint](https://eslint.org/):

    ```sh
    npm run lint
    ```

### Main Components

- **Main Layout**: `HomeLayout.vue`
- **Tailwind CSS Configuration**: `tailwind.config.js`, `tailwind.css`

## Common

### Version Control

This project uses Git for version control. Ensure you have `.gitignore` files in both **ocr-backend** and **ocr-frontend** to exclude unnecessary files from version control.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
