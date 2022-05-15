python -m venv virtual
./virtual/Scripts/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
SET FLASK_APP = app.py