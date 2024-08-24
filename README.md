# AGENTS PROJECT


# SETUP BACKEND
# Create the virtual enviroment in Power Shell
python -m venv venv

# Active the virtual enviroment in Power Shell
source venv/bin/activate

# Python version of the project in Power Shell
Python 3.12.1

# Install poetry
pip install poetry

Run:
poetry lock
poetry install

# Install the dependicies
pip install -r requirements.txt

# Running the Script
Configure Environment: Copy .env.example and set up the environment variables for OpenAI and other tools as needed.
Install Dependencies: Run poetry lock && poetry install.
Customize: Modify src/recruitment/main.py to add custom inputs for your agents and tasks.
Customize Further: Check src/recruitment/config/agents.yaml to update your agents and src/recruitment/config/tasks.yaml to update your tasks.
Custom Tools: You can find custom tools at recruitment/src/recruitment/tools/.
Execute the Script: Run poetry run recruitment and input your project details.

# Stepts to get Linkedin Cookie (LI_AT)
Navigate to www.linkedin.com and log in
Open browser developer tools (Ctrl-Shift-I or right click -> inspect element)
Select the appropriate tab for your browser (Application on Chrome, Storage on Firefox)
Click the Cookies dropdown on the left-hand menu, and select the www.linkedin.com option
Find and copy the li_at value and add it to your .env file
Be sure to fetch the cookies again if selenium doesnt login to linkedin after a while

# Running the Script: 
poetry run recruitment

poetry run train n 

Note: where n is the number of training iterations
