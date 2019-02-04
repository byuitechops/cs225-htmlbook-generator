# CS 225 Htmlbook Generator

## Description 
This project generates an html book from CS 225's [website](http://michaelmclaughlin.info/db1/). This tool was created to cleanup
the website and make the content locally downloadble, easier to understand, and easier to navigate through. This tool uses the 
template-changer tool and custom built tasks to achieve its goal.

The HTMLbook generator uses the template-changer tool to run every HTML page through a template to remove a lot of unneeded content and
keep content needed for students. The template used has been specifically written for this website. However, the template
can easily be repurposed for other websites. For this project and possible future projects we re-wrote the template tool to have a 
recursive flag (-r). This allows the template tool to search through all directories inside of the current dirrectory. Once all 
files have been retrieved the HTML template is applied to each file. The files are now ready to be formatted with custom built
tasks.

The generator uses custom built tasks to finish cleaning up the HTML files. These tasks were developed specifically for this
website. However, the tasks can be easily repurposed for other websites. The tasks can be located by navigating inside of the
tasks directory. Each task has its own file. The tasks.js file imports each task and exports them in an array. To add or remove
tasks add/remove them to/from the array. Each task is run on every file. Once the tasks have finished the tool writes the file.
You can find the updated files by navigating to the new_html_files directory.


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
    npm start - This will run both the template and cleanup scripts
    npm run template - This will only run the template script
    npm run cleanup - This will only run the cleanup script
    ```
<!--- TODO: Add Additional Installation/Set Up Instructions, then delete this comment  --->

## How to Use
1. Install the template-changer tool globally
2. Place old website HTML files inside a directory called html_files
3. Verify that the template.handlebars and variables.txt are present in the template directory and are correct
4. Run the program by typing "npm start", "npm run template", or "npm run cleanup"
    * npm start - This will run both the template and the cleanup scripts
    * npm run template - This will only run the template script
    * npm run cleanup - This will only run the cleanup script