For starting project:
1) clone this repo
2) create venv (Python3) on the same level as repo folder
3) install all requirements to your venv
    ```
    pip install -r requirements.txt
    ```
4) install node.js (https://nodejs.org/en/). In your venv Terminal type: 
    ```
    npm install bower
    bower install
    ```
5) go to src folder create your local database
    ```
    python manage.py migrate
    ```
6) start server
    ```
    python manage.py runserver
    ```