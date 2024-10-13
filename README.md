# CPJourney Client
## Installation Guide

A Club Penguin remake.

To install the CPJourney Client, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine. You can install Node.js version 20 or higher. If you don't have Node.js installed, you can use [nvm](https://github.com/nvm-sh/nvm) to easily manage multiple Node.js versions on your machine. To install nvm, follow the instructions in the [nvm repository](https://github.com/nvm-sh/nvm).

2. Open your terminal or command prompt.

3. Enable corepack by running the following command:

    ```shell
    corepack enable
    ```

    > Note: If you are using macOS, you can install corepack using Homebrew by running `brew install corepack`.

4. Install [pnpm](https://pnpm.io/) using corepack by running the following command:

    ```shell
    corepack enable pnpm
    ```

5. Clone the CPJourney Client repository by running the following command:

    ```shell
    git clone https://github.com/cpjourney/client.git
    ```

6. Navigate to the cloned repository:

    ```shell
    cd client
    ```

7. Install the project dependencies using pnpm:

    ```shell
    pnpm install
    ```

8. Once the installation is complete, you can start the CPJourney Client by running the following command:

    ```shell
    pnpm dev
    ```

9. Open your web browser and visit `http://localhost:8080` to access the CPJourney Client.

## Cloning the CPJourney Assets Folder

To clone the CPJourney Assets folder into this repository, follow these steps:

1. Make sure you have [Git](https://git-scm.com/) installed on your machine.

2. Open your terminal or command prompt.

3. Navigate to the root directory of the CPJourney Client repository.

4. Clone the CPJourney Assets repository by running the following command:

    ```shell
    git clone https://github.com/cpjourney/assets.git
    ```

5. The CPJourney Assets folder will be cloned into the current directory.

That's it! You have successfully installed the CPJourney Client and cloned the CPJourney Assets folder into this repository.


