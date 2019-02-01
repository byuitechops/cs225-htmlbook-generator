
Generates a html book from CS225's website.
# CS 225 Htmlbook Generator

## Description 
This project generates an html book from CS 225's website. This tool was created to cleanup
the website and make the content easier to understand and navigate to. This tool
uses the template-changer and custom tasks to achieve this goal.

## How to Install

Standard Install

1. Clone this repository:
    ```bash
    git clone https://github.com/byuitechops/cs225-htmlbook-generator.git
    ```
1. Step into the folder that was just created 
    ```bash
    cd ./cs225-htmlbook-generator
    ```
1. To install dependancies, run:
    ```bash
    npm i
    ```

1. To initialize the program, run:
    ```bash
    npm start - This will run both the template and the cleanup scripts
    npm run template - This will only run the template script
    npm run cleanup - This will only run the cleanup script
    ```
<!--- TODO: Add Additional Installation/Set Up Instructions, then delete this comment  --->

## How to Use
1. Install the template-changer tool globally
2. Place old website HTML files inside a directory called html_files
3. Verify that the template.handlebars and variables.txt are present and correct
4. Run the program by typing "npm start", "npm run template", or "npm run cleanup"
    * npm start - This will run both the template and the cleanup scripts
    * npm run template - This will only run the template script
    * npm run cleanup - This will only run the cleanup script